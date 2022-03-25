<template>
<div class="container py-5">
<h2> <span>{{ singleAbout.title }}</span> </h2>

<br>
<br>


<div class="row">
<div class="col-8">
    <div class="card"  >     
         
    <div class="card-body">
        
    <div class="card-title">
        <h1> {{ singleAbout.title }}</h1> 
        <br>
        <!-- <h3>Category: <span class="category">{{ singleLesson.category_id }}</span> </h3> -->
        <br>
        
        <div class="embed-responsive embed-responsive-16by9">
            <iframe width="800" height="515" :src="singleAbout.video_url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
         <br>
        {{ singleAbout.description }}
        
    </div>

        </div>
    </div>
</div>
<div class="col-4">
    <div class="card">
    <div class="card-body">
        <router-link :to="{ name: 'about'}" class="btn btn-primary">Go to Home</router-link>
    </div>
    </div>
</div>
</div>
</div>


</template>

<script>
import axios from 'axios'

export default {
    name: 'SpaShowabout',

    data() {
        return {
             singleAbout:{
                title:'',
                description:'',
                video_url:'',
            }
        };
    },


    methods: {
         loadSingleAbout(){
             axios.get('http://127.0.0.1:8000/api/about/'+this.$route.params.id)
             .then(response =>{
                this.singleAbout.title = response.data.data.title
                this.singleAbout.description = response.data.data.description
                this.singleAbout.video_url = response.data.data.video_url
             })
        }
    },
  mounted() {
       const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
       this.loadSingleAbout() 
    },

};
</script>

<style lang="scss" scoped>

</style>