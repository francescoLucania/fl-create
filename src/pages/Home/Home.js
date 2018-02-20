import React, {Component} from 'react';
import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const TitleH1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const title = 'Hello World, this is my first styled component!';

class Home extends Component {
    render() {
        document.title = title;

        return (
            // Use them like any other React component – except they're styled!
            <Wrapper>
                <TitleH1>{title}</TitleH1>
            </Wrapper>
        )
    }
}

export default Home;