import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faStackOverflow, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './socials.css'

library.add(faGithub, faStackOverflow, faTwitter, faInstagram, faLinkedin);

const links = [
  { icon: 'stack-overflow', link: 'https://stackoverflow.com/users/4347232/bhaskar' },
  { icon: 'github', link: 'https://github.com/bhaskar-nair2/' },
  { icon: 'twitter', link: 'https://twitter.com/bas_kar_na_yar' },
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/bhaskar-nair2/' },
  { icon: 'instagram', link: 'https://www.instagram.com/bas_kar_na_yar/' },
]

const icons = links.map((link, index) =>
  <li key={index}>
    <a target="_blank" href={link.link}>
      <span className="hidden">{link.icon}</span>
      <FontAwesomeIcon icon={["fab", link.icon]} size="lg" />
    </a>
  </li>
)

export function SocialsBar(props) {
  // is last section (footer)
  const hideBar = props.activeSection == props.totalSections - 1

  return (
    <ul className={`social-bar ${hideBar ? 'opacity-0' : ''}`}>
      {icons}
    </ul>
  )
}
export function SocialsPanel() {
  return (
    <ul className="social-panel">
      {icons}
    </ul>
  )
}

