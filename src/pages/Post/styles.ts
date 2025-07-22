import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 6.25rem;
color: white;
gap: 3rem;
`

export const MarkdownContainer = styled.div`
max-width: 53.125rem;
padding: 0 1.25rem 12.5rem 1.25rem;

text-align: justify;
color: ${props => props.theme['base-text']};
line-height: 160%;
white-space: pre-wrap;

h1, h2, h3, h4 {
  color: ${props => props.theme.blue};
}
`
