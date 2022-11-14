import {GetStaticPropsResult, NextPage} from "next";
import styles from "../styles/Home.module.css";

type Props = {
  value: string;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      value: 'Awesome!',
    },
  }
}

const About: NextPage<Props> = function About({ value }) {
  return (
    <div className={styles.container}>
      <h1>About {value}</h1>
    </div>
  );
}

export default About;
