import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const sports = [
  {
    name: "Basketball",
    type: "COURT / 5V5",
    icon: "🏀",
    category: "TEAM"
  },
  {
    name: "Football",
    type: "PITCH / 11V11",
    icon: "⚽",
    category: "TEAM"
  },
  {
    name: "Volleyball",
    type: "COURT / 6V6",
    icon: "🏐",
    category: "TEAM"
  },
  {
    name: "Cricket",
    type: "GROUND / 11V11",
    icon: "🏏",
    category: "TEAM"
  },
  {
    name: "Badminton",
    type: "COURT / SINGLES",
    icon: "🏸",
    category: "RACKET"
  },
  {
    name: "Table Tennis",
    type: "TABLE / SINGLES",
    icon: "🏓",
    category: "RACKET"
  },
  {
    name: "Athletics",
    type: "TRACK / FIELD",
    icon: "🏃",
    category: "TRACK"
  },
  {
    name: "Chess",
    type: "BOARD / 1V1",
    icon: "♟",
    category: "MIND"
  }
];

export default function Events() {

  const [filter, setFilter] = useState("ALL");

  const filtered =
    filter === "ALL"
      ? sports
      : sports.filter(
          (sport) => sport.category === filter
        );

  return (

    <main className="inner-page">

      {/* PAGE HERO */}

      <section className="page-hero">

        <div className="page-hero-number">
          02
        </div>

        <p className="eyebrow">
          THE BATTLEGROUNDS
        </p>

        <h1>
          CHOOSE
          <br />
          <em>YOUR GAME.</em>
        </h1>

        <p className="page-lead">
          Eight disciplines. One scoreboard.
          Zero room for hesitation.
        </p>

      </section>


      {/* EVENTS */}

      <section className="section event-list-section">

        <div className="filter-row">

          <div className="filters">

            {[
              "ALL",
              "TEAM",
              "RACKET",
              "TRACK",
              "MIND"
            ].map((filterName) => (

              <button
                key={filterName}
                className={
                  filter === filterName
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setFilter(filterName)
                }
              >
                {filterName}
              </button>

            ))}

          </div>


          <div className="event-count">

            <Search size={15} />

            {filtered.length} EVENTS

          </div>

        </div>


        <div className="events-list">

          {filtered.map((sport, i) => (

            <motion.div
              layout
              key={sport.name}
              className="event-row"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.35
              }}
            >

              <div className="event-background-number">
                {String(i + 1).padStart(2, "0")}
              </div>


              <span className="event-index">
                0{i + 1}
              </span>


              <span className="event-emoji">
                {sport.icon}
              </span>


              <div>

                <span className="mini">
                  {sport.category}
                </span>

                <h3>
                  {sport.name}
                </h3>

              </div>


              <span className="event-type">
                {sport.type}
              </span>


              <ArrowUpRight
                className="event-open"
              />

            </motion.div>

          ))}

        </div>

      </section>


      {/* BIG STATEMENT */}

      <section className="quote-band">

        <SectionTitle
          number="03"
          eyebrow="THE RULE"
          title={'PLAY <em>HARD.</em><br/>PLAY <span>FAIR.</span>'}
        />

      </section>

    </main>

  );
}