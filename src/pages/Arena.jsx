import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Timer,
  Users,
  Trophy
} from "lucide-react";

const matches = [
  ["BASKETBALL", "COURT A", "18:00", "TBD", "TBD"],
  ["FOOTBALL", "MAIN GROUND", "19:30", "TBD", "TBD"],
  ["VOLLEYBALL", "COURT B", "20:00", "TBD", "TBD"]
];

export default function Arena() {
  return (
    <main className="inner-page">

      {/* HERO */}

      <section className="page-hero arena-hero">

        <p className="eyebrow">
          LIVE / THE ARENA
        </p>

        <h1>
          GAME
          <br />
          <em>DAY.</em>
        </h1>

        <p className="page-lead">
          The place where every second gets louder.
        </p>

        <div className="live-pill">
          <span />
          LIVE SOON
        </div>

      </section>


      {/* SCOREBOARD */}

      <section className="scoreboard section">

        <div className="score-top">

          <span>
            <Trophy size={16} />
            CHAMPIONSHIP PULSE
          </span>

          <span>
            RAN NEETI 2026
          </span>

        </div>


        <div className="big-score">

          <div>
            <small>
              YOUR SQUAD
            </small>

            <strong>
              00
            </strong>
          </div>


          <div className="versus">
            VS
          </div>


          <div>
            <small>
              OPPONENT
            </small>

            <strong>
              00
            </strong>
          </div>

        </div>


        <div className="score-foot">
          THE SCOREBOARD IS WAITING FOR YOU.
        </div>

      </section>


      {/* MATCHES */}

      <section className="section schedule">

        <div className="schedule-head">

          <div>

            <p className="eyebrow">
              THE NEXT PLAYS
            </p>

            <h2>
              UPCOMING
              <br />
              <em>MATCHES.</em>
            </h2>

          </div>


          <p className="muted">
            Times are placeholders for the showcase.
            Replace them with the official fixture list.
          </p>

        </div>


        {matches.map((match, i) => (

          <motion.div
            whileHover={{ x: 8 }}
            className="match"
            key={i}
          >

            <span className="match-time">

              <Timer size={15} />

              {match[2]}

            </span>


            <div>

              <span className="mini">
                {match[0]}
              </span>

              <h3>
                {match[1]}
              </h3>

            </div>


            <span className="team">
              {match[3]}
            </span>


            <b>
              —
            </b>


            <span className="team">
              {match[4]}
            </span>


            <ArrowUpRight />

          </motion.div>

        ))}

      </section>


      {/* LOCATION */}

      <section className="location-panel">

        <MapPin size={30} />

        <div>

          <p className="eyebrow">
            FIND THE ARENA
          </p>

          <h2>
            IIT MANDI CAMPUS
          </h2>

          <p>
            North Campus · Mandi,
            Himachal Pradesh
          </p>

        </div>

        <Users size={28} />

      </section>

    </main>
  );
}