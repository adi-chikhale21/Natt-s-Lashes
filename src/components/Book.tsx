import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, CheckCircle, Star } from 'lucide-react';

export default function Book() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xzdjqwqa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          notes: ''
        });
      } else {
        console.error('Form submission failed');
        alert('There was a problem submitting your form. Please try again or contact us via WhatsApp.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting your form. Please try again or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Classic Set",
    "Wispy Classic",
    "Classic Wet set",
    "Manga~Anime Effect",
    "Hybrid Las Set",
    "Wispy Hybrid Lash Set",
    "Volume Lash Set 🍒",
    "Wispy Volume Lash Set",
    "Mega Volume",
    "Mini Glow Facial",
    "Nano Infusion Facial",
    "Dermaplaning",
    "Microdermabrasion",
    "Brightening Peel Facial",
    "Korean Lash Lift",
    "Brows Shaping ✨(wax Depilation)",
    "Brow Tint & Shape",
    "Brows Lamination & Tint",
    "Other/Not Sure"
  ];

  return (
    <div className="pt-24 pb-32 bg-[var(--color-dark-bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-brown-accent)] uppercase tracking-[0.3em] text-sm font-medium mb-6 block">
            Reserve Your Spot
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-beige-light)] mb-8">
            Book Appointment
          </h1>
          <p className="text-[var(--color-beige-muted)] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Fill out the form below to request an appointment, or reach out directly via WhatsApp for immediate assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-[var(--color-dark-surface)] border border-white/5 p-8 md:p-10"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-20 h-20 bg-[var(--color-brown-accent)]/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-[var(--color-brown-accent)]" />
                </div>
                <h3 className="text-3xl font-serif text-[var(--color-beige-light)] mb-4">Request Received!</h3>
                <p className="text-[var(--color-beige-muted)] font-light max-w-md mx-auto">
                  Thank you for booking with Natt's Lashes. We will review your request and contact you shortly to confirm your appointment.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-8 py-3 border border-[var(--color-brown-accent)] text-[var(--color-brown-accent)] uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-brown-accent)] hover:text-[var(--color-dark-bg)] transition-colors duration-300"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm uppercase tracking-widest text-[var(--color-beige-muted)] font-medium flex items-center gap-2">
                      <User size={14} /> Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[var(--color-dark-bg)] border border-white/10 text-[var(--color-beige-light)] px-4 py-3 focus:outline-none focus:border-[var(--color-brown-accent)] transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm uppercase tracking-widest text-[var(--color-beige-muted)] font-medium flex items-center gap-2">
                      <Mail size={14} /> Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[var(--color-dark-bg)] border border-white/10 text-[var(--color-beige-light)] px-4 py-3 focus:outline-none focus:border-[var(--color-brown-accent)] transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm uppercase tracking-widest text-[var(--color-beige-muted)] font-medium flex items-center gap-2">
                      <Phone size={14} /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[var(--color-dark-bg)] border border-white/10 text-[var(--color-beige-light)] px-4 py-3 focus:outline-none focus:border-[var(--color-brown-accent)] transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm uppercase tracking-widest text-[var(--color-beige-muted)] font-medium flex items-center gap-2">
                      <Star size={14} /> Service
                    </label>
                    <select 
                      id="service" 
                      name="service" 
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[var(--color-dark-bg)] border border-white/10 text-[var(--color-beige-light)] px-4 py-3 focus:outline-none focus:border-[var(--color-brown-accent)] transition-colors appearance-none"
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm uppercase tracking-widest text-[var(--color-beige-muted)] font-medium flex items-center gap-2">
                      <Calendar size={14} /> Preferred Date
                    </label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[var(--color-dark-bg)] border border-white/10 text-[var(--color-beige-light)] px-4 py-3 focus:outline-none focus:border-[var(--color-brown-accent)] transition-colors [color-scheme:dark]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm uppercase tracking-widest text-[var(--color-beige-muted)] font-medium flex items-center gap-2">
                      <Clock size={14} /> Preferred Time
                    </label>
                    <input 
                      type="time" 
                      id="time" 
                      name="time" 
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-[var(--color-dark-bg)] border border-white/10 text-[var(--color-beige-light)] px-4 py-3 focus:outline-none focus:border-[var(--color-brown-accent)] transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm uppercase tracking-widest text-[var(--color-beige-muted)] font-medium flex items-center gap-2">
                    <MessageSquare size={14} /> Additional Notes
                  </label>
                  <textarea 
                    id="notes" 
                    name="notes" 
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-dark-bg)] border border-white/10 text-[var(--color-beige-light)] px-4 py-3 focus:outline-none focus:border-[var(--color-brown-accent)] transition-colors resize-none"
                    placeholder="Any specific requests or questions?"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[var(--color-brown-accent)] text-[var(--color-dark-bg)] uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-beige-light)] transition-colors duration-300 flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send size={16} /> {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Quick Contact & WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-[var(--color-dark-surface)] border border-white/5 p-8 text-center">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={28} className="text-[#25D366]" />
              </div>
              <h3 className="text-2xl font-serif text-[var(--color-beige-light)] mb-4">Fastest Way to Book</h3>
              <p className="text-[var(--color-beige-muted)] font-light mb-8 text-sm leading-relaxed">
                Want to book immediately or have a quick question? Message us directly on WhatsApp for the fastest response.
              </p>
              <a 
                href="https://wa.me/15756078392" 
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-[#25D366] text-white uppercase tracking-widest text-sm font-semibold hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} /> WhatsApp Us
              </a>
            </div>

            <div className="bg-[var(--color-dark-surface)] border border-white/5 p-8">
              <h3 className="text-xl font-serif text-[var(--color-beige-light)] mb-6 border-b border-white/10 pb-4">Important Info</h3>
              <ul className="space-y-4 text-sm text-[var(--color-beige-muted)] font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-brown-accent)] mt-1">•</span>
                  <span>A $20.00 deposit is required for certain services to secure your spot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-brown-accent)] mt-1">•</span>
                  <span>Please arrive 5-10 minutes early to your appointment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-brown-accent)] mt-1">•</span>
                  <span>Cancellations must be made at least 24 hours in advance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-brown-accent)] mt-1">•</span>
                  <span>Come with clean lashes/face (no makeup) for best results.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
