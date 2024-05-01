import React, { useState }  from "react";
import styles from "./Skills.module.css";
import {
  FaSquareJs,
  FaReact,
  FaSass,
  FaGitAlt,
  FaNode,
  FaCss3Alt,
} from "react-icons/fa6";
import { SiDotnet } from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";
import { GoWorkflow } from "react-icons/go";
import Tilt from "react-parallax-tilt";
import VisibilitySensor from "react-visibility-sensor";
import FadeInOut from "./FadeInOut";
function Skills() {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const extraStyles = {
    // position: "fixed",
    // top: "30px",
    // left: 0,
    // right: 0,
    // bottom: 0,
    // background: "rgba(0, 0, 0, 0.4)",
    // color: "#FFF"
  };
  return (
    <div className={styles.bg}>
       <div className="App">
      <button onClick={toggleShow}>{show ? "hide" : "show"}</button>
      <FadeInOut show={show} duration={500} style={extraStyles}>
        I'm in a fade in AND out transition and I am only mounted when visible
        and automatically unmounted when my fade out ends!
      </FadeInOut>
    </div>
      <div className={styles.skills_con}>
              <h3 className={styles.skills_title}>My Skill set</h3>
              <div className={styles.skills_card}>
                <div className={styles.skills_items}>
                  <Tilt
                    scale={1.1}
                    transitionSpeed={2500}
                    tiltReverse={true}
                  >
                    <FaCss3Alt />
                  </Tilt>
                  <p>HTML + CSS</p>
                </div>
                <div className={styles.skills_items}>
                  <Tilt
                    scale={1.1}
                    transitionSpeed={2500}
                    tiltReverse={true}
                  >
                    <SiDotnet />
                  </Tilt>
                  <p>C# .Net</p>
                </div>
                <div className={styles.skills_items}>
                  <Tilt
                    scale={1.1}
                    transitionSpeed={2500}
                    tiltReverse={true}
                  >
                    <FaReact />
                  </Tilt>
                  <p>React (TypeScript)</p>
                </div>
                <div className={styles.skills_items}>
                  <Tilt
                    scale={1.1}
                    transitionSpeed={2500}
                    tiltReverse={true}
                  >
                    <FaNode />
                  </Tilt>
                  <p>Node.js</p>
                </div>
                <div className={styles.skills_items}>
                  <Tilt
                    scale={1.1}
                    transitionSpeed={2500}
                    tiltReverse={true}
                  >
                    <TbSql />
                  </Tilt>
                  <p>
                    SQL
                    <br />
                    (SQL Server,MySQL,PostgeSQL)
                  </p>
                </div>
                <div className={styles.skills_items}>
                  <Tilt
                    scale={1.1}
                    transitionSpeed={2500}
                    tiltReverse={true}
                  >
                    <GoWorkflow />
                  </Tilt>
                  <p>
                    Design To Code and
                    <br />
                    Database Design
                  </p>
                </div>
              </div>
            </div>
      {/* <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div>
            {isVisible ? (
              
              // <FadeInTransition timeout={400} from={0} to={1} in={show}>                
              // </FadeInTransition>
            ) : null}
          </div>
        )}
      </VisibilitySensor> */}
    </div>
  );
}

export default Skills;
