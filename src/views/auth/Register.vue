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
                @keyup="change()"
                >
             <p v-if="error.name" class="errorRegister">{{ error.name }}</p>   
        </div>
       
    </div>
     <br>
    <div class="form-group">
        <input type="email" class="form-control form-control-user"
            id="exampleInputEmail"
            placeholder="Email Address"
            v-model="userSignUp.email"
            @keyup="change()"
            >
             <p v-if="error.email" class="errorRegister">{{ error.email }}</p>   
    </div>

    <br>

    <div class="form-group row">
        <div class="col-sm-6 mb-3 mb-sm-0">
            <input type="password" class="form-control form-control-user"
                id="exampleInputPassword"
                 placeholder="Password"
                v-model="userSignUp.password"
                @keyup="change()"
                 >
            <p v-if="error.password" class="errorRegister">{{ error.password }}</p>   
        </div>
        
    </div>
     <br>
    
    <button v-if="isLoading" type="button"  class="btn btn-primary btn-user btn-block">
        Loading....
    </button>

    <button v-else type="submit"  class="btn btn-primary btn-user btn-block">
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
            },
             error:[],
             isLoading:false
        };
    },

methods: {
    registerSubmit(){

        if(this.userSignUp.name == '' && this.userSignUp.email == '' && this.userSignUp.password ==''){
            this.error['name']     = 'Name field is required'
            this.error['email']    = 'Email field is required'
            this.error['password'] = 'Password field is required'

        }else{
                this.isLoading = true
                this.error['name'] = null
                this.error['email'] = null
                this.error['password'] = null

        if(this.userSignUp.password.length < 6 ||  this.userSignUp.password.length > 10 ){
                this.error['password'] = 'Password At least 6 to 10 character'
            
        }else{
                axios.post('http://127.0.0.1:8000/api/sign_up',this.userSignUp).then(response =>{

                // if(response.data.error){
                //      this.isLoading = true
                //      this.error['email'] = response.data.error
                // }  

              
                 alert(response.data.message)
                 this.userSignUp.name = null
                 this.userSignUp.email = null
                 this.userSignUp.password = null

                 this.$router.push('/login')
                

               

            }).catch(error=>{
                this.isLoading = false
                this.error['email'] = error.response.data.errors.email

               //when email in unique another filed data has remove

                 this.userSignUp.name = null
                 this.userSignUp.email = null
                 this.userSignUp.password = null
            })

            }
            
            }

           
        },
        change(){
            this.error['name'] = null
            this.error['email'] = null
            this.error['password'] = null
        }
    },
  
     mounted() {
        
    },



};
</script>

<style>
.errorRegister{

  color: red;
}
</style>