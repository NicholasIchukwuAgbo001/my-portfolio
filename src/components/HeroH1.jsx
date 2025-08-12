import { useState, useEffect } from "react";

const colors = [
  "text-blue-600",
  "text-red-500",
  "text-green-500",
  "text-purple-500",
  "text-yellow-500",
  "text-pink-500"
];

const messages = [
  { line1: "Building Digital", line2: "Experiences", line3: "That Matter" },
  { line1: "Designing Solutions", line2: "For Real World", line3: "Problems" },
  { line1: "Crafting Clean", line2: "and Scalable", line3: "Code" },
  { line1: "Transforming Ideas", line2: "Into", line3: "Reality" },
  { line1: "Delivering Quality", line2: "Software", line3: "On Time" },
  { line1: "Engineering Elegant", line2: "Solutions", line3: "That Deliver Results" },
  { line1: "Turning Complex", line2: "Challenges", line3: "Into Seamless Systems" },
  { line1: "Building High-Impact", line2: "Digital Products", line3: "That Scale" },
  { line1: "Translating Ideas", line2: "Into Code", line3: "That Drives Business" },
  { line1: "Creating Clean", line2: "Maintainable Code", line3: "That Lasts" },
  { line1: "Designing for", line2: "User Experience", line3: "And Performance" },
  { line1: "Optimizing Systems", line2: "For Speed", line3: "And Scalability" },
  { line1: "Turning Ambition", line2: "Into Innovation", line3: "Through Code" }
];

const HeroH1 = () => {
  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

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
        setColorIndex((prev) => (prev + 1) % colors.length);
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
        <span className={colors[colorIndex]}>{displayedText[1]}</span> <br />
        {displayedText[2]}
      </h2>
    </>
  );
};

export default HeroH1;
