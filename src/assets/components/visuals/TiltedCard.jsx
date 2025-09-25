import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  showTooltip = false,
}) {
  const ref = useRef(null);

  const [flipped, setFlipped] = useState(false); // false = foto, true = teks
  const [wobble, setWobble] = useState(false); // animasi goyang

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
    [{ text: '"Have a great day! :))"', className: "text-yellow-400" }],
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
            setCharIndex((c) => c + 1);
          }, 50);
          return () => clearTimeout(timeout);
        } else {
          setCharIndex(0);
          setTokenIndex((t) => t + 1);
        }
      } else {
        setTokenIndex(0);
        setLineIndex((l) => l + 1);
      }
    }
  }, [flipped, lineIndex, tokenIndex, charIndex]);

  // =========================
// AUTO FLIP + WOBBLE
// =========================
useEffect(() => {
  const timeout = setTimeout(() => {
    setWobble(true);
    setTimeout(() => {
      setFlipped((f) => !f);
      setWobble(false);
    }, 1500); // lebih lama supaya wobble 2x masuk
  }, flipped ? 4000 : 1500);

  return () => clearTimeout(timeout);
}, [flipped]);

// =========================
// FIXED ROTATION
// =========================
const rotation = wobble
  ? flipped
    ? [180, 210, 150, 195, 165, 185, 175, 180] // teks side wobble lebih "mau kebalik"
    : [0, 25, -25, 18, -18, 10, -10, 0]        // foto side wobble lebih jauh
  : flipped
  ? 180
  : 0;


  // =========================
  // RENDER
  // =========================
  return (
    <figure
      ref={ref}
      className="relative w-full h-full flex flex-col items-center justify-center [perspective:1200px]"
      style={{ height: containerHeight, width: containerWidth }}
    >
      {/* CARD WRAPPER */}
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: rotation }}
        transition={{ duration: wobble ? 4 : 1, ease: "easeInOut" }}
        style={{ width: imageWidth, height: imageHeight }}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden rounded-[15px] overflow-hidden">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover rounded-[15px]"
          />
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full flex flex-col rounded-[15px] backface-hidden 
            bg-[#1e1e2e] text-gray-200 border border-gray-700 shadow-xl overflow-hidden"
          style={{ transform: "rotateY(180deg)" }}
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

          {/* Code area */}
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
        </div>
      </motion.div>

      
    </figure>
  );
}
