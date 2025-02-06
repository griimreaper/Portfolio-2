"use client";

import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponse("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setResponse(data.success || data.error);
            if (res.ok) setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.log(error);

            setResponse("Error enviando el mensaje.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-16 text-gray-800 dark:text-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-60 rounded-lg bg-gray-200 dark:bg-gray-800"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-60 rounded-lg bg-gray-200 dark:bg-gray-800"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-60 rounded-lg bg-gray-200 dark:bg-gray-800"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                        disabled={loading}
                    >
                        {loading ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                    {response && <p className="mt-2 text-sm">{response}</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
