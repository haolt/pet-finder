<template>
  <section class="banner">
    <div class="banner__content">
      <h1 class="banner__title">Find the Right Dog for You</h1>
      <p class="banner__description">
        Take our interactive new quiz to find the perfect dog to adopt!
      </p>
      <button class="banner__btn">Start dog quiz</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  components: {
  }
}
</script>

<style lang="scss">
.banner {
  background: url('../assets/images/banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  position: relative;

  &__content {
    position: absolute;
    top: 5em;
    left: 4em;
    color: #fff;
  }

  &__title {
    font-size: 2.6em;
    text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751;
    margin: 0;
  }

  &__description {
    font-size: 1em;
    text-shadow: 0 1px 5px #4d4751, 0 0 2px #4d4751, 0 0 1px #4d4751;
    margin-bottom: 2em;
  }

  &__btn {
    border: 2px solid #fff;
    background-color: transparent;
    padding: 1em 2em;
    border-radius: 25px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
