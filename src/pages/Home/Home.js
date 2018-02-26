import React, {Component} from 'react';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, sizesMQ, media, TitleH1, TitleH2, TitleH3, Wysiwyg} from'../../StyleConfig';

const title = 'Hello World, this is my first styled component!';

class Home extends Component {
    render() {
        document.title = title;

        return (
            // Use them like any other React component – except they're styled!
            <SectionBox>
                <Container>
                    <Wysiwyg>
                        <TitleH1>h1</TitleH1>
                        <p>There are times when our need to preserve a myth prevails over the reality of what we know to be true; take, for example, the presidency of <a href="https://medium.com/s/story/come-get-your-life-come-get-your-death-on-ryan-cooglers-black-panther-616039d97e5d">Barack Obama</a>. I’m very serious here. I recently wrote a piece on the myths surrounding Jay-Z and Beyoncé and the need to deconstruct the black artist vs. the black capitalist. A woman wrote to let me know that she was not impressed with my work. She explained that I hadn’t appreciated in my essay what the Carters or President Obama meant to her personally, and to the entire black community. She admitted that upon careful examination she found many of Obama’s choices as problematic as I did. But she was less interested in Obama the man than Obama the symbol. She needed Obama and the Carters in her life for very specific reasons, and “the truth,” while relevant, wasn’t going to intrude on her myth.</p>
                        <p>There are some people who get enraged when a writer or critic comes along and “tears a black movie down.” Tearing down in this case means engaging with it critically, not just praising it unequivocally because it is black. (I was called a “chicken-fucker” in one camp for criticizing the Carters.) I understand where this comes from — as so few “black” productions come along with real money and attention behind them — and money in Hollywood means love — it makes sense that we all want to go out and support it, to make the film a success so we can look forward to quality black movies in the future. (The film has already set box office records.) Consumer culture also encourages us to support the film without examining it, buying the DVD and Halloween costume for our kids while staying firmly within the confines of the myth. And myths are powerful: Barack Obama’s presidency was “sold” to us this way (and won a branding award). But shouldn’t we question whether a movie is progressive just because it has a black director, a reference to black history in the title and black people in it? There is black love in “Black Panther” to be sure, but it is a Marvel Studios film — distributed by Disney — which means the political consciousness of the film begins and ends with the company’s financial bottom line.</p>
                        <TitleH2>h2</TitleH2>
                        <ul>
                            <li>item 1</li>
                            <li>item 2 + <a href="https://www.youtube.com/watch?v=8jlYB5ielJ8&index=6&list=RDMMcbB3iGRHtqA" target="_blank">Link</a></li>
                            <li>item 3</li>
                            <li>item 4</li>
                        </ul>
                        <p>I had to respect her point — we all cling to myths of one kind or another. And while it may be too early to determine all the myths that surround “Black Panther” and its fictitious African country Wakanda, I can see the film’s symbolic value and the reasons why we need it right now. In the showings I attended on the opening weekend in New York City, the celebration was palpable; a man called out in the theater lobby to find the other members of his “tribe”, another woman shouted, “Wakanda lives!” There was Kinte cloth, elaborate jewelry, natural hairstyles, and permission in the air to be unapologetically inspired by African culture; a powerful reminder that black is indeed still beautiful. A movie like “Black Panther” reminds us that being of African descent isn’t only about fighting oppression around the world; it’s about enjoying a spectacular cultural legacy. Being black is fun! </p>
                        <TitleH3>h3</TitleH3>
                        <p>At the same time, I suspect there are other viewers who go to Ryan Coogler’s “Black Panther” looking for a film about resistance, and who are finding instead a slightly blacker and more violent “The Lion King”, audiences who walk out of the theater bewildered, unsure of what they have just seen. Still others are angry, not at white oppression or racism, where one’s anger should be directed after watching a film called “Black Panther”, but at Hollywood and the filmmakers themselves. And, finally, more than a few of the people who are pissed off about the film are Africans. Not Wakandan Africans — real ones.</p>
                    </Wysiwyg>
                </Container>
            </SectionBox>
        )
    }
}

export default Home;