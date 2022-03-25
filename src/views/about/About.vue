<template>
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">About List</h5>
            
                <router-link :to="{name:'create-about'}" class="btn btn-primary">
                     Create About 
                </router-link>     
                </div>

    <div class="card-body">
        <table class="table">
            <thead>
                <tr>
                    <th style="width: 100px"> Id </th>
                    <th> Title </th>
                    <!-- <th> Description </th> -->
                    <th> Video URL </th>
                    <th style="width: 170px"> Action </th>
                </tr>
            </thead>
            <tbody v-if="aboutAll.length">
                <tr v-for="(about ,index) in aboutAll" :key="index">

                    <td style="width: 100px"> {{ index+1 }} </td>
                    <td> {{ about.title }} </td>
                    <!-- <td> {{ about.description }} </td> -->
                    <td> {{ about.video_url }} </td>
    
            <td style="width: 170px">
    <router-link :to="{name:'show-about',params:{id: about.id}}" 
    class="btn btn-sm btn-primary">
      View
    </router-link>
    <router-link :to="{name:'edit-about',params:{id: about.id}}" 
    class="btn btn-sm btn-primary">
      Edit
    </router-link>
 <button @click="deleteLesson(about.id)" class="btn btn-sm  btn-danger ">Delete</button>
            </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4">
                        <h5 class="text-center mt-4 mb-4">No About found.</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from  'axios'

export default {
    name: 'SpaAbout',

    data() {
        return {
            aboutAll:[]
        };
    },

    methods: {
        getAbout(){
             axios.get('http://127.0.0.1:8000/api/about')
            .then(response =>{
                this.aboutAll = response.data.data
            })
        },
        deleteLesson(id){
             axios.delete(`http://127.0.0.1:8000/api/about/${id}`).then(response => {
                   alert(response.data.message)
                   console.log(response)
                   this.getAbout()
            });
        }
       
    },
    
    mounted() {
         const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
        this.getAbout()
    },
};
</script>

<style lang="scss" scoped>

</style>