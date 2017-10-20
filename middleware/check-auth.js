import { getUserFromCookie, getUserFromLocalStorage, getCounterFromCookie } from '~/utils/auth'

export default function ({ isServer, store, req }) {
   // If nuxt generate, pass this middleware

  if (isServer && !req) return
   const loggedUser = isServer ? getUserFromCookie(req) : getUserFromLocalStorage()
const cc  = getCounterFromCookie(req)
	console.log(cc)
	if(loggedUser != undefined){
		store.commit('setUser', loggedUser)
		store.commit('setCounter',cc)
		
	} else {
		store.commit('setUser','anonymus')
	}
	///const loggedUser = getUserFromLocalStorage()
	//console.log('loggedUser' + loggedUser)
  
}
	