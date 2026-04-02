"use client";

import ButtonPill from "@/components/ui/Button/ButtonPill";

async function submitToWaitlist(email) {
    const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    });
    if (!res.ok) throw new Error();
}

export default function WaitlistPill() {
    return (
        <ButtonPill
            emphasis="Te notificaremos cuando esté listo."
            icon="/assets/icons/bell.svg"
            label="¡Avísame cuando lancen!"
            placeholder="Escribe tu correo"
            submitLabel="Enviar"
            variant="primary"
            onSubmit={submitToWaitlist}
        />
    );
}