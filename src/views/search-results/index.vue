<template>
    <div id="search-results-index">
        <Loading />

        <Header />

        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="row gutter-width-md with-pb-lg">
                        <div v-for="searchItem in searchItems" :key="searchItem.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div class="card card-post">
                                <div class="card-body p-0">
                                    <h4 class="card-title">
                                        <router-link :title="searchItem.title" :to="searchItem.link">{{ searchItem.title }}</router-link>
                                    </h4>

                                    <div class="card-meta">
                                        <p>
                                            <span><router-link :to="searchItem.categoryLink">{{ searchItem.category }}</router-link></span>
                                        </p>
                                    </div>

                                    <p class="card-text">{{ searchItem.description }}</p>
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

    import PageTitle from '../../blocks/search-results/PageTitle';
    import SearchItems from '../../data/search-results/searchItems.json';

    export default {
        data() {
            return {
                searchItems: SearchItems.searchItems
            };
        },
        components: {
            Loading,
            Header,
            PageTitle,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'search-results' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'search-results' );
        },
        metaInfo: {
            title: 'Search results | Sister - Wedding',
            titleTemplate: '%s'
        }
    }
</script>
