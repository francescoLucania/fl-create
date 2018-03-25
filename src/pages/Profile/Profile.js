import React, {Component} from 'react';
import BLOG_API from '../../pages/Home/Home';
import Loader from '../../components/Loader/Loader';
import PagePromo from '../../components/PagePromo/PagePromo';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, Wysiwyg, media, ButtonLinkMod, PromoTitleH1, PromoTitleH2} from'../../StyleConfig';

const ProfileAbout = styled.div`

  ${media.md`
    display: flex;
    justify-content: stretch;
  `}
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
    )
  }
}
export default Profile;
