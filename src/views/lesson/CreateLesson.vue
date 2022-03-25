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
            <input type="text"  
              v-model="addLesson.title" 
             class="form-control"  
             placeholder="Lesson Title">

             <p v-if="error.title" class="error">{{error.title}}</p>

        </div>
            <br>
        <div class="form-group">
            <label for="">Description</label>
            <textarea name="" id="" 
            v-model="addLesson.description"
              class="form-control"
             placeholder="Lesson description" 
             cols="30" rows="10" ></textarea> 

              <p v-if="error.description" class="error">{{error.description}}</p>

        </div>

        <br>
        <div class="form-group">
            <label for="">Video</label>
            <input type="text"    
            v-model="addLesson.video_url" class="form-control" 
             placeholder="Lesson video_url">

             <p v-if="error.video_url" class="error">{{error.video_url}}</p>

        </div>
        <br>

       <div class="form-group">
          <label for="">Category</label>
        <select v-model="addLesson.category_id"  class="form-control">
        <option value="">Select Category</option>
        <option  v-for="category in categories"
         :key="category.id" :value="category.id">
         {{ category.title }}
         </option>
                
        </select>
     <p v-if="error.category_id" class="error">{{error.category_id}}</p>

    </div>
      <br>
            
    <div class="form-group">
        <button v-if="isLoading" type="button" class="btn btn-success">Loading....</button>
        <button v-else type="submit" class="btn btn-success">Create Lesson</button>
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
            },
             error:[],
             isLoading:false
        };
    },

    methods: {
        lessonSubmit(){
            this.isLoading = true
          axios.post('http://127.0.0.1:8000/api/lessons',this.addLesson).then(response => {
                console.log(response.addLesson)
                // console.log(response.data[])
                 alert(response.data.message)
                 this.addLesson.title = null
                 this.addLesson.description = null
                 this.addLesson.video_url = null
                 this.addLesson.category_id = null
                 this.$router.push('/lesson')
            }).catch(error =>{
                this.isLoading = false
                this.error['title']       = error.response.data.errors.title
                this.error['description'] = error.response.data.errors.description
                this.error['video_url']   = error.response.data.errors.video_url
                this.error['category_id'] = error.response.data.errors.category_id

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
.error{
  color:red;
}
</style>