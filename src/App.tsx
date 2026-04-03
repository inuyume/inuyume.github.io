import './App.css'
import siteConfig from './site.config.json'

function App() {
  return (
    <main className="page-shell">
      <section className="profile-card">
        <div className="profile-copy">
          <p className="eyebrow">{siteConfig.terminalLabel}</p>
          <div className="nickname-block">
            <h1>{siteConfig.nickname.zh}</h1>
            <p className="nickname-ja">{siteConfig.nickname.ja}</p>
            <p className="nickname-en">{siteConfig.nickname.en}</p>
          </div>
          <p className="bio">
            {siteConfig.bioLines.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </p>

          <p className="subtext">{siteConfig.subtext}</p>

          <div className="link-row">
            {siteConfig.links.map((link) => (
              <a
                key={link.label}
                className={link.variant === 'primary' ? 'primary-link' : 'secondary-link'}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
