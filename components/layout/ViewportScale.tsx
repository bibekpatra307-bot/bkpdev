'use client';

import { useEffect } from 'react';

function getViewportScale(width: number) {
  if (width >= 1440) return 1;
  if (width >= 1280) return 0.95;
  if (width >= 1024) return 0.85;
  if (width >= 900) return 0.75;
  if (width >= 768) return 0.68;
  if (width >= 600) return 0.58;
  if (width >= 480) return 0.5;
  if (width >= 390) return 0.44;
  return 0.38;
}

export default function ViewportScale() {
  useEffect(() => {
    const root = document.documentElement;

    const updateScale = () => {
      const scale = getViewportScale(window.innerWidth);
      root.style.setProperty('--viewport-scale', scale.toFixed(3));
      document.body.style.zoom = String(scale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return null;
}
