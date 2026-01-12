import { motion } from "framer-motion";
import shada1 from "../assets/img/shada1.jpg";
import shada2 from "../assets/img/shada2.jpg";
import shada3 from "../assets/img/shada3.jpg";
import shada4 from "../assets/img/shada4.jpg";

const MainView = () => {
  const flowerImages = [shada1, shada2, shada3, shada4];

  return (
    <div className="main-view">
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
      <div className="flowers">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.img
            key={i}
            src={flowerImages[i % flowerImages.length]}
            alt="Flower"
            initial={{ y: "100vh", opacity: 0, scale: 0.5 }}
            animate={{
              y: "-100vh",
              opacity: 1,
              scale: [0.5, 1, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              width: "100px",
              height: "100px",
              position: "absolute",
              bottom: "-100px",
            }}
          />
        ))}
      </div>
      <div className="particles">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              animationDelay: `${i * 0.2}s`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
      <div className="main-content">
        {/* text section */}
        <div className="content">
          <div className="birthday-card">
            <div className="card-header">
              <h1 className="birthday-title">Happiest Birthday, Honey</h1>
              <div className="sparkles">
                <span>✨</span>
                <span>💖</span>
                <span>✨</span>
              </div>
            </div>
            <div>
              <div className="card-body">
                <div className="text-content">
                  <p className="birthday-message">
                    To my dearest best ever Friend, on your special day,
                    <br />
                    I want to say how much you mean to me.
                    <br />
                    Your smile lights up my world,
                    <br />
                    Your love makes my heart complete.
                    <br />
                    May this birthday bring you all the joy you deserve,
                    <br />
                    And may our love story continue to unfold beautifully.
                  </p>
                  <div className="love-note">
                    <p>
                      Forever yours,
                      <br />
                      Your Loving Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image section */}
        <div className="image-section">
          <img src={shada4} alt="Birthday Image" className="birthday-image" />
        </div>
      </div>
    </div>
  );
};

export default MainView;
