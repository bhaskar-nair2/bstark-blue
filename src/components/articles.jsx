import './websites.css'
import { LinkCard } from './websites';


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
        <h2 className="text-accent mb-6 underline">#treatises</h2>
      </div>
      <div className="mb-12">
        <div className="card-holder">
          {ArticleList}
        </div>
      </div>
    </section >
  )
}

export default Links;
