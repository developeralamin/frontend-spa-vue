<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Create Lesson</h5>
                        <router-link :to="{name: 'lesson'}" class="btn btn-primary">Lesson List</router-link>
                    </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 offset-3">


         <form @submit.prevent="lessonSubmit()">

            <div class="form-group">
                <label for="">Lesson name</label>
                <input type="text"  required v-model="addLesson.title"  class="form-control"  placeholder="Lesson Title">
            </div>
                <br>
                <div class="form-group">
                <label for="">Description</label>
                  <textarea name="" id="" v-model="addLesson.description" required class="form-control" placeholder="Lesson description" cols="30" rows="10"></textarea> 

            </div>

            <br>
                <div class="form-group">
                <label for="">Video</label>
                <input type="text"  required  v-model="addLesson.video_url" class="form-control"  placeholder="Lesson video_url">
            </div>
            <br>

            <div class="form-group">
                <label for="">Category</label>

        <select v-model="addLesson.category_id"  class="form-control">
        <option value="">Select Category</option>
        <option  v-for="category in categories" :key="category.id" :value="category.id">{{ category.title }}</option>
                
        </select>
            </div>
                <br>
            
            <div class="form-group">
                <button type="submit" class="btn btn-success">Create Lesson</button>
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
    name: 'SpaCreatelesson',

    data() {
        return {
            categories:[],
            addLesson: {
                title:'',
                description:'',
                video_url:'',
                category_id:'',
            }
        };
    },

    methods: {
        lessonSubmit(){
          axios.post('http://127.0.0.1:8000/api/lessons',this.addLesson).then(response => {
                console.log(response.addLesson)
                // console.log(response.data[])
                 alert(response.data.message)
                 this.addLesson.title = null
                 this.addLesson.description = null
                 this.addLesson.video_url = null
                 this.addLesson.category_id = null
                 this.$router.push('/lesson')
            })  
        }
        
    },

    mounted() {
         const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
         axios.get('http://127.0.0.1:8000/api/category')
                .then(response => {
                    //  console.log(response)
                    this.categories = response.data.data
             })
    },

    
};
</script>

<style>

</style>