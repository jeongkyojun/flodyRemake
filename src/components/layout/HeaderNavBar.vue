<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-nav>
      <b-row>
        <b-col cols="5">
          <router-link to="/newspid">
            <flody-logo-vue></flody-logo-vue>
          </router-link>
        </b-col>
        <b-col class="navbar">
          <router-link :to="{ name: 'study' }" class="nav-link">
            내 공부방</router-link>
        </b-col>
        <b-col class="navbar">
          <router-link :to="{ name: 'newspid' }" class="nav-link">
            뉴스피드</router-link>
        </b-col>
        <b-col class="navbar">
          <router-link :to="{ name: 'boardmain' }" class="nav-link">
            공부게시판</router-link>
        </b-col>
        <b-col class="navbar">
          <router-link :to="{ name: 'search' }" class="nav-link">
            자격증 검색</router-link>
        </b-col>
      </b-row>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FlodyLogoVue from '../FlodyLogo.vue';

export default {
  component: {FlodyLogoVue},
  methods: {
    gotoPage(link) {
      this.$router.push(link);
    },
  },
  setup() {
    const store = useStore();
    const isLogin = computed(() => store.state.memberStore.isLogin);
    return { isLogin };
  },
};
</script>

<style>
nav .navbar-nav a.router-link-active {
  color: #064635;
  font-weight: bold;
}

.logo {
  margin-top: 17px;
  margin-bottom: 17px;
  margin-left: 17px;
}

.navbar {
  font-size: large;
  color: #064635;
}
</style>
