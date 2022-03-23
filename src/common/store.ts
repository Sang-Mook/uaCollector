import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
// import { initialize, setActiveLanguage } from 'react-localize-redux'
// import { renderToStaticMarkup } from 'react-dom/server'

import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'
import initialState from './rootState'
// import { localeData } from './locale/locale'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    process.env.NODE_ENV === 'development'
      ? applyMiddleware(sagaMiddleware, logger) : applyMiddleware(sagaMiddleware)
  )

  // const lang = localStorage.getItem('lang')
  // store.dispatch(initialize({
  //   languages: ['en', 'ko'],
  //   translation: localeData(),
  //   options: { renderToStaticMarkup }
  // }))
  // if (lang) {
  //   store.dispatch(setActiveLanguage(lang))
  // } else {
  //   store.dispatch(setActiveLanguage('ko'))
  // }

  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
