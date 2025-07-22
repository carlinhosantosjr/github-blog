import styled from 'styled-components'

export const Container = styled.div`
max-width: 100%;
display: flex;
flex-direction: column;
justify-self: center;
padding-bottom: 6.25rem;

@media (max-width: 860px) {
width: 100%;
}
`

export const SearchContainerHeader = styled.div`
display: flex;
margin-top: 3.75rem;

h2 {
  flex: 1;
  color: ${props => props.theme['base-subtitle']};
  font-size: 1.125rem;
}

span {
  color: ${props => props.theme['base-span']};
  font-size: 0.875rem;
}
`

export const ContentContainer = styled.div`
margin-top: 3.125rem;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;

@media (max-width: 860px) {
display: flex;
flex-direction: column;
margin: auto;
margin-top: 3.125rem;
  }
`
