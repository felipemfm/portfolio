import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import { about, btn, avatar, carousel, title } from "../styles/home.module.css";
import ProjectsCarousel from "../components/ProjectsCarousel ";

export default function Home({ data }) {
  return (
    <Layout>
      <h2 className={title}>Projects Highlights</h2>
      <section className={carousel}>
        <div>
          <ProjectsCarousel carouselImages={data.carouselImages.nodes} />
        </div>
      </section>
      <h2 className={title}>About Me</h2>
      <section className={about}>
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
          <h2>Felipe Machado</h2>
          <h3>Full stack software engineer</h3>
          <p>
            Welcome! My name is Felipe and I am a Brazilian software engineer
            currently stationed in Tokyo, Japan. This web page was created to
            showcase all the projects I have worked on in the past twoish years.
          </p>
          <p>
            This portfolio is a mixture of solo and team projects where I have
            worked as a full-stack engineer. My experience goes from creating
            and styling components to designing databases and API endpoints.
          </p>

          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    carouselImages: allMarkdownRemark(
      filter: { frontmatter: { highlight: { eq: true } } }
      sort: { frontmatter: { date: ASC } }
    ) {
      nodes {
        frontmatter {
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                quality: 70
                blurredOptions: { width: 100 }
                width: 700
              )
            }
          }
        }
        id
      }
    }
  }
`;
