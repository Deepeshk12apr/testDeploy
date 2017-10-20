<template>
<div>
	<h4>count : {{showcount}}
			user: {{showuser}}</h4>
	<v-btn light @click.native="incCounter()" >inc</v-btn>
	<v-btn light @click.native="setUser()" >get user</v-btn>	
	<nuxt-link to="/about">
	  <div class="text-xs-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      </div>
	</nuxt-link>
</div>
	
</template>


<script>
import axios from 'axios'
import { setUser,setCounter, checkSecret, extractInfoFromHash ,getUserFromLocalStorage} from '../utils/auth'

  export default {
    data () {
      return {
        
      }
    },
    middleware: 'check-auth',
    computed: {
      showcount () {
        return this.$store.state.count
      },
      showuser () {        
       // const loggedUser = getUserFromLocalStorage()
        // console.log(loggedUser)
        return this.$store.state.username
      }
    },
    methods: {
      setUser: function (todo) {
      	console.log(this.$store.state)
      	var vs = this.$store
      	axios.get('https://reqres.in/api/users/2')
			  .then(function (response) {
			  	console.log(response.data.data.first_name)
          setUser(response.data.data.first_name)
			    vs.commit('setUser', response.data.data.first_name)
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		// console.log('payload : '+first_name)	  
		// this.$store.commit('setUser',first_name)	  
        //this.$store.dispatch('incCount')
      },
      incCounter:function(){

        this.$store.commit('incCount')
        setCounter(this.$store.state.count)
      }
    }
  }
</script>

<style>
	
</style>