"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";

const motivos = [
  "Precio desactualizado",
  "Sugerencia de tema",
  "Error de contenido",
  "Publicidad / partners",
  "Otro",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    motivo: motivos[0],
    mensaje: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.motivo}] ${form.nombre || "Contacto"}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nMotivo: ${form.motivo}\n\n${form.mensaje}`,
    );
    if (typeof window !== "undefined") {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-ink-200 bg-white p-5 shadow-card">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-ink-900">Nombre</span>
          <input
            required
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="rounded-md border border-ink-200 bg-white px-3 py-2 text-ink-900 focus:border-brand-500 focus:outline-none"
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-ink-900">Email</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-md border border-ink-200 bg-white px-3 py-2 text-ink-900 focus:border-brand-500 focus:outline-none"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-ink-900">Motivo</span>
        <select
          value={form.motivo}
          onChange={(e) => setForm({ ...form, motivo: e.target.value })}
          className="rounded-md border border-ink-200 bg-white px-3 py-2 text-ink-900 focus:border-brand-500 focus:outline-none"
        >
          {motivos.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-ink-900">Mensaje</span>
        <textarea
          required
          rows={5}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          className="rounded-md border border-ink-200 bg-white px-3 py-2 text-ink-900 focus:border-brand-500 focus:outline-none"
        />
      </label>
      <p className="text-xs text-ink-500">
        Al enviar, se abrirá tu cliente de correo con un mensaje prellenado a {CONTACT_EMAIL}. No almacenamos tus datos en este sitio.
      </p>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Enviar mensaje
      </button>
      {submitted && (
        <p className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900" aria-live="polite">
          Abrimos tu cliente de correo. Si no se abrió, escribinos manualmente a {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
