import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.05,
  rotateAmplitude = 12,
  showMobileWarning = true,
  showTooltip = false,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });

  const [lastY, setLastY] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
    setFlipped(true); // mulai flip saat hover
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
    setFlipped(false); // balik lagi ke depan
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:1200px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      {/* CARD WRAPPER */}
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        {/* FRONT */}
        <motion.div
          className="absolute w-full h-full backface-hidden rounded-[15px] overflow-hidden"
          style={{ rotateY: 0 }}
        >
          <motion.img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover rounded-[15px]"
          />
        </motion.div>

       
{/* BACK */}
<motion.div
  className="absolute w-full h-full flex flex-col rounded-[15px] backface-hidden 
             bg-[#1e1e2e] text-gray-200 border border-gray-700 shadow-xl overflow-hidden"
  style={{ rotateY: 180 }}
>
  {/* Header VSCode style */}
  <div className="flex items-center justify-between px-3 py-2 bg-[#2d2d3a] text-sm text-gray-400 border-b border-gray-700">
    <span className="font-mono text-gray-300">profile.js</span>

    {/* VSCode Logo */}
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      alt="VSCode Logo"
      className="w-5 h-5"
    />
  </div>

  {/* Code area */}
  <div className="flex-1 flex">
    {/* Line numbers */}
    <div className="px-3 py-2 text-gray-500 text-sm font-mono select-none">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
    </div>

    {/* Code content */}
    <div className="px-3 py-2 font-mono text-sm leading-relaxed">
      <p>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-green-400">name</span>{" "}
        = <span className="text-yellow-400">"Varell"</span>;
      </p>
      <p>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-green-400">email</span>{" "}
        = <span className="text-yellow-400">"varellsiregar14.com"</span>;
      </p>
      <p>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-green-400">phone</span>{" "}
        = <span className="text-yellow-400">"+62 812-3456-7890"</span>;
      </p>
    </div>
  </div>
</motion.div>



      </motion.div>

      {/* TOOLTIP */}
      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
