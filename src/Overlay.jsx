import React from "react";
import { GithubLogo } from "@phosphor-icons/react";

function Overlay() {
  return (
    <>
      <div className="container">
        <h1>LENS FLARE</h1>
      </div>
      <div className="info-container">
        <div className="info">
          <p className="info-text">
            This demo serves the purpose to illustrate Anderson Mancini's
            <span />
            <a
              href="https://github.com/ektogamat/R3F-Ultimate-Lens-Flare"
              target="_blank"
              rel="noreferrer"
            >
              Lens Flare <br />
            </a>
            post processing effect.
          </p>
        </div>
        <div className="code-info">
          <a
            href="https://github.com/georgianamarcu/lensflare-scene"
            target="_blank"
            rel="noreferrer"
          >
            <div className="code-icon">
              <GithubLogo size={25} color="#4c4f49" weight="light" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Overlay;
