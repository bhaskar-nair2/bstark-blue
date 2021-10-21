import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faStackOverflow, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './socials.css'

library.add(faGithub, faStackOverflow, faTwitter, faInstagram);

function Socials(params) {
  const links = [
    { icon: 'github', link: 'https://github.com/bhaskar-nair2/' },
    { icon: 'stack-overflow', link: 'https://stackoverflow.com/users/4347232/bhaskar' },
    { icon: 'twitter', link: 'https://twitter.com/bas_kar_na_yar' },
    { icon: 'instagram', link: 'https://www.instagram.com/bas_kar_na_yar/' },
  ]

  const icons = links.map((link, index) =>
    <li key={index}>
      <a target="_blank" href={link.link}>
        <FontAwesomeIcon icon={["fab", link.icon]} size="lg" />
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
