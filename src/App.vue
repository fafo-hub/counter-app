<template>
  
    <!-- <router-link to="/counter"> <h1>sjhvskjf</h1> </router-link> -->
    <router-view />
    <CounterPage />
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CounterPage from './components/CounterPage.vue'
export default {
  name: 'App',
  components: {
    CounterPage,
  }
}
</script>

<style>
html {
  height: 100vh;
    display: grid;
    align-content: center;
    /* justify-content: center; */
}
body {
  background-color: #013d3bff;
  /* background-color: #012928ff; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #012928ff;
  /* margin-top: 60px; */

    width: 53%;
    height: 18em;
    padding: 22px 0 5px 0;

    position: relative;
    left: 23%;
    /* width: 125%; */
}
h1, h3 {
  color: white;
}
@media screen and (max-width: 768px) {
  #app {
    width: 100%;
    left: 0;
  }
}
</style>
