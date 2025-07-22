import { Container, ContainerStyled } from './styles'
import logo from '../../assets/logo.svg'
import lefteffect from '../../assets/left-effect.svg'
import righteffect from '../../assets/right-effect.svg'

export function Header() {
  return (
    <Container>
      <ContainerStyled>
        <img src={lefteffect} alt="" />
        <img src={logo} />
        <img src={righteffect} alt="" />
      </ContainerStyled>
    </Container>
  )
}
