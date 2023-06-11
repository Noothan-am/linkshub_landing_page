import React from "react";
import styles from "../Components Css/Home.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <span className={styles.links}>Links</span>
            <span className={styles.hub}>Hub</span>
          </div>
          <ul className={styles.navmenus}>
            <li>
              <a className={styles.active} href="#">
                HOME
              </a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">CONTACTS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.heroSection}>
          <img className={styles.illustration} alt="" src="/group.svg" />
          <div className={styles.textArea}>
            <div className={styles.linkshub}>
              <span className={styles.links}>Links</span>
              <span className={styles.hub}>Hub</span>
            </div>
            <div className={styles.description}>
              <p>A collection of inspiration,</p>
              <p>tools and resources for a</p>
              <p className={styles.stunningWebsite}>stunning website</p>
              <button className={styles.button}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
