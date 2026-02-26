
import React, { useState, useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  image: string;
  children?: React.ReactNode;
  height?: string;
  overlayOpacity?: string;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  image, 
  children, 
  height = "60vh", 
  overlayOpacity = "bg-black/20",
  speed = 0.5
}) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height: elementHeight } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much the section is visible
      // progress is 0 when the section enters from bottom, 1 when it leaves at top
      const progress = (windowHeight - top) / (windowHeight + elementHeight);
      
      // Apply offset to create parallax effect (range from -50px to 50px depending on speed)
      setOffset((progress - 0.5) * 150 * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden w-full flex items-center justify-center"
      style={{ height }}
    >
      <div 
        className="absolute inset-0 w-full h-[140%] -top-[20%] transition-transform duration-100 ease-linear"
        style={{ 
          transform: `translate3d(0, ${offset}px, 0)`,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />
      <div className={`absolute inset-0 ${overlayOpacity} z-10 flex items-center justify-center`}>
        <div className="w-full relative z-20">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
