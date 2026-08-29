import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  Trophy,
  Zap
} from "lucide-react";

import { Link } from "react-router-dom";

import SportCard from "../components/SportCard";
import SectionTitle from "../components/SectionTitle";


const sports = [

  {
    name: "Basketball",
    type: "COURT / 5V5",
    icon: "🏀"
  },

  {
    name: "Football",
    type: "PITCH / 11V11",
    icon: "⚽"
  },

  {
    name: "Volleyball",
    type: "COURT / 6V6",
    icon: "🏐"
  },

  {
    name: "Badminton",
    type: "COURT / SINGLES",
    icon: "🏸"
  },

  {
    name: "Athletics",
    type: "TRACK / FIELD",
    icon: "🏃"
  },

  {
    name: "Table Tennis",
    type: "TABLE / SINGLES",
    icon: "🏓"
  }

];


export default function Home() {

  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 700],
    [0, 160]
  );

  const scale = useTransform(
    scrollY,
    [0, 700],
    [1, 1.12]
  );


  return (

    <main>

      {/* HERO */}

      <section className="hero">

        <div className="hero-noise" />

        <motion.div
          className="hero-orb orb-one"
          style={{ y }}
        />

        <motion.div
          className="hero-image"
          style={{ scale }}
        />

        <div className="hero-grid" />


        <div className="hero-copy">

          <motion.div
            className="hero-kicker"

            initial={{
              opacity: 0,
              x: -30
            }}

            animate={{
              opacity: 1,
              x: 0
            }}

            transition={{
              delay: 0.25
            }}
          >

            IIT MANDI

            <span>×</span>

            SPORTS FEST 2026

          </motion.div>


          <motion.h1

            initial={{
              opacity: 0,
              y: 80
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.9,
              delay: 0.15
            }}

          >

            RAN
            <br />

            <em>
              NEETI
            </em>

          </motion.h1>


          <motion.div
            className="hero-meta"

            initial={{
              opacity: 0,
              y: 25
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              delay: 0.6
            }}
          >

            <p>

              THE MOUNTAINS
              <br />

              HAVE A NEW
              <br />

              BATTLEFIELD.

            </p>


            <Link
              to="/events"
              className="round-button"
            >

              EXPLORE

              <ArrowUpRight size={18} />

            </Link>

          </motion.div>

        </div>


        <div className="hero-side">

          EST. 2026

          <span>◆</span>

          MANDI, HIMACHAL

        </div>


        <motion.div
          className="scroll-cue"

          animate={{
            y: [0, 8, 0]
          }}

          transition={{
            repeat: Infinity,
            duration: 1.6
          }}
        >

          <ArrowDown size={16} />

          SCROLL TO ENTER

        </motion.div>


        <div className="hero-stamp">

          <Trophy size={18} />

          <span>

            ONE CAMPUS
            <br />

            ONE CHAMPION

          </span>

        </div>

      </section>


      {/* MOVING TICKER */}

      <div className="ticker">

        <div className="ticker-track">

          {[1, 2, 3, 4].map(i => (

            <span key={i}>

              COMPETE

              <b>◆</b>

              CONQUER

              <b>◆</b>

              CREATE LEGACY

              <b>◆</b>

            </span>

          ))}

        </div>

      </div>


      {/* INTRO */}

      <section className="intro section">

        <SectionTitle
          number="01"
          eyebrow="THE CALLING"
          title={'WHERE <em>SPORT</em><br/>MEETS <span>SPIRIT.</span>'}
        />


        <div className="intro-copy">

          <p className="big-copy">

            A week where rivalries
            become stories,
            strangers become
            teammates, and every
            point matters.

          </p>


          <p className="muted">

            Ran Neeti is IIT Mandi's arena
            for speed, strategy and pure
            competitive energy.

          </p>


          <Link
            className="text-link"
            to="/about"
          >

            DISCOVER THE FEST

            <ArrowUpRight size={17} />

          </Link>

        </div>

      </section>


      {/* EVENTS */}

      <section
        className="events-preview section"
        id="events"
      >

        <SectionTitle
          number="02"
          eyebrow="THE BATTLEGROUNDS"
          title={'PICK YOUR<br/><em>WEAPON.</em>'}
        />


        <div className="sports-grid">

          {sports.map((sport, i) => (

            <SportCard
              key={sport.name}
              sport={sport}
              index={i}
            />

          ))}

        </div>


        <Link
          className="wide-link"
          to="/events"
        >

          VIEW ALL EVENTS

          <ArrowUpRight />

        </Link>

      </section>


      {/* BIG MANIFESTO */}

      <section className="manifesto">

        <div className="manifesto-bg">
          RAN
        </div>


        <div className="manifesto-content">

          <Zap size={32} />

          <h2>

            NO
            <br />

            <em>EXCUSES.</em>

            <br />

            JUST

            <span>
              GAME.
            </span>

          </h2>


          <p>

            Bring your squad.
            Bring your fire.
            Leave everything on the field.

          </p>

        </div>

      </section>


      {/* REGISTER */}

      <section
        className="register section"
        id="register"
      >

        <div className="register-box">

          <p className="eyebrow">
            03 / YOUR MOVE
          </p>


          <h2>

            READY
            <br />

            <em>PLAYER?</em>

          </h2>


          <motion.button
            whileHover={{
              scale: 1.03
            }}

            className="giant-button"
          >

            REGISTER NOW

            <ArrowUpRight />

          </motion.button>

        </div>

      </section>


      <footer className="footer">

        <div>

          <strong>
            RAN NEETI
          </strong>

          <br />

          IIT MANDI SPORTS FEST

        </div>


        <div className="footer-big">

          SEE
          <br />

          <em>YOU.</em>

        </div>


        <div>

          MANDI,
          HIMACHAL PRADESH

          <br />

          © 2026

        </div>

      </footer>

    </main>

  );

}