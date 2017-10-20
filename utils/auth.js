import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

export const extractInfoFromHash = () => {
  if (process.SERVER_BUILD) return
  const { id_token, state } = getQueryParams()
  return {
    token: id_token,
    secret: state
  }
}

export const setToken = (token) => {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)))
  Cookie.set('jwt', token)
}

export const setUser = (token) => {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem('user', token)
  Cookie.set('user', token)
}

export const setCounter = (token) => {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem('counter', token)
  Cookie.set('counter', token)
}

export const unsetToken = () => {
  if (process.SERVER_BUILD) return
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
  window.localStorage.removeItem('secret')
  Cookie.remove('jwt')
  window.localStorage.setItem('logout', Date.now())
}

export const getUserFromCookie = (req) => {
  if (!req.headers.cookie) return
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('user='))
  console.log(jwtCookie)
  if (!jwtCookie) return
  const jwt = jwtCookie.split('=')[1]
  return jwt
}

export const getCounterFromCookie = (req) => {
  
  if (!req.headers.cookie) return
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('counter='))
  console.log(jwtCookie)
  if (!jwtCookie) return
  const jwt = jwtCookie.split('=')[1]
  return jwt
}

export const  getUserFromLocalStorage = () => {
  const json = window.localStorage.user
  return json 
}

export const setSecret = (secret) => window.localStorage.setItem('secret', secret)

export const checkSecret = (secret) => window.localStorage.secret === secret
