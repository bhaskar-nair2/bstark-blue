import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faStackOverflow, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './socials.css'

library.add(faGithub, faStackOverflow, faTwitter, faInstagram);

function Socials(params) {
  const links = [
    { icon: 'github', link: '#' },
    { icon: 'stack-overflow', link: '#' },
    { icon: 'twitter', link: '#' },
    { icon: 'instagram', link: '#' },
  ]

  const icons = links.map((link, index) =>
    <li key={index}>
      <a href={link.link}>
        <FontAwesomeIcon icon={["fab", link.icon]} size="2x" />
      </a>
    </li>
  )
  return (
    <ul className="social-bar">
      {icons}
    </ul>
  )
}

export default Socials;
