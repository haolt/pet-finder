<template>
  <Fragment>
    <!-- <template slot-scope="animal"> -->
    <ul v-if="!isLoading">
      <li v-for="animal in animals" :key="animal.id">
        {{ animal.name }}
      </li>
    </ul>
    <span v-else>I S   L O A D I N G . . .</span>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import RepositoryFactory from '../services/RepositoryFactory';
const AnimalRepository = RepositoryFactory.get('animals'); 

export default {
  name: 'SearchResult',
  components: {
    Fragment,
  },
  data() {
    return {
      animals: [],
      isLoading: false,
    };
  },
  created() {
    this.fetchAnimals();
  },
  methods: {
    async fetchAnimals() {
      this.isLoading = true;
      const {
        data: {
          animals,
          // pagination: { total_count, current_page, total_pages },  
        },
      } = await AnimalRepository.getAll();
      this.isLoading = false;
      // console.log('animals: ', animals);
      // console.log('total_count: ', total_count);
      // console.log('current_page: ', current_page);
      // console.log('total_pages: ', total_pages);
      this.animals = animals;
    }
  }
}
</script>

<style lang="scss">

</style>
