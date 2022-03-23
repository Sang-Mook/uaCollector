import { all } from 'redux-saga/effects'
import mainSagas from './main/mainSagaIndex'

function* rootSaga() {
  yield all([
    mainSagas()
  ])
}

export default rootSaga
