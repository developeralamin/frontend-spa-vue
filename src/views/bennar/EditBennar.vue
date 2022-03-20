<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Edit Bennar</h5>
               <router-link :to="{name: 'bennar'}" class="btn btn-primary">Bennar List</router-link>
                    </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 offset-3">


        <form @submit.prevent="updateBennaer()">

            <div class="form-group">
                <label for="">Bennar name</label>
                <input type="text"  required   v-model="addBennar.title"  class="form-control"  placeholder="Bennar Title">
            </div>
                <br>
                <img :src="photo" alt="" style="height:100px">
                <br>

            <div class="form-group">
                <label for="">Bennar Thumbnail</label>
                <input type="file"    @change="loadImage" class="form-control"  placeholder="">
            </div>
           <br>
            <div class="form-group">
                <button type="submit" class="btn btn-success">Update Bennar</button>
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
    name: 'SpaEditbennar',

    data() {
        return {
            addBennar:{
                title:'',
                photo:''
             },
            photo:''
        };
    },
    methods: {
        bennarAdd(){
              axios.get('http://127.0.0.1:8000/api/bennar/'+this.$route.params.id).then(response =>{
             this.addBennar.title = response.data.data.title;
             this.photo = response.data.path + response.data.data.photo;
            //  console.log(response.data)
        });
        },
        
         loadImage(e){
             const file = e.target.files[0]
             // Do some client side validation...
             this.addBennar.photo = file
             // show image here
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e =>{
                this.photo = e.target.result;
            }
        },

       updateBennaer(){

           let form = new FormData()

           form.append('title',this.addBennar.title)
           form.append('photo',this.addBennar.photo)
         //    console.log(this.addBennar)
           axios.post(`http://127.0.0.1:8000/api/bennar/${this.$route.params.id}`,form).then(response =>{
               console.log(response.data.data)
               alert(response.data.data)
               this.$router.push('/bennar')
           })
       },
    },


    mounted() {
         const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
        this.bennarAdd()
    },


};
</script>

<style>

</style>