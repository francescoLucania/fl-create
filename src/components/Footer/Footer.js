import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {siteNavigateMenuLinks,siteFooterContacts} from '../App/App'; // site menu array

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, media} from'../../StyleConfig';
import {rgba, size, ellipsis} from 'polished';

const FooterBody = styled.footer`
    position: relative;
    background: #fff;

  &__copyright-content {
    @include font(1.2rem, 1.2rem);
    margin-top: auto;
  }
`;

const FooterGrid = styled.footer`

     ${media.xs`
        padding: 2rem 0;
        text-align: center;
    `}
     
     ${media.md`
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        padding: 4rem 0;
        text-align: left;
    `}    
      
     ${media.lg`
        margin: 0 auto;
        max-width: 142rem;
    `}
`;

const FooterNavigate = styled.footer`

    ${media.xs`
        ddisplay: none;
    `}  
      
    ${media.md`
        display: flex;
    `}

    > ul {
        &:not(:first-child) {

            ${media.md`
                margin-left: 4rem;
            `}
        } 

        > li {
        display: block;
        padding: .3rem 1rem;
        
        > a {
          font-size: 1.2rem;
          line-height: 1.8rem;
          position: relative;
          display: inline-block;
          color: ${props => props.theme.colorBase};
          text-decoration: none;
        
          ${media.xs`
            font-size: 1.6rem;
            line-height: 1;
            white-space: nowrap;
          `}
        
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
`;

const FooterContent = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;


class Footer extends Component {
    render() {
        return (
            <FooterBody>
                <FooterGrid>
                    <FooterNavigate>
                        <ul>
                            {siteNavigateMenuLinks.map((item, index)=>
                                <li key={index}><NavLink to={item.link}>{item.label}</NavLink></li>
                            )}

                        </ul>
                        <ul>
                            {siteFooterContacts.map((item, index)=>
                                <li key={index}><NavLink to={item.link} target="_blank">{item.label}</NavLink></li>
                            )}

                        </ul>
                    </FooterNavigate>

                    <FooterContent>
                        © 2017, francescolucania.com
                    </FooterContent>
                </FooterGrid>
            </FooterBody>
        )
    }
}

export default Footer;