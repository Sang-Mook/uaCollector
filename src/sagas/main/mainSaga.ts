import { call, put } from 'redux-saga/effects'
import { getInstance } from 'common/common'
import { getTestApi } from '../../apis/testApi'
import { mainDataApiSucAction, mainDataApiFailAction } from '../../actions/mainAction'

export function* fetchMainDataApi(action: any) {
  try {
    const instance = getInstance()
    const result = yield call(getTestApi, instance, action.date)

    yield put(mainDataApiSucAction({ data: refineData(result.data) }))
  } catch (err) {
    const errMsg = err.response ? err.response.data.message : err.message
    yield put(mainDataApiFailAction(errMsg))
  }
}

function refineData(data: any): Array<any> {
  return data || []
}
