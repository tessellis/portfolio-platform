'use client';

import { useEffect, useState } from 'react';

export function useThemeRevealKey() {
  const [key, setKey] = useState(() => {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.getAttribute('data-theme') ?? 'light';
  });

  useEffect(() => {
    const target = document.documentElement;
    const observer = new MutationObserver(() => {
      setKey(target.getAttribute('data-theme') ?? 'light');
    });
    observer.observe(target, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return key;
}