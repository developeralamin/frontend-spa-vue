<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Create Bennar</h5>
               <router-link :to="{name: 'bennar'}" class="btn btn-primary">Bennar List</router-link>
                    </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 offset-3">


        <form @submit.prevent="bennarSubmit()">

        <div class="form-group">
            <label for="">Bennar name</label>
            <input type="text" v-model="addBennar.title"  class="form-control" placeholder="Bennar Title">
            <p v-if="error.title"  class="errorBennar">{{ error.title }}</p>
        </div>
        
        <br>
        <img :src="image" alt="" style="height:100px">
        <br>

    <div class="form-group">
        <label for="">Bennar Thumbnail</label>
        <input type="file" name="photo"   @change="loadImage"  class="form-control"  placeholder="">
         <p v-if="error.photo" class="errorBennar">{{ error.photo }}</p>

    </div>
    <br>
    <div class="form-group">
        <button v-if="isLoading" type="button" class="btn btn-success">Loading....</button>
        <button v-else type="submit" class="btn btn-success">Create Bennar</button>
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
    name: 'SpaCreatebennar',

    data() {
        return {
            isLoading:false,
            error:[],
             image:'',
            addBennar:{
                title:'',
                photo:''
            }
        };
    },

    methods: {
        loadImage(e){
            const file = e.target.files[0]
             // Do some client side validation...
             this.addBennar.photo = file
            // show image here
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e =>{
                this.image = e.target.result;
            }
        },

        bennarSubmit(){

        let formData = new FormData();
        formData.append('title',this.addBennar.title);
        formData.append('photo',this.addBennar.photo);

        if(this.addBennar.title == '' && this.addBennar.photo ==''){
            this.error['title'] = 'Benner field is required'
            this.error['photo'] = 'Image field is required'
        }else{
             this.isLoading = true
             this.error['title'] = null
             this.error['photo'] = null

             axios.post('http://127.0.0.1:8000/api/bennar',formData).then(response =>{
                 alert(response.data.message)
                //  console.log(response.data.message)
                 this.addBennar.title = null
                 this.addBennar.photo = null

                //  this.$router.push('/bennar')
                  this.$router.push('/bennar')

             })
        }
            
        }
      
    },
    mounted() {
         const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push({ name: 'login' })
        }
        // this.bennarSubmit()
    },

};
</script>

<style>
.errorBennar{
 color: red
}

</style>