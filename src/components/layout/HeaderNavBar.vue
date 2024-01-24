<template>
  <div class="navApp">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-nav>
        <b-row style="height:5rem;">
          <b-col cols="4">
            <div class="logo">
              <router-link to="/newspid">
                <flody-logo-vue></flody-logo-vue>
              </router-link>
            </div>
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
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FlodyLogoVue from '../FlodyLogo.vue';

export default {
  components: { FlodyLogoVue },
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

.navApp{
  width: 80rem;
  height: 10rem;
  border: 1px solid black;
}

nav .navbar-nav a.router-link-active {
  color: #064635;
  font-weight: bold;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar {
  font-size: large;
  color: #064635;
}
</style>
