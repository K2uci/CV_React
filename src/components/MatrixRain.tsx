import { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノﾊﾋﾌﾍﾎ0123456789ABCDEF<>{}/[]$#%*+-=:;';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      const fontSize = 14;
      columns = Math.ceil(rect.width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -50);
    };

    resize();
    window.addEventListener('resize', resize);

    const fontSize = 14;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.fillStyle = 'rgba(7, 16, 20, 0.08)';
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.font = `${fontSize}px "Space Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (Math.random() > 0.975) {
          ctx.fillStyle = '#f4f7f8';
        } else if (drops[i] > 0 && Math.random() > 0.85) {
          ctx.fillStyle = '#ff8066';
        } else {
          ctx.fillStyle = '#14a9a0';
        }

        ctx.fillText(char, x, y);

        if (y > rect.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
}
