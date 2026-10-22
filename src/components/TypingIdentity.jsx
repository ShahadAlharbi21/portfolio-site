import { useEffect, useState } from 'react';
const words = ['Artificial intelligence.', 'Software engineering.', 'Curiosity, translated into code.'];
export default function TypingIdentity() {
 const [text, setText] = useState(words[0]);
 useEffect(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let word = 0, length = words[0].length, deleting = true, timer;
  function tick() {
   if (deleting) { length--; if (length === 0) { deleting = false; word = (word + 1) % words.length; } }
   else { length++; if (length === words[word].length) deleting = true; }
   setText(words[word].slice(0, length));
   timer = setTimeout(tick, length === words[word].length ? 2200 : length === 0 ? 350 : deleting ? 35 : 75);
  }
  timer = setTimeout(tick, 2400); return () => clearTimeout(timer);
 }, []);
 return <div className="typing"><span className="sr-only">Artificial intelligence and software engineering.</span><span aria-hidden="true">{text}<span className="cursor">|</span></span></div>;
}
