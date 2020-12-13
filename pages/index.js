import Layout from '../components/layout'
import "../styles.scss"

export default function Home() {

  const newTab = "_blank"
  const devLink = "https://kenakingkong.github.io/"
  const artLink = "http://art-by-makena-kong.s3-website.us-east-2.amazonaws.com/"
  return (
    <Layout>
      <div className="intro">
        Hey there! I’m 
        <span className="intro-name">Makena Kong</span> 
        <span className="intro-pronouns">(she/her)</span>, 
        a developer and artist based in San Francisco. 

        You could say that I’m a 
        <a className="intro-link" href={devLink} target={newTab}>
          full stack engineer
        </a>
        or a web and graphic designer. 

        Or, you could say that I’m a 
        <a className="intro-link" href={artLink} target={newTab}>
          painter
        </a>. 

        Ultimately, I don’t care what you say I am. 

        I’ll take you here if you want to know 
        <span className="intro-link">everything</span>.

      </div>
    </Layout>
  )
}
