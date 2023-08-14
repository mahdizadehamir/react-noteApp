import { useInView } from 'framer-motion';
import { useRef } from 'react';
function NavAnimation({ children }) {
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: true });
  return (
    <section ref={navRef}>
      <div
        style={{
          transform: isInView ? 'none' : 'translateY(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default NavAnimation;
