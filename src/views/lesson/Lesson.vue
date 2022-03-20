<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Lesson List</h5>
                
                        <router-link :to="{name:'create-lesson'}" class="btn btn-primary">Create Lesson</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style="width: 100px"> Id </th>
                                    <th> Title </th>
                                    <th> Video Url </th>
                                    <th> Description </th>
                                    <th> Category </th>
                                    <th style="width: 170px"> Action </th>
                                </tr>
                            </thead>
                            <tbody v-if="lessonAll.length">
                                <tr v-for="(lesson ,index) in lessonAll" :key="index">

                                    <td style="width: 100px"> {{ index+1 }} </td>
                                    <td> {{ lesson.title }} </td>
                                    <td> {{ lesson.video_url }} </td>
                                    <td> {{ lesson.description }} </td>
                                   <td> {{ lesson.category.title }} </td>     


                            <td style="width: 170px">
       <router-link :to="{name: 'edit-lesson', params: {id: lesson.id}}" class="btn btn-primary">Edit</router-link>
       <button @click="deleteLesson(lesson.id)" class="btn btn-danger ">Delete</button>
   
                            </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4">
                                        <h5 class="text-center mt-4 mb-4">No Lesson found.</h5>
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
    name: 'SpaLesson',

    data() {
        return {
            lessonAll:[]
        };
    },


    methods: {
       async addLesson(){
             let result =  await axios.get('http://127.0.0.1:8000/api/lessons')
             console.log(result)
            this.lessonAll = result.data.data
                    // console.log(this.lessonAll[0].category.title)
                   
        },
         deleteLesson(id){
             axios.delete(`http://127.0.0.1:8000/api/lessons/${id}`).then(response => {
                   alert(response.data.message)
                   console.log(response)
                   this.addLesson()
            });
        }
        
    },

     async mounted() {
          const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
       await this.addLesson()
     
    },
};
</script>

<style lang="scss" scoped>

</style>