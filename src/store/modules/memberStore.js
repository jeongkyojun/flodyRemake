//import jwt_decode from "vue-jwt-decode";
import { login } from "@/api/member.js";
//import { getUserInfo } from "../../api/member";
//import { get_goals } from "@/api/goal.js";
import { api } from "@/api";
import { get_user_schedule_ofDay } from "@/api/schedule";
// 회원가입 및 로그인을 수행하는 js파일

//const api = apiInstance();

const memberStore = {
  namespaced: true,
  state: () => ({
    isLogin: false, // 로그인 여부
    isLoginError: null, // 로그인 에러 확인
    userInfo: null,
    selectedDate: null,
    goals: [
      {
        name: "정보처리기사",
        dueDate: "2022-09-01",
      },
      {
        name: "OPIC",
        dueDate: "2022-08-30",
      },
    ],
    todo_list: [],
    todos: [],
  }),
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
    getGoals: function(state){
      return state.goals;
    }
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
    SET_GOALS: (state, goals) => {
      state.goals = goals;
    },
    SET_TODO_LIST: (state, todo_list) => {
      state.todo_list = todo_list;
    },
    SET_SELECTEDDATE: (state, selectedDate) => {
      state.selectedDate = selectedDate;
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      // axios 작업
      await login(
        user,
        (response) => {
          console.log("message : " + response);
          console.log(response);
          if (response.data.msg == "SUCCESS") {
            console.log("로그인 성공");
            let token = response.data.token;
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            sessionStorage.setItem(`token`, token);
            api.defaults.headers[`token`] = token;
          } else {
            console.log("로그인 실패");
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", false);
          }
        },
        () => {},
      );
    },

    setLogout({ commit }) {
      commit("SET_USER_INFO", " ");
      commit("SET_IS_LOGIN", false);
      sessionStorage.removeItem("token"); //로그 아웃하면 액세스 토큰을 지워라
      api.defaults.headers["token"] = null;
    },

    async getUserInfo({ commit }, token) {
      //let decode_token = jwt_decode(token);
      /*
      await getUserInfo(
        //decode_token.userid,
        token,
        (response) => {
          if (response.data.msg === "SUCCESS") {
            commit("SET_USER_INFO", response.data.item);
          } else {
            console.log("유저 정보 없음!!");
          }
        },
        (error) => {
          console.log(error);
        },
      );
      */
      const data = {
        email: token,
        profile: "https://placekitten.com/300/800",
        name: "정교준",
        nickname: "고양고양이",
        followers: [],
        followings: [],
        posts: [],
        introduction: "고양이를 좋아하는 고양고양이입니다",
      }
      commit("SET_USER_INFO", data);
    },

    setGoals({ commit }) {
      /*
      get_goals(
        (success) => {
          console.log("목표 전달 응답 확인");
          console.log(success);
          if (success.data.msg === "SUCCESS") {
            console.log("목표 저장");
            commit("SET_GOALS", success.data.item);
          } else {
            console.log(" set_goals : 응답 실패!");
          }
        },
        (error) => {
          console.log(" set_goals :: 연결 실패!");
          console.log(error);
        },
      );
      */
      const data = [
        {
          title: "정보처리기사",
          dueDate: "2024-09-01",
        },
        {
          title: "OPIC",
          dueDate: "2024-08-30",
        },
      ];
      commit("SET_GOALS",data);
    },
    addGoals({commit},newGoalData){
      const data = this.getters.getGoals();
      console.log(data);
      data.add(newGoalData);
      commit("SET_GOALS",data);
    }
    ,
    async set_todo_list({ commit }, selectedDate) {
      console.log(selectedDate);
      await get_user_schedule_ofDay(
        selectedDate,
        (response) => {
          console.log(response);
          if (response.data.msg === "SUCCESS") {
            console.log("todoList setting");
            commit("SET_TODO_LIST", response.data.item);
          }
        },
        (error) => {
          console.log(error);
        },
      );
    },
    set_selectedDate({ commit }, selectedDate) {
      commit("SET_SELECTEDDATE", selectedDate);
    },
  },
};

export default memberStore;
