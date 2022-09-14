<template>
    <div class="header-logo">
        <router-link class="logo logo-primary transform-scale-h" title="Logo" to="/">
            <img @click="closeModal" src="assets/img/logo/logo.png" alt="Logo">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'HeaderLogo',
                computed: {
            currentPage() {
                return this.$route.path;
            },
            showMenuModal () {
                return this.$store.state.showMenuModal
            }
        },
        methods: {
            closeModal: function() {
                if (this.currentPage === '/') {
                    if (this.showMenuModal) {
                        this.$store.commit( 'closeMenuModal' );
                    }
                } else {
                    return;
                }
            }
        }
    }
</script>
