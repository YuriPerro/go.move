import { GetServerSideProps } from 'next'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'
import { DarkModeButton } from "../components/DarkModeButton";
import { SideBarProvider } from "../contexts/SideBarContext";
import { SideBar } from "../components/SideBar";
import { DarkModeProvider } from "../contexts/DarkModeContext";
import { POINT_CONVERSION_COMPRESSED } from 'constants';

interface rankingDataProps {
  theme: string,
  route: string
}

export default function ranking(props: rankingDataProps) {
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



            </div>
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