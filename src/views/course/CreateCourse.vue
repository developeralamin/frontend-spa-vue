<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Create Course</h5>
                        <router-link :to="{name: 'course'}" class="btn btn-primary">Course List</router-link>
                    </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 offset-3">


        <form @submit.prevent="courseSubmit()">

            <div class="form-group">
                <label for="">Course name</label>
                <input type="text"  required v-model="addCourse.title"   class="form-control"  placeholder="Course Title">
            </div>
                <br>
                <div class="form-group">
                <label for="">Description</label>
               <textarea name="" id="" v-model="addCourse.description" required class="form-control" placeholder="Course description" cols="30" rows="10"></textarea> 
                
            </div>
            <br>
            
            <div class="form-group">
                <label for="">Category</label>

        <select v-model="addCourse.category_id" class="form-control">
          <option value="">Select Category</option>
          <option  v-for="category in categories" :key="category.id" :value="category.id">{{ category.title }}</option>
        </select>
            </div>
                <br>

                <img :src="image" alt="" style="height:100px">
                
                <br>

            <div class="form-group">
                <label for="">Course Thumbnail</label>
                <input type="file"  required  @change="onImageChange"  class="form-control"  placeholder="">

            </div>

     
                <br>
            <div class="form-group">
                <button type="submit" class="btn btn-success">Create Course</button>
            </div>


    </form>



                </div>
            </div>
        </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
 import axios from  'axios'

export default {
    name: 'SpaCreatecourse',

    data() {
        return {
            image:'',
            categories:[],
            addCourse:{
                title:'',
                description:'',
                photo:'',
                category_id:''
            }
        };
    },


    methods: {
        onImageChange(e){
            const file = e.target.files[0]
            // Do some client side validation...
            this.addCourse.photo = file

            // show image here

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e =>{
                this.image = e.target.result;
            }

        },

         courseSubmit(){
             let formData = new FormData();

             formData.append('photo', this.addCourse.photo)
             formData.append('title', this.addCourse.title)
             formData.append('description', this.addCourse.description)
             formData.append('category_id', this.addCourse.category_id)

             axios.post('http://127.0.0.1:8000/api/courses',formData).then(response =>{
                 alert(response.data.message)
                 console.log(response.data.message)
                 this.addCourse.title = null
                 this.addCourse.description = null
                 this.addCourse.photo = null
                 this.addCourse.category_id = null
                 
                 this.$router.push('/course')
             })
         },
          
        
    },
    
    mounted() {
         const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
        
         axios.get('http://127.0.0.1:8000/api/category')
                .then(response => {
                    this.categories = response.data.data
             })

    },
};
</script>

<style>

</style>