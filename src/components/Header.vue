<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'Home'}" >VueJS Logo</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'Home'}" v-if="isActive" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                         <router-link :to="{name: 'Category'}" v-if="isActive"  class="nav-link">Category</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'lesson'}" v-if="isActive" class="nav-link">Lesson</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'course'}" v-if="isActive" class="nav-link">Course</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link :to="{name: 'bennar'}" v-if="isActive" class="nav-link">Bennar</router-link>
                    </li>

                      <li class="nav-item">
                        <router-link :to="{name: 'login'}" v-if="isLogin" class="nav-link">Login</router-link>
                    </li> 

                     <li class="nav-item">
                        <router-link :to="{name: 'register'}" v-if="isLogin" class="nav-link">Register</router-link>
                    </li>

        <li class="nav-item">
         <button @click="logout()" v-if="isActive" class="btn btn-success">Logout</button>
        </li>     

                </ul>
             
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'SpaHeader',

    data() {
        return {
            isActive:false,
            isLogin:true
        };
    },

      methods: {
        logout(){
             localStorage.removeItem('token')
             localStorage.removeItem('user')
             this.$router.go('/login')
        }
    },

    mounted() {
       const token = localStorage.getItem('token')
        if(token){
            this.isActive = true
            this.isLogin = false
        }
    },

  
};
</script>

<style>
a.router-link-active.router-link-exact-active.nav-link {
    color: white!important;
    background: red;
    padding: 8px;
    border-radius: 4px;
}
.navbar-dark .navbar-brand {
    color: #fff;
    font-size: 25px;
}
.navbar-dark .navbar-nav .nav-link {
    color: white
}
.navbar-dark .navbar-nav .nav-link {
    font-size: 19px;
}
.navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
    justify-content: flex-end;
}
</style>