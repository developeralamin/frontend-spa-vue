<template>
    <div class="notFound">
        <h1>Page NotFound</h1>
        <p>Oops!this page is not found.Try another!</p>
        <router-link to="/">Go Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'SpaPagenotfound',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>
.notFound {
    text-align: center;
    margin-top: 12%;
}
</style>