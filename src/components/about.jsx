import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import './about.css'
import { useState } from "react";

library.add(faAnglesDown);


function Home() {
  let [showIcon, setIcon] = useState(false)

  const sendMail = () => {
    window.open("mailto:b.bhaskar.nair@gmail.com", '_blank', 'location=yes').focus()
  }

  setTimeout(() => {
    setIcon(true)
  }, 2000);

  return (
    <section id="about-section" className="main-section">
      <div className="mb-12">
        <h2 className="text-accent text-md lg:text-base">#about</h2>
      </div>
      <h1 className="text-xl xs:text-2xl lg:text-2xl mb-12">
        Hi, I am<br />
        <span className="text-primary">Bhaskar Nair</span>
      </h1>
      <p className="text-md lg:text-base lg:w-96 mb-12">
        I am a <span className="text-primary">Frontend Architect</span> with experience in ECommerce and
        Transport. I like working with early stage startups to bring their
        ideas to life.
      </p>
      <p className="text-md lg:text-base lg:w-96 mb-12">
        My primary stack is <br />
        <span className="text-primary">VueJS, NuxtJS</span> with <span className="text-primary">TailwindCSS</span>
      </p>
      <button onClick={sendMail} className="base-button w-full lg:w-60">
        Get in Touch
      </button>
      <div className="flex justify-center relative">
        <FontAwesomeIcon className={`arrow-down ${showIcon == true ? '' : 'opacity-0'}`} icon={["fas", 'angles-down']} />
      </div>
    </section>
  )
}

export default Home;
