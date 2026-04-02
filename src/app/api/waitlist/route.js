import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TALLY_FORM_ID = "RGY4Pd";
const TALLY_FIELD_EMAIL = "143595bc-99b7-4045-9790-e25aeb5c08b9";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
    const { email } = await request.json();

    if (!email || !EMAIL_REGEX.test(email)) {
        return Response.json({ error: "Email inválido" }, { status: 400 });
    }

    // 1. Registrar en Tally
    const tallyRes = await fetch(`https://api.tally.so/forms/${TALLY_FORM_ID}/respond`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            sessionUuid: crypto.randomUUID(),
            respondentUuid: crypto.randomUUID(),
            captchas: {},
            isCompleted: true,
            password: null,
            responses: {
                [TALLY_FIELD_EMAIL]: email,
            },
        }),
    });

    if (!tallyRes.ok) {
        return Response.json({ error: "Error al registrar" }, { status: 502 });
    }

    // 2. Enviar email de confirmación
    await resend.emails.send({
        from: "Looppah <newsletter@updates.looppah.com>",
        to: email,
        subject: "Estás dentro 🎉",
        html: `
            <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #001866;">
                <img
                    src="https://looppah.com/assets/brand/looppah_logotipo.png"
                    alt="Looppah"
                    width="120"
                    style="display: block; margin-bottom: 32px;"
                />
                <p>Hola,</p>
                <p>Ya te tenemos en el radar. En cuanto Looppah esté listo, serás de los primeros en saberlo.</p>
                <p>Y no, no vamos a llenar tu bandeja. Solo te escribiremos cuando haya algo que valga la pena contarte.</p>
                <p>Si tienes preguntas o simplemente quieres decir hola: <a href="mailto:contact@looppah.com" style="color: #003dff;">contact@looppah.com</a></p>
                <p>— El equipo de Looppah</p>
            </div>
        `,
    });

    return Response.json({ success: true });
}