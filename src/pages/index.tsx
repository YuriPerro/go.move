import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { GetServerSideProps } from 'next'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { DarkModeButton } from "../components/DarkModeButton";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { SideBarProvider } from "../contexts/SideBarContext";
import { SideBar } from "../components/SideBar";
import { DarkModeProvider } from "../contexts/DarkModeContext";

interface HomeDataProps {
  level: number
  currentXp: number
  challengesCompleted: number
  theme: string
}

export default function Home(props: HomeDataProps) {
  return (
    <>
      <DarkModeProvider
        theme={props.theme}
      >
        <DarkModeButton />
        <ChallengesProvider
          level={props.level}
          currentXp={props.currentXp}
          challengesCompleted={props.challengesCompleted
          }>
          <SideBarProvider>
            <SideBar />
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
          </SideBarProvider>
        </ChallengesProvider>
      </DarkModeProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentXp, challengesCompleted, theme } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXp: Number(currentXp),
      challengesCompleted: Number(challengesCompleted),
      theme: String(theme)
    }
  }
}
