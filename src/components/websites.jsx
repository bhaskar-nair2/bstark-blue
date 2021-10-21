import './websites.css'

function Links() {
  const websites = [
    {
      sitename: "TabEazy Store",
      link: "https://www.tabeazy.com",
      stack: ["nuxtjs", "tailwindcss"]
    },
    {
      sitename: "TabEazy Seller Portal",
      link: "https://seller.tabeazy.com",
      stack: ["nuxtjs", "vuetify"]
    },
    {
      sitename: "Stats2Econo",
      link: "https://www.stats2econo.com",
      stack: ["wix"]
    },
  ]

  const arrayToString = (arr = []) => {
    return arr.reduce((tot, cur, index) => (tot += `${cur} `), "");
  }

  const SiteList = websites.map((site, index) =>
    <LinkCard
      key={index}
      title={site.sitename}
      subtitle={arrayToString(site.stack)}
      link={site.link}
    ></LinkCard>
  )


  return (
    <section id="websites-section" className="main-section">
      <div className="mb-12">
        <h2 className="text-accent mb-6 underline">#websites</h2>
      </div>
      <div className="mb-12">
        <div className="card-holder">
          {SiteList}
        </div>
      </div>
    </section >
  )
}

function LinkCard(props) {
  return (
    <a className="link-card" href={props?.link} target="_blank">
      <div className="link-card-card">
        <h3 className="text-text text-base line-clamp-3">
          {props?.title}
        </h3>
        <p className="text-primary text-xs font-mono line-clamp-1">
          {props?.subtitle}
        </p>
      </div>
    </a>
  )
}

export default Links;
