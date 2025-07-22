import styled from 'styled-components'

export const Container = styled.div`
width: 54rem;
margin-top: 0.75rem;
`

export const StyledInput = styled.input`
border: none;
box-shadow: 0 0 0 0.5px ${props => props.theme['base-label']};
border: 1px solid transparent;
background-color: ${props => props.theme['base-input']};
width: 100%;
height: 2.813rem;
border-radius: 6px;
color: ${props => props.theme['base-text']};
font-size: 1rem;
padding-left: 0.875rem;

&:focus {
    border: 1px solid ${props => props.theme.blue};
}

&::placeholder {
  color: ${props => props.theme['base-label']};
}
`
