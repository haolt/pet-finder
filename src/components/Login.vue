<template>
  <div class="login-frm">
    <h3 class="login-frm__title">Login</h3>
    <div class="login-frm__group">
      <input class="login-frm__field" name="clientID" type="text">
      <label class="login-frm__label">Client ID</label>
    </div>
    <div class="login-frm__group">
      <input class="login-frm__field" name="clientID" type="text">
      <label class="login-frm__label">Client Secret</label>
    </div>
    <button class="login-frm__btn">Login</button>
    <small>Notes: Get login information at Console Tab </small>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: { }
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