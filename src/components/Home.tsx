import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-dark-bg)]">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
          <iframe 
            src="https://www.youtube.com/embed/fUz-wgRPD_4?autoplay=1&mute=1&loop=1&playlist=fUz-wgRPD_4&controls=0&showinfo=0&rel=0&playsinline=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[25%] md:-translate-y-[30%] w-[100vw] h-[177.77vw] min-h-[100vh] min-w-[56.25vh] opacity-50"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Background Video"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-bg)] via-[var(--color-dark-bg)]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[var(--color-brown-accent)] uppercase tracking-[0.3em] text-sm font-medium mb-6 block"
          >
            Clovis, New Mexico
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--color-beige-light)] mb-8 leading-tight"
          >
            Enhance Your <br />
            <span className="italic text-[var(--color-brown-accent)]">Natural Beauty</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[var(--color-beige-muted)] text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Premium lash extensions and facial treatments tailored to your unique features. Experience luxury beauty services in a relaxing environment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link 
              to="/book"
              className="px-8 py-4 bg-[var(--color-brown-accent)] text-[var(--color-dark-bg)] uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-beige-light)] transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Book Appointment
            </Link>
            <a 
              href="https://wa.me/15756078392" 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-[var(--color-brown-accent)] text-[var(--color-brown-accent)] uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-brown-accent)] hover:text-[var(--color-dark-bg)] transition-colors duration-300 w-full sm:w-auto text-center"
            >
              WhatsApp Booking
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-[var(--color-dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[var(--color-brown-accent)] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-beige-light)]">Signature Services</h2>
            </div>
            <Link 
              to="/services" 
              className="group flex items-center gap-3 text-[var(--color-beige-muted)] hover:text-[var(--color-brown-accent)] transition-colors uppercase tracking-widest text-sm font-medium"
            >
              View All Services
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Classic Sets",
                desc: "One by one application extending the length and appearance of your natural eyelashes.",
                img: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/651054725_18065195006660483_8377448115149923144_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=eX9RKsLMGRMQ7kNvwERrzI3&_nc_oc=AdoH9sWfaBppqkR_X2xprkZEcM5Dpq6OCUZVR5eVUK8z8OEdHHHGjVmlUT9MiLpXS5U&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=7BJMbjmOY7AEiQJluQLEPA&_nc_ss=7a32e&oh=00_Afybj8sJO2FcWUD3zAhCnF9cw8f4MZQ2ASjp3gxVyokBeQ&oe=69C58D79"
              },
              {
                title: "Manga~Anime Effect",
                desc: "Inspired by expressive eyes seen in Japanese animation. Customized lengths to fit your preferences.",
                img: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/601069688_18055212632660483_5883713649135192826_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=o0nVG6bieBoQ7kNvwGz4FpN&_nc_oc=Adpi4Wn5HykbauBysTIW6l-iZ9S7IWzBwfJ7pdsCcxuoJJa2vZwUIgwlK2SBE0EuL1s&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=cGb4Bdp79Sh5OmbJTAUUrQ&_nc_ss=7a32e&oh=00_Afw_YbGd9GINVUcjWiRejuh03SoiU-kngcDq7eJRWhNxMQ&oe=69C58BC4"
              },
              {
                title: "Volume Sets",
                desc: "Lash fans applied to 1 natural lash creating a full, fluffy and dramatic look.",
                img: "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/601211988_18055212611660483_107479569642610230_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=tXidZam5dPAQ7kNvwED9hCf&_nc_oc=AdonUiYAOVj7vyiek6ksSLLSp1p4PPNwReWtipYPYCehgQhzjkfwRTCCeMvwLlucLSs&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=ZJLdBU6B5SV7LTx_JQFUsg&_nc_ss=7a32e&oh=00_AfyPhckAc1sakOKTj2LKNBJRgtAlR4qPCAOEKf6g0ACjxQ&oe=69C59942"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] overflow-hidden mb-6">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif text-[var(--color-beige-light)] mb-3">{service.title}</h3>
                <p className="text-[var(--color-beige-muted)] font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-[var(--color-dark-bg)] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center text-center md:px-8 pt-8 md:pt-0">
              <div className="w-16 h-16 rounded-full bg-[var(--color-dark-surface)] flex items-center justify-center mb-6 text-[var(--color-brown-accent)]">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-serif text-[var(--color-beige-light)] mb-3">Location</h3>
              <p className="text-[var(--color-beige-muted)] font-light">Clovis, New Mexico<br />NM 88101</p>
            </div>
            
            <div className="flex flex-col items-center text-center md:px-8 pt-8 md:pt-0">
              <div className="w-16 h-16 rounded-full bg-[var(--color-dark-surface)] flex items-center justify-center mb-6 text-[var(--color-brown-accent)]">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-serif text-[var(--color-beige-light)] mb-3">Hours</h3>
              <p className="text-[var(--color-beige-muted)] font-light">By Appointment Only<br />Book online to see availability</p>
            </div>
            
            <div className="flex flex-col items-center text-center md:px-8 pt-8 md:pt-0">
              <div className="w-16 h-16 rounded-full bg-[var(--color-dark-surface)] flex items-center justify-center mb-6 text-[var(--color-brown-accent)]">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-serif text-[var(--color-beige-light)] mb-3">Experience</h3>
              <p className="text-[var(--color-beige-muted)] font-light">Premium products<br />Professional techniques</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
