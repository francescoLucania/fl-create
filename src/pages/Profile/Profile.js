import React, {Component} from 'react';
import PagePromo from '../../components/PagePromo/PagePromo';
import ProjectsSlider from '../../components/ProjectsSlider/ProjectsSlider';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, Wysiwyg, media, ButtonLinkMod, PromoTitleH1, PromoTitleH2, TitleH2, SectionTitle, Titleh4, ListBox} from'../../StyleConfig';

// files
import projectImage1 from '../../assets/bubble.jpg';

export const projectsContent = [

  {
    imageUrl: {projectImage1},
    title: 'Bubble',
    description: 'front-end for website of comic book publishing',
    url: 'https://bubble.ru'
  },

  {
    imageUrl: {projectImage1},
    title: 'AST Company',
    description: 'front-end for website of AST Company!',
    url: 'http://ast-inter.ru/'
  },


  {
    imageUrl: {projectImage1},
    title: 'go-brother',
    description: 'front-end for promo application',
    url: 'http://go-brother.ru/color_for_business/'
  },


  {
    imageUrl: {projectImage1},
    title: 'FoamLine',
    description: 'front-end for website of biggest russian manufacturer of flexible foam',
    url: 'https://foamline.com'
  },
  {
    imageUrl: {projectImage1},
    title: 'smolinvest.com',
    description: 'front-end for website investment portal of smolensk region',
    url: 'https://smolinvest.com'
  },
  {
    imageUrl: {projectImage1},
    title: 'etoro',
    description: 'landing page from etoro',
    url: 'http://u-wdfl.ru/etoro/'
  }
]


const ProfileInformationBlock = styled.div`
  text-align: center;

  > h2 {
    margin-bottom: ${props => props.theme.indentsMD};

    ${media.lg`
        margin-bottom: ${props => props.theme.indentsLG};
    `}
  }
`;

const ProfileGrid = styled.div`

  ${media.xl`
      margin-left: -10rem;
      margin-right: -10rem;
  `}


  > ul {
    padding-left: 1rem;

    ${media.lg`
        display: flex;
        margin-left: -${props => props.theme.indentsLG};
        margin-right: -${props => props.theme.indentsLG};
    `}

    > li {
      &:not(:last-child) {
        margin-bottom: calc(${props => props.theme.indentsXS} * 2);
      }

      ${media.md`
        &:not(:last-child) {
          margin-bottom: calc(${props => props.theme.indentsMD} * 2);
        }
      `}

      ${media.lg`
          margin-bottom: 0;
          width: 33.33333%;
          padding-left: calc(${props => props.theme.indentsLG} / 2);
          padding-right: calc(${props => props.theme.indentsLG} / 2);
      `}

      > h4 {
        &:not(:last-child) {
          margin-bottom: ${props => props.theme.indentsMD};
        }

        ${media.lg`
          &:not(:last-child) {
            margin-bottom:${props => props.theme.indentsLG};
          }
        `}
      }
    }
  }
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <SectionBox>
          <Container>
            <PagePromo>
              <header>
                <PromoTitleH1>02: Profile</PromoTitleH1>
                <PromoTitleH2>About Me</PromoTitleH2>
              </header>
              <p>FRANCESCO LUCANIA I{"'"}M A FRONTEND DEVELOPER IN RUSSIA CURRENTLY WORKING AT <a target="_blank" href="">COALLA</a>.</p>
              <p>OCTOBER 2018</p>
            </PagePromo>
          </Container>
        </SectionBox>
        <SectionBox>
          <ProfileInformationBlock>
            <SectionTitle>Last Projects</SectionTitle>
            <ProjectsSlider items={projectsContent}/>
          </ProfileInformationBlock>
        </SectionBox>
        <SectionBox>
          <Container>
          <ProfileGrid>

            <ul>
              <li>
              <Titleh4>Technologies</Titleh4>
                <ListBox>
                  <ul>
                    <li>html: jade/pug, haml</li>
                    <li>css: sass, stylus, bem</li>
                    <li>JavaScript: jQuery, React</li>
                    <li>Gulp, Webpack</li>
                  </ul>
                </ListBox>
              </li>

              <li>
              <Titleh4>Services</Titleh4>
              <p>frontend development, responsive, minimal design, animation, optimization</p></li>

              <li>
              <Titleh4>I like...</Titleh4>
              <p>I provide creative solutions for digital services and products, through a user-centered and design-thinking driven approach.</p>
              </li>
            </ul>

          </ProfileGrid>
          </Container>
        </SectionBox>
        <SectionBox>
        <Container>
          <ProfileInformationBlock>
            <SectionTitle>Make contact with us</SectionTitle>
            <p>Email is the best way, to get in touch please use the form or email us at <a href='mailto:francescolucaniacom@gmail.com'>francescolucaniacom@gmail.com</a></p>
          </ProfileInformationBlock>
        </Container>
        </SectionBox>
      </div>
    )
  }
}
export default Profile;
