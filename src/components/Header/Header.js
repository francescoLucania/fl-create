import React, {Component} from 'react';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {size} from 'polished';
import {Container, sizesMQ, media} from'../../StyleConfig';
import Logo from '../../assets/logo.jpg';
import {Link} from 'react-router-dom';

const HeaderBody = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 115;
    width: 100%; 
`;

const HeaderGrid = styled.div`
    position: relative;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.indentsXS};
    background: #fff; 
    
     ${media.xs`
        flex-direction: row-reverse;
        padding: ${props => props.theme.indentsMD};
    `}
         
     ${media.md`
        flex-direction: row;
        padding: ${props => props.theme.indentsLG};
    `}
`;

const HeaderLogo = styled.a`
    ${size('4rem')};
    display: block;
    transition: .6s;
         
     ${media.md`
        ${size('6rem')};
    `}
     
    > img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 50%;
        vertical-align: top;
    }
`;

const HeaderBurgerBox = styled.div`
    display: block;
    
     ${media.xs`
        display: none;
    `}
     
    .burger {
      ${size('3rem')};
      position: relative;
      display: block;
      transform: rotate(0deg);
      transition: .5s ease-in-out;
      cursor: default;
      outline: none;
    
      &::before {
        font-size: 1.4rem;
        line-height: 1;
        position: absolute;
        top: 50%;
        left: calc(100% + 2rem);
        transform: translateY(-50%);
        font-family: ${props => props.theme.baseFontFamily};
        color: ${props => props.theme.colorBase};
        content: 'menu'
      }
    
      &.is-active {
        &::before {
          content: 'close'
        }
      }
    
      > span {
        display: block;
        position: absolute;
        height: .5rem;
        width: 100%;
        background: ${props => props.theme.colorBase};
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
      }
    
      > span:nth-child(1) {
        top: 0;
      }
    
      > span:nth-child(2),> span:nth-child(3) {
        top: 12px;
      }
    
      > span:nth-child(4) {
        top: 24px;
      }
    
      &.is-active {
        span:nth-child(1) {
          top: 12px;
          width: 0%;
          left: 50%;
        }
    
        span:nth-child(2) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }
    
        span:nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
    
        span:nth-child(4) {
          top: 18px;
          width: 0%;
          left: 50%;
        }
      }
    }

`;




class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    mobileButtonState() {
        this.setState({ isOpened: !this.state.isOpened });
        return false
    }

    render() {
        return (
            <HeaderBody>
                <HeaderGrid>
                    <HeaderLogo>
                        <img src={Logo} alt=""/>
                    </HeaderLogo>

                    <HeaderBurgerBox>
                        <button className={this.state.isOpened ? 'burger js-open-menu is-active' : 'burger js-open-menu'} href="#" onClick={this.mobileButtonState.bind(this)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </HeaderBurgerBox>
                </HeaderGrid>
            </HeaderBody>
        )
    }
}

export default Header;