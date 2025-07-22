import { useContext } from 'react'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { Container, ContentContainer, SearchContainerHeader } from './styles'
import { UserContext } from '../../contexts/UserContext'

export function Home() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Profile />
      <SearchContainerHeader>
        <h2>Publicações</h2>
        <span>{user.posts.length} publicações</span>
      </SearchContainerHeader>
      <SearchForm />
      <ContentContainer>
        {user.posts.length >= 1
          ? user.posts.map((post) => (
            <PostCard
              key={post.number}
              number={post.number}
              title={post.title}
              body={post.body}
              created_at={post.created_at}
            />))
          : ''}

      </ContentContainer>
    </Container>
  )
}
