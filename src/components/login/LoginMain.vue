<template>
  <flody-logo-vue></flody-logo-vue>
  <br />
  <b-container>
    <b-row class="justify-content-md-center">
      <b-card style="max-width: 40rem; background-color: #f8f3f3">
        <b-alert show variant="danger" v-if="isLoginError">
          아이디 또는 비밀번호를 확인하세요
        </b-alert>
        <b-container ref="form">
          <br />
          <b-row>
            <b-col>
              <b-form-input v-model="user.email" placeholder="이메일 주소" required style="border: none"></b-form-input>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col>
              <b-form-input v-model="user.password" placeholder="비밀번호" type="password" style="border: none">
              </b-form-input>
            </b-col>
            <br />
            <br />
          </b-row>
          <br />
          <div class="button">
            <b-button text @click="confirm" style="color: #453535; background-color: #e1d3d2; border: none">로그인
            </b-button>
          </div>
          <br />
          <b-row>
            <b-col>
              <div class="button_2">
                <b-button v-b-modal.find variant="link" @click="findPW()" style="color: #b99b9a; text-decoration: none">
                  비밀번호 찾기
                </b-button>
              </div>
            </b-col>
            <b-col>
              <div class="button_2">
                <b-button @click="gotoPage('/membership')" variant="link" style="color: #b99b9a; text-decoration: none">
                  회원가입
                </b-button>
              </div>
            </b-col>
          </b-row>
          <br />
        </b-container>
      </b-card>
    </b-row>
    <b-modal hide-footer hide-header centered id="find" size="md" style="text-align: center;">
      <login-modal-find />
    </b-modal>
  </b-container>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

// import LoginRegister from "./LoginRegister.vue";
import LoginModalFind from "./modal/LoginModalFind.vue"; 
import FlodyLogoVue from '../FlodyLogo.vue';

export default {
  components: {LoginModalFind,FlodyLogoVue}, //LoginRegister,
  data() {
    return {
      fields: ["first_name", "last_name", "show_details"],
      user: {
        email: "admin@ssafy.com",
        password: "admin321",
      },
      idfind: false,
      pwfind: false,
    };
  },
  setup() {
    const store = useStore();
    const isLogin = computed(() => store.state.memberStore.isLogin);
    const isLoginError = computed(() => store.state.memberStore.isLoginError);
    return { store, isLogin, isLoginError };
  },
  methods: {
    async confirm() {
      /*
      await this.store.dispatch("memberStore/userConfirm", this.user);
      if (this.isLogin) {
        await this.store.dispatch("memberStore/getUserInfo", this.user.email); // 정보를 받아서 vuex의 user에 저장한다.
        const userInfo = this.store.state.memberStore.userInfo;
        this.store.dispatch("newspidStore/set_profile", userInfo);
        this.$router.push("/about"); // 라우터 페이지 이동
      }
      else {
        alert("아이디나 비밀번호가 일치하지 않습니다.");
      }
      */
      alert("입력한 아이디 : "+this.user.email+" , 패스워드 : "+this.user.password);
      this.store.dispatch("memberStore/getUserInfo", this.user.email); // 정보를 받아서 vuex의 user에 저장한다.
      const userInfo = this.store.state.memberStore.userInfo;
      console.log(userInfo);
      this.store.dispatch("newspidStore/set_profile", userInfo);
      this.$router.push("/about"); // 라우터 페이지 이동
    },
    gotoPage(link) {
      this.$router.push(link);
    },
    findID() {
      this.idfind = true;
      this.pwfind = false;
    },
    findPW() {
      this.pwfind = true;
      this.idfind = false;
    }
  },
};
</script>

<style>
.logo {
  text-align: center;
  margin-right: 44px;
  margin-top: 84px;
}

.button {
  text-align: center;
}

.button_2 {
  text-align: center;
}

.form-select {
  box-shadow: none !important;
}

.form-control {
  box-shadow: none !important;
}

.btn {
  --bs-btn-focus-shadow-rgb: white;
}

.btn_secondary {
  --bs-btn-focus-shadow-rgb: white;
}
</style>
