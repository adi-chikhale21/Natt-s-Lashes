import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      src: "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/628812996_18062347865660483_2594034904685281022_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=HcXR5GlZaCcQ7kNvwFgcdF-&_nc_oc=AdoS4dNkcz45FKWgQ7yKRGPenWGeAZTmmFnwvH1WkFU21iNGf9tvnecB_5xIWYC4uLM&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=2BvTBTaVotaXcWuvk87mDg&_nc_ss=7a32e&oh=00_AfyPHy6I7PgO_Mj8F5jfyXxCG93XSu6hCQM5OfmHMhR63A&oe=69C59E6B",
      alt: "Beautiful Client Lashes",
      category: "Client Showcase"
    },
    {
      src: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/651054725_18065195006660483_8377448115149923144_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=eX9RKsLMGRMQ7kNvwERrzI3&_nc_oc=AdoH9sWfaBppqkR_X2xprkZEcM5Dpq6OCUZVR5eVUK8z8OEdHHHGjVmlUT9MiLpXS5U&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=7BJMbjmOY7AEiQJluQLEPA&_nc_ss=7a32e&oh=00_Afybj8sJO2FcWUD3zAhCnF9cw8f4MZQ2ASjp3gxVyokBeQ&oe=69C58D79",
      alt: "Classic Lash Extensions",
      category: "Classic"
    },
    {
      src: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/601069688_18055212632660483_5883713649135192826_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=o0nVG6bieBoQ7kNvwGz4FpN&_nc_oc=Adpi4Wn5HykbauBysTIW6l-iZ9S7IWzBwfJ7pdsCcxuoJJa2vZwUIgwlK2SBE0EuL1s&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=cGb4Bdp79Sh5OmbJTAUUrQ&_nc_ss=7a32e&oh=00_Afw_YbGd9GINVUcjWiRejuh03SoiU-kngcDq7eJRWhNxMQ&oe=69C58BC4",
      alt: "Manga Anime Effect Lashes",
      category: "Manga Effect"
    },
    {
      src: "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/601211988_18055212611660483_107479569642610230_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=tXidZam5dPAQ7kNvwED9hCf&_nc_oc=AdonUiYAOVj7vyiek6ksSLLSp1p4PPNwReWtipYPYCehgQhzjkfwRTCCeMvwLlucLSs&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=ZJLdBU6B5SV7LTx_JQFUsg&_nc_ss=7a32e&oh=00_AfyPhckAc1sakOKTj2LKNBJRgtAlR4qPCAOEKf6g0ACjxQ&oe=69C59942",
      alt: "Volume Lash Extensions",
      category: "Volume"
    },
    {
      src: "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/619629000_18059166842660483_8200599228896932612_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=mmqAJKAWFAoQ7kNvwEkMTP7&_nc_oc=Adroia0IIONJUjG1eW4pmpAb0GIrmezyqBF7rytrRePNmVK5lUKosJ4zUWwzbDEzc1s&_nc_zt=23&_nc_ht=scontent.fbom12-2.fna&_nc_gid=KgXNqbnvYQSqe4sLyvbovw&_nc_ss=7a32e&oh=00_AfzpiFhFLmA98FbrIFHa25Dr-B1RssstT0FF-a6gOBTBgQ&oe=69C58E7D",
      alt: "Hybrid Lash Extensions",
      category: "Hybrid"
    },
    {
      src: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/652685154_18065703095660483_5049192405648606611_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=nyu1lkKQRZIQ7kNvwG64-Ry&_nc_oc=AdoSOdQtcesMvZEnHpKqTBN0sUwC0vda68CIIxN1unVnk-5I0F0aWZtEe1VMSKen8S4&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=UA1lBs63aIdgDtsquWd7kA&_nc_ss=7a32e&oh=00_AfxNOdZvJHrJpa27U5lRl3lELgNGNrJvXHY8pVyuSvIgLQ&oe=69C57F73",
      alt: "Lash Lift",
      category: "Lash Lift"
    },
    {
      src: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/654864091_18065703116660483_8576644399279204907_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=6tUUSCvp37oQ7kNvwFl-XPa&_nc_oc=Adrdms0I8MB4O0hyloHq15OwtsdEjdVCwpbpn2LfShOpHnnRuPg-TRbw4Zxd9G143bU&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=hC-Ybp22sLvg6IfV4fEd8A&_nc_ss=7a32e&oh=00_AfwuQ1ZHLRkQ4LCb5SP8olhi2BS4vu5R5LDgGoMs3M8q3g&oe=69C58961",
      alt: "Mega Volume Lashes",
      category: "Mega Volume"
    },
    {
      src: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/557720205_18046784018660483_791078270236284339_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=Hd4RKkVj4-sQ7kNvwEutpDm&_nc_oc=AdoYJcQDPZP5Tslh6hC9fD2fxPHpP0p2lyBLLXGsshpuAd1zRvfHmgA9BCb7s53WrOY&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=OWQFttgWW8R6J4mOFDVtNg&_nc_ss=7a32e&oh=00_Afwwr7YH8W2Sw-mFXNcJ4x-nf9D7wvdlhjjqWvN79iT7hg&oe=69C58F31",
      alt: "Lash Extensions Detail",
      category: "Close Up"
    },
    {
      src: "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/552957700_18045854663660483_5582453992131687981_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=dhBgClbYlisQ7kNvwESqAkN&_nc_oc=AdqnkauExCUraAFm8ZtPbr9w1HtfcWFJ6juzbvGniLxDCppQH755rfWFfIOUfK9W2H4&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=7l7rJYfV6Ru3To-OQFLXUQ&_nc_ss=7a32e&oh=00_AfzmKzNFkJD0bjnUlcearz9NMdC2eLcu7yH6Wh99HfikDQ&oe=69C57120",
      alt: "Fluffy Volume Lashes",
      category: "Volume"
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
            Our Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-beige-light)] mb-8">
            The Gallery
          </h1>
          <p className="text-[var(--color-beige-muted)] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A showcase of our work, featuring customized lash extensions and rejuvenating facial treatments.
          </p>
          <p className="text-[var(--color-brown-accent)] text-sm mt-4 italic">
            *Note: These are high-quality placeholder images. To add your actual Facebook photos, simply replace the image URLs in the code.*
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[var(--color-brown-accent)] uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">
                    {img.category}
                  </span>
                  <h3 className="text-xl font-serif text-[var(--color-beige-light)]">
                    {img.alt}
                  </h3>
                </div>
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
          <p className="text-[var(--color-beige-muted)] font-light mb-8">
            Follow us on Facebook and Instagram for daily updates and more transformations.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.facebook.com/Nattslashesskin/photos_by" 
              target="_blank"
              rel="noreferrer"
              className="inline-block border-b border-[var(--color-brown-accent)] text-[var(--color-brown-accent)] text-sm uppercase tracking-widest pb-1 hover:text-[var(--color-beige-light)] hover:border-[var(--color-beige-light)] transition-colors"
            >
              Facebook Photos
            </a>
            <a 
              href="https://www.instagram.com/natts_lashes_" 
              target="_blank"
              rel="noreferrer"
              className="inline-block border-b border-[var(--color-brown-accent)] text-[var(--color-brown-accent)] text-sm uppercase tracking-widest pb-1 hover:text-[var(--color-beige-light)] hover:border-[var(--color-beige-light)] transition-colors"
            >
              @natts_lashes_
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
