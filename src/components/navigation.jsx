import './navigation.css'

function Navigation(props) {
  const links = [
    { text: 'about', link: '#about-section' },
    { text: 'projects', link: '#websites-section' },
    { text: 'treatises', link: '#articles-section' },
  ]

  const linkList = links.map((link, index) =>
    <a
      key={index}
      onClick={() => props.setActiveSection(index)}
      className={`nav-link no-underline ${props.activeSection != index ? 'no-underline' : ''}`}
      href={link.link}>
      {link.text}
    </a>
  )

  return (
    <header className="header">
      <strong>
        <a id="site-name" href="#about-section">bstark.tech</a>
      </strong>
      <nav className="nav">
        {linkList}
      </nav>
    </header>
  )
}

export default Navigation;
