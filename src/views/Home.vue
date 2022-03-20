<template>
    <div class="container py-5">
        <h2>Our Latest Courses</h2>
        <br>
        <br>
        <div class="row">
            <div class="col-3 mb-3" v-for="(course,index) in courses" :key="index" >
            <div class="card"  >     
            <img :src="course.photo" class="card-img-top" style="height: 150px; object-fit: cover; overflow: hidden" alt="...">      
                <div class="card-body">
                    <div class="mb-2 d-flex justify-content-between">
                        <label class="badge badge-danger mb-3">  {{ course.title}} </label>
                        <!-- <h4>${{ product.price }}</h4> -->
                    </div>
                    
        <h5 class="card-title">
            {{ course.title }}
        </h5>
            
           <router-link :to="{ name: 'course-details', params: {id: course.id }}" 
            class="btn btn-primary">View Course</router-link>

                    </div>


                </div>
            </div>
        </div>
      
    </div>
   
</template>

<script>
 import axios from  'axios'

export default {
    name: 'SpaHome',

    data() {
        return {
            courses:[]
        };
    },

    methods: {
       async loadCourse(){
           await axios.get('http://127.0.0.1:8000/api/getAllcourses')
            .then(response =>{
                this.courses = response.data.data
            })
        }
    },
    
    mounted() {
        
       this.loadCourse();
    },
};
</script>

<style lang="scss" scoped>

</style>