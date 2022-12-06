import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function ProjectsCarousel({ carouselImages }) {
  console.log(carouselImages);
  return (
    <Carousel showStatus={false} showThumbs={false} autoPlay={true}>
      {carouselImages.map((node) => {
        return (
          <div key={node.id}>
            <GatsbyImage
              image={getImage(
                node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
              )}
              alt={node.frontmatter.title}
            />
            <p className="legend">{node.frontmatter.title}</p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default ProjectsCarousel;
