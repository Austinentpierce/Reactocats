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
    </body>
  )
}
