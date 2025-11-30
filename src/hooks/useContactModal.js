import { useState, useRef, useCallback } from "react";

/**
 * Custom hook to detect when scroll reaches the end and show contact modal
 * @returns {Array} - [isContactModalOpen, setIsContactModalOpen, handleScroll]
 */
export const useContactModal = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const hasShownModal = useRef(false);

  const handleScroll = useCallback((event) => {
    if (!event) return;
    
    const scrollLeft = event.scrollLeft || 0;
    const scrollWidth = event.scrollWidth || 0;
    const clientWidth = event.clientWidth || 0;
    
    if (scrollWidth > 0 && clientWidth > 0) {
      const scrollPercentage = (scrollLeft + clientWidth) / scrollWidth;

      // Show contact modal when scroll reaches end (95% threshold)
      if (scrollPercentage >= 0.95 && !hasShownModal.current) {
        setIsContactModalOpen(true);
        hasShownModal.current = true;
      } else if (scrollPercentage < 0.8 && hasShownModal.current) {
        // Reset flag when scrolled back, but don't close modal automatically
        setIsContactModalOpen(false);
        hasShownModal.current = false;
      }
    }
  }, []);

  return [isContactModalOpen, setIsContactModalOpen, handleScroll];
};

