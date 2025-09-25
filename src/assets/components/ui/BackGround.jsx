import { useRef, useEffect } from 'react';

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;
    
    const streaks = [];
    const symbols = [];
    
    const codeChars = [
      '</>',
      '{}',
      '[]',
      '();',
      '=>',
      'const',
      'let',
      'if',
      'function',
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Buat streaks neon
    const numStreaks = 40;
    for (let i = 0; i < numStreaks; i++) {
      streaks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 1.5 + 0.5,
        color: `hsla(${200 + Math.random() * 100}, 80%, 60%, 0.25)`,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Buat simbol kode neon
    const numSymbols = 25;
    for (let i = 0; i < numSymbols; i++) {
      symbols.push({
        text: codeChars[Math.floor(Math.random() * codeChars.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedY: Math.random() * 0.5 + 0.2,
        fontSize: Math.random() * 16 + 14,
        color: `hsla(${200 + Math.random() * 100}, 100%, 70%, 0.8)`,
      });
    }

    const animate = () => {
      // Clear canvas dengan background hitam
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw neon streaks
      streaks.forEach((s) => {
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        if (
          s.x > canvas.width + s.length ||
          s.x < -s.length ||
          s.y > canvas.height + s.length ||
          s.y < -s.length
        ) {
          s.x = Math.random() * canvas.width;
          s.y = Math.random() * canvas.height;
          s.angle = Math.random() * Math.PI * 2;
        }

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.length,
          s.y - Math.sin(s.angle) * s.length
        );
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.stroke();
      });

      // Draw floating code symbols
      symbols.forEach((sym) => {
        ctx.font = `${sym.fontSize}px monospace`;
        ctx.fillStyle = sym.color;
        ctx.shadowColor = sym.color;
        ctx.shadowBlur = 15;
        ctx.fillText(sym.text, sym.x, sym.y);

        sym.y += sym.speedY;

        if (sym.y > canvas.height + 20) {
          sym.y = -20;
          sym.x = Math.random() * canvas.width;
          sym.text = codeChars[Math.floor(Math.random() * codeChars.length)];
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

export default Background;