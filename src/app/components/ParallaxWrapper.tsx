import { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxWrapperProps {
  children: ReactNode;
  imageSelector: string;
  maxMove?: number;
}

// Easing functions
const easeOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 3); // cubic ease-out
};

const easeIn = (t: number): number => {
  return Math.pow(t, 3); // cubic ease-in
};

export function ParallaxWrapper({ children, imageSelector, maxMove = 150 }: ParallaxWrapperProps) {
  const [imageTransform, setImageTransform] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const targetElement = containerRef.current.querySelector(imageSelector);
      if (!targetElement) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const rect = targetElement.getBoundingClientRect();
      const imageTop = scrollTop + rect.top;
      const imageHeight = rect.height;

      // Calculate when the image enters and leaves the viewport
      const startScroll = imageTop - windowHeight;
      const endScroll = imageTop + imageHeight;
      const scrollRange = endScroll - startScroll;

      if (scrollTop > startScroll && scrollTop < endScroll) {
        // Progress from 0 to 1 as user scrolls through the image section
        const progress = (scrollTop - startScroll) / scrollRange;
        
        // Apply ease-out at the beginning and ease-in at the end
        const easedProgress = progress < 0.5 
          ? easeOut(progress * 2) / 2 
          : 0.5 + easeIn((progress - 0.5) * 2) / 2;

        // Move the image based on eased progress
        setImageTransform(easedProgress * maxMove);
      } else if (scrollTop <= startScroll) {
        setImageTransform(0);
      } else if (scrollTop >= endScroll) {
        setImageTransform(maxMove);
      }
    };

    // Use a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [imageSelector, maxMove]);

  return (
    <div ref={containerRef} className="relative">
      <style>{`
        ${imageSelector} {
          transform: translateY(${imageTransform}px);
          transition: transform 0.1s linear;
          will-change: transform;
        }
      `}</style>
      {children}
    </div>
  );
}
