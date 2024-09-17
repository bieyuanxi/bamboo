
import { createMemoryHistory, createRouter } from 'vue-router'

// import About from "./components/About.vue"
// import Home from "./components/Home.vue";

const About = () => import("./components/About.vue")
const Home = () => import("./components/Home.vue")

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


