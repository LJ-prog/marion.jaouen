<template>
    <div id="contacts-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <div id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="content">
                        <div class="clearfix">
                            <div id="contacts" class="block">
                                <div class="row gutter-width-md with-pb-sm">
                                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div class="contacts-item">
                                            <div class="img object-fit">
                                                <div class="object-fit-cover">
                                                    <img src="assets/img/demo/05_img.png" alt="Location">
                                                </div>
                                            </div>

                                            <div class="contacts-item-content">
                                                <h3 class="contacts-item-title after">Location</h3>
                                                <p class="contacts-item-description">575 Crescent Ave. Quakertown, PA 18951</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div class="contacts-item">
                                            <div class="img object-fit">
                                                <div class="object-fit-cover">
                                                    <img src="assets/img/demo/06_img.png" alt="Phone no.">
                                                </div>
                                            </div>

                                            <div class="contacts-item-content">
                                                <h3 class="contacts-item-title after">Phone no.</h3>
                                                <p class="contacts-item-description"><a href="tel:+7193384628">719-338-4628</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div class="contacts-item">
                                            <div class="img object-fit">
                                                <div class="object-fit-cover">
                                                    <img src="assets/img/demo/07_img.png" alt="Email">
                                                </div>
                                            </div>

                                            <div class="contacts-item-content">
                                                <h3 class="contacts-item-title after">Email</h3>
                                                <p class="contacts-item-description"><a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="contact-me-2" class="block spacer p-top-xl">
                                <ContactMe2 />
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

    import PageTitle from '../../blocks/contacts/PageTitle';
    import ContactMe2 from '../../blocks/contacts/ContactMe2';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            ContactMe2,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'page' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'page' );
        },
        metaInfo: {
            title: 'Contacts | Sister - Wedding',
            titleTemplate: '%s'
        }
    }
</script>
