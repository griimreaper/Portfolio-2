import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
        }

        // Configurar el transporte de Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Tu correo
                pass: process.env.EMAIL_PASS, // Tu contraseña o App Password
            },
        });

        // Configurar el correo
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Tu email donde recibirás los mensajes
            subject: `Nuevo mensaje de ${name}`,
            text: `De: ${name} (${email})\n\nMensaje:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: "Mensaje enviado correctamente" }, { status: 200 });
    } catch (error) {
        console.error("Error enviando correo:", error);
        return NextResponse.json({ error: "Error enviando el mensaje" }, { status: 500 });
    }
}
