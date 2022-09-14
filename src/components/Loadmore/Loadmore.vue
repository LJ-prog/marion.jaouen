<template>
    <div class="loadmore spacer m-top-lg">
        <a @click="scrollToSection('#blog-index')" title="Load More" class="btn btn-outline-primary text-uppercase" href="#blog-index">Load More</a>
    </div>
</template>

<script>
    export default {
        name: 'Loadmore'
    }
</script>
