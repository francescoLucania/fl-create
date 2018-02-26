import React, {Component} from 'react';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, sizesMQ, media} from'../../StyleConfig';


const StyleHeader = styled.footer`
    min-height: 10rem;
`;


class Header extends Component {
    render() {
        return (
            <StyleHeader>
                <Container>
                    header
                </Container>
            </StyleHeader>
        )
    }
}

export default Header;