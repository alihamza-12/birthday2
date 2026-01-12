import { motion } from "framer-motion";
import shada1 from "../assets/img/shada1.jpg";
import shada3 from "../assets/img/shada3.jpg";
import shada4 from "../assets/img/shada4.jpg";

const Character = () => {
  const characterImages = [shada1, shada3, shada4];

  return (
    <div className="character-view">
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="character-content character-enhanced"
      >
        <h1 className="character-title">
          Meet My Character: The Enchanting Shada
        </h1>
        <div className="character-description">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="character-intro">
              ✨ <strong>Shada: The Enchanting Mystic</strong> is a celestial
              being who dances between worlds, bringing magic and wonder
              wherever she goes! Born from stardust and dreams, she possesses an
              otherworldly grace that makes the impossible seem ordinary and the
              ordinary feel magical. Her presence is like a gentle breeze
              carrying the scent of distant galaxies and forgotten fairy tales.
            </p>
            <p className="character-story">
              Shada's journey began in the crystal caves of imagination, where
              she learned to weave spells of joy and wonder. She's the guardian
              of lost dreams and the keeper of secret smiles. Whether she's
              exploring ancient ruins filled with glowing crystals, painting the
              night sky with shooting stars, or sharing stories that bend time
              itself, Shada approaches life with childlike wonder and ancient
              wisdom. Her laughter echoes like wind chimes in a summer breeze,
              and her eyes hold the depth of infinite universes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="characteristics-section"
          >
            <h3 className="characteristics-title">🌟 Her Mystical Powers:</h3>
            <ul className="characteristics-list">
              <li>
                <span className="emoji">🔮</span>{" "}
                <strong>Mystical Aura:</strong> Surrounds herself with an
                enchanting, magical presence
              </li>
              <li>
                <span className="emoji">🗺️</span>{" "}
                <strong>Adventurous Spirit:</strong> Explores both physical and
                spiritual realms
              </li>
              <li>
                <span className="emoji">🎨</span>{" "}
                <strong>Creative Vision:</strong> Sees beauty and possibility in
                everything
              </li>
              <li>
                <span className="emoji">💝</span>{" "}
                <strong>Loyal Guardian:</strong> Protects and cherishes her
                loved ones fiercely
              </li>
              <li>
                <span className="emoji">🌙</span>{" "}
                <strong>Wisdom Keeper:</strong> Holds ancient knowledge and
                modern insights
              </li>
              <li>
                <span className="emoji">✨</span> <strong>Joy Bringer:</strong>{" "}
                Turns ordinary moments into magical experiences
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="character-gallery">
          {characterImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Shada ${index + 1}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              className="character-image"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Character;
