import React, {Component} from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {rgba, size, ellipsis} from 'polished';
import {mqBreakpoints, media, ParagraphTextSmall} from'../../StyleConfig';

// files
import projectImage1 from '../../assets/bubble.jpg';
import projectImage2 from '../../assets/ast.jpg';
import projectImage3 from '../../assets/brother.jpg';
import projectImage4 from '../../assets/fomline.jpg';
import projectImage5 from '../../assets/ip.jpg';
import projectImage6 from '../../assets/etoro.jpg';

const projectsContent = [

  {
    image: projectImage1,
    title: 'Bubble',
    description: 'front-end for website of comic book publishing',
    url: 'https://bubble.ru'
  },
  {
    image: projectImage2,
    title: 'AST Company',
    description: 'front-end for website of AST Company!',
    url: 'http://ast-inter.ru/'
  },
  {
    image: projectImage3,
    title: 'go-brother',
    description: 'front-end for promo application',
    url: 'http://go-brother.ru/color_for_business/'
  },
  {
    image: projectImage4,
    title: 'FoamLine',
    description: 'front-end for website of biggest russian manufacturer of flexible foam',
    url: 'https://foamline.com'
  },
  {
    image: projectImage5,
    title: 'smolinvest.com',
    description: 'front-end for website investment portal of smolensk region',
    url: 'https://smolinvest.com'
  },
  {
    image: projectImage6,
    title: 'etoro',
    description: 'landing page from etoro',
    url: 'http://u-wdfl.ru/etoro/'
  }
]

const ItemProject = styled.div`
  position: relative;
  color: #fff;

  &:hover {
    &::before {
      opacity: .85;
    }

    > article {
      opacity: 1;
    }
  }

  > img {
    vertical-align: top;
  }

  &::before,
  > article {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: ${props => props.theme.transitionDurationBase};
  }

  &::before {
    z-index: 2;
    background: ${props => props.theme.colorBase};
    opacity: .85;
    content: "";

    ${media.lg`
      padding: ${props => props.theme.indentsLG};
      opacity: .65;
    `}
  }

  > article {
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.indentsXS};
    color: #fff;

    ${media.md`
      padding: ${props => props.theme.indentsMD};
    `}

    ${media.lg`
      padding: ${props => props.theme.indentsLG};
      opacity: 0;
    `}


      > h4 {
        font-family: ${props => props.theme.headingFontFamily};
        font-weight: ${props => props.theme.headingFontWeight};
        font-size: 1.8rem;
        line-height: 2.4;
      }

      > a {
        display: block;
        margin-top: auto;
        text-decoration: none;
        color: ${props => props.theme.colorSound};
      }
  }
`;

class ProjectsSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
  {
    breakpoint: mqBreakpoints[0].breakpointsLG,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: mqBreakpoints[0].breakpointsMD,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: mqBreakpoints[0].breakpointsXM,
    settings: {
      slidesToShow: 1
    }
  }
]
    };
    return (
      <Slider {...settings}>
        {projectsContent.map((item, index) =>
          <ItemProject key={index}>
            <img src={item.image} alt={item.title}/>
            <article>
              <h4>{item.title}</h4>
              <ParagraphTextSmall>{item.description}</ParagraphTextSmall>
              <a href={item.url} target="_blank">read more</a>
            </article>
          </ItemProject>
        )}
      </Slider>
    );
  }
}

export default ProjectsSlider;
