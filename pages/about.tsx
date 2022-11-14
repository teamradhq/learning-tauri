import {NextPage} from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const About: NextPage = function About() {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p>
        <Link href={"/"}>About</Link>
      </p>
    </div>
  );
}

export default About;
