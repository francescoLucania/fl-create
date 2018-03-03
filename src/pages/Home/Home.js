import React, {Component} from 'react';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, Wysiwyg, Button, ButtonLinkMod, Checkbox, Radio, InputForm, TextareaForm} from'../../StyleConfig';

import image1 from '../../assets/d1.jpg'
import image2 from '../../assets/d2.jpg'

const title = 'Hello World, this is my first styled component!';

class Home extends Component {
    render() {
        document.title = title;

        return (
            // Use them like any other React component – except they're styled!
            <SectionBox>
                <Container>
                    <Wysiwyg>
                        <h1>Hello Beach</h1>
                    </Wysiwyg>
                </Container>
            </SectionBox>
        )
    }
}

export default Home;