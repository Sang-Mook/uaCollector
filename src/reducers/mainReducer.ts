import produce from 'immer'
import { mainActions } from 'actions/mainAction'
import { mainCmds } from 'actionCmds/mainCmds'

const initMap = {
  data: ['']
}

const mainReducer = (state = initMap, action: mainActions) => {
  let nextState = state
  switch (action.type) {
    case mainCmds.MAIN_DATA_SUCCESS:
      nextState = produce(nextState, (draft) => {
        draft.data = action.payload.data
      })
      break
    default:
      break
  }
  return nextState
}

export default mainReducer
