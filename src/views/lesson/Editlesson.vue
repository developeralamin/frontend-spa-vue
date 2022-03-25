<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Edit Lesson</h5>
                        <router-link :to="{name: 'lesson'}" class="btn btn-primary">Lesson List</router-link>
                    </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 offset-3">


         <form @submit.prevent="updateLesson()">

        <div class="form-group">
            <label for="">Lesson name</label>
            <input type="text"  required v-model="addLesson.title"  class="form-control"  placeholder="Lesson Title">
        </div>
            <br>
            <div class="form-group">
            <label for="">Description</label>
            <input type="text"  required v-model="addLesson.description"  class="form-control" placeholder="Lesson description">
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
            <button type="submit" class="btn btn-success">Update Lesson</button>
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
    name: 'SpaEditlesson',

    data() {
        return {
             categories:[],
            addLesson:{
                title:'',
                description:'',
                video_url:'',
                category_id:''
            }
        };
    },

    methods: {
        updateLesson(){
            axios.put('http://127.0.0.1:8000/api/lessons/'+this.$route.params.id,this.addLesson).then(response =>{
                alert(response.data.data)
                this.$router.push('/lesson')
            })
        },
        addCategory(){
             axios.get('http://127.0.0.1:8000/api/category')
                .then(response => {
                    this.categories = response.data.data
             })
        }
    },
    mounted() {
         const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
        axios.get('http://127.0.0.1:8000/api/lessons/'+this.$route.params.id).then(response => {
            this.addLesson.title       = response.data.data.title
            this.addLesson.description = response.data.data.description
            this.addLesson.video_url   = response.data.data.video_url
            this.addLesson.category_id = response.data.data.category_id
            console.log(response)
        }),

        this.addCategory()
      

    },

};
</script>

<style lang="scss" scoped>

</style>