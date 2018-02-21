import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import styled from 'styled-components';

const fcBaseTemplate = styled.div`
  display: flex;
  flex-direction: column
  justify-content: space-between;
`;


class App extends Component {
    render() {
        return (
            <fcBaseTemplate>
                <Header/>
                <Main/>
                <Footer/>
            </fcBaseTemplate>
        );
    }
}

export default App;
