export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/clarainesagudelozapata/github/jemapau.github.io/portfolio/src/pages/Index.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/clarainesagudelozapata/github/jemapau.github.io/portfolio/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/clarainesagudelozapata/github/jemapau.github.io/portfolio/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/clarainesagudelozapata/github/jemapau.github.io/portfolio/node_modules/gridsome/app/pages/404.vue")
  }
]

