import api from './apiConfig.jsx'

export async function getOneGroup(id) {
  const resp = await api.get(`/groups/${id}`)
  return resp.data
}