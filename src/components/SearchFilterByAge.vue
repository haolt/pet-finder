<template>
  <Fragment class="container">
    <div class="item">
      <input type="checkbox" id="allAge" name="all" :checked="checkedAge.length === ageRanges.length" @change="onClickCheckAllBtn"/>
      <label for="allAge">All</label>
    </div>
    <div class="item" v-for="age in ageRanges" :key="age.id">
      <input type="checkbox" :id="age.id" :value="age.name" :checked="age.isChecked" v-model="checkedAge" @change="onChangeCheckBox"/>
      <label :for="age.id">{{ age.name }}</label>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
  name: 'SearchFilterByAge',
  components: {
    Fragment,
  },
  data() {
    return {
      isCheckAll: true,
      ageRanges: [
        { id: 1, name: 'baby', isChecked: true },
        { id: 2, name: 'young', isChecked: false },
        { id: 3, name: 'adult', isChecked: false },
        { id: 4, name: 'senior', isChecked: true },
      ],
      checkedAge: [],
    };
  },
  methods: {
    onClickCheckAllBtn() {
      const isCheckAll = this.checkedAge.length === this.ageRanges.length;
      this.checkedAge = isCheckAll ? [] : this.ageRanges.map(age => age.name);
      this.ageRanges.forEach(age => age.isChecked = isCheckAll);
      this.onChangeCheckBox();
    },
    onChangeCheckBox() {
      this.$router.replace({path: 'search', query: {...this.$route.query, age: this.checkedAge.length > 0 ? this.checkedAge.join(',') : undefined }});
    }
  },
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;

  .item {
    flex-grow: 1;
    flex-basis: 40%;

    &:first-child {
      flex-basis: 100%;
      margin-top: 0.5em;
    }
  }
}

input[type=checkbox] + label {
  display: block;
  cursor: pointer;
  margin: 0.5em 0;
}

input[type=checkbox] {
  display: none;
}

input[type=checkbox] + label:before {
  content: "\2714";
  border: 0.1em solid #4d4751;
  border-radius: 0.2em;
  display: inline-block;
  width: 1em;
  height: 1em;
  padding-left: 0.2em;
  padding-bottom: 0.3em;
  margin-right: 0.2em;
  vertical-align: bottom;
  color: transparent;
  transition: .2s;
}

input[type=checkbox]:checked + label:before {
  background-color: #6504B5;
  border-color: #6504B5;
  color: #fff;
}

input[type=checkbox]:disabled + label:before {
  border-color: #aaa;
}

input[type=checkbox]:checked:disabled + label:before {
  background-color: #bfb;
  border-color: #bfb;
}
</style>
