<template>
    <div id="404-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <div id="page-content">
                <div class="wrapper">
                    <div class="content">
                        <div class="row gutter-width-md">
                            <div class="col-11 col-sm-10 col-md-9 col-lg-6 col-xl-6">
                                <PageTitle />

                                <p class="text after">The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>

                                <div class="form">
                                    <SearchForm />
                                </div>

                                <div class="button">
                                    <router-link title="Back to homepage" class="btn btn-outline-primary text-uppercase" to="/">Back to home</router-link>
                                </div>
                            </div>

                            <div class="col-1 col-sm-2 col-md-3 col-lg-6 col-xl-6">
                                <div class="img-404">
                                    <img src="assets/img/404/404-img.png" alt="404">
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

    import PageTitle from '../../blocks/404/PageTitle';
    import SearchForm from '../../components/Forms/SearchForm';
    import BackToHome from '../../components/Button/BackToHome';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            SearchForm,
            BackToHome,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'error404' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'error404' );
        },
        metaInfo: {
            title: '404 | Sister - Wedding',
            titleTemplate: '%s'
        }
    }
</script>
