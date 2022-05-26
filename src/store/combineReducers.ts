import { combineReducers } from 'redux'
import pokemonsReducer, {
  INITIAL_STATE_POKE,
  IPokemonState,
} from './modules/pokemons/reducer'
import sharedReducer, {
  INITIAL_STATE_SHARED,
  ISharedState,
} from './modules/shared/reducer'

export interface IState {
  pokemons: IPokemonState
  shared: ISharedState
}

export const initialState: IState = {
  pokemons: INITIAL_STATE_POKE,
  shared: INITIAL_STATE_SHARED,
}

export default combineReducers({
  pokemons: pokemonsReducer,
  shared: sharedReducer,
})
