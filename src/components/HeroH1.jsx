import { useState, useEffect } from "react";

const messages = [
  { line1: "Building Digital", line2: "Experiences", line3: "That Matter" },
  { line1: "Designing Solutions", line2: "For Real World", line3: "Problems" },
  { line1: "Crafting Clean", line2: "and Scalable", line3: "Code" },
  { line1: "Transforming Ideas", line2: "Into", line3: "Reality" },
  { line1: "Delivering Quality", line2: "Software", line3: "On Time" },
  { line1: "Turning Ideas", line2: "Into Digital", line3: "Masterpieces" },
  { line1: "Building Fast", line2: "Scalable", line3: "Web Apps" },
  { line1: "Designing Clean", line2: "User-Friendly", line3: "Interfaces" },
  { line1: "Creating Software", line2: "That Solves", line3: "Real Problems" },
  { line1: "Delivering Code", line2: "With Precision", line3: "And Passion" }
];

const HeroH1 = () => {
  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentMessage = [
      messages[messageIndex].line1,
      messages[messageIndex].line2,
      messages[messageIndex].line3
    ];

    if (lineIndex >= currentMessage.length) {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText(["", "", ""]);
        setLineIndex(0);
        setCharIndex(0);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 8000); 
      return () => clearTimeout(pauseTimeout);
    }

    if (charIndex < currentMessage[lineIndex].length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const updated = [...prev];
          updated[lineIndex] += currentMessage[lineIndex][charIndex];
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(typingTimeout);
    } else {
      
      const linePause = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(linePause);
    }
  }, [charIndex, lineIndex, messageIndex]);

  return (
    <>
      <p className="text-stone-400 uppercase text-sm tracking-widest mb-4 sm:mb-6 text-center lg:text-left">
        Senior Software Engineer
      </p>
      <h2 className="text-4xl sm:text-4xl lg:text-6xl font-bold leading-tight sm:leading-snug">
        {displayedText[0]} <br />
        <span className="text-blue-600">{displayedText[1]}</span> <br />
        {displayedText[2]}
      </h2>
    </>
  );
};

export default HeroH1;
