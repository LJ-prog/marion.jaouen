<template>
    <div id="home-index">
        <Loading />

        <Header />

        <main id="main" class="site-main">
            <div class="content">
                <div class="clearfix">
                    <PageTitle />

                    <section id="services" class="block spacer p-top-xl">
                        <div class="wrapper">
                            <div class="title">
                                <h2>What I do?</h2>
                            </div>

                            <Services />
                        </div>
                    </section>

                    <section id="porfolio" class="block spacer p-top-xl">
                        <div class="wrapper">
                            <div class="title">
                                <h2>My Portfolio</h2>
                            </div>

                            <div class="description max-width-2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>

                            <div class="spacer p-top-lg">
                                <Gallery />
                            </div>
                        </div>
                    </section>

                    <section id="contact-me" class="block spacer p-top-xl">
                        <div class="wrapper">
                            <div class="row gutter-width-md with-pb-md">
                                <div class="col-sm-8 col-md-8 col-lg-7 col-xl-7 align-self-center">
                                    <div class="title">
                                        <h2>You can sign up a time for Wedding photography today.</h2>
                                    </div>

                                    <div class="description max-width-1">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>

                                    <div class="description max-width-1 spacer m-top-lg no-space">
                                        <router-link class="btn btn-link btn-line p-0 border-0 min-w-auto text-uppercase before" to="/contacts">Contact me</router-link>
                                    </div>
                                </div>

                                <div class="col-sm-4 col-md-4 col-lg-5 col-xl-5">
                                    <div class="img-size-1">
                                        <img src="assets/img/demo/04_img.png" alt="Contact Me">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Blog />

                    <section id="contact-me-2" class="block spacer p-top-xl">
                        <div class="wrapper">
                            <ContactMe2 />
                        </div>
                    </section>
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

    import PageTitle from '../../blocks/index/PageTitle';
    import Services from '../../blocks/about/Services';
    import Blog from '../../blocks/index/Blog';
    import Gallery from '../../blocks/portfolio/Gallery';
    import ContactMe2 from '../../blocks/contacts/ContactMe2';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Services,
            Blog,
            Gallery,
            ContactMe2,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'home' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'home' );
        },
        metaInfo: {
            title: 'Home | Sister - Wedding',
            titleTemplate: '%s'
        }
    }
</script>
