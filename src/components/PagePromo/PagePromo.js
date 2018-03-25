import React, {Component} from 'react';
import BLOG_API from '../../pages/Home/Home';
import Loader from '../../components/Loader/Loader';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, Wysiwyg, media, ButtonLinkMod, PromoTitleH1, PromoTitleH2} from'../../StyleConfig';

const PagePromo = styled.article`
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

export default PagePromo;
