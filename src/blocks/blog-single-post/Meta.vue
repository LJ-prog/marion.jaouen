<template>
    <div class="meta">
        <p>
            <span><router-link to="/blog">By admin</router-link></span>
            <span>-</span>
            <span>Comments (1)</span>
            <span>-</span>
            <span class="category"><router-link title="Wedding" to="/blog">Wedding</router-link></span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Meta'
    }
</script>
