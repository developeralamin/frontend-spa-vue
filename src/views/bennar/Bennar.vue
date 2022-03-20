<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Bennar List</h5>
                
     <router-link :to="{name:'create-bennar'}" class="btn btn-primary">Create Bennar</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style="width: 100px"> Id </th>
                                    <th> Title </th>
                                    <th> Image </th>
                                  
                                    <th style="width: 170px"> Action </th>
                                </tr>
                            </thead>
                            <tbody v-if="bennarAll.length">
                                <tr v-for="(bennar,index) in bennarAll" :key="index" >

                                    <td style="width: 100px"> {{ index+1 }} </td>
                                    <td> {{ bennar.title }} </td>
                                    <td> 
                                    <img 
                                          :src="bennar.photo"
                                          alt="benner image"
                                            style="height:100px"
                                     >
                                         
                                    </td>
                            <td style="width: 170px">
        <router-link :to="{name: 'edit-bennar', params: {id: bennar.id}}"  class="btn btn-success ">Edit</router-link>                    
       <button @click="deleteBennar(bennar.id)"  class="btn btn-danger ">Delete</button>
                            </td>
                                </tr>
                            </tbody>

                            <tbody v-else>
                                <tr>
                                    <td colspan="4">
                                        <h5 class="text-center mt-4 mb-4">No Bennar found.</h5>
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
    name: 'SpaBennar',

    data() {
        return {
            bennarAll:[]
        };
    },
    methods: {

        addBennar(){
            axios.get('http://127.0.0.1:8000/api/bennar')
            .then(response => {
                this.bennarAll = response.data.data
            })
        },

         deleteBennar(id){
             axios.delete(`http://127.0.0.1:8000/api/bennar/${id}`).then(response => {
                  alert(response.data.message)
                   console.log(response)
                   this.addBennar()
            });
       }

    },
    
   mounted() {
       const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }

        this.addBennar()
    },
};
</script>

<style lang="scss" scoped>

</style>