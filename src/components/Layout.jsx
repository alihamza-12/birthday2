import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(255, 105, 180, 0.3)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="layout-container">
      <motion.nav
        className="nav-menu"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate("/main")}
          className={isActive("/main") ? "active" : ""}
        >
          🏠 Home
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate("/character")}
          className={isActive("/character") ? "active" : ""}
        >
          ✨ Character
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate("/wishie1")}
          className={isActive("/wishie1") ? "active" : ""}
        >
          🌟 Wishie 1
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate("/wishie2")}
          className={isActive("/wishie2") ? "active" : ""}
        >
          🎨 Wishie 2
        </motion.button>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="page-content"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Layout;
