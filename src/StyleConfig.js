import styled, {css, ThemeProvider} from 'styled-components';
import { rgba, size } from 'polished';

// VARIABLE
export const baseTheme = {

    // Responsive
    breakpointsXS: '320',
    breakpointsMD: '768',
    breakpointsLG: '1000',

    // Container
    containerWidthXS: '100%',
    containerWidthMD: '76.8rem',
    containerWidthLG: '100rem',

    // indents
    indentsXS: '2rem',
    indentsMD: '2rem',
    indentsLG: '3rem',

    // colors
    colorBase: '#121314',
    colorLighte: rgba('#121314', .8),
    colorLighter: rgba('#121314', .6),
    colorLightest: rgba('#121314', .4),

    colorBrand: '#5409ff',
    colorSound: '#9280bc',
    bgColorMode: '#e7e7e7',

    colorError: 'red',



    // base
    baseFontFamily: '\'Roboto Mono\', monospace;',
    baseFontWeight: '400',


    // h1..h6
    headingFontFamily: '"Roboto","HelveticaNeue","Helvetica Neue",sans-serif;',
    headingFontWeight: '700',

    // other
    transitionDurationBase: '.2s'
};

export const sizesMQ = {
    xs: baseTheme.breakpointsXS,
    md: baseTheme.breakpointsMD,
    lg: baseTheme.breakpointsLG
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizesMQ).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${sizesMQ[label]}px) {
      ${css(...args)}
    }
  `;

    return acc
}, {});


// BASE COMPONENTS

// SectionBox

export const SectionBox = styled.div`  
    ${media.xs`
        padding: 4rem 0;
    `}
    
    ${media.md`
    padding: 6rem 0;
    `}    
    
    ${media.lg`
    padding: 8rem 0;
    `}
`;

// container
export const Container = styled.div`
    margin: 0 auto;
    
    ${media.xs`
    max-width: ${props => props.theme.containerWidthXS};
    padding-left: ${props => props.theme.indentsXS};
    padding-right: ${props => props.theme.indentsXS};
    `}
    
    ${media.md`
    max-width: ${props => props.theme.containerWidthMD};
    padding-left: ${props => props.theme.indentsMD};
    padding-right: ${props => props.theme.indentsMD};
    `}
    
    ${media.lg`
    max-width: ${props => props.theme.containerWidthLG};
    padding-left: ${props => props.theme.indentsLG};
    padding-right: ${props => props.theme.indentsLG};
    `}
`;


// heading
export const TitleH1 = styled.h1`
    font-family: ${props => props.theme.headingFontFamily};
    font-weight: ${props => props.theme.headingFontWeight};
    font-size: 3.6rem;
    line-height: 1.4;
    
    ${media.md`
    font-size: 4.2rem;
    `}
`;

export const TitleH2 = styled.h2`
    font-family: ${props => props.theme.headingFontFamily};
    font-weight: ${props => props.theme.headingFontWeight};
    font-size: 3.2rem;
    line-height: 1.4;
    
    ${media.md`
    font-size: 3.2rem;
    line-height: 4rem;
    `}
`;

export const TitleH3 = styled.h3`
    font-family: ${props => props.theme.headingFontFamily};
    font-weight: ${props => props.theme.headingFontWeight};
    font-size: 2.8rem;
    line-height: 3.6rem;
    
    ${media.md`
    font-size: 2.8rem;
    line-height: 3.4rem;
    `}
`;

// forms

export const Button = styled.button`
        position: relative;
        display: inline-block;
        padding: 1rem 2rem;
        background: #000;
        //border: 2px dashed $color-base;
        color: #fff;
        text-align: center;
        transition: .6s;
        
        ${media.lg`
            &:hover {
                background: ${props => props.theme.colorLighte}
        `}
`;

export const ButtonLink = Button.withComponent('a');

export const ButtonLinkMod = ButtonLink.extend`
  color: #fff;
  &:visited {
  color: #fff !important;
  }
`;

export const Checkbox = styled.span`
        ${size('3rem', '3rem')};
        position: relative;
        display: inline-block;
        vertical-align: top;

        > input {
            ${size('100%', '100%')};
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            opacity: 0;

            + span {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1;
                background: #fff;
                border: 1px solid ${props => props.theme.colorLightest};

                &::after {
                    ${size('0', '0')};
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: ${props => props.theme.colorBase};
                    transition: all ${props => props.theme.transitionDurationBase};
                    content: "";
                }
            }

            &:checked {
                + span {
                    &::after {
                         ${size('1.5rem', '1.5rem')};
                    }
                }
            }

            &:disabled {
                + span {
                    opacity: .2;
                }
            }
        }

        &.is-error {
            > input + span {
                border-color: ${props => props.theme.colorError};
            }
        }
`;

export const Radio = styled.span`
        ${size('3rem', '3rem')};
        position: relative;
        display: inline-block;
        vertical-align: top;

        > input {
            ${size('100%', '100%')};
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            opacity: 0;

            + span {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1;
                background: #fff;
                border-radius: 50%;
                border: 1px solid ${props => props.theme.colorLightest};

                &::after {
                    ${size('0', '0')};
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: ${props => props.theme.colorBase};
                    border-radius: 50%;
                    transition: all ${props => props.theme.transitionDurationBase};
                    content: "";
                }
            }

            &:checked {
                + span {
                    &::after {
                         ${size('1.5rem', '1.5rem')};
                    }
                }
            }

            &:disabled {
                + span {
                    opacity: .2;
                }
            }
        }

        &.is-error {
            > input + span {
                border-color: ${props => props.theme.colorError};
            }
        }
