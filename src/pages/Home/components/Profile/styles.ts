import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
background-color: ${props => props.theme['base-profile']};
display: flex;
align-items: center;
width: 100%;
max-width: 54rem;
height: 13.25rem;
border-radius: 12px;
margin-top: -6.25rem;

@media (max-width: 550px) {
    gap: 0;
    padding: 0;    
  }

img {
  border-radius: 20px;
  width: 10.75rem;
  height: 10.75rem;
  margin: 20px 20px 20px 40px;

  @media (max-width: 550px) {
    gap: 0;
    margin: 0px 4px 10px;
    padding: 0;
    width: 8.75rem;
    height: 8.75rem;
    border-radius: 15px;
  }
}
`

export const InfoContainer = styled.div`
display: flex;
flex: 2;
flex-direction: column;
margin: auto;
gap: 1.2rem;
`

export const HeaderProfile = styled.div`
display: flex;
justify-content: space-between;
margin-right: 1.875rem;

h1 {
  color: ${props => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: bold;
}

a {
  display: flex;
  align-items: center;
  color: ${props => props.theme.blue};
  font-size: 0.75rem;
  gap: 0.4rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

  @media (max-width: 430px) {

    h1 {
      font-size: 1.25rem;
    }
    a {
      font-size: 0.7rem;
    }
  }
`

export const BioContainer = styled.div`
color: ${props => props.theme['base-text']};
font-size: 1rem;
width: 100%;
max-width: 100%;

span {
  @media (max-width: 380px) {
    font-size: 0.835rem;
  }
}
`

export const FooterContainer = styled.div`
display: flex;
gap: 2rem;

span {
  color: ${props => props.theme['base-subtitle']};
  padding-left: 0.375rem;
}

div {
  display: flex;
  align-items: center;
}

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }

   @media (max-width: 430px) {
    span {
      font-size: 0.875rem;
    }
   }
`

export const ArrowUpStyled = styled(FontAwesomeIcon)`
color: ${props => props.theme.blue};
`
export const GitHubStyled = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
font-size: 1.125rem;
`
export const BuildingStyled = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
font-size: 1rem;
`
export const UserGroupStyled = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
font-size: 0.875rem;
`
