<template>
<div class="container py-5">
<h2> <span>{{ singleLesson.title }}</span> </h2>

<br>
<br>


<div class="row">
<div class="col-8">
    <div class="card"  >     
         
    <div class="card-body">
        
    <div class="card-title">
        <h1> {{ singleLesson.title }}</h1> 
        <br>
        <h3>Category: <span class="category">{{ singleLesson.category_id }}</span> </h3>
        <br>
        
        <div class="embed-responsive embed-responsive-16by9">
            <iframe width="800" height="515" :src="singleLesson.video_url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
         <br>
        {{ singleLesson.description }}
        
    </div>

        </div>
    </div>
</div>
<div class="col-4">
    <div class="card">
    <div class="card-body">
        <router-link :to="{ name: 'lesson'}" class="btn btn-primary">Go to Home</router-link>
    </div>
    </div>
</div>
</div>
</div>


</template>

<script>
import axios from 'axios'

export default {
    name: 'SpaShowlesson',

    data() {
        return {
            singleLesson:{
                title:'',
                description:'',
                video_url:'',
                category_id:'',
            }
        };
    },

    methods: {
        loadSingleLesson(){
             axios.get('http://127.0.0.1:8000/api/lessons/0'+this.$route.params.id)
             .then(response =>{
                this.singleLesson.title = response.data.data.title
                this.singleLesson.description = response.data.data.description
                this.singleLesson.video_url = response.data.data.video_url
                this.singleLesson.category_id = response.data.data.category.title
             })
        }
       
    },

    mounted() {
        this.loadSingleLesson()
    },
};
</script>

<style lang="scss" scoped>

</style>