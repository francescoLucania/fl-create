import React, {Component} from 'react';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {media} from'../../StyleConfig';
import {rgba, size, ellipsis} from 'polished';

import Logo from '../../assets/logo.jpg';

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
      animation: loaderHide 2s linear 1s 1 alternate forwards;

      > span {
        animation: loaderContentHide .4s linear .2s 1 alternate forwards;
      }
    }

    span {
      > i {
        ${size('6.5rem')};
        display: block;
        border-radius: 50%;
        overflow: hidden;
        vertical-align: top;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${Logo});
        animation: loaderRotate 1.2s linear infinite;
      }
    }
`;

export default Loader;
