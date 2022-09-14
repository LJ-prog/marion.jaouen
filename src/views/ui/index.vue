<template>
    <div id="ui-index">
        <Loading />

        <Header />

        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div class="row gutter-width-md">
                            <div class="col-xl-8 col-lg-8 col-md-12">
                                <p>Sister Wedding maybe</p>

                                <Content />

                                <Components />

                                <Utilities />
                            </div>

                            <div class="col-xl-4 col-lg-4 col-md-12" id="aside-sticky">
                                <Sidebar />
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
    import Header from '../../blocks/ui/Header';
    import Footer from '../../blocks/ui/Footer';

    import PageTitle from '../../blocks/ui/PageTitle';
    import Content from '../../blocks/ui/Content';
    import Components from '../../blocks/ui/Components';
    import Utilities from '../../blocks/ui/Utilities';
    import Sidebar from '../../blocks/ui/Sidebar';

    import Prism from 'vue-prismjs';
    import 'prismjs/themes/prism.css';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Content,
            Components,
            Utilities,
            Sidebar,
            Footer,
            Prism
        },
        mounted: function() {
            document.body.classList.add( 'page' );
            document.body.classList.add( 'ui' );
        },
        beforeDestroy() {
            document.body.classList.remove( '"page' );
            document.body.classList.remove( 'ui' );
        },
        metaInfo: {
            title: 'UI | Sister - Wedding',
            titleTemplate: '%s'
        }
    }
</script>
