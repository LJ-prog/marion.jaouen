<template>
    <div id="portfolio-page-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <Gallery />
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

    import PageTitle from '../../blocks/portfolio/PageTitle';
    import Gallery from '../../blocks/portfolio/Gallery';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Gallery,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'archive' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'archive' );
        },
        metaInfo: {
            title: 'Portfolio | Sister - Wedding',
            titleTemplate: '%s'
        }
    }
</script>
