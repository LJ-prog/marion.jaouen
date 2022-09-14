<template>
    <div class="search-toggle">
        <button @click="toggleSearchModal" type="button" class="btn btn-link btn-line p-0 border-0 min-w-auto text-uppercase" data-toggle="modal" data-target="#search-modal">Search</button>
    </div>
</template>

<script>
    export default {
        name: 'SearchModalButton',
        methods: {
            toggleSearchModal: function( event ) {
                this.$store.commit( 'toggleSearchModal' )
            }
        }
    }
</script>
