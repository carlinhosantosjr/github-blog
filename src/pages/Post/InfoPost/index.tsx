import {
  Container, HeaderInfo, ChevronLeft, ArrowUpRight,
  TitleContainer, FooterInfo,
  GithubIcon,
  CalendarDayIcon,
  CommentIcon,
} from './styles'
import {
  faChevronLeft, faArrowUpRightFromSquare, faCalendarDay,
  faComment,
} from
  '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { postInfoProps } from '../../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { calculateDate } from '../../../utils/calculateDate'

export function InfoPost(data : postInfoProps) {
  const navigate = useNavigate()
  function handleClickBack() {
    navigate('/')
  }
  return (
    <>
      {data
        ? (
          <Container>
            <HeaderInfo>
              <span onClick={handleClickBack}>
                <ChevronLeft icon={faChevronLeft} />VOLTAR
              </span>
              <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                <span>VER NO GITHUB
                  <ArrowUpRight icon={faArrowUpRightFromSquare} />
                </span>
              </a>
            </HeaderInfo>
            <TitleContainer>
              <h2>{data.title}</h2>
            </TitleContainer>
            <FooterInfo>
              <div>
                <GithubIcon icon={faGithub} />
                <span>{data.user}</span>
              </div>
              <div>
                <CalendarDayIcon icon={faCalendarDay} />
                <span>Há {calculateDate(data.created_at)} dias</span>
              </div>
              <div>
                <CommentIcon icon={faComment} />
                <span>{data.comments} comentários</span>
              </div>
            </FooterInfo>
          </Container>
          )
        : ''}
    </>
  )
}
