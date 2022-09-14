<template>
    <header id="header" class="site-header">
        <div class="wrapper">
            <div class="header-content d-flex justify-content-between">
                <div class="header-logo">
                    <router-link class="logo logo-primary transform-scale-h" title="Logo" to="/">
                        <img src="assets/img/logo/logo.png" alt="Logo">
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
