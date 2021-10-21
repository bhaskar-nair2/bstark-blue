import React from 'react'
import Navigation from './components/navigation.jsx'
import Home from './components/home.jsx'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, offsets: [] };
    this.calculateSectionOffsets()
  }

  calculateSectionOffsets = async function () {
    let sections = await document.getElementsByTagName("section");
    let length = sections.length;

    for (let i = 0; i < length; i++) {
      let sectionOffset = sections[i].offsetTop;
      this.state.offsets.push(sectionOffset);
    }
    console.log(this.state.offsets);
  }

  render() {

    return (
      <div className="App" >
        <Navigation></Navigation>
        <Home></Home>
        <section className="main-section">Links</section>
        <section className="main-section">Contact</section>
        <section className="main-section">Footer</section>
      </div>
    )
  }
}

export default App
