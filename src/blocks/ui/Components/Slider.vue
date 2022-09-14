<template>
    <div id="slider" class="spacer m-top-xl">
        <h3>Slider</h3>
        <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>

        <div id="slider-examples">
            <h4>Examples</h4>

            <div id="slides-only">
                <h5>Slides only</h5>
                <p>Here’s a carousel with slides only.</p>

                <div class="bd-example">
                    <div class="slider">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                        <title>First slide</title>
                                        <rect width="100%" height="100%"></rect>
                                        <text x="50%" y="50%" dy=".3em">First slide</text>
                                    </svg>
                                </div>

                                <div class="swiper-slide">
                                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                        <title>Second slide</title>
                                        <rect width="100%" height="100%"></rect>
                                        <text x="50%" y="50%" dy=".3em">Second slide</text>
                                    </svg>
                                </div>

                                <div class="swiper-slide">
                                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                        <title>Third slide</title>
                                        <rect width="100%" height="100%"></rect>
                                        <text x="50%" y="50%" dy=".3em">Third slide</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                                                    <pre><code class="language-html">&lt;div class=&quot;slider&quot;&gt;
  &lt;div class=&quot;swiper-container&quot;&gt;
    &lt;div class=&quot;swiper-wrapper&quot;&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;First slide&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Second slide&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Third slide&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #slides-only -->

            <div id="with-controls">
                <h5>With controls</h5>
                <p>Adding in the previous and next controls.</p>

                <div class="bd-example">
                    <div class="slider">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                        <title>First slide</title>
                                        <rect width="100%" height="100%"></rect>
                                        <text x="50%" y="50%" dy=".3em">First slide</text>
                                    </svg>
                                </div>

                                <div class="swiper-slide">
                                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                        <title>Second slide</title>
                                        <rect width="100%" height="100%"></rect>
                                        <text x="50%" y="50%" dy=".3em">Second slide</text>
                                    </svg>
                                </div>

                                <div class="swiper-slide">
                                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                        <title>Third slide</title>
                                        <rect width="100%" height="100%"></rect>
                                        <text x="50%" y="50%" dy=".3em">Third slide</text>
                                    </svg>
                                </div>
                            </div>

                            <!-- Add Arrows -->
                            <div class="adv-swiper-button-next"></div>
                            <div class="adv-swiper-button-prev"></div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                                                    <pre><code class="language-html">&lt;div class=&quot;slider&quot;&gt;
  &lt;div class=&quot;swiper-container&quot;&gt;
    &lt;div class=&quot;swiper-wrapper&quot;&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;First slide&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Second slide&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Third slide&lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Add Arrows --&gt;
    &lt;div class=&quot;adv-swiper-button-next&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;adv-swiper-button-prev&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #with-controls -->
        </div><!-- #slider-examples -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click <a href="https://swiperjs.com/demos/" target="_blank">Swiper documentation</a>.</p>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

    export default {
        name: 'Slider',
        mounted() {
            new Swiper( '#slides-only .swiper-container', {
                // ADV swiper
                noSwipingClass: 'swiper-no-swiping',
                containerModifierClass: 'swiper-container-',
                slideClass: 'swiper-slide',
                slideBlankClass: 'swiper-slide-invisible-blank',
                slideActiveClass: 'swiper-slide-active',
                slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
                slideVisibleClass: 'swiper-slide-visible',
                slideDuplicateClass: 'swiper-slide-duplicate',
                slideNextClass: 'adv-swiper-slide-next',
                slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
                slidePrevClass: 'adv-swiper-slide-prev',
                slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
                wrapperClass: 'swiper-wrapper',
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                freeMode: false
            } );
            new Swiper( '#with-controls .swiper-container', {
                // ADV swiper
                noSwipingClass: 'swiper-no-swiping',
                containerModifierClass: 'swiper-container-',
                slideClass: 'swiper-slide',
                slideBlankClass: 'swiper-slide-invisible-blank',
                slideActiveClass: 'swiper-slide-active',
                slideDuplicateActiveClass: '-slide-duplicate-active',
                slideVisibleClass: 'swiper-slide-visible',
                slideDuplicateClass: 'swiper-slide-duplicate',
                slideNextClass: 'swiper-slide-next',
                slideDuplicateNextClass: 'swiper-slide-duplicate-next',
                slidePrevClass: 'swiper-slide-prev',
                slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
                wrapperClass: 'swiper-wrapper',
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                freeMode: false,
                navigation: {
                    nextEl: '.adv-swiper-button-next',
                    prevEl: '.adv-swiper-button-prev'
                }
            } );
        }
    }
</script>
