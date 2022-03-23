import axios from 'axios'
import configs from './config'

const commonURL = process.env.NODE_ENV ? configs.baseUrl : 'http://localhost:4000'

export function getInstance() {
  return axios.create({
    baseURL: commonURL,
    timeout: 5000,
    headers: {
    }
  })
}
