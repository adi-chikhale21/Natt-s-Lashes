import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      category: "Classic Sets & Fills",
      description: "One by One, classic lash extension is applied to each one of your natural lashes, extending the length and appearance of your eyelashes. This set is recommended for clients who have a good amount of natural lashes.",
      items: [
        { name: "Classic Set", price: "$115.00" },
        { name: "Wispy Classic", price: "$115.00" },
        { name: "Classic Wet set", price: "$125.00" },
        { name: "2 Weeks lash Fill", price: "$65.00" },
        { name: "3 Weeks Lash Fill", price: "$75.00" }
      ]
    },
    {
      category: "Manga~Anime Effect",
      description: "New lash extensions tendency, inspired by expressive eyes commonly seen in Japanese animation🫰🏼 ✨Lengths could be customized to fit your preferences. ($20.00 deposit required)",
      items: [
        { name: "Manga~Anime Effect", price: "$125.00" }
      ]
    },
    {
      category: "Hybrid Sets & Fills",
      description: "Hybrid lashes are a combination of Volume and Classic. You'll get the best of both techniques customized to your natural eye shape and desired look.",
      items: [
        { name: "Hybrid Las Set", price: "$125.00" },
        { name: "Wispy Hybrid Lash Set", price: "$125.00" },
        { name: "2 Weeks Lash Fill", price: "$75.00" },
        { name: "3 Weeks Lash Fill", price: "$85.00" }
      ]
    },
    {
      category: "Volume Sets & Fills",
      description: "Lash fans (.03mm) extensions applied to 1 natural lash creating the set of full, fluffy and dramatic lash extensions.",
      items: [
        { name: "Volume Lash Set 🍒", price: "$135.00" },
        { name: "Wispy Volume Lash Set", price: "$135.00" },
        { name: "Mega Volume", price: "$150.00" },
        { name: "2 Weeks Lash Fill", price: "$75.00" },
        { name: "3 Weeks Lash Fill", price: "$85.00" }
      ]
    },
    {
      category: "✨ Facial Collection ✨",
      description: "A luxury line of facials powered by Circadia professional skincare, designed to target every skin type and concern. Each treatment blends advanced formulas with soothing techniques like gua sha, ice globes, and jade masks to refresh, nourish, and transform your skin.",
      items: [
        { name: "Mini Glow", price: "$45.00" },
        { name: "Nano Infusion", price: "$75.00" },
        { name: "Dermaplaning", price: "$75.00" },
        { name: "Microdermabrasion", price: "$70.00" },
        { name: "Brightening Peel Facial", price: "$90.00" },
        { name: "Oxygen RX (ADD ON)", price: "$25.00" },
        { name: "Firming Peptide (ADD ON)", price: "$25.00" },
        { name: "High Frequency (ADD ON)", price: "$15.00" },
        { name: "Nano Infusion (ADD ON)", price: "$25.00" }
      ]
    },
    {
      category: "Lash Lifts ✨",
      description: "Results vary from eye shape and quantity of natural lashes.",
      items: [
        { name: "Korean Lash Lift", price: "$75.00" }
      ]
    },
    {
      category: "Brows Services",
      description: "",
      items: [
        { name: "Brows Shaping ✨(wax Depilation)", price: "$15.00" },
        { name: "Brow Tint & Shape (wax Depilation)", price: "$40.00" },
        { name: "Brows Lamination & Tint (optional)", price: "$75.00" }
      ]
    },
    {
      category: "Other Services",
      description: "",
      items: [
        { name: "Mini Lash Fill ❤️‍🔥", price: "$50.00" },
        { name: "Foreign Lash Fill 🎀", price: "$80.00", desc: "Prices vary depending on what set and lash retention you have. ($20.00 deposit required)" },
        { name: "Wax 🎀 - Eyebrows", price: "$15.00" },
        { name: "Wax 🎀 - Upper Lip", price: "$15.00" },
        { name: "Wax 🎀 - Full Face", price: "$50.00" },
        { name: "Lash Removal", price: "$35.00" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-32 bg-[var(--color-dark-bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--color-brown-accent)] uppercase tracking-[0.3em] text-sm font-medium mb-6 block">
            Our Offerings
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-beige-light)] mb-8">
            Services & Pricing
          </h1>
          <p className="text-[var(--color-beige-muted)] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Discover our range of premium beauty treatments designed to enhance your natural features and boost your confidence.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((section, sectionIdx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-[var(--color-brown-accent)] mb-4 border-b border-white/10 pb-6">
                {section.category}
              </h2>
              {section.description && (
                <p className="text-[var(--color-beige-muted)]/80 font-light leading-relaxed mb-8 text-sm md:text-base">
                  {section.description}
                </p>
              )}
              
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <div key={item.name} className="group relative pl-8 md:pl-0">
                    <div className="hidden md:block absolute left-0 top-3 w-4 h-[1px] bg-[var(--color-brown-accent)]/50 group-hover:w-8 group-hover:bg-[var(--color-brown-accent)] transition-all duration-300" />
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:pl-12">
                      <h3 className="text-xl font-serif text-[var(--color-beige-light)] group-hover:text-[var(--color-brown-accent)] transition-colors">
                        {item.name}
                      </h3>
                      <div className="hidden md:block flex-grow border-b border-dashed border-white/10 mx-6 opacity-30" />
                      <span className="text-[var(--color-beige-muted)] font-medium tracking-widest text-sm uppercase whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-[var(--color-beige-muted)]/60 font-light text-sm mt-1 md:pl-12">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24 p-12 bg-[var(--color-dark-surface)] border border-white/5 text-center flex flex-col items-center"
        >
          <h3 className="text-2xl font-serif text-[var(--color-beige-light)] mb-4">Ready for your transformation?</h3>
          <p className="text-[var(--color-beige-muted)] font-light mb-8 max-w-lg">
            Book your appointment online or contact us via WhatsApp for any questions about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/book"
              className="px-8 py-4 bg-[var(--color-brown-accent)] text-[var(--color-dark-bg)] uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-beige-light)] transition-colors duration-300 flex items-center justify-center gap-3"
            >
              Book Now <ArrowRight size={16} />
            </Link>
            <a 
              href="https://wa.me/15756078392" 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-[var(--color-brown-accent)] text-[var(--color-brown-accent)] uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-brown-accent)] hover:text-[var(--color-dark-bg)] transition-colors duration-300 flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
