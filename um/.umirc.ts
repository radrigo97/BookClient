import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/list', component: '@/pages/List' },
    { path: '/book', component: '@/pages/books/BookList' },
  ],
  fastRefresh: {},
});
