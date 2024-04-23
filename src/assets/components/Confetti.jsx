import React, { useEffect, useRef } from "react";
import JSConfetti from "js-confetti";

const Confetti = () => {
  const confettiRef = useRef(null);

  useEffect(() => {
    const confetti = new JSConfetti(confettiRef.current);
    confetti.addConfetti({
      confettiRadius: 5,
      confettiNumber: 2,
      emojis: ["🎈"],
    });
  }, []);

  return (
    <div
      ref={confettiRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -20,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default Confetti;
