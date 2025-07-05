import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_gos3vmf", "template_z3ucczp", form.current as HTMLFormElement, "_56amATcv9mxWgeEI")
      .then(() => {
        emailjs
          .sendForm("service_gos3vmf", "template_hjwesar", form.current as HTMLFormElement, "_56amATcv9mxWgeEI")
          .then(() => {
            setLoading(false);
            setDone(true);
            (form.current as HTMLFormElement).reset();
          })
          .catch(() => setLoading(false));
      })
      .catch(() => setLoading(false));
  };

  return (
    <motion.section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gray-50 bg-[url('/world.svg')] bg-center bg-contain bg-no-repeat px-6 py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative z-10 w-full max-w-5xl bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 border border-gray-200">

        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Contact Me</h1>
            <p className="text-gray-600 text-lg">
              Have a project in mind or just want to connect? Fill out the form and I’ll get back to you shortly.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              I usually respond within 24 hours during weekdays. Feel free to include as many details as you'd like!
            </p>
          </div>

          {/* Info Section */}
          <div className="text-gray-700 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>souvikdas.aec@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Asansol, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a href="https://www.linkedin.com/in/souvikdas040/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                linkedin.com/in/souvikdas040/
              </a>
            </div>
          </div>

          {/* Quick Info / FAQ style */}
          <div className="pt-4 border-t text-gray-600 text-sm">
            <p>✔️ Open to freelance and collaboration opportunities</p>
            <p>✔️ Tech stack: React, Next.js, Node.js, MySQL, TailwindCSS</p>
            <p>✔️ I can help with full-stack web development & UI/UX</p>
          </div>
        </div>

        {/* Form Section */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 flex flex-col gap-4"
        >
          <Input name="user_name" placeholder="Your Name" required />
          <Input name="user_email" type="email" placeholder="Your Email" required />
          <Input name="subject" placeholder="Subject" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition resize-none"
            required
          ></textarea>

          <Button type="submit" className="mt-2 cursor-pointer" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {done && (
            <motion.p
              className="text-green-500 text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message Sent Successfully!
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  );
}
