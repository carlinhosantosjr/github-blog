import {
  ArrowUpStyled,
  BioContainer, BuildingStyled, Container, FooterContainer,
  GitHubStyled,
  HeaderProfile, InfoContainer,
  UserGroupStyled,
} from './styles'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from
  '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'

export function Profile() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <img src={user.userInfo.avatarUrl} alt="" />
      <InfoContainer>
        <HeaderProfile>
          <h1>{user.userInfo.name}</h1>
          <a
            href={user.userInfo.htmlUrl}
            target="_blank" rel="noopener noreferrer"
          >
            GITHUB
            <ArrowUpStyled icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderProfile>
        <BioContainer>
          <span>
            {user.userInfo.bio}
          </span>
        </BioContainer>
        <FooterContainer>
          <div>
            <GitHubStyled icon={faGithub} />
            <span>{user.userInfo.login}</span>
          </div>
          {user.userInfo.company
            ? (
              <div>
                <BuildingStyled icon={faBuilding} />
                <span>{user.userInfo.company}</span>
              </div>
              )
            : ''}

          <div>
            <UserGroupStyled icon={faUserGroup} />
            <span>{user.userInfo.followers} seguidores</span>
          </div>
        </FooterContainer>
      </InfoContainer>
    </Container>
  )
}
