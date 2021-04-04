import { GetServerSideProps } from 'next'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'
import { DarkModeButton } from "../components/DarkModeButton";
import { SideBarProvider } from "../contexts/SideBarContext";
import { SideBar } from "../components/SideBar";
import { DarkModeProvider } from "../contexts/DarkModeContext";
import LeaderboardComponent from '../components/LeaderboardComponent';

interface leaderboardDataProps {
  theme: string,
  route: string
}

export default function Leaderboard(props: leaderboardDataProps) {
  return (
    <>
      <DarkModeProvider
        theme={props.theme}
      >
        <DarkModeButton />

        <SideBarProvider
          route={props.route}
        >
          <SideBar />
          <div className={styles.container}>
            <Head>
              <title> Início • go.move</title>
            </Head>

            <LeaderboardComponent />

          </div>
          <footer>
            Developed with 💜 by Yuri Baumgartner
          </footer>
        </SideBarProvider>
      </DarkModeProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { theme, route } = ctx.req.cookies;

  return {
    props: {
      theme: String(theme),
      route: String(route)
    }
  }
}