<template>
  <div id="app">
    <b-container>
        <router-view />
    </b-container>
    <footer-bar />
  </div>
</template>

<script>

import FooterBar from "@/components/layout/FooterNavBar.vue";

export default{
  name:"App",
  components:{
    FooterBar,
  },
}
</script>

<style>
html,
body {
	height: 100%;
}

a {
	text-decoration: none;
}

a:hover {
	text-decoration: none;
	font-weight: bold;
	color: chartreuse;
}

a.router-link-exact-active {
	color: #064635;
  font-weight: bold;
}

#app {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 80vh;
	font-family: basic-scans, sans-serif;
	font-size: 1em;
	line-height: 1.6;
}
</style>
