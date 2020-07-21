<template>
  <section class="animals">
    <article class="animal-item" v-for="animal in animals" :key="animal.id">
      <img :alt="animal.type" />
      <h3>{{ animal.type }}</h3>

    </article>
  </section>
</template>

<script>
export default {
  name: 'AnimalList',
  components: { },
  props: ['animals'],
}
</script>

<style lang="scss">
</style>
