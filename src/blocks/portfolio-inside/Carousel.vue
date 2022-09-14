<template>
    <div id="slider" class="block spacer p-top-xl">
        <div class="wrapper">
            <div class="adv-slider">
                <div class="adv-swiper-container">
                    <div class="adv-swiper-wrapper">
                        <div v-for="carouselItem in carouselItems" :key="carouselItem.id" class="adv-swiper-slide">
                            <div class="img object-fit">
                                <div class="object-fit-cover">
                                    <img :src="carouselItem.imgSrc" :alt="carouselItem.alt">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="adv-2-swiper-button-next adv-swiper-button-white">
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>

                    <div class="adv-2-swiper-button-prev adv-swiper-button-white">
                        <i class="fas fa-long-arrow-alt-left"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    
    import CarouselData from '../../data/portfolio-inside/carouselData.json';

    export default {
        name: 'Carousel',
        data() {
            return {
                carouselItems: CarouselData.carouselData
            }
        },
        mounted() {
            const swiper_adv_slider = new Swiper ('.adv-slider .adv-swiper-container', {
                noSwipingClass: 'adv-swiper-no-swiping',
                containerModifierClass: 'adv-swiper-container-',
                slideClass: 'adv-swiper-slide',
                slideBlankClass: 'adv-swiper-slide-invisible-blank',
                slideActiveClass: 'adv-swiper-slide-active',
                slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
                slideVisibleClass: 'adv-swiper-slide-visible',
                slideDuplicateClass: 'adv-swiper-slide-duplicate',
                slideNextClass: 'adv-swiper-slide-next',
                slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
                slidePrevClass: 'adv-swiper-slide-prev',
                slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
                wrapperClass: 'adv-swiper-wrapper',
                navigation: {
                    disabledClass: 'adv-swiper-button-disabled',
                    hiddenClass: 'adv-swiper-button-hidden',
                    lockClass: 'adv-swiper-button-lock',
                    nextEl: '.adv-2-swiper-button-next',
                    prevEl: '.adv-2-swiper-button-prev'
                },
                spaceBetween: 0
            });
        }
    }
</script>
