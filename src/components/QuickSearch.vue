<template>
  <section class="quick-search">
    <input type="text" name="name" class="quick-search__byName" />
    <router-link class="quick-search__byType" to="/search?type=dog">Find a dog</router-link>
    <router-link class="quick-search__byType" to="/search?type=cat">Find a cat</router-link>
    <router-link class="quick-search__byType" to="/search">Find Other Pets</router-link>
  </section>
</template>

<script>
export default {
  name: 'QuickSearch',
  components: {
  }
}
</script>

<style lang="scss">
.quick-search {
  display: flex;
  justify-content: center;
  margin-top: -3em;

  &__byName {
    border: none;
    z-index: 2;
    background: #2E0152;
    color: #fff;
    padding: 3em 7em;
    font-size: 0.9em;
  }

  &__byType {
    border: none;
    background: #6504B5;
    color: #fff;
    font-size: 0.9em;
    padding: 3em 7em;
    text-decoration: none;
    position: relative;
    cursor: pointer;

    &:nth-child(2)::after {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      border-left: 20px solid #2e0152;
      border-top: 50px solid transparent;
      border-bottom: 50px solid transparent;
    }

    &:nth-child(3) {
      border-right: 1px solid #fff;
      border-left: 1px solid #fff;
    }
  }
}

</style>
