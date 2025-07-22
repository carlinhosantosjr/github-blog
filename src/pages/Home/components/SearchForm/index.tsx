import { useForm } from 'react-hook-form'
import { Container, StyledInput } from './styles'
import { useContext, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'
import { UserContext } from '../../../../contexts/UserContext'

export function SearchForm() {
  const { fetchPosts } = useContext(UserContext)
  const [inputText, setInputText] = useState('')
  const { register, watch } = useForm()
  const watchSearch = watch('searchInput')

  const fetchResults = debounce((query: string) => {
    fetchPosts(query)
    setInputText(watchSearch)
  }, 500)

  useEffect(() => {
    if (watchSearch !== inputText) {
      fetchResults(watchSearch)
    }
    return () => {
      fetchResults.cancel()
    }
  }, [watchSearch, fetchResults, inputText])

  return (
    <Container>
      <StyledInput
        placeholder="Buscar conteúdo"
        {...register('searchInput')}
      />
    </Container>
  )
}
