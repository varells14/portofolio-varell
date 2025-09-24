import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-10 py-20 lg:px-20 bg-black/40">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I’m open to collaboration, freelance work, or just a friendly chat.  
          Feel free to reach out via email, phone, or connect with me on social platforms.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email */}
          <motion.div
            className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-sm hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FiMail className="text-purple-400 text-3xl mb-4 mx-auto" />
            <h3 className="text-white font-semibold">Email</h3>
            <p className="text-gray-300">varellsiregar14@gmail.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-sm hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FiPhone className="text-purple-400 text-3xl mb-4 mx-auto" />
            <h3 className="text-white font-semibold">Phone</h3>
            <p className="text-gray-300">+62 895-4010-16483</p>
          </motion.div>

          {/* Location */}
          <motion.div
            className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-sm hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FiMapPin className="text-purple-400 text-3xl mb-4 mx-auto" />
            <h3 className="text-white font-semibold">Location</h3>
            <p className="text-gray-300">Jakarta, Indonesia</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
