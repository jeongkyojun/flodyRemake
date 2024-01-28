<template>
  <div class="about">
    <div id="app">
      <header-bar />
      <b-container fluid>
        <b-row>
          <b-col cols="3">
            <my-page-nav-bar/>
            <group-nav-bar />
          </b-col>
          <b-col cols="9">
            <router-view />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/layout/HeaderNavBar.vue";
import MyPageNavBar from '@/components/layout/MyPageNavBar.vue';
import GroupNavBar from '@/components/layout/GroupNavBar.vue';

export default{
  name:"App",
  components:{
    HeaderBar,
    MyPageNavBar,
    GroupNavBar,
  },
}
</script>

<style>
.about {
	display: flex;
	flex-direction: column;
	justify-content: center;
  width: 80rem;
	font-family: basic-scans, sans-serif;
	font-size: 1em;
	line-height: 1.6;
}
</style>
