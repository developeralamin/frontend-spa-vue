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
                            <input type="text" v-model="categoryForm.title" required  class="form-control" name="title" placeholder="category Title">
                            <!-- <has-error :form="categoryForm" field="name"></has-error> -->
                        </div>
                         <br>
                        
                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Create Category</button>
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
            categoryForm:{
                title:''
             }
        };
    },
    methods: {
       categorySubmit(){
            axios.post('http://127.0.0.1:8000/api/category',this.categoryForm).then(response => {
                // console.log(response.data)
                 alert(response.data.message)
                 this.categoryForm.title = null
                 this.$router.push('/category')
            })  
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

</style>