<template>
  <v-app toolbar footer>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
    >
      <v-list>
        <v-list-tile 
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>add_shopping_cart</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer> 
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
          { icon: 'bubble_chart', title: 'My Account', to: '/myaccount'},
          { icon: 'bubble_chart', title: 'About us', to: '/about' }
        ],
        miniVariant: false,
        title: 'Z'
      }
    }
  }
</script>