`;

export const InputForm = styled.div`
   > input {
        display: block;
        width: 100%;
        padding: .5rem .75rem;
        border: 1px solid ${props => props.theme.colorLightest};

        &:disabled {
            opacity: .2;
        }
    }

    &.is-error {
        > input {
            border-color: ${props => props.theme.colorError};
        }
    }
`;

export const TextareaForm = styled.div`
    > textarea {
        display: block;
        width: 100%;
        min-height: 12rem;
        padding: .5rem .75rem;
        border: 1px solid ${props => props.theme.colorLightest};

        &:disabled {
            opacity: .2;
        }
    }

    &.is-error {
        > textarea {
            border-color: ${props => props.theme.colorError};
        }
    }
`;


// wysiwyg styles

export const Wysiwyg = styled.div`

    ${media.lg`
        margin: 0 auto;
        width: 80rem;
    `}
    

    > h1,
    > h2,
    > h3,
    > h4,
    > h5,
    > h6 {
        margin: 0;
        
        &:not(:first-child) {
            margin-top: 4rem;
        }
    
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }
    
    > h1 {
        font-family: ${props => props.theme.headingFontFamily};
        font-weight: ${props => props.theme.headingFontWeight};
        font-size: 3.6rem;
        line-height: 1.4;
    
        ${media.md`
            font-size: 4.2rem;
            line-height: 4.8rem;
        `}
    }
    
    > h2 {
        font-family: ${props => props.theme.headingFontFamily};
        font-weight: ${props => props.theme.headingFontWeight};
        font-size: 3.2rem;
        line-height: 1.4;
        
        ${media.md`
            font-size: 3.2rem;
            line-height: 4rem;
        `}
    }
    
    > h3 {
        font-family: ${props => props.theme.headingFontFamily};
        font-weight: ${props => props.theme.headingFontWeight};
        font-size: 2.8rem;
        line-height: 3.6rem;
        
        ${media.md`
            font-size: 2.8rem;
            line-height: 3.4rem;
        `}
    }
    
    a {
        display: inline-block;
        border-bottom: 1px dotted ${props => props.theme.colorBrand};
        line-height: 1.2;
        color: ${props => props.theme.colorBrand};
        text-decoration: none;
    }
    
    a:visited {
        color: ${props => props.theme.colorSound};
    }
  
    // Blockquote
    > blockquote {
        @include wysiwyg-indents-lg;

        padding-left: 4rem;
        border-left: 1px solid ${props => props.theme.colorLightest};

        > p {
            @include text-large;
        }

        > footer {
            margin-top: 1rem;

            > cite {
                // Styles
            }
        }
    }
    
        // Images
    > img {
        display: block;
        margin: 0 auto;
        
        // ${media.lg`
        //     margin-left: -10rem;
        //     margin-right: -10rem;
        // `}
    }

    > figure {
    
        ${media.lg`
            margin-left: -10rem;
            margin-right: -10rem;
        `}
    
    &:not(:first-child) {
        margin-top: 2rem;
    }

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

        > img {
            display: block;
            margin: 0 auto;
        }

        > figcaption {
            margin-top: 1rem;
            text-align: center;
            color: ${props => props.theme.colorLighter};
        }
    }

    > img {
        @include wysiwyg-indents-lg;
    }

    // Lists
    > dl {
    
        &:not(:first-child) {
            margin-top: 2rem;
        }
    
        &:not(:last-child) {
            margin-bottom: 2rem;
        }

        > dt {
            margin-bottom: 1rem;
            font-weight: ${props => props.theme.headingFontWeight};
        }

        > dd {
            // Styles
        }
    }

    > ol {
        list-style: decimal;
    }

    > ul {
        list-style: disc;
    }

    > ol,
    > ul {
    
    &:not(:first-child) {
        margin-top: 2rem;
    }

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
    
        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }

        @include wysiwyg-indents-md;

        ol,
        ul {
            @include wysiwyg-indents-sm;
        }

        li {
            margin-left: 2rem;
            margin-top: 1rem;
        }
    }

    // Paragraphs
    > p {
        &:not(:first-child) {
            margin-top: 2rem;
        }
    
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }

    // Table
    &__table {
        overflow-x: auto;
        
        ${media.lg`
            margin-left: -10rem;
            margin-right: -10rem;
        `}

        > table {
            width: 100%;
            table-layout: fixed;

            caption {
                color: ${props => props.theme.colorLighter};
                text-align: right;
            }

            th {
                border-bottom: 1px solid #ccc;
                text-align: left;
            }

            td {
                border-bottom: 1px solid #eee;
            }

            th,
            td {
                padding: .5rem 0;
            }
            
            th,
            td:not(:first-child) {
              padding-left: .5rem;
            }
                            
            th,
            td:not(:last-child) {
              padding-right: .5rem;
            }
        }
    }

    // Video
    > .video {
        
        ${media.lg`
            margin-left: -10rem;
            margin-right: -10rem;
            padding-bottom: 71.25%; // 16:9
        `};
       
        position: relative;
        padding-bottom: 56.25%; // 16:9
        height: 0;
        
        &:not(:first-child) {
          margin-top: 2rem;
        }

        &:not(:last-child) {
          margin-bottom: 2rem;
        }


        > iframe {
            ${size('100%')};
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    
    > .ya-music {
      padding: 2rem;
      background: #fff;
      overflow-x: auto;
      
        ${media.lg`
            padding: 3rem;
            margin-left: -10rem;
            margin-right: -10rem;
        `};
        
        &:not(:first-child) {
          margin-top: 2rem;
        }

        &:not(:last-child) {
          margin-bottom: 2rem;
        }
        
        > iframe {
        border:none;
        width:900px;
        height:600px;
        }
    }
`;