<template>
    <div id="blog-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div id="blog">
                            <div class="row gutter-width-md">
                                <Blog />

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
    import Blog from '../../blocks/blog/Blog';
    import Sidebar from '../../blocks/blog/Sidebar';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Blog,
            Sidebar,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'blog' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'blog' );
        },
        metaInfo: {
            title: 'Blog | Sister - Wedding',
            titleTemplate: '%s'
        }
    }
</script>
