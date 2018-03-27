import React, {Component} from 'react';
import BLOG_API from '../../pages/Home/Home';
import Loader from '../../components/Loader/Loader';
import PagePromo from '../../components/PagePromo/PagePromo';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, Wysiwyg, media, ButtonLinkMod, PromoTitleH1, PromoTitleH2, TitleH2, SectionTitle, Titleh4, ListBox} from'../../StyleConfig';

const ProfileContacts = styled.div`
  text-align: center;

  > h2 {
    margin-bottom: ${props => props.theme.indentsMD};

    ${media.lg`
        margin-bottom: ${props => props.theme.indentsLG};
    `}
  }
`;

const ProfileGrid = styled.div`

  ${media.lg`
      margin-left: -10rem;
      margin-right: -10rem;
  `}


  > ul {
    ${media.md`
      display: flex;
      align-items: stretch;
      margin-left: -${props => props.theme.indentsMD};
      margin-right: -${props => props.theme.indentsMD};
    `}

    ${media.lg`
        margin-left: -${props => props.theme.indentsLG};
        margin-right: -${props => props.theme.indentsLG};
    `}

    > li {
      ${media.md`
          padding-left: calc(${props => props.theme.indentsMD} / 2);
          padding-right: calc(${props => props.theme.indentsMD} / 2);
          width: 33.33333%;
      `}

      ${media.lg`
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
              <p>OCTOBER 2017</p>
            </PagePromo>
          </Container>
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
                    <li>Java Script: jQuery, React</li>
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
          <ProfileContacts>
            <SectionTitle>Make contact with us</SectionTitle>
            <p>Email is the best way, to get in touch please use the form or email us at <a href='mailto:francescolucaniacom@gmail.com'>francescolucaniacom@gmail.com</a></p>
          </ProfileContacts>
        </Container>
        </SectionBox>
      </div>
    )
  }
}
export default Profile;
