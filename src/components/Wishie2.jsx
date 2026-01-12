import { motion } from "framer-motion";
import shada2 from "../assets/img/shada2.jpg";

const Wishie2 = () => {
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
        className="wishie-content"
      >
        <h1 className="wishie-title">Wishie 2: The Creative Dreamer</h1>
        <div className="wishie-description">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="wishie-intro">
              🎨 <strong>Wishie 2: The Creative Dreamer</strong> is a visionary
              artist who paints the world with colors unseen by ordinary eyes!
              Born in a realm where imagination flows like a river, she
              possesses the rare gift of transforming dreams into tangible
              masterpieces. Her creative spirit dances through dimensions,
              weaving magic with every brushstroke and melody.
            </p>
            <p className="wishie-story">
              From the moment she awakens, Wishie 2 sees the world as a blank
              canvas waiting to be filled with wonder. Whether she's composing
              symphonies that make stars sing, painting landscapes that come
              alive, or crafting stories that bend the fabric of reality, her
              creativity knows no bounds. She's the one who teaches you to see
              rainbows in raindrops, music in silence, and art in the everyday.
              Her infectious passion turns ordinary moments into extraordinary
              adventures of the soul!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="characteristics-section"
          >
            <h3 className="characteristics-title">🎭 Her Creative Powers:</h3>
            <ul className="characteristics-list">
              <li>
                <span className="emoji">🎨</span>{" "}
                <strong>Master Artist:</strong> Paints worlds with colors from
                her imagination
              </li>
              <li>
                <span className="emoji">🎵</span> <strong>Musical Soul:</strong>{" "}
                Composes melodies that touch the heart
              </li>
              <li>
                <span className="emoji">📖</span> <strong>Story Weaver:</strong>{" "}
                Crafts tales that transport you to other worlds
              </li>
              <li>
                <span className="emoji">🌈</span>{" "}
                <strong>Visionary Spirit:</strong> Sees beauty in everything
                around her
              </li>
              <li>
                <span className="emoji">✨</span>{" "}
                <strong>Inspiration Source:</strong> Ignites creativity in
                everyone she meets
              </li>
              <li>
                <span className="emoji">💫</span>{" "}
                <strong>Dream Architect:</strong> Builds castles in the clouds
                that become reality
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.img
          src={shada2}
          alt="Wishie 2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="wishie-image"
        />
      </motion.div>
    </div>
  );
};

export default Wishie2;
