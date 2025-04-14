import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import NewRunView from '../views/NewRunView.vue'
import ResultView from '../views/ResultView.vue'

export enum RouteName {
  Dashboard = 'tool-dashboard',
  NewRun = 'tool-new-run',
  Result = 'tool-result',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.Dashboard,
      component: DashboardView,
    },
    {
      path: '/runs/new',
      name: RouteName.NewRun,
      component: NewRunView,
    },
    {
      path: '/runs/:id',
      name: RouteName.Result,
      component: ResultView,
    },
  ],
})

export default router
