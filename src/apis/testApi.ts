import { AxiosInstance } from 'axios'

export const getTestApi = (instance: AxiosInstance, date: string = '20200120') => {
  const result = instance.get(`/menu/getSuwonMenuList.do?dt=${date}&hallNm=together`)
  return result
}
