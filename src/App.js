import { useState } from "react";

const messages = [
  "Make An e-commerce Website",
  "Scam seif ibrahim",
  "become a millionaire",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setStep((s) => Math.min(s + 1, messages.length));
  };

  const handlePrev = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`number ${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`number ${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`number ${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">{messages[step - 1]}</p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2" }}
              className="prev"
              onClick={handlePrev}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "#7950f2" }}
              className="next"
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
