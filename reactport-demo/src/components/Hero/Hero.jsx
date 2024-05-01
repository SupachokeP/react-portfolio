import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaFacebookF,FaInstagram  } from "react-icons/fa6";

import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text_1}>Hi My name is</p>
                <h3 className={styles.text_2}>
                <TypeAnimation
                    sequence={[
                      'Supachoke Boonsirivit',
                      1000,
                      'ศุภโชค บุญศิริวิทย์',
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  /></h3>
                <p className={styles.text_3}>
                  Full Stack Developer
                </p>
                <p className={styles.text_4}>Born in 1999 Based in Bangkok,Thailand. <br /> For any Social media contact Click the icon below!</p>
                {/* <p className={styles.text_4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat commodi <br /> quas cupiditate minus dolore nulla eos accusantium labore explicabo.</p>
                <p className={styles.text_4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat commodi <br /> quas cupiditate minus dolore nulla eos accusantium labore explicabo.</p>
                <p className={styles.text_4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat commodi <br /> quas cupiditate minus dolore nulla eos accusantium labore explicabo.</p> */}
                <ul className={styles.hero_social}>
                    <li><a href="https://www.linkedin.com/in/supachoke-boonsirivit-78328a252/"target="_blank"><FaLinkedinIn /></a></li>
                    <li><a href="https://github.com/supachokeP"target="_blank"><FaGithub /></a></li>
                    <li><a href="https://www.facebook.com/Time.Supachoke/"target="_blank"><FaFacebookF /></a></li>
                    <li><a href="https://www.instagram.com/timeeeeeeer/"target="_blank"><FaInstagram /></a></li>
                </ul>
            </div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className={styles.hero_img}></div>
            </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
