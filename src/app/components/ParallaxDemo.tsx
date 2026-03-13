import { useEffect, useRef, useState } from 'react';
import exampleImage from 'figma:asset/4b5eb7044a61a8dc53374c33180cdb619db416e3.png';

// Easing functions
const easeOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 3); // cubic ease-out
};

const easeIn = (t: number): number => {
  return Math.pow(t, 3); // cubic ease-in
};

export function ParallaxDemo() {
  const [imageTransform, setImageTransform] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const imageTop = imageRef.current.offsetTop;
      const imageHeight = imageRef.current.offsetHeight;

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

        // Move the image based on eased progress (parallax effect)
        const maxMove = 200; // Maximum pixels to move
        setImageTransform(easedProgress * maxMove);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-pink-100 to-green-100">
      {/* Top spacer */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Scroll Down</h1>
          <p className="text-xl text-gray-600">Watch the image move with ease-in/ease-out</p>
        </div>
      </div>

      {/* Image section with parallax effect */}
      <div ref={imageRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="transition-transform duration-75 ease-linear"
          style={{
            transform: `translateY(${imageTransform}px)`,
          }}
        >
          <img 
            src={exampleImage} 
            alt="Person smiling" 
            className="w-[600px] h-[600px] object-cover rounded-full shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Keep Scrolling</h2>
          <p className="text-xl text-gray-600">Notice the smooth easing effect</p>
        </div>
      </div>

      {/* Extra space */}
      <div className="h-screen bg-gradient-to-b from-green-100 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">End of Demo</h2>
          <p className="text-xl text-gray-600">Scroll back up to see the effect again</p>
        </div>
      </div>
    </div>
  );
}
