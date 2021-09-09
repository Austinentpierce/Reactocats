import React from 'react'
import { Reactocat } from './Components/reactocats'

export function App() {
  return (
    <body>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <a className="octo" href="#">
                Octodex
              </a>
            </li>
            <li>
              <li>
                <a href="#">Home</a>
              </li>
            </li>
            <li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </li>
            <li>
              <li>
                <a href="#">RSS</a>
              </li>
            </li>
          </ul>
        </nav>
        <ul>
          <li className="twitgit">
            <a href="https://twitter.com/elonmusk">Follow us on Twitter</a>
            <a className="github" href="https://github.com/">
              Back to GitHub.com
            </a>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <Reactocat
            image="https://octodex.github.com//images/Terracottocat_Single.png"
            name="Terracottocat"
            number={149}
            creator="https://github.com/chubbmo.png"
          />
          <Reactocat
            image="https://octodex.github.com//images/Octogatos.png"
            name="Octogatos"
            number={148}
            creator="https://github.com/cameronfoxly.png"
          />
          <Reactocat
            image="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
            name="Sentrytocat"
            number={143}
            creator="https://github.com/cameronmcefee.png"
          />
          <Reactocat
            image="https://octodex.github.com//images/boxertocat_octodex.jpg"
            name="Boxertocat"
            number={141}
            creator="https://octodex.github.com//boxertocat/"
          />
          <Reactocat
            image="https://octodex.github.com//images/surftocat.png"
            name="Surftocat"
            number={140}
            creator="https://github.com/jeejkang.png"
          />
          <Reactocat
            image="https://octodex.github.com//images/scubatocat.png"
            name="Scubatocat"
            number={138}
            creator="https://github.com/cameronfoxly.png"
          />
          <Reactocat
            image="https://octodex.github.com//images/dinotocat.png"
            name="Dinotocat"
            number={130}
            creator="https://github.com/kimestoesta.png"
          />
          <Reactocat
            image="https://octodex.github.com//images/spidertocat.png"
            name="Spidertocat"
            number={87}
            creator="https://github.com/jeejkang.png"
          />
          <Reactocat
            image="https://octodex.github.com//images/droctocat.png"
            name="Dr.Octocat"
            number={88}
            creator="https://github.com/jeejkang.png"
          />
          <Reactocat
            image="https://octodex.github.com//images/deckfailcat.png"
            name="Deckfailcat"
            number={82}
            creator="https://github.com/mattgraham.png"
          />
          <Reactocat
            image="https://octodex.github.com//images/droidtocat.png"
            name="Droidtocat"
            number={78}
            creator="https://github.com/tonyjaramillo.png"
          />
          <Reactocat
            image="https://octodex.github.com//images/defunktocat.png"
            name="Defunktocat"
            number={65}
            creator="https://github.com/jasoncostello.png"
          />
        </section>
      </main>
    </body>
  )
}
