import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  details,
  featured,
  innerHtml,
  btn,
} from "../styles/project-details.module.css";
import { graphql } from "gatsby";

export default function ProjectsDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImage, website, github } =
    data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage
            image={featuredImage.childImageSharp.gatsbyImageData}
            alt="featured image"
          />
        </div>
        <a
          href={github}
          className={btn}
          alt="github url"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        {website && (
          <a
            href={website}
            className={btn}
            alt="website url"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        )}
        <div className={innerHtml} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        github
        website
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
