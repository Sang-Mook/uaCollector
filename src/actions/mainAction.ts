import { createAction, ActionType } from 'typesafe-actions'
import { mainCmds } from '../actionCmds/mainCmds'

interface IMainDataType {
  date: Array<any>,
  data: string
}

export const mainDataApiAction = createAction(mainCmds.MAIN_DATA_REQUESTED)<IMainDataType>()
export const mainDataApiSucAction = createAction(mainCmds.MAIN_DATA_SUCCESS)<{ data: Array<any> }>()
export const mainDataApiFailAction = createAction(mainCmds.MAIN_DATA_FAILED)<string>()

const actions = {
  mainDataApiAction,
  mainDataApiSucAction,
  mainDataApiFailAction
}

export type mainActions = ActionType<typeof actions>
