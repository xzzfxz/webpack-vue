import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
    {
        path: '/swiper',
        name: 'swiper',
        component: () => import('@/views/swiper'),
    },
    {
        path: '/imageView',
        name: 'imageView',
        component: () => import('@/views/imageView'),
    },
];

const router = new Router({
    mode: 'history',
    routes,
});

export default router;
