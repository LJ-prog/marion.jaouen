<template>
    <nav class="menu-primary">
        <ul class="nav flex-column">
            <li @click="closeOnSameRoute" :class="[ ( currentPage === '/' ) ? activeClass : '', 'nav-item' ]">
                <router-link title="Home" to="/">Home</router-link>
            </li>

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('about') ? activeClass : '', 'nav-item' ]">
                <router-link title="About" to="/about">About</router-link>
            </li>

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('portfolio') ? activeClass : '', 'nav-item' ]">
                <router-link title="Portfolio" to="/portfolio">Portfolio</router-link>
            </li>

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('blog') || currentPage.includes('blog-single-post') ? activeClass : '', 'nav-item' ]">
                <router-link title="Blog" to="/blog">Blog</router-link>
            </li>

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('contacts') ? activeClass : '', 'nav-item' ]">
                <router-link title="Contacts" to="/contacts">Contacts</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'ModalMenu',
        data() {
            return {
                activeClass: 'current-nav-item'
            }
        },
        methods: {
            closeOnSameRoute: function( event ) {
                const clickTargetHref = event.target.getAttribute( 'href' );

                if ( clickTargetHref === this.$route.path ) {
                    this.toggleMenuModal();
                }
            },
            toggleMenuModal: function( event ) {
                this.$store.commit( 'toggleMenuModal' );
                this.$store.commit( 'variablesNull' );
            }
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        }
    }
</script>
