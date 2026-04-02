const TALLY_FORM_ID = "RGY4Pd";
const TALLY_FIELD_EMAIL = "143595bc-99b7-4045-9790-e25aeb5c08b9";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
    const { email } = await request.json();

    if (!email || !EMAIL_REGEX.test(email)) {
        return Response.json({ error: "Email inválido" }, { status: 400 });
    }

    const res = await fetch(`https://api.tally.so/forms/${TALLY_FORM_ID}/respond`, {
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

    if (!res.ok) {
        return Response.json({ error: "Error al registrar" }, { status: 502 });
    }

    return Response.json({ success: true });
}