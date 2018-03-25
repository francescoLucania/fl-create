import React, {Component} from 'react';
// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {media} from'../../StyleConfig';
import {rgba, size, ellipsis} from 'polished';

const Loader = styled.div`
    ${size('100%')};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    z-index: 98;

    &.is-hidden {
      animation: loaderHide .6s linear 1s 1 alternate forwards;

      > span {
        animation: loaderContentHide .4s linear .2s 1 alternate forwards;
      }
    }

    > span {
        font-family: ${props => props.theme.headingFontFamily};
        font-weight: ${props => props.theme.headingFontWeight};
        text-transform: uppercase;
        color: #000;
    }
`;

export default Loader;
