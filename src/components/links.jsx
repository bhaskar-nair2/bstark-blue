import './links.css'

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

  const articles = [
    {
      title: "Flutter User Presence using Firebase-Cloud Firestore",
      site: 'medium.com',
      link: "https://medium.com/@b.bhaskar.nair/flutter-user-presence-using-firebase-cloud-firestore-f79f590eb64f",
    },
    {
      title: "PWA Add to Homescreen button",
      site: 'dev.to',
      link: "https://dev.to/bhaskarnair2/how-to-add-an-add-to-homescreen-button-in-your-pwa-na",
    }
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

  const ArticleList = articles.map((art, index) =>
    <LinkCard
      key={index}
      title={art.title}
      subtitle={art.site}
      link={art.link}
    ></LinkCard>
  )

  return (
    <section id="links-section" className="main-section">
      <div className="mb-12">
        <a href="#" className="text-accent mb-6">#links</a>
      </div>
      <div className="mb-12">
        <h2 className="text-accent mb-6">websites</h2>
        <div className="card-holder">
          {SiteList}
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-accent mb-6">articles</h2>
        <div className="card-holder">
          {ArticleList}
        </div>
      </div>
      {/* <div className="mb-12 hidden lg:block">
        <h2 className="text-accent mb-6">miscellaneous</h2>
        <div className="card-holder">
          <LinkCard></LinkCard>
        </div>
      </div > */}
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
