import loadingPage from '@/views/loading-page'
import todo from '@/views/todo'
import news from '@/views/news'
import category from '@/views/category'
import mall from '@/views/mall'
import personal from '@/views/personal'

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
    meta: { hasHeader: true, hasNav: true }
  },
  {
    path: '/news',
    name: 'news',
    component: news,
    meta: { hasHeader: true, hasNav: true }
  },
  {
    path: '/category',
    name: 'category',
    component: category,
    meta: { hasHeader: true, hasNav: true }
  },
  {
    path: '/mall',
    name: 'mall',
    component: mall,
    meta: { hasHeader: true, hasNav: true }
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal,
    meta: { hasHeader: true, hasNav: true }
  }
]
