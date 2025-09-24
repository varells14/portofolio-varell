import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.05,
  rotateAmplitude = 12,
  showMobileWarning = false,
  showTooltip = false,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // =========================
  // CODE WITH SYNTAX COLORS
  // =========================
  const codeLines = [
    [
      { text: "const", className: "text-purple-400" },
      { text: " hello", className: "text-blue-300" },
      { text: " = ", className: "text-gray-200" },
      { text: '"Hello";', className: "text-green-400" },
    ],
    [
      { text: "const", className: "text-purple-400" },
      { text: " myName", className: "text-blue-300" },
      { text: " = ", className: "text-gray-200" },
      { text: '"Varell";', className: "text-green-400" },
    ],
    [
      { text: '"Have a great day! :))"', className: "text-yellow-400" },
    ],
  ];

  const [displayedLines, setDisplayedLines] = useState([[], [], []]);
  const [lineIndex, setLineIndex] = useState(0);
  const [tokenIndex, setTokenIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // =========================
  // TYPING EFFECT
  // =========================
  useEffect(() => {
    if (!flipped) {
      setDisplayedLines([[], [], []]);
      setLineIndex(0);
      setTokenIndex(0);
      setCharIndex(0);
      return;
    }

    if (lineIndex < codeLines.length) {
      const currentLine = codeLines[lineIndex];
      if (tokenIndex < currentLine.length) {
        const currentToken = currentLine[tokenIndex];
        if (charIndex < currentToken.text.length) {
          const timeout = setTimeout(() => {
            setDisplayedLines((prev) => {
              const newLines = [...prev];
              const tokens = [...newLines[lineIndex]];
              tokens[tokenIndex] = {
                ...currentToken,
                text: currentToken.text.slice(0, charIndex + 1),
              };
              newLines[lineIndex] = tokens;
              return newLines;
            });
            setCharIndex(charIndex + 1);
          }, 50);
          return () => clearTimeout(timeout);
        } else {
          setCharIndex(0);
          setTokenIndex(tokenIndex + 1);
        }
      } else {
        setTokenIndex(0);
        setLineIndex(lineIndex + 1);
      }
    }
  }, [flipped, lineIndex, tokenIndex, charIndex]);

  // =========================
  // AUTO FLIP - FOTO 2 DETIK, TEKS 7 DETIK
  // =========================
  useEffect(() => {
    let timeout;
    
    if (flipped) {
      // Jika sedang menampilkan teks (flipped = true), tunggu 7 detik
      timeout = setTimeout(() => {
        setFlipped(false);
      }, 7000);
    } else {
      // Jika sedang menampilkan foto (flipped = false), tunggu 2 detik
      timeout = setTimeout(() => {
        setFlipped(true);
      }, 2000);
    }
    
    return () => clearTimeout(timeout);
  }, [flipped]);

  // =========================
  // RENDER
  // =========================
  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:1200px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
    >
      {/* CARD WRAPPER */}
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          width: imageWidth,
          height: imageHeight,
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
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VSCode Logo"
              className="w-5 h-5"
            />
          </div>

          {/* Code area with syntax highlight + typing */}
          <div className="flex-1 flex flex-col font-mono text-sm leading-relaxed px-2 py-2">
            {displayedLines.map((line, i) => (
              <div key={i} className="flex">
                <span className="w-6 text-gray-500 select-none">{i + 1}</span>
                <span>
                  {line.map((token, j) => (
                    <span key={j} className={token.className}>
                      {token.text}
                    </span>
                  ))}
                  {i === lineIndex && flipped && (
                    <span className="animate-pulse">|</span>
                  )}
                </span>
              </div>
            ))}
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