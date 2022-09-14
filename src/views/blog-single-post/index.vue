<template>
    <div id="blog-single-post-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div id="single">
                            <div class="row gutter-width-md">
                                <div class="col-xl-8 col-lg-8 col-md-12 single-content">
                                    <div class="img object-fit">
                                        <div class="object-fit-cover">
                                            <img src="assets/img/placeholder/1050x600.jpg" alt="Cozy USA elopement for adventurers">
                                        </div>
                                    </div>

                                    <Meta />

                                    <div class="title">
                                        <h2>Cozy USA elopement for adventurers</h2>
                                    </div>

                                    <Description />

                                    <Tags />

                                    <Comments />
                                </div>

                                <div class="col-xl-4 col-lg-4 col-md-12">
                                    <Sidebar />
                                </div>
                            </div>
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

    import PageTitle from '../../blocks/blog/PageTitle';
    import Meta from '../../blocks/blog-single-post/Meta';
    import Description from '../../blocks/blog-single-post/Description';
    import Tags from '../../blocks/blog-single-post/Tags';
    import Comments from '../../blocks/blog-single-post/Comments';
    import Sidebar from '../../blocks/blog/Sidebar';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Meta,
            Description,
            Tags,
            Comments,
            Sidebar,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'single-post' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single-post' );
        },
        metaInfo: {
            title: 'News single post | Hosco - Dentist & Medical Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
