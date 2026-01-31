"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Sparkles, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-foreground font-bold uppercase tracking-widest text-xs mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Get in touch
            </motion.div>
            <h2 className="text-[3.5rem] md:text-[5.5rem] font-bold leading-[1] mb-8">
              Let&apos;s build <br />
              <span className="text-primary italic">something cool.</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12 max-w-md leading-relaxed">
              Whether you have a project idea or just want to chat about tech and coffee, my inbox is always open.
            </p>
            
            <div className="flex gap-6">
              {[
                { icon: <Mail />, href: "mailto:aryanrajput69696@gmail.com" },
                { icon: <Github />, href: "https://github.com/aryanrajput955" },
                { icon: <Linkedin />, href: "https://www.linkedin.com/in/aryan-rajput-0595b0214" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -5, rotate: 10 }}
                  className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-foreground border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-12 rounded-[3.5rem] border-4 border-foreground shadow-[16px_16px_0px_0px_rgba(26,26,26,0.1)]"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Aryan Rajput"
                    required
                    className="w-full bg-muted/20 border-2 border-foreground/10 rounded-2xl px-6 py-4 focus:border-primary focus:ring-0 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="aryan@rajput.dev"
                    required
                    className="w-full bg-muted/20 border-2 border-foreground/10 rounded-2xl px-6 py-4 focus:border-primary focus:ring-0 outline-none transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest ml-1">The Vibe / Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Hey Aryan, let's collaborate on..."
                  required
                  className="w-full bg-muted/20 border-2 border-foreground/10 rounded-2xl px-6 py-4 focus:border-primary focus:ring-0 outline-none transition-all font-medium resize-none"
                />
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-green-100 text-green-800 px-6 py-4 rounded-2xl border-2 border-green-300"
                >
                  <CheckCircle size={20} />
                  <span className="font-semibold">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-100 text-red-800 px-6 py-4 rounded-2xl border-2 border-red-300"
                >
                  <AlertCircle size={20} />
                  <span className="font-semibold">Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-primary hover:text-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
