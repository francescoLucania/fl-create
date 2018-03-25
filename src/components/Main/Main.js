import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Demo from '../../pages/Demo/Demo';
import BlogPage from '../../pages/BlogPage/BlogPage';
import Profile from '../../pages/Profile/Profile';

// import About from '../../pages/About/About';
// import Contacts from '../../pages/Contacts/Contacts';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {baseTheme, sizesMQ, media} from'../../StyleConfig';


const StyleMain = styled.main`
  flex: 1;
  margin-top: 10rem;
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



        if (bodyScrollTop > 80) {
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
            <StyleMain id="site-main">
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/home/:id" component={BlogPage} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/demo" component={Demo} />
                    <Redirect from="/" exact to="/home" />
                </Switch>
            </StyleMain>
        )
    }
}

export default Main;
