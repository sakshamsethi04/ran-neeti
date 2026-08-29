import { motion } from "framer-motion";
import {
  Mountain,
  Shield,
  Flame,
  ArrowUpRight
} from "lucide-react";

export default function About() {
  return (
    <main className="inner-page">

      <section className="page-hero about-hero">

        <p className="eyebrow">
          01 / THE STORY
        </p>

        <h1>
          MORE THAN
          <br />
          <em>A GAME.</em>
        </h1>

        <p className="page-lead">
          Ran Neeti is a collision of competition,
          community and the wild energy of the mountains.
        </p>

      </section>


      <section className="about-story section">

        <div className="story-large">
          THE
          <br />
          <em>RUSH.</em>
        </div>

        <div className="story-copy">

          <p className="big-copy">
            In the mountains, the air is thinner.
            The stakes feel higher.
            And every victory feels earned.
          </p>

          <p className="muted">
            Built for athletes, strategists, teammates
            and loud friends on the sidelines, Ran Neeti
            turns the IIT Mandi campus into a living arena.
          </p>

        </div>

      </section>


      <section className="values section">

        {[
          [
            Mountain,
            "THE TERRAIN",
            "Use the campus. Own the altitude. Make the mountains part of the story."
          ],

          [
            Flame,
            "THE FIRE",
            "Bring intensity without losing respect. Rivalry makes the moment."
          ],

          [
            Shield,
            "THE CODE",
            "Compete clean. Back your team. Leave the arena with pride."
          ]

        ].map(([Icon, title, text], i) => (

          <motion.div
            className="value"
            key={title}
            whileHover={{ y: -8 }}
          >

            <Icon size={32} />

            <span>
              0{i + 1}
            </span>

            <h3>
              {title}
            </h3>

            <p>
              {text}
            </p>

          </motion.div>

        ))}

      </section>


      <section className="about-cta">

        <p className="eyebrow">
          THE ONLY QUESTION
        </p>

        <h2>
          ARE YOU
          <br />
          <em>IN?</em>
        </h2>

        <a href="#register">
          STEP INTO THE ARENA
          <ArrowUpRight />
        </a>

      </section>

    </main>
  );
}