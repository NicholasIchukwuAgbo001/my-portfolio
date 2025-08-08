import { useState, useEffect } from "react";

const HeroH1 = () => {
  const lines = ["Building Digital", "Experiences", "That Matter"];
  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      const restartTimeout = setTimeout(() => {
        setDisplayedText(["", "", ""]);
        setLineIndex(0);
        setCharIndex(0);
      }, 2000); 
      return () => clearTimeout(restartTimeout);
    }

    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const updated = [...prev];
          updated[lineIndex] += lines[lineIndex][charIndex];
          return updated;
        }); 
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const nextLineTimeout = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(nextLineTimeout);
    }
  });

  return (
    <>
      <p
        className="text-stone-400 uppercase text-sm tracking-widest mb-4 sm:mb-6 text-center lg:text-left"
      >
        Senior Software Engineer
      </p>

     <h2
        className="text-4xl sm:text-4xl lg:text-6xl font-bold leading-tight sm:leading-snug"
      >
        {displayedText[0]} <br />
        <span className="text-blue-600">{displayedText[1]}</span> <br />
        {displayedText[2]}
    </h2>
    </>
  );
};

export default HeroH1;