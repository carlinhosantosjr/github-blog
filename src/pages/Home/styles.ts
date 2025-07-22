import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-self: center;
padding-bottom: 6.25rem;
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
`
