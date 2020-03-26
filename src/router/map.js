import loadingPage from '@/views/loading-page'
import todo from '@/views/todo'
import category from '@/views/category'
import timer from '@/views/category/timer'
import calculator from '@/views/category/calculator'
import ticTacToe from '@/views/category/ticTacToe'
import news from '@/views/news'
import mall from '@/views/mall'
import personal from '@/views/personal'

export const routes = [
  {
    path: '/',
    name: 'loadingPage',
    component: loadingPage,
    meta: { hasHeader: false, hasNav: false, hasBackArrow: false }
  },
  {
    path: '/todo',
    name: 'todo',
    component: todo,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: false }
  },
  {
    path: '/category',
    name: 'category',
    component: category,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: false }
  },
  {
    path: '/category/timer',
    name: 'timer',
    component: timer,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: true }
  },
  {
    path: '/category/calculator',
    name: 'calculator',
    component: calculator,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: true }
  },
  {
    path: '/category/ticTacToe',
    name: 'ticTacToe',
    component: ticTacToe,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: true }
  },
  {
    path: '/news',
    name: 'news',
    component: news,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: false }
  },
  {
    path: '/mall',
    name: 'mall',
    component: mall,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: false }
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: false }
  }
]
