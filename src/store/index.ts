import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducer from './combineReducers'
import sagas from './combineSagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools({})

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(sagas)

export default store
