import { createWebHistory, createRouter } from "vue-router";

import Home from '@/views/Home.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import CourseDetails from '@/views/CourseDetails.vue';
// category component
import Category from '@/views/category/Category.vue';
import CreateCategory from '@/views/category/CreateCategory.vue';
import EditCategory from '@/views/category/EditCategory.vue';
// lesson component
import Lesson from '@/views/lesson/Lesson.vue'
import CreateLesson from '@/views/lesson/CreateLesson.vue'
import Editlesson from '@/views/lesson/Editlesson.vue'
import Showlesson from '@/views/lesson/Showlesson.vue'

// course component
import Course from '@/views/course/Course.vue'
import CreateCourse from '@/views/course/CreateCourse.vue'
import EditCourse from '@/views/course/EditCourse.vue'
// bennar component
import Bennar from '@/views/bennar/Bennar.vue'
import CreateBennar from '@/views/bennar/CreateBennar.vue'
import EditBennar from '@/views/bennar/EditBennar.vue'

// About component

import About from '@/views/about/About.vue'
import CreateAbout from '@/views/about/CreateAbout.vue'
import EditAbout from '@/views/about/EditAbout.vue'
import ShowAbout from '@/views/about/ShowAbout.vue'


import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'

var appname = " - Single Page Application";


const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home,
         meta: { title: "Home" + appname },
    },

    // category section
    // category section

    {
        path: '/category',
        name: 'Category',
        component: Category,
         meta: { title: "Category" + appname },
    },

    {
        path: '/category/create',
        name: 'create-category',
        component: CreateCategory,
    },

    {
        path: '/category/edit/:id',
        name: 'edit-category',
        component: EditCategory,
    },

    // lesson section
    // lesson section   
    {
        path: '/lesson',
        name: 'lesson',
        component: Lesson,
         meta: { title: "lesson" + appname },
    },

    {
        path: '/lesson/create',
        name: 'create-lesson',
        component: CreateLesson

    },

    {
        path: '/lesson/edit/:id',
        name: 'edit-lesson',
        component: Editlesson,
    },

    {
        path: '/lesson/:id',
        name: 'show-lesson',
        component: Showlesson,
    },

    // course section
    // course section   
    {
        path: '/course',
        name: 'course',
        component: Course,
          meta: { title: "course" + appname },
    },

    {
        path: '/course/reate',
        name: 'create-course',
        component: CreateCourse

    },

    {
        path: '/course/edit/:id',
        name: 'edit-course',
        component: EditCourse,
    },

    // bennar section
    // bennar section   
    {
        path: '/bennar',
        name: 'bennar',
        component: Bennar,
          meta: { title: "bennar" + appname },
    },

    {
        path: '/bennar/create',
        name: 'create-bennar',
        component: CreateBennar

    },
    {
        path: '/bennar/edit/:id',
        name: 'edit-bennar',
        component: EditBennar

    },
    //about section
    //about section
    {
        path: '/about',
        name: 'about',
        component: About,
         meta: { title: "about" + appname },
    },

    {
        path: '/about/create',
        name: 'create-about',
        component: CreateAbout

    },
    {
        path: '/about/edit/:id',
        name: 'edit-about',
        component: EditAbout

    },

    {
        path: '/about/show/:id',
        name: 'show-about',
        component: ShowAbout

    },
    //course details show 

    {
        path: '/course/:id',
        component: CourseDetails,
        name: 'course-details',
         meta: { title: "CourseDetails" + appname },
    },

    {
        path: '/login',
        component: Login,
        name: 'login',
         meta: { title: "login" + appname },
    },

    {
        path: '/register',
        name: 'register',
        component: Register,
          meta: { title: "register" + appname },
    },


    // Not Found Page
    {
        path: '/:catchAll(.*)*',
        name: "NotFound",
        component: PageNotFound,
          meta: { title: "Home" + appname },
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,


    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => {
                resolve({ top: 0, behavior: 'smooth', })
            }, 3000);
        })

    }

});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;


