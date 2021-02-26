import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { GetServerSideProps, GetStaticPathsResult } from 'next'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { DarkModeButton } from "../components/DarkModeButton";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentXp: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (
    <>
      <DarkModeButton />
      <ChallengesProvider
        level={props.level}
        currentXp={props.currentXp}
        challengesCompleted={props.challengesCompleted
        }>
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
      </ChallengesProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentXp, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXp: Number(currentXp),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
