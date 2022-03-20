<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Category List</h5>
                        <router-link :to="{name: 'create-category'}" class="btn btn-primary">Create Category</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style="width: 100px"> Id </th>
                                    <th> Title </th>
                                    <th> Slug </th>
                                    <th style="width: 170px"> Action </th>
                                </tr>
                            </thead>
                            <tbody v-if="categories.length">
                                <tr v-for="(category,index) in categories" :key="index">
                                    <td style="width: 100px"> {{ index+1 }} </td>
                                    <td> {{ category.title }} </td>
                                    <td> {{ category.slug }} </td>
                                   
                            <td style="width: 170px">

       <router-link :to="{name: 'edit-category', params: {id: category.id}}" class="btn btn-primary">Edit</router-link>
     <button @click="deleteCategories(category.id)" class="btn btn-danger ">Delete</button>
                            </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4">
                                        <h5 class="text-center mt-4 mb-4">No Category found.</h5>
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
    name: 'SpaCategory',

    data() {
        return {
             categories:[]
        };
    },

    methods: {
        
        loadCategories(){
           

            axios.get('http://127.0.0.1:8000/api/category')
                .then(response => {
                    //  console.log(response)
                    this.categories = response.data.data
                })
        },
        
        deleteCategories(id){
             axios.delete(`http://127.0.0.1:8000/api/category/${id}`).then(response => {
                   alert(response.data.message)
                   console.log(response)
                   this.loadCategories()
            });
        }
         

    },

   mounted() {
        const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
        this.loadCategories()
    },
};
</script>

<style>

</style>