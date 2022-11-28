import * as React from "react";
import {  Link } from "gatsby";

import Layout from "../components/Layout";
import { header, btn, avatar } from "../styles/home.module.css";

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <div className={avatar}></div>
          <ul>
            <li>
              <a
                href="https://github.com/felipemfm"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/felipemfm/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Felipe Machado Portfolio</h2>
          <h3>Full stack software engineer</h3>
          <p>
            Welcome! My name is Felipe and I am a Brazilian software engineer
            currently stationed in Tokyo, Japan. This web page was created to
            showcase all the projects I have worked on in the past twoish years.
          </p>
          <p>
            This portfolio is a mixture of solo and team projects where I have
            worked as a full-stack engineer. My experience goes from creating
            and styling components to designing databases and API endpoints and
            deploying them using cloud-based services.
          </p>
          {/* <table>
            <tbody>
              <tr>
                <th>Frontend</th>
                <th>Backend</th>
                <th>Others</th>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>Node.js</td>
                <td>Github</td>
              </tr>
              <tr>
                <td>React</td>
                <td>Express</td>
                <td>Firebase</td>
              </tr>
              <tr>
                <td>Redux</td>
                <td>MySQL</td>
                <td>Heroku</td>
              </tr>
              <tr>
                <td>TypeScript</td>
                <td>Postgres</td>
                <td>Docker</td>
              </tr>
              <tr>
                <td>Vue</td>
                <td>PHP</td>
                <td></td>
              </tr>
              <tr>
                <td>HTML</td>
                <td>Python</td>
                <td></td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>Django</td>
                <td></td>
              </tr>
              <tr>
                <td>SASS</td>
                <td>FastAPI</td>
                <td></td>
              </tr>
            </tbody>
          </table> */}

          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}

// export const query = graphql`
//   query MyQuery {
//     file(relativePath: { eq: "banner.png" }) {
//       childImageSharp {
//         gatsbyImageData(layout: FIXED)
//       }
//     }
//   }
// `;
