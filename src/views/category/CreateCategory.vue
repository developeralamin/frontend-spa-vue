<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5>Create Category</h5>
            <router-link :to="{name: 'Category'}" class="btn btn-primary">Category List</router-link>
        </div>
<div class="card-body">
<div class="row">
    <div class="col-6 offset-3">

        <form @submit.prevent="categorySubmit()">

            <div class="form-group">
                <label for="">Category name</label>
                <input type="text" v-model="categoryForm.title" 
                @keypress="change()"  class="form-control" name="title" placeholder="category Title">
                <p v-if="error.title" class="smaill">{{ error.title }}</p>



            </div>
            <br>
            
            <div class="form-group">
                <button v-if="isLoading" type="button" class="btn btn-success">Loading</button>
                <button v-else type="submit" class="btn btn-success">Create Category</button>
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
    name: 'SpaCreatecategory',

    data() {
        return {
            error:[],
            isLoading:false,
            categoryForm:{
                title:''
             },
        };
    },
    methods: {
       categorySubmit(){
        //    if(this.categoryForm.title == ''){
        //        this.error['title'] = 'Category is required'
        //    }
        //    else{
        this.isLoading = true
        this.error['title'] = null
        axios.post('http://127.0.0.1:8000/api/category',this.categoryForm).then(response => {
        // console.log(response.data)
        // if(response.data.error){
        //         this.isLoading = false
        //         this.error['title'] = response.data.error
        // }
        // else{
            alert(response.data.message)
            this.categoryForm.title = null
            this.$router.push('/category')
        // }
                
       }).catch(error =>{
            this.error['title']  = error.response.data.errors.title
       })
        //    }
             
        },
        change(){
            this.error['title'] = null
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
a.router-link-active.router-link-exact-active.nav-link {
    color: white!important;
    background: red;
    padding: 12px;
    border-radius: 4px;
}
.smaill{
  color:red;
}
</style>