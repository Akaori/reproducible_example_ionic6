import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AppTabs from '../views/AppTabs.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'Home' },
  },
  {
    path: '/tabs/',
    component: AppTabs,
    children: [
      {
        path: '',
        redirect: { name: 'Home' },
      },
      {
        path: 'home',
        name: 'Home',
        component: HomeView
      },
      {
        path: 'tab2',
        name: 'Tab2',
        component: () =>
          import(
            /* webpackChunkName: "Tab2" */ '@/views/TheTab2.vue'
          ),
      },
      {
        path: 'tab3',
        name: 'Tab3',
        component: () =>
          import(
            /* webpackChunkName: "Tab3" */ '@/views/TheTab3.vue'
          ),
      },
    ]
  },
  {
    path: '/form-templates',
    name: 'FormTemplates',
    component: () =>
      import(/* webpackChunkName: "FormTemplates" */ '../views/FormTemplates.vue'),
    props: true
  },
  {
    path: '/create-form',
    name: 'CreateForm',
    component: () =>
      import(
        /* webpackChunkName: "CreateForm" */ '../views/CreateForm.vue'
      ),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
