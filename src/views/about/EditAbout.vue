<template>
   <div class="container mt-5">
    <div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5>Update About</h5>
                <router-link :to="{name: 'about'}" class="btn btn-primary">About List</router-link>
            </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 offset-3">


   <form @submit.prevent="updateAbout()">

        <div class="form-group">
            <label for="">About Title</label>
            <input type="text"  
              v-model="editAbout.title" 
             class="form-control"  
             placeholder="About Title">

             <!-- <p v-if="error.title" class="error">{{error.title}}</p> -->

        </div>
            <br>
        <div class="form-group">
            <label for="">Description</label>
            <textarea name="" id="" 
            v-model="editAbout.description"
              class="form-control"
             placeholder="About description" 
             cols="30" rows="10" ></textarea> 

      <!-- <p v-if="error.description" class="error">{{error.description}}</p> -->

        </div>

        <br>
        <div class="form-group">
            <label for="">Video</label>
            <input type="text"    
            v-model="editAbout.video_url" class="form-control" 
             placeholder="About video_url">

         <!-- <p v-if="error.video_url" class="error">{{error.video_url}}</p> -->

        </div>
        <br>
            
    <div class="form-group">

        <button v-if="isLoading" type="button" class="btn btn-success">Loading...</button>
        <button v-else  type="submit" class="btn btn-success">Update About</button>
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
import axios from 'axios'

export default {
    name: 'SpaEditabout',

    data() {
        return {
            editAbout:{
                title:'',
                description:'',
                video_url:'',
            },
            isLoading:false
        };
    },

    methods: {
        updateAbout(){
            this.isLoading = true
             axios.post('http://127.0.0.1:8000/api/about/'+this.$route.params.id,this.editAbout).then(response =>{
                 alert(response.data.data)
                this.$router.push('/about')
             })
        }
       
    },

    mounted() {
        const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
        axios.get('http://127.0.0.1:8000/api/about/'+this.$route.params.id,this.editAbout).then(response =>{
            this.editAbout.title = response.data.data.title
            this.editAbout.description = response.data.data.description
            this.editAbout.video_url = response.data.data.video_url
        })
    },

 
};
</script>

<style lang="scss" scoped>

</style>