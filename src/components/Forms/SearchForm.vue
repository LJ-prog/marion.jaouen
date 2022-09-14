<template>
    <form class="search-form" role="search" method="get" :action="urlAction">
        <div class="search input-group">
            <input class="form-control form-control-lg" type="text" placeholder="Search" name="s">

            <div class="input-group-append">
                <button type="submit" class="btn btn-link border-0 p-0 min-w-auto">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'SearchForm',
        data() {
            return {
                urlAction: window.location.origin + this.$router.resolve( {
                    name: 'search-results',
                    params: { id: 1 }
                } ).href
            }
        }
    }
</script>
