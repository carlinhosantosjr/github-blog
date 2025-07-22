import { Container, HeaderCard, MarkDownContainer } from './styles'
import { postCardProps } from '../../../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { calculateDate } from '../../../../utils/calculateDate'

export function PostCard(data:postCardProps) {
  const navigate = useNavigate()
  function handleClickOnCard(data:postCardProps) {
    navigate(`post/${data.number}`)
  }

  return (
    <Container onClick={() => handleClickOnCard(data)}>
      <HeaderCard>
        <h3>{data.title}</h3>
        <span>Há {calculateDate(data.created_at)} dias</span>
      </HeaderCard>
      <MarkDownContainer>
        {data.body}
      </MarkDownContainer>
    </Container>
  )
}
