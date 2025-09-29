'use client';

import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import CertificateModal from './CertificateModal';
import { useTranslation } from 'react-i18next';

export default function CertificateSection() {
  const { t } = useTranslation('education-experience');
  const [selected, setSelected] = useState(null);

  const certificates = useMemo(
    () => t('certificates', { returnObjects: true }),
    [t]
  );

  // Gandakan 2x biar looping seamless
  const marqueeItems = [...certificates, ...certificates];
  const duration = 25; // makin kecil makin cepat

  return (
    <section className="py-16 px-6 text-white relative overflow-hidden">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 animated-gradient-text opacity-0 translate-y-[-20px] animate-fadeInUp">
        {t('certificatesTitle')}
      </h1>

      {/* Marquee Container */}
      <div className="w-full overflow-hidden">
        <div
          className="flex space-x-6 marquee-container"
          style={{
            width: 'max-content',
            animation: `marquee ${duration}s linear infinite`,
            willChange: 'transform',
          }}
        >
          {marqueeItems.map((cert, index) => (
            <div
              key={index}
              className="relative cursor-pointer bg-[#1a1a1a]/60 border border-purple-600 rounded-2xl p-5 shadow-lg min-w-[250px] max-w-[250px] overflow-hidden group transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
              onClick={() => setSelected(cert)}
            >
              {/* isi card yang nge-zoom */}
              <div className="transition-transform duration-300 group-hover:scale-105">
                <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg bg-black">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-purple-400">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <CertificateModal cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

      {/* CSS tambahan */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
