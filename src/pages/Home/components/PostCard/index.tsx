import { Container, HeaderCard, MarkDownContainer } from './styles'
import { postCardProps } from '../../../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { calculateDate } from '../../../../utils/calculateDate'

export function PostCard(data:postCardProps) {
  const newText = truncateByLetters(data.body, 200)

  function truncateByLetters(text: string, maxLetters: number) {
    if (text.length > maxLetters) {
      return text.slice(0, maxLetters) + '...'
    }
    return text
  }

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
        {newText}
      </MarkDownContainer>
    </Container>
  )
}
