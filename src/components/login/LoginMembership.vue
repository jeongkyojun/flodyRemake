<template>
  <!-- 회원가입 화면 -->
  <flody-logo-vue class="logo">

  </flody-logo-vue>
  <br>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-card style="height: 31rem; max-width: 40rem; background-color: #F8F3F3;">
        <b-container ref="form">
          <br>
          <b-row>
            <b-col>
              <b-input-group>
                <b-form-input v-model="user.email" :state="isUserid" placeholder="이메일 주소" required style="border: none;"
                  @keyup="emailChecking()">
                </b-form-input>
                <b-input-group-append>
                  <b-button @click="idDuplicateChecking"> 중복확인 </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col>
              <b-form-input v-model="user.name" placeholder="성명" style="border: none;"></b-form-input>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col>
              <b-form-input v-model="user.nickname" placeholder="닉네임" style="border: none;"></b-form-input>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col>
              <b-form-input v-model="user.password" :state="pwcheck.value" type="password" placeholder="비밀번호"
                style="border: none;" @keyup="pwChecking"></b-form-input>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col>
              <b-form-input type="password" :state="isSame" v-model="password" placeholder="비밀번호 확인"
                style="border: none;" @keyup="pwChecking2"></b-form-input>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col>
              <b-form-input v-model="user.phone" placeholder="휴대폰 번호" style="border: none;"
                @keyup="getMask(user.phone)">
              </b-form-input>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col style="padding:0px 4px">
              <div class="button" style="text-align:right">
                <b-button text @click="submit" style="color: #453535; background-color: #E1D3D2; border: none;">회원가입
                </b-button>
              </div>
            </b-col>
            <b-col style="padding:0px 4px">
              <div class="button" style="text-align:left">
                <b-button text @click="back" style="color:  #453535; background-color: #F1EAE9; border: none;"> 취소
                </b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import { registMember, userIdDuplicated } from '@/api/member.js';
import FlodyLogoVue from '../FlodyLogo.vue';

export default {
  components : {FlodyLogoVue},
  data() {
    return {
      user: {
        email: "admin@ssafy.com",
        password: "admin123",
        profile: "https://placekitten.com/200/500",
        name: "김관리",
        nickname: "관리자",
        address: "SSAFY 대전캠퍼스",
        phone: "010-1234-4567",
        admin: 'true',
        followers: 88,
        followings: 95,
        posts: 3,
      },
      password: "",
      isduplicate: true, // 아이디 중복 여부
      isUserid: false, // 아이디 존재여부
      idcheck: false, // 아이디 길이 확인 = 최종 체크
      pwcheck: {
        value: false, // 비밀번호 무결성 확인
        key: {
          isUpper: true, // 대문자 포함여부
          isLower: true, // 소문자 포함여부
          isSpecial: true, // 특수문자 포함여부
        }
      },
      isSame: false, // 비밀번호 동일 확인
      namecheck: false,
      addrcheck: false,
      phonecheck: false,
    }
  },
  methods: {
    async submit() {
      console.log("registMember 실행");
      await this.registMember();
      console.log("registMember 종료");
    },

    idChecking() {
      if (!this.isduplicate) this.isduplicate = true;
      if (this.isUserid) this.isUserid = false;
      if (this.user.email.length > 4) {
        console.log("아이디 체크");
        this.idcheck = true;
      } else {
        this.idcheck = false;
      }
    },
    async idDuplicateChecking() {
      console.log(this.user.email);
      if (this.isUserid && !this.isduplicate)
        alert("이미 확인한 아이디입니다.");
      else {
        await userIdDuplicated(
          this.user.email,
          (response) => {
            console.log(response);
            let msg = "중복 발생!";
            if (response.data.msg === "SUCCESS") {
              msg = "사용가능한 아이디입니다.";
              this.isduplicate = false;
            }
            alert(msg);
          },
          (error) => {
            console.log("연결 오류!");
            console.log(error);
          },
        );
        if (this.idcheck && !this.isduplicate)
          this.isUserid = true;
        else
          this.isUserid = false;
      }
    },
    pwChecking() {
      // 현재는 글자수만 확인
      if (this.user.password.length > 7) {
        this.pwcheck.value = true;
      } else {
        this.pwcheck.value = false;
      }
      this.pwChecking2();
    },
    pwChecking2() {
      console.log(this.user.password + " " + this.password);
      console.log(this.user.password == this.password);
      //패스워드 동일 여부 확인
      if (this.user.password == this.password) {
        this.isSame = true;
      }
      else {
        this.isSame = false;
      }
    },
    // 이메일이 맞는지 확인
    emailCheck() {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      this.emailcheck = re.test(this.user.email);
      console.log(this.emailcheck);
    },

    // 이메일 체크
    emailChecking() {
      this.emailCheck();
      this.idChecking();
    },

    getMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber;
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
      console.log(phoneNumber);
      let res = "";
      if (phoneNumber.length < 3) {
        res = phoneNumber;
      } else {
        if (phoneNumber.substr(0, 2) == "02") {
          if (phoneNumber.length <= 5) {
            //02-123-5678
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3);
          } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
            //02-123-5678
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 3) +
              "-" +
              phoneNumber.substr(5);
          } else if (phoneNumber.length > 9) {
            //02-1234-5678
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 4) +
              "-" +
              phoneNumber.substr(6);
          }
        } else {
          if (phoneNumber.length < 8) {
            res = phoneNumber;
          } else if (phoneNumber.length == 8) {
            res = phoneNumber.substr(0, 4) + "-" + phoneNumber.substr(4);
          } else if (phoneNumber.length == 9) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length == 10) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length > 10) {
            //010-1234-5678
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 4) +
              "-" +
              phoneNumber.substr(7);
          }
        }
      }
      if (this.user.phone.length > 11) {
        this.phonecheck = true;
      }
      this.user.phone = res;
    },

    async registMember() {
      if (!this.isUserid) {
        if (this.isduplicate)
          alert("중복체크를 수행하세요");
        else
          alert("아이디를 입력하세요")
      }
      else if (!this.pwcheck) {
        alert("패스워드를 8자 이상으로 입력하세요");
      }
      else if (!this.isSame) {
        alert("패스워드가 일치하는지 확인하세요");
      }
      else {
        await registMember(
          this.user,
          ({ data }) => {
            let msg = "등록 처리시 문제가 발생했습니다.";
            console.log(data);
            if (data === "SUCCESS") {
              msg = "등록이 완료되었습니다.";
            }
            alert(msg);
            this.$router.push("/");
          },
          (error) => {
            console.log(error);
          },
        );
      }
    },
    back() {
      this.$router.push("/");
    },
  }
}
</script>

<style>
.logo {
  text-align: center;
  margin-right: 44px;
}

.button {
  margin-top: 10px;
  text-align: center;
}
</style>