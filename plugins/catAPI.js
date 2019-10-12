import axios from 'axios'
import { api } from '../keys/keys'
const catAPI = axios.create({
	baseURL: api
})
export default catAPI