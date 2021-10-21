import './websites.css'

function Links() {
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

  const ArticleList = articles.map((art, index) =>
    <LinkCard
      key={index}
      title={art.title}
      subtitle={art.site}
      link={art.link}
    ></LinkCard>
  )

  return (
    <section id="articles-section" className="main-section">
      <div className="mb-12">
        <h2 className="text-accent mb-6 underline">#articles</h2>
      </div>
      <div className="mb-12">
        <div className="card-holder">
          {ArticleList}
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
