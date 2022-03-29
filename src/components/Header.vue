<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
 <router-link class="navbar-brand" :to="{name: 'Home'}" >VueJS Logo</router-link>

  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
 <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">VueJS Logo</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
        </div>
            <div class="body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                        <router-link :to="{name: 'about'}" v-if="isActive" class="nav-link">About</router-link>
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
    color: black!important;
    background: red;
    padding: 12px;
    border-radius: 4px;
}

.navbar-dark .navbar-brand {
    color: rgb(0, 0, 0);
    font-size: 25px;
}
.navbar-dark .navbar-nav .nav-link {
    color: rgb(0, 0, 0)
}
.navbar-dark .navbar-nav .nav-link {
    font-size: 19px;
}
.navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
    justify-content: flex-end;
}

.navbar-dark .navbar-nav .nav-link {
    color: black;
}
.nav-link {
    color:black!important;
}
</style>