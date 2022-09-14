<template>
    <div id="pagination" class="block spacer p-top-xl">
        <div class="wrapper">
            <div class="portfolio-pagination">
                <div class="row justify-content-between gutter-width-md with-pb-lg">
                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <router-link class="d-flex justify-content-start link previous-link" to="/portfolio-inside#header">
                            <div class="d-flex align-items-center justify-content-start">
                                <div class="left">
                                    <p><i class="fas fa-long-arrow-alt-left"></i></p>
                                </div>

                                <div class="right">
                                    <p class="link-text after">Previous project</p>
                                    <h4 class="link-title">Lorem Ipsum is simply dummy text of the printing.</h4>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <router-link class="d-flex justify-content-end link next-link" to="/portfolio-inside#portfolio-inside-index">
                            <div class="d-flex align-items-center justify-content-end">
                                <div class="left">
                                    <p class="link-text after">Next project</p>
                                    <h4 class="link-title">Lorem Ipsum is simply dummy text of the printing.</h4>
                                </div>

                                <div class="right">
                                    <p><i class="fas fa-long-arrow-alt-right"></i></p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pagination'
    }
</script>
