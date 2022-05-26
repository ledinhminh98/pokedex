import { Input } from 'components/elements'
import { Formik } from 'formik'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Creators as PokemonActions } from 'store/modules/pokemons/actions'
import { Form } from './styles'

const SearchPokemon: React.FC = () => {
  const dispatch = useDispatch()
  const [time, setTime] = useState<number | null>(null)

  const handleSubmitForm = useCallback(
    (value) => {
      if (value) {
        dispatch(PokemonActions.searchPoke(value))
        return
      }
      dispatch(PokemonActions.getPokes(1))
    },
    [dispatch],
  )

  const getAllPokes = useCallback(
    (value) => {
      dispatch(PokemonActions.getPokes(value))
    },
    [dispatch],
  )

  const customHandleChange = useCallback(
    (event, change, submit) => {
      change(event)

      if (time) clearTimeout(time)
      setTime(setTimeout(() => submit(), 750))
    },
    [time],
  )

  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values) => {
        if (!values.search) {
          getAllPokes(1)
          return
        }

        handleSubmitForm(values.search.toLowerCase())
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        touched,
        submitForm,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="search"
            placeholder="Search by name or Pokédex number"
            onChange={(e) => customHandleChange(e, handleChange, submitForm)}
            value={values.search}
            touched={touched.search}
            errors={errors.search}
          />
        </Form>
      )}
    </Formik>
  )
}

export default SearchPokemon
