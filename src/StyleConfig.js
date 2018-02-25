import styled, {css, ThemeProvider} from 'styled-components';

// variables
export const baseTheme = {

    // Responsive
    breakpointsXS: '320',
    breakpointsMD: '768',
    breakpointsLG: '1380',

    // indents
    indentsXS: '2rem',
    indentsMD: '2rem',
    indentsLG: '3rem',

    // colors
    colorBase: '#121314',
    colorLite: 'rgba(18,19,20, .8)',
    colorLighter: 'rgba(18,19,20, .6)',
    colorLightest: 'rgba(18,19,20, .4)',

    colorBrand: '#5409ff',
    colorSound: '#9280bc',
    bgColorMode: '#e7e7e7',

    // h1..h6
    headingFontFamily: '"Roboto","HelveticaNeue","Helvetica Neue",sans-serif',
    headingFontWeight: '700',
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


// base components

// SectionBox

export const SectionBox = styled.div`  
    ${media.xs`
        padding: 4rem 0;
    `}
    
    ${media.md`
    padding: 6rem 0;
    `}
`;

// container
export const Container = styled.div`
    margin: 0 auto;
    
    ${media.xs`
    width: 100%;
    padding-left: ${props => props.theme.indentsXS};
    padding-right: ${props => props.theme.indentsXS};
    `}
    
    ${media.md`
    width: 100%;
    padding-left: ${props => props.theme.indentsMD};
    padding-right: ${props => props.theme.indentsMD};
    `}
    
    ${media.lg`
    max-width: 138rem;
    padding-left: ${props => props.theme.indentsLG};
    padding-right: ${props => props.theme.indentsLG};
    `}
`;

export const TitleH1 = styled.h1`
    font-family: ${props => props.theme.headingFontFamily};
    font-weight: ${props => props.theme.headingFontWeight};
    font-size: 3.6rem;
    line-height: 4.2rem;
    
    ${media.md`
    font-size: 7.5rem;
    line-height: 8rem;
    `}
`;

export const TitleH2 = styled.h2`
    font-family: ${props => props.theme.headingFontFamily};
    font-weight: ${props => props.theme.headingFontWeight};
    font-size: 3.2rem;
    line-height: 1.5;
    
    ${media.md`
    font-size: 5rem;
    line-height: 1.5;
    `}
`;

export const TitleH3 = styled.h3`
    font-family: ${props => props.theme.headingFontFamily};
    font-weight: ${props => props.theme.headingFontWeight};
    font-size: 3.2rem;
    line-height: 1.5;
    
    ${media.md`
    font-size: 4.6rem;
    line-height: 1.5;
    `}
`;


export const Wysiwyg = styled.div`

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
    
    a {
        display: inline-block;
        border-bottom: 1px dotted ${props => props.theme.colorBrand};
        line-height: 1.2;
        color: ${props => props.theme.colorBrand};
        text-decoration: none;
    }
  
    // Blockquote
    > blockquote {
        @include wysiwyg-indents-lg;

        padding-left: 4rem;
        border-left: 1px solid $color-lightest;

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
        }

        > figure {
        
        &:not(:first-child) {
            margin-top: 2rem;
        }
    
        &:not(:last-child) {
            margin-bottom: 2rem;
        }

            > img {
                display: block;
            }

            > figcaption {
                margin-top: 1rem;
                color: $color-lighter;
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
                font-weight: $font-weight-title;
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
            @include wysiwyg-indents-lg;

            overflow-x: auto;

            > table {
                width: 100%;
                table-layout: fixed;

                caption {
                    color: $color-lighter;
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
                    padding: {
                        top: .5rem;
                        bottom: .5rem;
                    }

                    &:not(:first-child) {
                        padding-left: .5rem;
                    }

                    &:not(:last-child) {
                        padding-right: .5rem;
                    }
                }
            }
        }

        // Video
        &__video {
            @include wysiwyg-indents-lg;

            position: relative;
            padding-bottom: 56.25%; // 16:9
            height: 0;

            > iframe {
                @include size(100%);

                position: absolute;
                top: 0;
                left: 0;
            }
        }
`;