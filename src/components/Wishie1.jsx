import { motion } from "framer-motion";
import shada1 from "../assets/img/shada1.jpg";

const Wishie1 = () => {
  return (
    <div className="wishie-view">
      <div className="falling-hearts">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="falling-heart"
            style={{
              animationDelay: `${i * 0.3}s`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
      <div className="wishie-particles">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="wishie-particle"
            style={{
              animationDelay: `${i * 0.4}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="wishie-content wishie1-content"
      >
        <h1 className="wishie-title">Wishie 1: The Adventurous Spirit</h1>
        <div className="wishie-description">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="wishie-intro">
              🌟 <strong>Wishie 1: The Adventurous Spirit</strong> is a fearless
              explorer who sees the world as her playground! Born with an
              insatiable curiosity and an unquenchable thirst for discovery,
              she's the one who turns "what if" into "let's try it!" Her
              adventurous heart beats with the rhythm of distant horizons and
              unexplored paths.
            </p>
            <p className="wishie-story">
              Whether she's hiking through misty mountains at dawn, diving into
              crystal-clear lakes at sunset, or wandering through bustling city
              streets discovering hidden gems, Wishie 1 approaches every moment
              with wide-eyed wonder. Her energy is absolutely infectious – one
              smile from her can turn the most ordinary outing into an
              unforgettable adventure! She's the friend who convinces you to try
              that scary rollercoaster, explore that mysterious cave, or dance
              in the rain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="characteristics-section"
          >
            <h3 className="characteristics-title">
              🗺️ Her Adventurous Traits:
            </h3>
            <ul className="characteristics-list">
              <li>
                <span className="emoji">🦁</span>{" "}
                <strong>Brave & Courageous:</strong> Faces challenges with a
                smile and open arms
              </li>
              <li>
                <span className="emoji">🔍</span>{" "}
                <strong>Incredibly Curious:</strong> Always asking "what's
                around the next corner?"
              </li>
              <li>
                <span className="emoji">🌲</span> <strong>Nature Lover:</strong>{" "}
                Finds magic in every leaf, wave, and mountain peak
              </li>
              <li>
                <span className="emoji">⚡</span> <strong>High Energy:</strong>{" "}
                Her enthusiasm could power a small city!
              </li>
              <li>
                <span className="emoji">😄</span>{" "}
                <strong>Optimistic & Fun:</strong> Sees the bright side in every
                situation
              </li>
              <li>
                <span className="emoji">🤝</span>{" "}
                <strong>Great Companion:</strong> Makes every journey more
                exciting with her presence
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.img
          src={shada1}
          alt="Wishie 1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="wishie-image"
        />
      </motion.div>
    </div>
  );
};

export default Wishie1;
