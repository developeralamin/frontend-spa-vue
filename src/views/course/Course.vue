<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Course List</h5>
                
          <router-link :to="{name:'create-course'}" class="btn btn-primary">Create Course</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style="width: 100px"> Id </th>
                                    <th> Title </th>
                                    <!-- <th> Description </th> -->
                                    <th> Image </th>
                                    <th> Category </th>
                                    <th style="width: 170px"> Action </th>
                                </tr>
                            </thead>
                    <tbody v-if="courses.length">
                        <tr v-for="(course,index) in courses" :key="index" >

                            <td style="width: 100px"> {{ index+1 }} </td>
                            <td> {{ course.title }} </td>
                            <td> 
                                <img 
                                    :src="course.photo" 
                                    alt=""
                                    style="height:100px"
                                > 
                            </td>
                            <td> {{ course.category.title }} </td>
        
                    <td style="width: 170px">
<router-link :to="{name: 'edit-course', params: {id: course.id}}"  class="btn btn-success ">Edit</router-link>                    
<button @click="deleteCourse(course.id)"  class="btn btn-danger ">Delete</button>
                    </td>
                        </tr>
                    </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4">
                                        <h5 class="text-center mt-4 mb-4">No Course found.</h5>
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


    name: 'SpaCourse',

    data() {
        return {
            courses:[],
            laravelData: {},
        };
    },

    methods: {
        //paginations here 
     
      async addCourse(){
             let result =  await axios.get('http://127.0.0.1:8000/api/courses')
             console.log(result)
             this.courses = result.data.data
        },
        deleteCourse(id){
              axios.delete(`http://127.0.0.1:8000/api/courses/${id}`).then(response => {
                   alert(response.data.message)
                   console.log(response)
                   this.addCourse()
            });
        },


    },

   async mounted() {
        const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
       await this.addCourse();

      
    },



};
</script>

<style lang="scss" scoped>

</style>