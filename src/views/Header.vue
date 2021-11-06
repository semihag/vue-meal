<template>
  <div>
    <h1 style="cursor:pointer;" @click="this.$router.push('/')">Meal Instructions</h1>
  </div>
  <div class="alphabet">Browse by First-Letter</div>
  <h3>

    <router-link v-for="a in alphabet" :key="a" :to="'/startswith/'+a.toLowerCase()">{{a}} | </router-link> 

  </h3>
  <hr />

  <div class="country">
    Browse by Country
    <br />
    <router-link :to="'/country/' + c" v-for="c in COUNTRIES" :key="c"
      >{{ c }} |
    </router-link>
  </div>

  <hr />

  <div class="category">
    Browse by Category
    <br />

    <router-link :to="'/category/' + cat" v-for="cat in CATEGORIES" :key="cat"
      >{{ cat }} |
    </router-link>
  </div>
  <hr />

  <div class="name">
    Browse by Name
    <input type="text" name="" id="" v-model="search" />
    <button :disabled="search.length == 0" @click="GetNameMeals">Search</button>
  </div>

  <hr />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      meals: null,
      search: "",
    };
  },
  methods: {
    async GetNameMeals() {
      await this.$store.dispatch("GET_MEALS_BY_NAME", this.search);
      this.$router.push({ path: "/name" });
    },
  },

  computed: {
    ...mapGetters(["COUNTRIES", "CATEGORIES"]),
    alphabet() {
      return 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    }
  },

  created() {
    this.$store.dispatch("GET_COUNTRIES");
    this.$store.dispatch("GET_CATEGORIES");
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  padding: 1px;
  align-items: center;
  justify-content: center;
}
</style>
