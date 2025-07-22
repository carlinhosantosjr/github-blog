import styled from 'styled-components'

export const Container = styled.header`
display: flex;
height: 18.5rem;
justify-content: space-between;
background: ${props => props.theme['base-background']};
`

export const ContainerStyled = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0;
height: 100%;
width: 100%;
background: radial-gradient(
      ellipse at 1% 30%,
      rgba(20,88,156, 0.2),
      transparent 80%
    ),radial-gradient(
      ellipse at 50% 100%,
      rgba(20,88,156, 0.2),
      transparent 80%
    ),radial-gradient(
      ellipse at 100% 0%,
      rgba(20,88,156, 0.2),
      transparent 80%
    );

     img:nth-of-type(2) { 
      margin-top:-4.688rem;
      margin-left:-2.188rem;
    }
`
