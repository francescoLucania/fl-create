import React, { Component } from 'react';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, sizesMQ, media} from'../../StyleConfig';

const StyleFooter = styled.footer`
    min-height: 10rem
`;


class Footer extends Component {
    render() {
        return (
            <StyleFooter>
                <Container>
                    footer
                </Container>
            </StyleFooter>
        )
    }
}

export default Footer;