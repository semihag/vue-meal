import axios from "axios";

const state = () => ({
  meals: null,
  countries: [],
  categories: [],
});

const getters = {
  MEALS(state) {
    return state.meals;
  },
  COUNTRIES(state) {
    return state.countries;
  },
  CATEGORIES(state) {
    return state.categories;
  },
};

const mutations = {
  //   UPDATE_MEALS(state, meals) {
  //     state.meals = meals;
  //   },
};

const actions = {
  GET_FIRST_LETTER_MEALS(context, payload) {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=" + payload)
      .then((response) => {
        context.state.meals = response.data.meals;
      });
  },
  GET_COUNTRIES(context) {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => {
        context.state.countries = []
        for (let c of response.data.meals) {
          context.state.countries.push(c.strArea);
        }
      });
  },
  GET_COUNTRY_MEALS(context, payload) {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + payload)
      .then((response) => {
        context.state.meals = response.data.meals;
      });
  },

  GET_CATEGORIES(context) {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => {
        context.state.categories = []
        for (let cat of response.data.meals) {
          context.state.categories.push(cat.strCategory);
        }
      });
  },
  GET_CATEGORY_MEALS(context, payload) {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + payload)
      .then((response) => {
        context.state.meals = response.data.meals;
        console.log(response);
      });
  },
  GET_MEALS_BY_NAME(context, payload) {
    return axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + payload)
      .then((response) => {
        context.state.meals = response.data.meals;
        console.log(response);
      });
  },
  GET_MEAL_BY_ID(context, payload) {
    return axios.get(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + payload
    );
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
