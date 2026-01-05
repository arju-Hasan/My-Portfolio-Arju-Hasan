import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  // EmailJS configuration read from environment (Vite exposes VITE_ vars)
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Provide a short, developer-only validation message when values look missing or malformed
  const configError =
    !serviceId || !templateId || !publicKey
      ? "EmailJS not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env and restart the dev server."
      : !serviceId.startsWith("service_")
      ? "Service ID looks invalid (should start with 'service_')."
      : !templateId.startsWith("template_")
      ? "Template ID looks invalid (should start with 'template_')."
      : publicKey.length < 10
      ? "Public key looks short — check your EmailJS public key."
      : null;

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    console.log("EmailJS config:", { serviceId, templateId, publicKey });

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service not configured. Set environment variables.",
      });
      setSending(false);
      return;
    }

    // Build template params from the form so template variables match exactly
    const formData = new FormData(form.current);
    const templateParams = Object.fromEntries(formData.entries());
    // Helpful: set reply_to so replies go to the sender
    templateParams.reply_to = templateParams.from_email || "";
    // Prepend sender info to the message body so the email clearly shows who sent it
    templateParams.message = `From: ${
      templateParams.from_name || "Anonymous"
    } <${templateParams.from_email || "no-reply@example.com"}>

${templateParams.message}`;

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log("EmailJS success:", result);
        setStatus({
          type: "success",
          message: "Message sent! I will reply soon.",
        });
        e.target.reset();
        setSending(false);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        const detail =
          (err && (err.text || err.statusText || err.message)) ||
          JSON.stringify(err);
        setStatus({
          type: "error",
          message: `Failed to send: ${detail}`,
        });
        setSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-10 bg-gradient-to-t from-background-dark to-surface-dark relative"
    >
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 bg-surface-dark border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="flex flex-col gap-6 justify-center">
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">
                Get in Touch
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's work together
              </h3>
              <p className="text-gray-400">
                Have a project in mind or want to hire me? Fill out the form or
                send me a direct email. I'm always open to discussing new
                projects and opportunities.
              </p>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <span className="text-sm md:text-base">arju3h@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className="text-sm md:text-base">
                  Mirpur, Dhaka Bangladesh
                </span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
                href="https://github.com/arju-Hasan"
              >
                <FaGithub />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
                href="https://www.linkedin.com/in/arju95"
              >
                <FaLinkedin />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
                href="https://x.com/dev_arju95"
              >
                <BsTwitterX />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
                href="https://www.facebook.com/arju95"
              >
                <BsFacebook />
              </a>
            </div>
          </div>

          {import.meta.env.MODE !== "production" && configError && (
            <div className="mb-4 p-3 rounded-md bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 text-yellow-800 dark:text-yellow-300">
              <strong className="block font-semibold">
                EmailJS configuration issue
              </strong>
              <p className="text-sm mt-1">{configError}</p>
              <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                Service: {serviceId || "—"} • Template: {templateId || "—"} •
                Public: {publicKey ? publicKey.slice(0, 6) + "…" : "—"}
              </p>
              <div className="mt-2">
                <a
                  href="https://dashboard.emailjs.com/admin"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Open EmailJS dashboard
                </a>
              </div>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-400 ml-1">
                  Name
                </label>
                <input
                  name="from_name"
                  className="w-full h-12 rounded-xl bg-background-dark border border-white/10 px-4 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your Name"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-400 ml-1">
                  Email
                </label>
                <input
                  name="from_email"
                  className="w-full h-12 rounded-xl bg-background-dark border border-white/10 px-4 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="example@gmail.com"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-400 ml-1">
                Subject
              </label>
              <input
                name="subject"
                className="w-full h-12 rounded-xl bg-background-dark border border-white/10 px-4 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Project Inquiry"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-400 ml-1">
                Message
              </label>
              <textarea
                name="message"
                className="w-full h-32 rounded-md bg-background-dark border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            {status && (
              <p
                className={
                  status.type === "success"
                    ? "text-green-400 mb-2"
                    : "text-red-400 mb-2"
                }
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className={
                "mt-2 h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all neon-glow flex items-center justify-center gap-2 " +
                (sending ? "opacity-70 cursor-wait" : "")
              }
            >
              <span>{sending ? "Sending..." : "Send Message"}</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
