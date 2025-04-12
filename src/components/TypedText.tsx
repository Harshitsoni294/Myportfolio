import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  className?: string;
}

export const TypedText = ({ strings, className = '' }: TypedTextProps) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 1500,
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, [strings]);

  return <span ref={el} className={className}></span>;
};