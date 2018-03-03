import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Demo from '../../pages/Demo/Demo';
// import About from '../../pages/About/About';
// import Contacts from '../../pages/Contacts/Contacts';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {baseTheme, sizesMQ, media} from'../../StyleConfig';


const StyleMain = styled.main`
  flex: 1;
  width: 100%;
  background: #fff;
  will-change: background;
  transition: background .6s;
  
   ${media.md`
      margin-top: 12rem;
    `};
   
   &.site-main-scroll-mod {
    background: ${props => props.theme.bgColorMode};
   }
  
`;

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { scrollMode: false };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {

        var bodyScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

        document.getElementById('site-main').classList.add('site-main-scroll-mod');



        if (bodyScrollTop > 120) {
            document.getElementById('site-main').classList.add('site-main-scroll-mod');
            this.state = { scrollMode: true };

        } else {
            document.getElementById('site-main').classList.remove('site-main-scroll-mod');
            this.state = { scrollMode: false };
        }

        return false;
    }

    render() {

        const mainClassName = this.state.scrollMode ? "site-main-scroll-mod" : "";

        return (
            <StyleMain id="site-main" className={mainClassName}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/' component={Demo}/>
                    {/*<Route path='/about' component={About}/>*/}
                    {/*<Route path='/contacts' component={Contacts}/>*/}
                </Switch>
            </StyleMain>
        )
    }
}

export default Main;