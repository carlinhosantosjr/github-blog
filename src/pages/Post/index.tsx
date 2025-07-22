import { InfoPost } from './InfoPost'
import { Container, MarkdownContainer } from './styles'
import Markdown from 'react-markdown'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useParams } from 'react-router-dom'

export function Post() {
  const { user } = useContext(UserContext)
  const params = useParams()

  const filteredPostArray = user.posts.filter((post) =>
    post.key === Number(params.id))

  const filteredPost = filteredPostArray[0]

  return (
    <>
      {filteredPost
        ? (
          <Container>
            <InfoPost
              key={filteredPost.number}
              comments={filteredPost.comments}
              created_at={filteredPost.created_at}
              html_url={filteredPost.html_url}
              title={filteredPost.title}
              user={user.userInfo.login}
            />
            <MarkdownContainer>
              <Markdown
                components={{
                  code: ({ className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '')
                    return match
                      ? (
                        <SyntaxHighlighter language={match[1]} style={oneDark}>
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                        )
                      : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                        )
                  },
                }}
              >
                {
            filteredPost
              ? filteredPost.body
              : ''
          }
              </Markdown>
            </MarkdownContainer>
          </Container>)
        : ''}
    </>
  )
}
