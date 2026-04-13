import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.5 });

  const isHovering = useRef(false);
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onEnter = (e) => {
      const el = e.target.closest('a, button, [data-magnetic]');
      if (el) {
        isHovering.current = true;
        scale.set(2.2);
      }
    };
    const onLeave = (e) => {
      const el = e.target.closest('a, button, [data-magnetic]');
      if (el) {
        isHovering.current = false;
        scale.set(1);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', onEnter);
    window.addEventListener('mouseout', onLeave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', onEnter);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Outer ring - follows with spring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          scale,
        }}
      >
        <div className="w-8 h-8 rounded-full border border-white opacity-70" />
      </motion.div>

      {/* Inner dot - instant */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
      </motion.div>

      <style>{`
        * { cursor: none !important; }
      `}</style>
    </>
  );
}
