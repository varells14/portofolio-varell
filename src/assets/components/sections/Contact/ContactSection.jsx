import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useState, useEffect } from "react";

const contactVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function ContactSection() {
  const contacts = [
    { icon: <FiMail />, title: "Email", info: "varellsiregar14@gmail.com" },
    { icon: <FiPhone />, title: "Phone", info: "+62 895-4010-16483" },
    { icon: <FiMapPin />, title: "Location", info: "Jakarta, Indonesia" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="contact"
      className="relative z-10 px-5 md:px-20 py-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-purple-500 mb-6"
          initial="hidden"
          whileInView="visible"
          variants={contactVariants}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I’m open to collaboration, freelance work, or just a friendly chat.  
          Feel free to reach out via email, phone, or connect with me on social platforms.
        </motion.p>

        {isMobile ? (
          // 👉 Mobile: gabung jadi 1 card
          <motion.div
            className="relative p-6 rounded-2xl border border-purple-500/30 shadow-lg bg-black/40"
            initial="hidden"
            whileInView="visible"
            variants={contactVariants}
            viewport={{ once: true }}
          >
            <div className="rounded-xl p-6 flex flex-col items-center justify-center space-y-6 text-center text-white">
              {contacts.map((contact, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="text-purple-400 text-4xl"
                  >
                    {contact.icon}
                  </motion.div>
                  <h3 className="font-semibold text-lg">{contact.title}</h3>
                  <p className="text-gray-300 text-sm">{contact.info}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          // 👉 Desktop: 3 card sejajar
          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((contact, idx) => (
              <motion.div
                key={idx}
                className="relative p-6 rounded-2xl border border-purple-500/30 shadow-lg bg-black/40 hover:shadow-purple-500/20 transition-all"
                initial="hidden"
                whileInView="visible"
                variants={contactVariants}
                custom={idx + 1}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="rounded-xl p-6 flex flex-col items-center justify-center space-y-3 text-center text-white">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="text-purple-400 text-4xl md:text-5xl"
                  >
                    {contact.icon}
                  </motion.div>
                  <h3 className="font-semibold text-lg md:text-xl">
                    {contact.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {contact.info}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactSection;
