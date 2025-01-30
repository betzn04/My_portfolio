import { useEffect, useState, useRef } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
}

const Parallax = ({ children, speed = 1 }: ParallaxProps) => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const offset = window.scrollY;
        setScrollY(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateY = scrollY * (speed * 0.5);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${translateY}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;