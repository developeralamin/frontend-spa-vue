<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Edit Course</h5>
                        <router-link :to="{name: 'course'}" class="btn btn-primary">Course List</router-link>
                    </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 offset-3">


   <form @submit.prevent="updateCourse()">

            <div class="form-group">
                <label for="">Course name</label>
                <input type="text"  required v-model="showCoures.title"   class="form-control"  placeholder="Course Title">
            </div>
                <br>
         <div class="form-group">
                <label for="">Description</label>
                <input type="text" v-model="showCoures.description" required   class="form-control" placeholder="Course description">
          </div>
            <br>
            
     <div class="form-group">
         <label for="">Category</label>
        <select v-model="showCoures.category_id" class="form-control">
          <option value="">Select Category</option>
          <option  v-for="category in categories" :key="category.id" :value="category.id">{{ category.title }}</option>
        </select>
     </div>

        <br>
        <img :src="image" alt="" style="height:100px">
        <br>
        <div class="form-group">
            <label for="">Course Thumbnail</label>
            <input type="file"    @change="onImageChange"  class="form-control" >

        </div>

           <br>
            <div class="form-group">
                <button type="submit" class="btn btn-success">Update Course</button>
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
    name: 'SpaEditcourse',

    data() {
        return {
         
            showCoures:{
                  title:'',
                  description:'',
                  photo:'',
                  category_id:''
            },

            image:'',
            categories:[],
        };
    },

    methods: {
        editCourseSection(){
            axios.get('http://127.0.0.1:8000/api/courses/'+this.$route.params.id).then(response =>{
                this.showCoures.title = response.data.data.title
                this.showCoures.description = response.data.data.description
                this.showCoures.category_id = response.data.data.category_id
                this.image = response.data.path + response.data.data.photo
            })
        },
        editCategory(){
              axios.get('http://127.0.0.1:8000/api/category')
                .then(response => {
                    this.categories = response.data.data
             })
        },

      onImageChange(e){
             const file = e.target.files[0]
             // Do some client side validation...
             this.showCoures.photo = file
             // show image here
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e =>{
                this.image = e.target.result;
            }
        },

     
     updateCourse(){
          let form = new FormData();

           form.append('title',this.showCoures.title)
           form.append('photo',this.showCoures.photo)
           form.append('category_id',this.showCoures.category_id)
           form.append('description',this.showCoures.description)

        axios.post(`http://127.0.0.1:8000/api/courses/${this.$route.params.id}`,form).then(response =>{
            
               console.log(response.data.data);
               alert(response.data.data);
             this.$router.push('/course')

         });
     }




    },
    
    mounted() {
         const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }
        
        this.editCourseSection()
        this.editCategory()
    },
};
</script>

<style lang="scss" scoped>





</style>