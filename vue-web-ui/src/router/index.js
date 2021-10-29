import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "SearchShow",
    component: () => import(
      /*webpackChunkName: "search-view"*/ "@/views/SearchShow.vue"
      )
    // children: [
    //   {
    //     path: ':chemTransDb/:entity',
    //     name: 'AgGridShow',
    //     component: () => import(
    //       /*webpackChunkName: "query-view"*/ "@/views/AgGridShow.vue"
    //     ),
    //     props: route => (
    //       {
    //         ...route.params,
    //         chemTransDb: parseInt(route.params.chemTransDb),
    //         entity: route.params.entity
    //       }
    //       )
    //   }
    // ]
  },
  {
    path: "/upload",
    name: "UploadShow",
    component: () => import(
      /*webpackChunkName: "upload-view"*/ "@/views/UploadShow.vue"
      )
  },
  {
    path: '/swagger',
    name: "SwaggerShow",
    component: () => import(
      /*webpackChunkName: "swagger-view"*/ "@/views/SwaggerShow.vue"
      )
  },
  {
    path: '/schema',
    name: 'SchemaShow',
    component: () => import(
      /*webpackChunkName: "schema-view"*/ "@/views/SchemaShow.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
