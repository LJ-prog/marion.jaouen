<template>
    <div id="about-page-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div class="clearfix">
                            <div id="about-img" class="block">
                                <div class="about-img">
                                    <div class="img object-fit">
                                        <div class="object-fit-cover">
                                            <img src="assets/img/placeholder/1600x900.jpg" alt="About">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="about" class="block spacer p-top-xl">
                                <div class="title">
                                    <h2>About me</h2>
                                </div>

                                <div class="row gutter-width-md with-pb-md">
                                    <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <h5>I’m a wedding, anniversary and honeymoon photographer.</h5>
                                    </div>

                                    <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
                                    </div>
                                </div>
                            </div>

                            <div id="services" class="block spacer p-top-xl">
                                <div class="title">
                                    <h2>What I do?</h2>
                                </div>

                                <Services />
                            </div>

                            <div id="portfolio" class="block spacer p-top-xl">
                                <div class="text-center">
                                    <router-link title="My portfolio" class="btn btn-outline-primary text-uppercase" to="/portfolio">My portfolio</router-link>
                                </div>
                            </div>

                            <!-- <Clients /> -->
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script>
    import Loading from '../../components/Loading/Loading';
    import Header from '../../blocks/header/Header';
    import Footer from '../../blocks/footer/Footer';

    import PageTitle from '../../blocks/about/PageTitle';
    import Services from '../../blocks/about/Services';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Services,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'page' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'page' );
        },
        metaInfo: {
            title: 'About | Sister - Wedding',
            titleTemplate: '%s'
        }
    }
</script>
