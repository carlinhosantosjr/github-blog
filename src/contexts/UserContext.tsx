import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface userInfoProps {
  name: string,
  login: string,
  followers: number,
  avatarUrl: string,
  htmlUrl: string,
  company: string,
  bio: string
}

export interface postCardProps {
  number: number,
  body: string,
  title: string
  created_at: string
}

export interface postUser {
  login: string
}

export interface postInfoProps {
  comments: string,
  created_at: string,
  html_url: string,
  key: number,
  title: string,
  user: string,
}

export interface postProps {
  key: number,
  title: string,
  comments: string,
  body: string,
  created_at: string,
  number: number,
  html_url: string,
  user: postUser
}

export interface postData {
  data: postProps
}

interface userProps {
  userInfo: userInfoProps,
  posts: postProps[]
}

interface UserContextType {
  user: userProps
  fetchPosts: (query:string) =>void
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<userProps>({
    userInfo: {
      name: '',
      login: '',
      followers: 0,
      avatarUrl: '',
      htmlUrl: '',
      company: '',
      bio: '',
    },
    posts: [],
  })

  const fetchUserInfo = async () => {
    const response = await api.get('/users/carlinhosantosjr')
    const {
      name, login, followers,
      avatar_url: avatarUrl,
      html_url: htmlUrl,
      company,
      bio,
    } = response.data

    setUser((state) => ({
      ...state,
      userInfo: {
        name,
        login,
        followers,
        avatarUrl,
        htmlUrl,
        company,
        bio,
      },
    }))
  }

  const fetchPosts = async (query?: string) => {
    const searchQuery = query
      ? `${query} user:carlinhosantosjr repo:GitHub-Challenge`
      : 'user:carlinhosantosjr repo:GitHub-Challenge'

    const response = await
    api.get('/search/issues', {
      params: {
        q: searchQuery,
      },
    })
    const posts = await response.data.items

    const formattedPosts = await posts
      .filter((post:postProps) => post.body)
      .map((post:postProps) => {
        return {
          key: post.number,
          title: post.title,
          comments: post.comments,
          body: post.body,
          created_at: post.created_at,
          number: post.number,
          html_url: post.html_url,
          user: post.user.login,
        }
      })
    setUser((state) => ({
      ...state,
      posts: formattedPosts,
    }))
  }
  // console.log(user)

  useEffect(() => {
    fetchUserInfo()
    fetchPosts()
  }, [])

  return (
    <UserContext.Provider value={{
      user,
      fetchPosts,
    }}
    >
      {children}
    </UserContext.Provider>
  )
}
