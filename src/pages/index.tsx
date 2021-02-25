import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { DarkModeButton } from "../components/DarkModeButton";

export default function Home() {
  return (
    <>
      <DarkModeButton />
      <div className={styles.container}>
        <Head>
          <title> Início • go.move</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
          <footer>
            Developed with 🧡 by Yuri Baumgartner
        </footer>
        </CountdownProvider>
      </div>
    </>
  )
}