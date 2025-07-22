import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
background-color: ${props => props.theme['base-profile']};
display: flex;
flex-direction: column;
width: 54rem;
min-height: 10.625rem;
border-radius: 12px;
margin-top: -5.625rem;
gap: 0.2rem;
`

export const HeaderInfo = styled.div`
color: ${props => props.theme.blue};
width: 100%;
display: flex;
justify-content: space-between;
padding: 1.875rem;
padding-bottom: 0;
font-size: 0.75rem;

span {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

a {
  color: ${props => props.theme.blue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

`

export const TitleContainer = styled.div`
color: ${props => props.theme['base-title']};
padding: 1.125rem 0 0 1.875rem;
`

export const FooterInfo = styled.div`
padding: 0.75rem 0 0 1.875rem;
display: flex;
color: ${props => props.theme['base-span']};
gap: 2rem;

span {
  margin-left: 0.5rem;
}
`

export const ChevronLeft = styled(FontAwesomeIcon)`
margin-right: 0.625rem;
font-size: 0.75rem;
`

export const ArrowUpRight = styled(FontAwesomeIcon)`
margin-left: 0.5rem;
`
export const GithubIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
`
export const CalendarDayIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
`
export const CommentIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
`
