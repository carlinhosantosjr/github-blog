import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: ${props => props.theme['base-post']};
width: 26rem;
height: 16.25rem;
border-radius: 8px;
padding: 1.875rem;
gap: 1rem;
border: 2px solid transparent;
transition: border 0.3s;
cursor: pointer;

&:hover {
  border-color: ${props => props.theme['base-label']};
}

p {
  display: flex;
  color: ${props => props.theme['base-text']};
}
`

export const HeaderCard = styled.div`
display: flex;
justify-content: space-between;

h3 {
flex: 4;
  color: ${props => props.theme['base-subtitle']};
}

span {
  flex: 1;
  color: ${props => props.theme['base-span']};
  font-size: 0.875rem;
}
`
export const MarkDownContainer = styled.div`
font-size: 1rem;
color: ${props => props.theme['base-text']};
`
