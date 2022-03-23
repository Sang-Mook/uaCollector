import { takeEvery, all } from 'redux-saga/effects'
import { fetchMainDataApi } from './mainSaga'
import { mainCmds } from '../../actionCmds/mainCmds'

function* mainSagas() {
  yield all([
    takeEvery(mainCmds.MAIN_DATA_REQUESTED, fetchMainDataApi)
  ])
}

export default mainSagas
