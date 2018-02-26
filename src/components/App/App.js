import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import styled, {css, ThemeProvider} from 'styled-components';
import {baseTheme, sizesMQ} from'../../StyleConfig';


const StyleApp= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${props => props.theme.colorBase}
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={baseTheme}>
                <StyleApp>
                    <Header/>
                    <Main/>
                    <Footer/>
                </StyleApp>
            </ThemeProvider>
        );
    }
}

export default App;
