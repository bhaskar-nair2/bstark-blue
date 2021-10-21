import './navigation.css'

function Navigation(props) {

  const links = [
    { text: 'about', link: '#about-section' },
    { text: 'websites', link: '#websites-section' },
    { text: 'articles', link: '#articles-section' },
  ]

  const linkList = links.map((link, index) =>
    <a
      key={index}
      onClick={() => props.setActiveSection(index)}
      className={`nav-link ${props.activeSection != index ? 'no-underline' : ''}`}
      href={link.link}>
      {link.text}
    </a>
  )

  return (
    <header className="header">
      <strong>
        <a id="site-name" to="/">bstark.tech</a>
      </strong>
      <nav className="nav">
        {linkList}
      </nav>
    </header>
  )
}

export default Navigation;
