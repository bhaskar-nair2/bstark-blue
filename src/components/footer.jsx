import { SocialsPanel } from './socials.jsx'

import './footer.css'

function Footer(params) {

  const stacks = [
    { type: 'Framework', name: 'ReactJS', link: 'https://reactjs.org' },
    { type: 'Bundler', name: 'Vitejs', link: 'https://vitejs.dev/' },
    { type: 'Styling', name: 'TailwindCSS', link: 'https://tailwindcss.com/' },
    { type: 'Design', name: 'Figma', link: 'https://www.figma.com' },
    { type: 'Theme', name: 'Colorhunt', link: 'https://colorhunt.co/' },
    // { type: 'Version Control', name: 'Github', link: 'https://github.com/bhaskar-nair2/bstark-blue' },
    { type: 'Hosting', name: 'Netlify', link: 'https://www.netlify.com/' },
    // { type: 'Domain', name: '.Tech', link: 'https://get.tech/' },
  ]

  const typeList = stacks.map(st => <li key={st.type}>
    {st.type}:
  </li>
  )
  const links = stacks.map(st =>
    <li key={st.link}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={st.link}>
        {st.name}
      </a>
    </li>
  )

  return (
    <section className="main-section">
      <div className="mb-12">
        <h2 className="text-accent">#stack</h2>
      </div>
      <div className="flex mb-24">
        <ul className="mr-24 space-y-2">
          {typeList}
        </ul>
        <ul className="text-primary space-y-2">
          {links}
        </ul>
      </div>
      <div className="mb-12">
        <h2 className="text-accent">#socials</h2>
      </div>
      <SocialsPanel className="block lg:hidden"></SocialsPanel>
    </section>
  )
}

export default Footer
