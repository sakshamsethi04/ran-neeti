import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ChevronDown, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const sports = [
  "Basketball",
  "Football",
  "Cricket",
  "Volleyball",
  "Badminton",
  "Table Tennis",
  "Athletics",
  "Chess"
];

export default function Register() {
  const [sport, setSport] = useState("");
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    college: ""
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!sport) return;
    setDone(true);
  };

  return (
    <main className="warrior-register">

      <div className="warrior-lines" />
      <div className="warrior-mark">⚔</div>

      <header className="warrior-nav">
        <Link to="/" className="warrior-back">
          <ArrowLeft size={15} />
          BACK
        </Link>

        <span>RAN NEETI / 2026</span>
        <span>IIT MANDI</span>
      </header>

      <AnimatePresence mode="wait">

        {!done ? (
          <motion.section
            className="warrior-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <div className="warrior-copy">

              <span className="warrior-index">04</span>

              <p>THE WARRIOR'S CODE</p>

              <h1>
                JOIN
                <br />
                THE
                <br />
                <em>RANKS.</em>
              </h1>

              <div className="warrior-quote">
                <span>01</span>
                <div />
                <span>NO GLORY WITHOUT THE FIGHT.</span>
              </div>

            </div>


            <form
              className="warrior-form"
              onSubmit={submit}
            >

              <div className="form-title">
                <span>WARRIOR REGISTRATION</span>
                <span>01 — 04</span>
              </div>


              <label>
                <span>01 / NAME</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="ENTER YOUR NAME"
                  required
                />
              </label>


              <label>
                <span>02 / EMAIL</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="YOUR@EMAIL.COM"
                  required
                />
              </label>


              <label>
                <span>03 / INSTITUTION</span>
                <input
                  name="college"
                  value={form.college}
                  onChange={update}
                  placeholder="YOUR COLLEGE"
                  required
                />
              </label>


              <div className="warrior-select">

                <span>04 / CHOOSE YOUR BATTLEGROUND</span>

                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                >
                  {sport || "SELECT SPORT"}
                  <ChevronDown
                    className={open ? "chevron-up" : ""}
                  />
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      className="warrior-options"
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                    >
                      {sports.map((item, i) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => {
                            setSport(item);
                            setOpen(false);
                          }}
                        >
                          <small>0{i + 1}</small>
                          {item}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>


              <motion.button
                className="warrior-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: .97 }}
              >
                
                <span>ENTER THE ARENA</span>
                <ArrowUpRight />
              </motion.button>


              <div className="form-note">
                REGISTRATION OPEN / RAN NEETI '26
              </div>

            </form>

          </motion.section>

        ) : (

          <motion.section
            className="warrior-success"
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
          >

            <motion.div
              className="warrior-check"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 180 }}
            >
              <Check size={38} />
            </motion.div>

            <span>WARRIOR ACCEPTED</span>

            <h1>
              YOU'RE
              <br />
              <em>IN.</em>
            </h1>

            <p>
              {form.name.toUpperCase()} · {sport.toUpperCase()}
            </p>

            <Link to="/" className="warrior-return">
              RETURN TO ARENA
              <ArrowUpRight />
            </Link>

          </motion.section>

        )}

      </AnimatePresence>

      <div className="warrior-corner">RAN NEETI</div>
      <div className="warrior-location">31.70° N / 76.93° E</div>

    </main>
  );
}