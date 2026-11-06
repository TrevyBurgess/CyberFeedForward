"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitted";

const inputClasses =
  "mt-1 block w-full rounded-md border border-zinc-300 bg-background px-3 py-2 text-sm shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-zinc-700";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div
        role="status"
        className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-900 dark:bg-cyan-950"
      >
        <p className="font-semibold">Thanks for reaching out.</p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          This form is not yet wired to a backend, so nothing was actually
          sent. Please email us directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-400"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      aria-label="Contact"
      onSubmit={handleSubmit}
      className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={inputClasses}
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex h-11 items-center rounded-full bg-cyan-600 px-6 font-medium text-white transition-colors hover:bg-cyan-700"
      >
        Send message
      </button>
    </form>
  );
}
