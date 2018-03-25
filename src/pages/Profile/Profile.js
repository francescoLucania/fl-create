import React, {Component} from 'react';
import BLOG_API from '../../pages/Home/Home';
import Loader from '../../components/Loader/Loader';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, Wysiwyg, media, ButtonLinkMod, PromoTitleH1, PromoTitleH2} from'../../StyleConfig';

const ProfilePromo = styled.article`
  display: block;
  text-align: center;
  padding: 2rem;

  > header {
    margin-bottom: 3rem;

    ${media.md`
      margin-bottom: 4rem;
    `}

    ${media.lg`
      margin-bottom: 3rem;
    `}

    > H1,
    > h2 {
      margin-bottom: 4rem;

      ${media.md`
        margin-bottom: 4rem;
      `}
    }
  }

  > p {
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 2rem;

    ${media.md`
      font-size: 1.6rem;
      line-height: 2.4rem;

      &:not(:last-child) {
         margin-bottom: 3rem;
      }
    `}
  }
`;

const ProfileAbout = styled.div`

${media.md`
  display: flex;
  justify-content: stretch;
`}
`;

class Profile extends Component {
  constructor(props) {
      super(props);
      this.state = { // инициализируем состояние по-умолчанию
        posts: [],
        postsLoad: false
      };
    }

  render() {
      return (
          <SectionBox>
              <Container>
                <ProfilePromo>
                  <header>
                    <PromoTitleH1>02: Profile</PromoTitleH1>
                    <PromoTitleH2>About Me</PromoTitleH2>
                  </header>
                  <p>FRANCESCO LUCANIA I{"'"}M A FRONTEND DEVELOPER IN RUSSIA CURRENTLY WORKING AT <a target="_blank" href="">COALLA</a>.</p>
                  <p>OCTOBER 2017</p>
                </ProfilePromo>
              </Container>
          </SectionBox>
      )
  }
}
export default Profile;
