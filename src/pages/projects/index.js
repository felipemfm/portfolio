import React from "react";
import Layout from "../../components/Layout";
import { portfolio, project } from "../../styles/projects.module.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Projects = ({ data }) => {
  const projects = data.projects.nodes;
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Solo Projects</h3>
        <div className={project}>
          {projects.map((project) => (
            <>
              {!project.frontmatter.team && (
                <Link
                  to={"/projects/" + project.frontmatter.slug}
                  key={project.id}
                >
                  <div>
                    <GatsbyImage
                      image={getImage(
                        project.frontmatter.featuredImage.childImageSharp
                          .gatsbyImageData
                      )}
                      alt="website"
                    />
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                  </div>
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
      <div className={portfolio}>
        <h3>Team Projects</h3>
        <div className={project}>
          {projects.map((project) => (
            <>
              {project.frontmatter.team && (
                <Link
                  to={"/projects/" + project.frontmatter.slug}
                  key={project.id}
                >
                  <div>
                    <GatsbyImage
                      image={getImage(
                        project.frontmatter.featuredImage.childImageSharp
                          .gatsbyImageData
                      )}
                      alt="website"
                    />
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                  </div>
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          team
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;
