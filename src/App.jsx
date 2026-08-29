import { useState } from "react";

export default function App() {
  const [sport, setSport] = useState("BASKETBALL");

  const sports = [
    ["01", "BASKETBALL", "闘"],
    ["02", "FOOTBALL", "武"],
    ["03", "CRICKET", "勝"],
    ["04", "VOLLEYBALL", "魂"],
    ["05", "BADMINTON", "刃"],
  ];

  return (
    <div className="rn">

      {/* LOADING SCREEN */}

      <div className="loading-screen">
        <div className="loading-kanji">侍</div>
        <div className="loading-line"></div>
        <p>RAN NEETI / IIT MANDI</p>
      </div>


      {/* NAV */}

      <header className="nav">

        <div className="logo">
          <span>侍</span>
          <div>
            RAN
            <b>NEETI</b>
          </div>
        </div>

        <div className="nav-right">
          <a href="#battle">BATTLEFIELDS</a>
          <a href="#code">THE CODE</a>
          <a href="#arena">ARENA</a>

          <a className="register" href="#register">
            REGISTER ↗
          </a>
        </div>

      </header>


      {/* HERO */}

      <section className="hero">

        <div className="red-sun"></div>

        {/* SAMURAI */}

        <div className="warrior">

          <div className="warrior-hair"></div>

          <div className="warrior-head">
            <div className="mask-eye left"></div>
            <div className="mask-eye right"></div>
          </div>

          <div className="helmet">
            <span></span>
          </div>

          <div className="warrior-body">

            <div className="armor-piece one"></div>
            <div className="armor-piece two"></div>
            <div className="armor-piece three"></div>

          </div>

          <div className="warrior-cloak"></div>

          <div className="katana"></div>

        </div>


        <div className="hero-kanji">
          戦
        </div>


        <div className="hero-copy">

          <div className="tiny-title">
            IIT MANDI PRESENTS
            <span>SPORTS FESTIVAL / 2026</span>
          </div>

          <h1>
            <span>RAN</span>
            <span><i>NEE</i>TI</span>
          </h1>

          <div className="hero-bottom">

            <p>
              THE WARRIOR'S ARENA
              <br />
              DISCIPLINE · COURAGE · VICTORY
            </p>

            <a href="#battle">
              ENTER THE ARENA
              <b>↗</b>
            </a>

          </div>

        </div>


        <div className="hero-side">

          <span>戦</span>

          <div></div>

          <p>
            THE BATTLE
            <br />
            BEGINS HERE
          </p>

        </div>


        <div className="hero-footer">
          <span>SCROLL TO ENTER</span>
          <span>↓</span>
          <span>01 / 05</span>
        </div>

      </section>


      {/* BATTLEFIELDS */}

      <section id="battle" className="battle">

        <div className="battle-title">

          <p>01 / BATTLEFIELDS</p>

          <h2>
            CHOOSE
            <br />
            YOUR
            <br />
            <em>BATTLE.</em>
          </h2>

          <small>
            DIFFERENT WEAPON.
            <br />
            SAME SPIRIT.
          </small>

        </div>


        <div className="battle-content">

          <div className="sport-card">

            <div className="card-kanji">
              {
                sports.find(x => x[1] === sport)?.[2]
              }
            </div>

            <div className="card-number">
              {
                sports.find(x => x[1] === sport)?.[0]
              }
            </div>

            <h3>{sport}</h3>

            <p>
              SPEED / PRECISION / DISCIPLINE
            </p>

          </div>


          <div className="sport-menu">

            {sports.map((item) => (

              <button
                key={item[1]}
                className={
                  sport === item[1] ? "selected" : ""
                }
                onMouseEnter={() => setSport(item[1])}
              >

                <span>{item[0]}</span>

                <strong>{item[1]}</strong>

                <i>↗</i>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* WARRIOR CODE */}

      <section id="code" className="code">

        <div className="huge-kanji">
          武
        </div>

        <p>02 / THE WARRIOR'S CODE</p>

        <h2>
          DISCIPLINE
          <br />
          <em>OVER</em>
          <br />
          FEAR.
        </h2>

        <div className="code-line"></div>

        <p className="code-text">
          A warrior doesn't wait for the perfect battle.
          <br />
          They step forward anyway.
        </p>

      </section>


      {/* ARENA */}

      <section id="arena" className="arena">

        <div className="arena-heading">
          ● LIVE ARENA
        </div>

        <div className="score">

          <div>
            <small>WARRIOR I</small>
            <strong>00</strong>
          </div>

          <span>VS</span>

          <div>
            <small>WARRIOR II</small>
            <strong>00</strong>
          </div>

        </div>

        <div className="match">

          <span>NEXT BATTLE</span>

          <strong>BASKETBALL</strong>

          <span>COURT A / 18:30</span>

        </div>

      </section>


      {/* FINAL */}

      <section id="register" className="final">

        <div className="final-kanji">
          勝
        </div>

        <p>05 / FINAL CALL</p>

        <h2>
          ENTER
          <br />
          THE
          <br />
          <em>ARENA.</em>
        </h2>

        <button>
          BECOME A WARRIOR ↗
        </button>

      </section>

    </div>
  );
}