<template>
    <div id="portfolio-inside-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <div id="page-content">
                <div class="content">
                    <div id="single">
                        <div class="single-content">
                            <PageTitle />

                            <AboutProject />

                            <Carousel />

                            <Pagination />
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

    import PageTitle from '../../blocks/portfolio-inside/PageTitle';
    import AboutProject from '../../blocks/portfolio-inside/AboutProject';
    import Carousel from '../../blocks/portfolio-inside/Carousel';
    import Pagination from '../../blocks/portfolio-inside/Pagination';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            AboutProject,
            Carousel,
            Pagination,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'single' );
            document.body.classList.add( 'single-portfolio' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single' );
            document.body.classList.remove( 'single-portfolio' );
        },
        metaInfo: {
            title: 'Portfolio inside | Sister - Wedding',
            titleTemplate: '%s'
        }
    }
</script>
