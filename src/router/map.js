import loadingPage from '@/views/loading-page'
import todo from '@/views/todo'

import category from '@/views/category'
import timer from '@/views/category/timer'
import calculator from '@/views/category/calculator'
import ticTacToe from '@/views/category/ticTacToe'
import language from '@/views/category/language'

import news from '@/views/news'

import service from '@/views/service'
import hotel from '@/views/service/hotel'
import roomDetail from '@/views/service/hotel/roomDetail'
import roomOrder from '@/views/service/hotel/roomOrder'
import roomRecord from '@/views/service/hotel/roomRecord'

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
    path: '/category/language',
    name: 'language',
    component: language,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: true }
  },
  {
    path: '/news',
    name: 'news',
    component: news,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: false }
  },
  {
    path: '/service',
    name: 'service',
    component: service,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: false }
  },
  {
    path: '/service/hotel',
    name: 'hotel',
    component: hotel,
    meta: { hasHeader: true, hasNav: false, hasBackArrow: true }
  },
  {
    path: '/service/hotel/roomDetail',
    name: 'roomDetail',
    component: roomDetail,
    meta: { hasHeader: true, hasNav: false, hasBackArrow: true }
  },
  {
    path: '/service/hotel/roomOrder',
    name: 'roomOrder',
    component: roomOrder,
    meta: { hasHeader: true, hasNav: false, hasBackArrow: true }
  },
  {
    path: '/service/hotel/roomRecord',
    name: 'roomRecord',
    component: roomRecord,
    meta: { hasHeader: false, hasNav: false, hasBackArrow: false }
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal,
    meta: { hasHeader: true, hasNav: true, hasBackArrow: false }
  }
]
