import api from './apiConfig.jsx'

// ==================Users====================
export async function getOneUser(id) {
  const resp = await api.get(`/users/${id}`)
  return resp.data
}

export async function getAllUsers() {
  const resp = await api.get(`/users`)
  return resp.data
}

// ==================Interests====================
export async function getAllInterests() {
  const resp = await api.get(`/interests`)
  return resp.data
}

export async function addInterestToUser(interest) {
  const resp = await api.post(`/interests/${interest}`)
  return resp.data
}

// ==================Groups====================
export async function getOneGroup(id) {
  const resp = await api.get(`/groups/${id}`)
  return resp.data
}

export async function getAllGroups() {
  const resp = await api.get(`/groups`)
  return resp.data
}

//data should include title, description, image, private
export async function createGroup(data) {
  const resp = await api.post(`/groups`, { group: data })
  return resp.data
}

// ==================Posts====================
//data should just include post
export async function createPost(groupId, data) {
  const resp = await api.post(`/groups/${groupId}/posts`, { post: { post: data } })
  return resp.data
}