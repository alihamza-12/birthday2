import { useState } from "react";
import { motion } from "framer-motion";

const InitialView = ({ onGiftClick }) => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const handleGiftClick = () => {
    onGiftClick();
    setShowModal(false);
  };

  return (
    <div className="initial-view">
      <div className="floating-hearts">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{ animationDelay: `${i * 0.5}s` }}
          ></div>
        ))}
      </div>
      <h1 className="welcome-title">Welcome, My Dear</h1>
      <p className="funny-wish-message">
        Get ready for some cake, laughs, and zero calories counted today! 🎂😄
        Happy Birthday – may your day be as sweet as you are! 💖
      </p>
      <p className="additional-wish-message">
        May your birthday be filled with joy, laughter, and endless love! 🌟🎉
      </p>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Type your name..."
        className="name-input"
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>
              I am just kidding dear, I know your name, you are my Deariest
              friend!
            </p>
            <button onClick={handleGiftClick} className="gift-button">
              Come To Me
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InitialView;
