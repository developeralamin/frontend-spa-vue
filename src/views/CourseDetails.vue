<template>
<div class="container py-5">
<h2>Our <span>{{ showSingleCourse.title }}</span> Course</h2>

<br>
<br>


<div class="row">
<div class="col-8">
    <div class="card"  >     
    <img :src="showSingleCourse.photo"  class="img-fluid"  alt="...">      
    <div class="card-body">
        
    <div class="card-title">
        <h1> {{ showSingleCourse.title }}</h1> 
        <br>
        <h3>Category: <span class="category">{{ showSingleCourse.category_id }}</span> </h3>
        <br>
        {{ showSingleCourse.description }}
        
    </div>

        </div>
    </div>
</div>
<div class="col-4">
    <div class="card">
    <div class="card-body">
        <router-link :to="{ name: 'Home'}" class="btn btn-primary">Go to Home</router-link>
    </div>
    </div>
</div>
</div>
</div>


</template>



<script>

import axios from 'axios'

export default {
    name: 'SpaCoursedetails',

    data() {
        return {
            showSingleCourse:{
                  title:'',
                  description:'',
                  photo:'',
                  category_id:''
            },
        };
    },

    methods: {
          async loadCourse(){
           await axios.get('http://127.0.0.1:8000/api/courses/'+this.$route.params.id)
            .then(response =>{
               this.showSingleCourse.title = response.data.data.title
                this.showSingleCourse.description = response.data.data.description
                this.showSingleCourse.category_id = response.data.data.category.title
                this.showSingleCourse.photo =response.data.path+ response.data.data.photo
            })
        },
        
    },

   mounted() {
        this.loadCourse();
    },

};
</script>

<style>

span{
   color: aqua;
}
.category{
   background: green;
   padding: 12px;
}
</style>