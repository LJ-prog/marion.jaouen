<template>
    <div class="menu-toggle no-space">
        <button @click="toggleMenuModal"  type="button" class="btn btn-link border-0 p-0 min-w-auto" data-toggle="modal" data-target="#menu-modal">
            <span class="adveits-i adv-hamburger">
                <span></span>
                <span></span>
            </span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'MenuModalButton',
        methods: {
            toggleMenuModal: function( event ) {
                this.$store.commit( 'toggleMenuModal' );
            }
        }
    }
</script>
