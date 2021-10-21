import './navigation.css'

function Navigation() {
  return (
    <header className="header">
      <strong>
        <a id="site-name" to="/">bstark.tech</a>
      </strong>
      <nav className="nav">
        <a className="nav-link" href="#about-section">about</a>
        <a className="nav-link" href="#links-section">links</a>
        <a className="nav-link" href="#contact-section">contact</a>
      </nav>
    </header>
  )
}

export default Navigation;
