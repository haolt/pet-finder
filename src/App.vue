<template>
  <Fragment>
    <Header />
    <router-view />
    <Footer />
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Fragment,
    Footer,
  }
};
</script>

<style lang="scss">
@import url('https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
body {
  margin: 0;
  padding: 0;
  color: #4d4751;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

* { font-family: 'Montserrat', sans-serif; }
</style>
