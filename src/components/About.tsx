import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-32 bg-[var(--color-dark-bg)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-t-full">
              <img 
                src="https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/550571430_18045229580660483_5714792418371461615_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=9eIc-jmpVlQQ7kNvwFDMc46&_nc_oc=AdqSDaIu9YdBbV95ZYo1JtedAkPUedG1rWxo6ZCnyVYatZshevS1WZvoPgYPHD2DtOk&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=rZWRGQUJI6G4BpCnx6n2uA&_nc_ss=7a32e&oh=00_AfxfeKC6rc8LJa1Hh_JQ__yrzEgx-MIjEjlSTe0LZChG6g&oe=69C590E5" 
                alt="Natt - Lash artist at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--color-brown-accent)] rounded-full flex items-center justify-center p-8 text-center text-[var(--color-dark-bg)] hidden md:flex flex-col">
              <span className="text-3xl font-serif mb-1">5+</span>
              <span className="text-xs uppercase tracking-widest font-semibold">Years of<br/>Experience</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[var(--color-brown-accent)] uppercase tracking-[0.3em] text-sm font-medium mb-6 block">
              The Artist Behind The Lashes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-beige-light)] mb-8 leading-tight">
              Meet Natt
            </h1>
            
            <div className="space-y-6 text-[var(--color-beige-muted)] font-light leading-relaxed text-lg mb-12">
              <p>
                Welcome to Natt's Lashes & Skin, your premier destination for luxury lash extensions and advanced facial treatments in Clovis, New Mexico.
              </p>
              <p>
                My passion is enhancing your natural beauty while maintaining the health and integrity of your natural lashes and skin. I believe that beauty services should be a relaxing, rejuvenating experience that leaves you feeling confident and empowered.
              </p>
              <p>
                Whether you're looking for a subtle enhancement with Classic lashes, a dramatic Volume set, or the trendy Manga~Anime effect, every set is customized to complement your unique eye shape and personal style.
              </p>
              <p>
                Beyond lashes, I offer a luxury line of facials powered by Circadia professional skincare, designed to target every skin type and concern using advanced formulas and soothing techniques.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="https://www.instagram.com/natts_lashes_" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[var(--color-beige-light)] hover:text-[var(--color-brown-accent)] transition-colors uppercase tracking-widest text-sm font-medium"
              >
                <Instagram size={20} />
                Follow on IG
              </a>
              <a 
                href="https://www.facebook.com/share/Vq1cvUjhyryEDJrY/?" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[var(--color-beige-light)] hover:text-[var(--color-brown-accent)] transition-colors uppercase tracking-widest text-sm font-medium"
              >
                <Facebook size={20} />
                Connect on FB
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
