import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import FirstLetter from "../components/FirstLetter.vue";
import Country from "../components/Country.vue";
import Category from "../components/Category.vue";
import Name from "../components/Name.vue";
import MealDetail from "../components/MealDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/startswith/:letter",
    name: "FirstLetter",
    component: FirstLetter,
  },
  {
    path: "/country/:country",
    name: "Country",
    component: Country,
  },
  {
    path: "/category/:cat",
    name: "Category",
    component: Category,
  },
  {
    path: "/name",
    name: "Name",
    component: Name,
  },
  {
    path: "/meal/:id",
    name: "meal",
    component: MealDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
