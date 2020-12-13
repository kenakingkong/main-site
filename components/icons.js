import { 
   faLinkedin, faMedium, faGithubSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles.scss"

const newTab = "_blank";
const linkedInLink = "https://www.linkedin.com/in/makenakong"
const githubLink = "https://www.github.com/kenakingkong"
const mediumLink = "https://www.medium.com/@makenakong"

export const LinkedInIcon = () => (
   <a href={linkedInLink} target={newTab} className="icon-link">
      <FontAwesomeIcon icon={faLinkedin} className="icon-icon"/>
   </a>
)

export const MediumIcon = () => (
   <a href={mediumLink} target={newTab} className="icon-link">
      <FontAwesomeIcon icon={faMedium} className="icon-icon"/>
   </a>
)

export const GithubIcon = () => (
   <a href={githubLink} target={newTab} className="icon-link">
      <FontAwesomeIcon icon={faGithubSquare} className="icon-icon"/>
   </a>
)