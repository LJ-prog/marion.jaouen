<template>
    <fragment>
        <transition @enter="startTransitionModal" @after-enter="endTransitionModal" @before-leave="endTransitionModalLeave" @after-leave="startTransitionModalLeave">
            <div v-show="showMenuModal" class="modal fade" id="menu-modal" tabindex="-1" role="dialog" aria-labelledby="menu-modal" aria-hidden="true" ref="modal">
                <div class="modal-dialog modal-full" role="document">
                    <div class="wrapper">
                        <div class="modal-content">
                            <div class="modal-header modal-header-top">
                                <Logo />

                                <button  @click="toggleMenuModal" type="button" class="close btn btn-link border-0 min-w-auto" data-dismiss="modal" aria-label="Close">
                                    <span class="adveits-i adv-close">
                                        <span></span>
                                        <span></span>
                                    </span>
                                </button>
                            </div>

                            <div class="modal-body modal-body-centered">
                                <div class="d-flex justify-content-center w-100">
                                    <div class="menu-img">
                                        <img src="assets/img/menu/menu-img.png" alt="Menu">
                                    </div>

                                    <div class="animated fadeindown">
                                        <ModalMenu />

                                        <SearchModalButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div class="modal-backdrop fade d-none" ref="backdrop"></div>
    </fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment'
    import { mapMutations } from 'vuex';

    import Logo from '../../blocks/header/HeaderLogo';
    import SearchModalButton from '../Button/SearchModalButton';
    import ModalMenu from '../../blocks/General/ModalMenu';

    export default {
        name: 'Menu-Modal',
        components: {
            Logo,
            SearchModalButton,
            ModalMenu,
            Fragment
        },
        computed: {
            showMenuModal () {
                return this.$store.state.showMenuModal
            }
        },
        methods: {
            ...mapMutations([
                'toggleMenuModal'
            ]),
            startTransitionModal() {
                if ( ! this.$refs.backdrop.classList.contains( 'd-block' ) ) {
                    this.$refs.backdrop.classList.add( 'd-block' );
                }

                if ( ! this.$refs.modal.classList.contains( 'd-block' ) ) {
                    this.$refs.modal.classList.add( 'd-block' );
                }
            },
            startTransitionModalLeave() {
                if ( this.$refs.backdrop.classList.contains( 'd-block' ) ) {
                    this.$refs.backdrop.classList.remove( 'd-block' );
                }

                if ( this.$refs.modal.classList.contains( 'd-block' ) ) {
                    this.$refs.modal.classList.remove( 'd-block' );
                }
            },
            endTransitionModal() {
                if ( ! this.$refs.backdrop.classList.contains( 'show' ) ) {
                    this.$refs.backdrop.classList.add( 'show' );
                }

                if ( ! this.$refs.modal.classList.contains( 'show' ) ) {
                    this.$refs.modal.classList.add( 'show' );
                }

                if ( ! document.body.classList.contains( 'modal-open' ) ) {
                    document.body.classList.add( 'modal-open' )
                }
            },
            endTransitionModalLeave() {
                if ( this.$refs.backdrop.classList.contains( 'show' ) ) {
                    this.$refs.backdrop.classList.remove( 'show' );
                }

                if ( this.$refs.modal.classList.contains( 'show' ) ) {
                    this.$refs.modal.classList.remove( 'show' );
                }

                if ( document.body.classList.contains( 'modal-open' ) ) {
                    document.body.classList.remove( 'modal-open' )
                }
            }
        },
        mounted() {
            document.addEventListener( 'keydown', e => {
                if ( document.getElementById( 'search-modal' ).classList.contains( 'd-block' ) ) {
                    return;
                } else if ( e.isComposing || e.keyCode === 27 ) {
                    this.$store.commit( 'closeMenuModal' );
                }
            });
        },
        beforeDestroy() {
            if ( document.body.classList.contains( 'modal-open' ) ) {
                document.body.classList.remove( 'modal-open' )
            }

            document.removeEventListener( 'keydown', e => {
                if ( e.isComposing || e.keyCode === 27 ) {
                    this.$store.commit( 'closeMenuModal' );
                }
            });

            this.$store.commit( 'variablesNull' );
        }
    }
</script>
