<template>
    <section id="page-title">
        <div class="wrapper">
            <div class="title">
                <h1 class="large">Blog.</h1>
            </div>

            <div class="spacer m-top-md">
                <div class="row gutter-width-md">
                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">Blog</li>
                            </ol>
                        </nav>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div class="description-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'PageTitle'
    }
</script>
