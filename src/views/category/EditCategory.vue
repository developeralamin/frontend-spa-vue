<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Edit Category</h5>
                        <router-link :to="{name: 'Category'}" class="btn btn-primary">Category List</router-link>
                    </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 offset-3">
                    <form @submit.prevent="updateCategory()">
                        <div class="form-group">
                            <label for="">Category name</label>
                            <input type="text" v-model="categoryForm.title" required name="title" class="form-control"  placeholder="category Title">
                            <!-- <has-error :form="categoryForm" field="name"></has-error> -->
                        </div>
                         <br>
                        
                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Edit Category</button>
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
    name: 'SpaEditcategory',

    data() {
        return {
             categoryForm:{
                 title:''
             }
        };
    },
    methods: {
        updateCategory(){
              axios.put('http://127.0.0.1:8000/api/category/'+this.$route.params.id,this.categoryForm).then(response =>{
              alert(response.data.data)
              this.$router.push('/category')

         })
        }
    },
    mounted() {
         const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
        axios.get('http://127.0.0.1:8000/api/category/'+this.$route.params.id).then(response =>{
             this.categoryForm.title = response.data.data.title
        })
    },


};
</script>

<style>

</style>