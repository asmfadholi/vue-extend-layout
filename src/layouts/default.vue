<template>
  <div id="app">
    <!-- <header>
      <router-link to="/" title="Vue.js logo" aria-label="Go to home page">
        <img src="@/assets/logo.png" alt="Vue.js logo">
      </router-link>
      <h1 data-vel="header">{{ msg }} sikatsssssss hahahahas</h1>
      <h2>Essential Links bakarrrrrrr</h2>
      <nav>
        <ul>
          <li>
            <router-link to="/about" title="Go to about page" aria-label="Go to about page">About</router-link>
          </li>
          <li>
            <router-link to="/contact" title="Go to contact page" aria-label="Go to contact page">Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>
 -->
    <div class="main" role="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
