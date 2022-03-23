import { createWebHistory, createRouter } from "vue-router";

import Home from '@/views/Home.vue';
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


import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'



const routes = [
    
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

     // category section
    // category section

    {
        path: '/category',
        name: 'Category',
        component: Category,
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
        component:Lesson
        
    },

      {
        path: '/lesson/create',
        name: 'create-lesson',
        component:CreateLesson
        
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
        component:Course
    },
   
       {
        path: '/course/reate',
        name: 'create-course',
        component:CreateCourse
        
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
        component:Bennar
    },
    
      {
        path: '/bennar/create',
        name: 'create-bennar',
        component:CreateBennar
        
     },
     {
        path: '/bennar/edit/:id',
        name: 'edit-bennar',
        component:EditBennar
        
    },
    {
           path: '/course/:id',
            component: CourseDetails,
            name: 'course-details',
     },
   
      {
            path: '/login',
            component: Login,
            name: 'login',
      },

    {
        path: '/register',
        name: 'register',
        component:Register
    }
    
];

const router = createRouter({
   history: createWebHistory(),
   routes,

});

export default router;


router.beforeEach(() => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (window.user) {
       return {name:'login',query:{locale:'en', q:100}}
  }
  
})