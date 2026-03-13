import Desktop from "../imports/Desktop3";
import IPhone from "../imports/IPhone161";
import { useEffect, useState } from "react";

export default function App() {
  const [scale, setScale] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      
      // Determine if we should use mobile layout
      if (width < 768) {
        setIsMobile(true);
        // For mobile design (IPhone161), scale from 393px base width
        if (width >= 393) {
          setScale(1);
        } else {
          setScale(width / 393);
        }
      } else {
        setIsMobile(false);
        // For desktop design, scale from 1440px base width
        if (width >= 1440) {
          setScale(1);
        } else if (width >= 1024) {
          setScale(width / 1440);
        } else {
          setScale(0.6);
        }
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('scroll-container')) {
        const newScrollY = target.scrollTop / scale;
        setScrollY(newScrollY);
      }
    };

    const container = document.querySelector('.scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scale]);

  // Mobile layout
  if (isMobile) {
    return (
      <div className="scroll-container w-full h-screen bg-white overflow-y-scroll overflow-x-hidden">
        <div className="relative flex justify-center">
          <div 
            className="origin-top"
            style={{
              transform: `scale(${scale})`,
              width: '393px',
              height: `${5900 * scale}px`,
            }}
          >
            <IPhone />
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <>
      <div className="scroll-container w-full h-screen bg-white overflow-y-scroll overflow-x-hidden">
        <div className="relative">
          {/* The actual design */}
          <div 
            className="origin-top-left"
            style={{
              transform: `scale(${scale})`,
              width: '1440px',
              height: `${5845 * scale}px`,
            }}
          >
            <Desktop scrollY={scrollY} />
          </div>
        </div>
      </div>
    </>
  );
}