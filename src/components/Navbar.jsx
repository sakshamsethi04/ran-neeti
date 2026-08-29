import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const links = [
  ["/events", "Events"],
  ["/arena", "The Arena"],
  ["/about", "About"]
];

export default function Navbar() {

  return (

    <header className="nav">

      <Link to="/" className="brand">

        <span className="brand-mark">
          RN
        </span>

        <span>
          RAN NEETI
        </span>

      </Link>


      <nav className="nav-links">

        {links.map(([to, label]) => (

          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            {label}
          </NavLink>

        ))}

      </nav>


      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="nav-cta"
        href="/register"
      >

        REGISTER

        <ArrowUpRight size={15} />

      </motion.a>

    </header>

  );
}