import {LinkedInIcon, GithubIcon, MediumIcon} from "../components/icons"
import Head from 'next/head'
import "../styles.scss"

export default function Layout({ children }) {
   return (
    <div className="layout">
      <Head>
        <title>Makena Kong</title>
        <link rel="icon" href="/purple_logo_small.png" />
      </Head>

      <main>
          {children}
      </main>

      <footer>
        <div className="icon-group">
          <LinkedInIcon />
          <GithubIcon />
          <MediumIcon />
        </div>
        <div className="logo">
          <img src="/purple_logo_small.png" alt="logo" />
        </div>
      </footer>
    </div>
   )
 }