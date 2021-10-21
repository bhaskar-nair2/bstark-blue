import React from 'react'
import DocumentMeta from 'react-document-meta';

import Navigation from './components/navigation.jsx'
import { SocialsBar } from './components/socials.jsx'
import About from './components/about.jsx'
import Websites from './components/websites.jsx'
import Articles from './components/articles.jsx'
import Footer from './components/footer.jsx'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0
    };


    // window.addEventListener("touchstart", this.touchStart, { passive: false }); // mobile devices
    // window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
  }

  componentDidMount() {
    // Full-page scroll code
    this.calculateSectionOffsets()

    window.addEventListener("DOMMouseScroll", this.handleMouseWheel); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false
    }); // Other browsers

    window.addEventListener("mousedown", this.clicked, { passive: false }); // mobile devices
    window.addEventListener("touchstart", this.touchStart, { passive: false }); // mobile devices
    window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices

    window.scrollBy(0, 1);
  }

  calculateSectionOffsets = async () => {
    let sections = await document.getElementsByTagName("section");
    let length = sections.length;

    for (let i = 0; i < length; i++) {
      let sectionOffset = sections[i].offsetTop;
      this.state.offsets.push(sectionOffset);
    }
  }

  handleMouseWheel = (e) => {
    const wheelLoc = e.wheelDelta || e.detail
    if (wheelLoc < 30 && !this.state.inMove) {
      this.moveUp();
    } else if (wheelLoc > 30 && !this.state.inMove) {
      this.moveDown();
    }
    e.preventDefault();
    return false;
  }

  touchStart = (e) => {
    // Prevent buttons from ignoring when clicked 
    const ignoreHIt = ['A', 'BUTTON']
    const hitElement = e.path.map(e => e.nodeName)
    const ignore = ignoreHIt.some(r => hitElement?.includes(r))
    if (!ignore)
      e.preventDefault();

    this.setState({
      touchStartY: e.touches[0].clientY
    })
  }

  touchMove = (e) => {
    if (this.state.inMove) return false;
    e.preventDefault();

    const currentY = e.touches[0].clientY;

    if (this.state.touchStartY < currentY) {
      this.moveDown();
    } else {
      this.moveUp();
    }
    this.setState({
      touchStartY: 0
    })
    return false;
  }

  clicked = (e) => {
    console.log(e);
  }

  moveDown = () => {
    this.setState({ inMove: true })
    this.state.activeSection--;
    if (this.state.activeSection < 0)
      this.setState((state, props) => ({
        activeSection: state.offsets.length - 1
      }));
    this.scrollToSection(this.state.activeSection, true);
  }

  moveUp = () => {
    const section = this.state.activeSection
    this.setState({ inMove: true, activeSection: section + 1 })

    if (this.state.activeSection > this.state.offsets.length - 1)
      this.setState({ activeSection: 0 });

    this.scrollToSection(this.state.activeSection, true);
  }

  scrollToSection = (id, force = false) => {
    if (this.state.inMove && !force) return false;
    this.setState({ activeSection: id, inMove: true })

    const currSection = document.getElementsByTagName("section")[id]
    currSection.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      this.setState({ inMove: false })
    }, 400);
  }

  setActiveSection = (index) => {
    const validIndex = index < this.state.offsets.length ? index : 0;
    this.setState({ activeSection: validIndex })
  }

  render() {
    const meta = {
      title: 'BStark Blue',
      description: 'Bhaskar Nair\'s personal website',
      canonical: 'http://bstark.tech',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'bhaskar,nair,developer,india,front end'
        }
      }
    };

    return (
      <div className="App" >
        <DocumentMeta {...meta} />
        <Navigation
          activeSection={this.state.activeSection}
          setActiveSection={this.setActiveSection}
        />
        <SocialsBar
          totalSections={this.state.offsets.length}
          activeSection={this.state.activeSection}
        />
        <About></About>
        <Websites></Websites>
        <Articles></Articles>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
