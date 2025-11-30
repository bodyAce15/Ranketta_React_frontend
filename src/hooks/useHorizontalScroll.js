import { useEffect } from "react";

/**
 * Custom hook to convert vertical mouse wheel scrolling to horizontal scrolling
 * @param {Object} scrollRef - Ref to the scrollable container
 */
export const useHorizontalScroll = (scrollRef) => {
  useEffect(() => {
    const handleWheel = (e) => {
      // Only handle if not scrolling within a modal, textarea, or input field
      const target = e.target;
      if (
        target.closest('textarea') ||
        target.closest('input') ||
        target.closest('[role="dialog"]') ||
        target.closest('.ps__rail-y') ||
        target.closest('.ps__thumb-y') ||
        target.closest('.ps__rail-x') ||
        target.closest('.ps__thumb-x')
      ) {
        return; // Allow default behavior for inputs, modals, and scrollbars
      }

      // Check if there's vertical scroll (deltaY) and it's the primary scroll direction
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // Prevent default vertical scrolling
        e.preventDefault();
        e.stopPropagation();

        // Convert vertical scroll (deltaY) to horizontal scroll
        const scrollAmount = e.deltaY;
        
        // Try multiple methods to scroll horizontally
        // Method 1: Try to scroll PerfectScrollbar container if it exists
        const psContainer = document.querySelector('.ps');
        if (psContainer) {
          psContainer.scrollLeft += scrollAmount;
          return;
        }
        
        // Method 2: Try to scroll the container ref if available
        if (scrollRef?.current) {
          const container = scrollRef.current;
          // Check if it's a PerfectScrollbar instance or DOM element
          if (container.scrollLeft !== undefined) {
            container.scrollLeft += scrollAmount;
            return;
          }
        }
        
        // Method 3: Scroll window/document horizontally (fallback)
        window.scrollBy({
          left: scrollAmount,
          behavior: 'auto'
        });
      }
    };

    // Add wheel event listener to document with capture phase
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    
    return () => {
      document.removeEventListener('wheel', handleWheel, { capture: true });
    };
  }, [scrollRef]);
};

