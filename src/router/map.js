import loadingPage from '@/views/loading-page'
import todo from '@/views/todo'

export const routes = [
  {
    path: '/',
    name: 'loadingPage',
    component: loadingPage,
    meta: { hasHeader: false, hasNav: false }
  },
  {
    path: '/todo',
    name: 'todo',
    component: todo,
    meta: { hasHeader: false, hasNav: true }
  }
]
