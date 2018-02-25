import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home';
// import About from '../../pages/About/About';
// import Contacts from '../../pages/Contacts/Contacts';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
// import {baseTheme} from'../../StyleConfig';


const StyleMain = styled.main`
  flex: 1;
  width: 100%;
  background: ${props => props.theme.bgColorMode}
`;

class Main extends Component {
    render() {
        return (
            <StyleMain>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    {/*<Route path='/about' component={About}/>*/}
                    {/*<Route path='/contacts' component={Contacts}/>*/}
                </Switch>
            </StyleMain>
        )
    }
}

export default Main;