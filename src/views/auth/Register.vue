<template>
<div>
<div class="container">

<div class="card o-hidden border-0 shadow-lg my-5">
<div class="card-body p-0">
    <!-- Nested Row within Card Body -->
    <div class="row">
        <div class="col-lg-7">
            <div class="p-5">
                <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>

<form class="user" @submit.prevent="registerSubmit()">


    <div class="form-group row">
        <div class="col-sm-6 mb-3 mb-sm-0">
            <input type="text" class="form-control form-control-user"
                id="exampleFirstName"
                placeholder="User Name"
                v-model="userSignUp.name"
                >
        </div>
       
    </div>
     <br>
    <div class="form-group">
        <input type="email" class="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="Email Address"
            v-model="userSignUp.email"
            >
    </div>

    <br>

    <div class="form-group row">
        <div class="col-sm-6 mb-3 mb-sm-0">
            <input type="password" class="form-control form-control-user"
                id="exampleInputPassword"
                 placeholder="Password"
                v-model="userSignUp.password"
                 >
        </div>
        
    </div>
     <br>
    <button type="submit"  class="btn btn-primary btn-user btn-block">
        Register Account
    </button>
    <hr>
    
 </form>

    <hr>
        <div class="text-center">
<router-link :to="{name:'login' }">Already have an account? Login!</router-link>   
        </div>
            </div>
        </div>
    </div>
</div>
</div>

</div>
</div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'SpaRegister',

    data() {
        return {
            userSignUp:{
                name:'',
                email:'',
                password:''
            }
        };
    },

    methods: {
        registerSubmit(){
            axios.post('http://127.0.0.1:8000/api/sign_up',this.userSignUp).then(response =>{
                 alert(response.data.message)
                 console.log(response.data.message)

                 this.userSignUp.name = null
                 this.userSignUp.email = null
                 this.userSignUp.password = null

                 this.$router.push('/login')

            })
        }
    },
  
     mounted() {
        
    },



};
</script>

<style lang="scss" scoped>

</style>