import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Natt is absolutely amazing! She took the time to understand exactly what I wanted and delivered perfectly. The Manga Anime effect lashes are stunning and I've received so many compliments.",
      service: "Manga~Anime Effect"
    },
    {
      name: "Jessica T.",
      text: "I've been going to Natt for my classic fills for over a year now. Her attention to detail is unmatched, and my natural lashes have remained healthy. The studio is so relaxing!",
      service: "Classic Sets & Fills"
    },
    {
      name: "Emily R.",
      text: "The facial collection is a game changer. The Circadia products combined with her soothing techniques left my skin glowing for days. Highly recommend booking a facial with your lash appointment.",
      service: "Facial Collection"
    },
    {
      name: "Amanda K.",
      text: "First time getting volume lashes and I am obsessed! They are so full and fluffy but don't feel heavy at all. Natt is a true artist.",
      service: "Volume Sets"
    },
    {
      name: "Lauren B.",
      text: "Switched to Natt for a foreign fill and she fixed the mess another tech made. She was so gentle and explained the whole process. I'm a client for life now.",
      service: "Foreign Lash Fill"
    },
    {
      name: "Michelle W.",
      text: "The hybrid set is the perfect balance of natural and dramatic. Natt customized the length to fit my eye shape perfectly. The retention is also incredible!",
      service: "Hybrid Sets"
    }
  ];

  return (
    <div className="pt-24 pb-32 bg-[var(--color-dark-bg)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--color-brown-accent)] uppercase tracking-[0.3em] text-sm font-medium mb-6 block">
            Client Love
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-beige-light)] mb-8">
            Testimonials
          </h1>
          <p className="text-[var(--color-beige-muted)] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Read what our clients have to say about their experience at Natt's Lashes & Skin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[var(--color-dark-surface)] p-10 border border-white/5 rounded-sm hover:border-[var(--color-brown-accent)]/30 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="flex gap-1 text-[var(--color-brown-accent)] mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[var(--color-beige-muted)] font-light leading-relaxed mb-8 flex-grow italic">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <h4 className="text-[var(--color-beige-light)] font-serif text-lg mb-1">{review.name}</h4>
                <span className="text-[var(--color-brown-accent)] text-xs uppercase tracking-widest font-medium">
                  {review.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-serif text-[var(--color-beige-light)] mb-4">Experience it for yourself</h3>
          <p className="text-[var(--color-beige-muted)] font-light mb-8 max-w-lg mx-auto">
            Join our community of satisfied clients and book your next beauty treatment today.
          </p>
          <Link 
            to="/book"
            className="inline-block px-8 py-4 bg-[var(--color-brown-accent)] text-[var(--color-dark-bg)] uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-beige-light)] transition-colors duration-300"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
