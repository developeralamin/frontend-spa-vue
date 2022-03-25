<template>
   <div class="container mt-5">
    <div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5>Create About</h5>
                <router-link :to="{name: 'about'}" class="btn btn-primary">About List</router-link>
            </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 offset-3">


   <form @submit.prevent="submitAbout()">

        <div class="form-group">
            <label for="">About Title</label>
            <input type="text"  
              v-model="addAbout.title" 
             class="form-control"  
             placeholder="About Title">

             <p v-if="error.title" class="error">{{error.title}}</p>

        </div>
            <br>
        <div class="form-group">
            <label for="">Description</label>
            <textarea name="" id="" 
            v-model="addAbout.description"
              class="form-control"
             placeholder="About description" 
             cols="30" rows="10" ></textarea> 

      <p v-if="error.description" class="error">{{error.description}}</p>

        </div>

        <br>
        <div class="form-group">
            <label for="">Video</label>
            <input type="text"    
            v-model="addAbout.video_url" class="form-control" 
             placeholder="About video_url">

         <p v-if="error.video_url" class="error">{{error.video_url}}</p>

        </div>
        <br>

     
      <br>
            
    <div class="form-group">

        <button v-if="isLoading" type="button" class="btn btn-success">Loading...</button>
        <button v-else type="submit" class="btn btn-success">Create About</button>
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
    name: 'SpaCreateabout',

    data() {
        return {
            error:[],
            isLoading:false,
            addAbout:{
                title:'',
                description:'',
                video_url:'',
            }
        };
    },


    methods: {
        submitAbout(){
            if(this.addAbout.title == '' && this.addAbout.description == '' && this.addAbout.video_url == '')
            {
                this.error['title'] = 'Title field is required'
                this.error['description'] = 'description field is required'
                 this.error['video_url'] = 'video_url field is required'
            }else{
             this.isLoading= true
             this.error['title'] = null
             this.error['description'] = null
             this.error['video_url'] = null
             
            axios.post('http://127.0.0.1:8000/api/about',this.addAbout).then(response =>{

                console.log(response.data.message)
                 alert(response.data.message)
                 this.addAbout.title = null
                 this.addAbout.description = null
                 this.addAbout.video_url = null
                 this.$router.push('/about')
            }).catch(error =>{
                this.isLoading= false
                this.error['title']       = error.response.data.errors.title
                this.error['description'] = error.response.data.errors.description
                this.error['video_url']   = error.response.data.errors.video_url
            })

            }

       
        }
    },

      mounted() {
         const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
    },
};
</script>

<style>
.error{

  color:red;
}
</style>