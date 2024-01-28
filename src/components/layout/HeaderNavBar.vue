<template>
  <div class="navApp">
    <div>
      <div id="logo">
        <router-link :to="{name: 'newspid'}">
          <flody-logo-vue></flody-logo-vue>
        </router-link>
      </div>
    </div>
    <div class="navbars">
      <b-row>
        <b-col class="navbar" cols="2">
              <router-link :to="{ name: 'study' }" class="nav-link">
                내 공부방</router-link>
            </b-col>
            <b-col class="navbar" cols="2">
              <router-link :to="{ name: 'newspid' }" class="nav-link">
                뉴스피드</router-link>
            </b-col>
            <b-col class="navbar" cols="2">
              <router-link :to="{ name: 'boardmain' }" class="nav-link">
                공부게시판</router-link>
            </b-col>
            <b-col class="navbar" cols="2">
              <router-link :to="{ name: 'search' }" class="nav-link">
                자격증 검색</router-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FlodyLogoVue from '../FlodyLogo.vue';

export default {
  name: 'HeaderBar',
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  width: 80rem;
  height: 8rem;
}
.navbars{
  width: 45rem;
}
nav .navbar-nav a.router-link-active {
  color: #064635;
  font-weight: bold;
}

.navbar {
  font-size: large;
  color: #064635;

  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  transform: scale(1.05);

}
</style>
