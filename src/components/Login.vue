<template>
  <div class="login-frm">
    <h3 class="login-frm__title">Login</h3>
    <div class="login-frm__group">
      <input class="login-frm__field" name="clientID" type="text" v-model="clientID" />
      <label class="login-frm__label">Client ID</label>
    </div>
    <div class="login-frm__group">
      <input class="login-frm__field" name="clientSecret" type="text" v-model="clientSecret" />
      <label class="login-frm__label">Client Secret</label>
    </div>
    <button class="login-frm__btn" @click="doLogin()">Login</button>
    <small>Notes: Get login information at <b>Console Tab</b></small>
  </div>
</template>

<script>
import RepositoryFactory from '../services/RepositoryFactory';
import CookieService from '../services/cookie.service';
const AuthRequest = RepositoryFactory.get('authentication'); 

export default {
  name: 'Login',
  components: { },
  data() {
    return {
      clientID: 'mWVtWjfidAQxzGOQQ74DgECeDfvL8f37HNeriVMwqFegROfBH2',
      clientSecret: 'JTVyXAkxVejhoVIvJdGfQO5G7KhSPdgXdE8Nsna2',
    }
  },
  methods: {
    async doLogin() {
      const { data: { access_token, expires_in }} = await AuthRequest.doAuthenticate(this.clientID, this.clientSecret);
      CookieService.setCookie('pf-token', access_token, expires_in);
      alert('Login successfully !!!');
      this.$store.commit('changeIsLogin');
    }
  }
}
</script>

<style lang="scss">
.login-frm {
  text-align: center;
  padding: 2em;

  &__title {
    font-size: 2em;
  }

  &__group {
    position: relative;
  }

  &__label {
    position: absolute;
    top: 0.5em;
    left: 1em;
    font-size: 0.8em;
  }

  &__field {
    width: 90%;
    height: 45px;
    border-radius: 5px;
    padding: 0.5em 1em 0;
    font-size: 1em;
    border: 1px solid #e1e1e1;
    margin-bottom: 2em;

    &:focus {
      border: 1px solid #6504B5;
    }
  }

  &__btn {
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9em;
    transition: 0.2s;
    border: none;
    background: #6504B5;
    padding: 1em;
    text-align: center;
    width: 100%;
    border-radius: 25px;
    cursor: pointer;
    margin-bottom: 2em;

    &:hover {
      background: #2E0152;
    }
  }
}
</style>