<template>
<div>
<div class="container">

<!-- Outer Row -->
<div class="row justify-content-center">

<div class="col-xl-10 col-lg-12 col-md-9">

    <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
             
                <div class="col-lg-6">
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        
<form class="user" @submit.prevent="submitFormLogin()">

                <div class="form-group">
                    <input type="email"  class="form-control form-control-user"
                        id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        v-model="login.email">
                </div>

                <br>
                <br>

                <div class="form-group">
                    <input type="password"  class="form-control form-control-user"
                        id="exampleInputPassword" placeholder="Password"
                        v-model="login.password">
                </div>
                  <br>
               
                
                <button v-if="isLoading" type="button" class="btn btn-primary btn-user btn-block">
                    Loading
                </button>
                 <button v-else type="submit" class="btn btn-primary btn-user btn-block">
                    Login
                </button>
                <hr>
                
            </form>

            <hr>
           
            <div class="text-center">
        <router-link :to="{name:'register' }">Dont't have a account ! SignUp</router-link> 
            </div>
                    </div>
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

    import axios from  'axios'

    export default {
    name: 'SpaLogin',

    data() {
        return {
                login:{
                    email:'',
                    password:''
                },
                isLoading:false
        };
    },

    methods: {
        submitFormLogin(){
            this.isLoading = true
            axios.post('http://127.0.0.1:8000/api/login_user',this.login).then(response =>{
                console.log(response)
                if(response.data.token){
                    localStorage.setItem('token',response.data.token)
                    localStorage.setItem('user',response.data.user.name)
                    this.$router.go('/')
                }
                // console.log(response.data)
                else{
                    alert('invalid credential')
                    //  this.login.email = null
                    //  this.login.password = null
                  
                }
                
            })
        }
        
    },

    mounted() {
       const getToken = localStorage.getItem('token');
        if(getToken){
        this.$router.push('/')
        }
    },


  };
    </script>

    <style lang="scss" scoped>

    </style>