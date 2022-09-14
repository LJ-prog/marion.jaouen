<template>
    <div class="gallery">
        <ul class="gallery-filter">
            <fragment v-for="filterItem in filterItems" :key="filterItem.id">
                <li @click="filter">
                    <router-link :title="filterItem.title" class="btn btn-link text-uppercase click" :data-filter="filterItem.filter" to="">{{ filterItem.title }}</router-link>
                </li>

                <li>
                    <span class="btn btn-link text-uppercase">-</span>
                </li>
            </fragment>
        </ul>

        <div class="gallery-item-wrapper">
            <div class="gallery-items">
                <div v-for="galleryItem in galleryItems" :key="galleryItem.id" :class="[ 'gallery-item active ' + galleryItem.category ]">
                    <router-link :title="galleryItem.title" class="gallery-item-content" :to="galleryItem.link">
                        <div class="img object-fit">
                            <div class="object-fit-cover">
                                <img :src="galleryItem.imgSrc" :alt="galleryItem.title">
                            </div>
                        </div>

                        <div class="gallery-hover">
                            <h5 class="gallery-item-title">{{ galleryItem.title }}</h5>

                            <p class="gallery-item-description">{{ galleryItem.description }}</p>

                            <div class="gallery-item-btn no-space">
                                <span class="btn btn-link btn-line p-0 border-0 min-w-auto text-uppercase">More</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div v-if="currentPage === '/'" class="spacer m-top-lg text-center">
            <router-link title="See more" class="btn btn-outline-primary text-uppercase" to="/portfolio">See more</router-link>
        </div>
    </div>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import Isotope from 'isotope-layout';
    import ImagesLoaded from 'imagesloaded';

    import FilterData from '../../data/portfolio/filterData.json';
    import GalleryData from '../../data/portfolio/galleryData.json';

    export default {
        name: 'Gallery',
        components: {
            Fragment,
            Isotope,
            ImagesLoaded
        },
        data() {
            return {
                filterItems: FilterData.filterData,
                galleryItems: GalleryData.galleryData
            }
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        },
        methods: {
            filter: function( event ) {
                event.preventDefault();

                const filter        = event.target;
                const filterValue   = filter.getAttribute( 'data-filter' );
                const filters       = document.querySelectorAll( '.gallery-filter .click' );

                filters.forEach( filter => {
                    if ( filter.classList.contains( 'active' )) {
                        filter.classList.remove( 'active' );
                    }
                });

                filter.classList.add( 'active' );

                this.changeLayout( filterValue )
            },
            changeLayout: function( newFilter ) {
                const grid = document.querySelector( '.gallery-items' );

                if ( this.iso === undefined ) {
                    this.iso = new Isotope( grid, {
                        itemSelector: '.gallery-item',
                        masonry: {
                            horizontalOrder: true
                        }
                    });
                }

                if ( newFilter === '*' ) {
                    this.iso.arrange( { filter: `*` } );

                } else {
                    this.iso.arrange( { filter: `.${ newFilter }` } );
                }
            }
        },
        mounted() {
            const lastLi = document.querySelector( '.gallery .gallery-filter').lastElementChild;
            lastLi.remove();

            const filters = document.querySelectorAll( '.gallery-filter .click' );
            filters.forEach( filter => {
                if ( filter.getAttribute( 'data-filter' ) === '*' ) {
                    filter.classList.add( 'active' );
                }
            });

            const grid = document.querySelector( '.gallery-items' );

            const iso = new Isotope( grid, {
                itemSelector: '.gallery-item',
                masonry: {
                    horizontalOrder: true
                }
            });

            const imgLoad = new ImagesLoaded( grid );

            imgLoad.on( 'progress', function( instance, image ) {
                iso.layout();
            } );
        }, 
        unmounted() {
            this.iso.destroy();
        }
    }
</script>
