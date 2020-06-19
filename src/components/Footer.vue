<template>
  <section class="footer">
    <p class="copyright">©2020 Petfinder.com All trademarks are owned by Société des Produits Nestlé S.A., or used with permission.</p>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style lang="scss">
.footer {
    /* background: #2E0152; */
    /* padding: 1em; */
    display: flex;
    justify-content: center;
    margin-top: 4em;

  .copyright {
    color: #4d4751;
    font-weight: 600;
    font-size: 0.7em;
  }
}
</style>
