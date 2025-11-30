import React, { useEffect } from "react";
import { COLORS, BORDER_RADIUS } from "../constants/theme";
import n1 from "../assets/imgs/N1.png";
import n2 from "../assets/imgs/Ranketta_2.png";
import n3 from "../assets/imgs/Ranketta_3.png";
import n4 from "../assets/imgs/Ranketta_4.png";
import n5 from "../assets/imgs/Ranketta_8.png";
import n6 from "../assets/imgs/Ranketta_8 (1).png";

const Modal = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open without jumping to top
  useEffect(() => {
    if (isOpen) {
      // Store scroll position before preventing scroll
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      // Store original styles
      const originalStyle = {
        overflow: document.body.style.overflow,
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        width: document.body.style.width,
      };

      // Prevent scrolling without visual jump
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = `-${scrollX}px`;
      document.body.style.width = '100%';

      // Store scroll position for restoration
      document.body.setAttribute('data-scroll-y', scrollY.toString());
      document.body.setAttribute('data-scroll-x', scrollX.toString());

      return () => {
        // Restore original styles
        document.body.style.overflow = originalStyle.overflow;
        document.body.style.position = originalStyle.position;
        document.body.style.top = originalStyle.top;
        document.body.style.left = originalStyle.left;
        document.body.style.width = originalStyle.width;

        // Restore scroll position
        const savedScrollY = parseInt(document.body.getAttribute('data-scroll-y') || '0', 10);
        const savedScrollX = parseInt(document.body.getAttribute('data-scroll-x') || '0', 10);
        document.body.removeAttribute('data-scroll-y');
        document.body.removeAttribute('data-scroll-x');

        // Use requestAnimationFrame to ensure smooth restoration
        requestAnimationFrame(() => {
          window.scrollTo(savedScrollX, savedScrollY);
        });
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur effect - behind header */}
      <div
        className="fixed inset-0 transition-opacity duration-300 z-40"
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.78)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content - positioned exactly 242px top, 310px left */}
      <div
        className="fixed animate-modal-enter z-50"
        style={{
          width: '850px',
          height: '560px',
          top: '242px',
          left: '310px',
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[-72px] right-[-72px] w-[72px] h-[72px] bg-white rounded-[20px] flex justify-center items-center hover:scale-110 transition-transform duration-200 cursor-pointer z-10"
          style={{ borderRadius: BORDER_RADIUS.small }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.03125 12.6992L12.6985 1.03196"
              stroke="black"
              strokeWidth="2.0625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6985 12.6985L1.03125 1.03125"
              stroke="black"
              strokeWidth="2.0625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Modal Container */}
        <div
          className="relative w-full h-full border-[2px] backdrop-blur-[20px]"
          style={{
            borderRadius: BORDER_RADIUS.large,
            borderColor: `${COLORS.primary.light}f1`,
          }}
        >
          <div className="p-[40px] flex flex-col w-full h-full justify-between">
            <div className="flex justify-between">
              <div className="w-[176px] h-[197px] overflow-hidden rounded-[10px]">
                <img src={n1} alt="Ranketta 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-[197px] h-[197px] ml-[20px] overflow-hidden rounded-[10px]">
                <img src={n2} alt="Ranketta 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-[197px] h-[159px] overflow-hidden rounded-[10px]">
                <img src={n3} alt="Ranketta 3" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-[197px] h-[116px] overflow-hidden rounded-[10px]">
                <img src={n4} alt="Ranketta 4" className="w-full h-full object-cover" />
              </div>
              <div className="w-[197px] h-[197px] overflow-hidden rounded-[10px]">
                <img src={n5} alt="Ranketta 5" className="w-full h-full object-cover" />
              </div>
              <div className="w-[197px] h-[121px] overflow-hidden rounded-[10px]">
                <img src={n6} alt="Ranketta 6" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
