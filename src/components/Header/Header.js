import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {NavLink, Link} from 'react-router-dom';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {rgba, size, ellipsis} from 'polished';
import {Container, sizesMQ, media} from'../../StyleConfig';
import Logo from '../../assets/logo.jpg';


import {siteNavigateMenuLinks,siteFooterContacts} from '../App/App'; // site menu array



const HeaderBody = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 115;
    width: 100%;
    transition: all .6s;

    &.site-header-scroll-mod {

        .logo-box {
          ${size('3.5rem')};
        }
    }

    @keyframes mobileMenuFade {

        from {

          }

          to {
            opacity: .3;
          }
        }

        @keyframes mobileMenu {

          from {

          }

          to {
            transform: translateY(0);
          }
    }

    .mobile-menu-fade {
      ${size('100%')};
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      background: ${props => props.theme.colorBrand};
      opacity: 0;
      transition: opacity ${props => props.theme.transitionDurationBase};

     ${media.md`

        display: none !important;
    `}

      &.is-active {
        display: block;
        animation: mobileMenuFade .6s linear 0s 1 alternate forwards;
      }
    }

    .mobile-menu {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        transform: translateY(-100%);
        width: 100%;
        height: auto;
        border: 0;
        border-top-width: 7rem;
        border-style: solid;
        border-color: #fff;
        background: #fff;
        transition: all .6s;

         ${media.md`
            display: none !important;
        `}

      &.is-active {
        animation: mobileMenu .3s linear .5s 1 alternate forwards;
      }

      &__box {
        overflow-y: auto;
        padding: 3rem 2rem;

        > ul {
          &:not(:last-child) {
            margin-bottom: 1rem;
          }

          > li {
            display: block;
            padding: .3rem 1rem;

            &:not(:last-child) {
              margin-bottom: 1rem;
            }

            &:hover {
              a::after {
                width: 100%;
              }
            }

            > a {
              @include font(1.5rem,2.4rem);
              position: relative;
              display: inline-block;
              color: ${props => props.theme.colorBase};
              text-decoration: none;

              @include mq(xs) {
                ${ellipsis('100%')}
              }

             ${media.xs`
                font-size: 1.4rem;
                line-height: 1.4rem;
                white-space: nowrap;
            `}

             ${media.md`
                font-size: 1.4rem;
                line-height: 1.4rem;
                white-space: nowrap;
            `}

              &::after {
                position: absolute;
                display: block;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 0;
                height: .3rem;
                background: ${props => props.theme.colorBrand};
                transition: all ${props => props.theme.transitionDurationBase};
                content: '';
              }
            }

            > a.is-current {
              pointer-events: none;
              color: ${props => props.theme.colorLightest};


              &::after {
                width: 100%;
                height: .1rem;
                background: ${props => props.theme.colorBase};
              }
            }
          }
        }
      }
    }
`;

const HeaderGrid = styled.div`
    position: relative;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.indentsXS};
    background: #fff;
    transition: all .6s;

     ${media.xs`
        flex-direction: row-reverse;
        padding: ${props => props.theme.indentsMD};
    `}

     ${media.md`
        flex-direction: row;
        padding: ${props => props.theme.indentsLG};
    `}
`;

const HeaderLogo = styled.div`
    ${size('3.5rem')};
    transition: all .6s;
    will-change: width;

     ${media.md`
        ${size('6rem')};
    `}
    > a {
        > img {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 50%;
            vertical-align: top;
        }
    }
`;

const HeaderNavigateBox = styled.div`
    display: none;

    ${media.md`
        display: block;
    `}

      > ul {
        display: flex;

        > li {
          padding: .3rem 1rem;

          > a {
            position: relative;
            display: block;
            color: ${props => props.theme.colorBase};
            white-space: nowrap;
            text-decoration: none;

            &:hover {
              &::after {
                width: 100%;
              }
            }

            &::after {
              position: absolute;
              display: block;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 0;
              height: .3rem;
              background: ${props => props.theme.colorBrand};
              transition: all ${props => props.theme.transitionDurationBase};
              content: '';
            }
          }

          > a.is-current {
            pointer-events: none;
            color: ${props => props.theme.colorLightest};

            &::after {
              width: 100%;
              height: .1rem;
              background: ${props => props.theme.colorBase};
            }
          }
        }
    }
`;

const HeaderBurgerBox = styled.div`
    display: block;

     ${media.md`
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
        this.state = { scrollMode: false };
    }

    mobileButtonState() {
        this.setState({ isOpened: !this.state.isOpened });
        return false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {

        var bodyScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

        document.getElementById('site-header').classList.add('site-header-scroll-mod');



        if (bodyScrollTop > 80) {
            document.getElementById('site-header').classList.add('site-header-scroll-mod');
            this.state = { scrollMode: true };

        } else {
            document.getElementById('site-header').classList.remove('site-header-scroll-mod');
            this.state = { scrollMode: false };
        }

        return false;
    }

    render() {

        const headerClassName = this.state.scrollMode ? "site-header-scroll-mod" : "";

        return (
            <HeaderBody id="site-header" className={headerClassName}>

                <div className={this.state.isOpened ? 'mobile-menu-fade is-active' : 'mobile-menu-fade'} onClick={this.mobileButtonState.bind(this)}></div>

                <div className={this.state.isOpened ? 'mobile-menu is-active' : 'mobile-menu'}>
                    <div className="mobile-menu__box">
                        <ul>
                            {siteNavigateMenuLinks.map((item, index)=>

                                <li key={index}><NavLink to={item.link} activeClassName="is-current" onClick={this.mobileButtonState.bind(this)}>{item.label}</NavLink></li>

                            )}

                        </ul>

                        <ul>
                            {siteFooterContacts.map((item, index)=>

                                <li key={index}><NavLink to={item.link}  target="_blank">{item.label}</NavLink></li>

                            )}

                        </ul>
                    </div>
                </div>

                <HeaderGrid>
                    <HeaderLogo className="logo-box">
                        <Link to="/"><img src={Logo} alt=""/></Link>

                    </HeaderLogo>

                    <HeaderNavigateBox>
                            <ul>
                                {siteNavigateMenuLinks.map((item, index)=>

                                    <li key={index}><NavLink to={item.link} activeClassName="is-current">{item.label}</NavLink></li>

                                )}

                            </ul>
                    </HeaderNavigateBox>

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
