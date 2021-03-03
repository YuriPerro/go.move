import { GetServerSideProps } from 'next'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'
import { DarkModeButton } from "../components/DarkModeButton";
import { SideBarProvider } from "../contexts/SideBarContext";
import { SideBar } from "../components/SideBar";
import { DarkModeProvider } from "../contexts/DarkModeContext";

export default function ranking(props) {
  return (
    <>
      <DarkModeProvider
        theme={props.theme}
      >
        <DarkModeButton />

          <SideBarProvider>
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
  const { theme } = ctx.req.cookies;

  return {
    props: {
      theme: String(theme)
    }
  }
}