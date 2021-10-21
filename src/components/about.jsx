function Home() {
  // const sendMail = () => {
  //   window.location.href = "mailto:b.bhaskar.nair@gmail.com";
  // }

  return (
    <section id="about-section" className="main-section">
      <div className="mb-12">
        <h2 className="text-accent">#about</h2>
      </div>
      <h1 className="text-xl xs:text-2xl lg:text-3xl mb-12">
        Hi, I am<br />
        <span className="text-primary">Bhaskar Nair</span>
      </h1>
      <p className="w-96 mb-12">
        I am a <span className="text-primary">Frontend Architect</span> with experience in ECommerce and
        Transport. I like working with early stage startups to bring their
        ideas to life.
      </p>
      <p className="w-96 mb-12">
        My primary stack is <br />
        <span className="text-primary">VueJS, NuxtJS</span> with <span className="text-primary">TailwindCSS</span>
      </p>
      {/* Todo Replace this with something else */}
      <button className="base-button w-60">
        Get in Touch
      </button>
      {/* <div className='bottom-border'></div> */}
    </section>
  )
}

export default Home;
