<template>
    <div class="col-xl-8 col-lg-8 col-md-12">
        <div class="row gutter-width-md with-pb-lg">
            <div v-for="blogItem in blogItems" :key="blogItem.id" class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="card card-post">
                    <div class="card-top position-relative">
                        <router-link :title="blogItem.title" :to="blogItem.link">
                            <div class="img object-fit overflow-hidden">
                                <div class="object-fit-cover transform-scale-h">
                                    <img class="card-top-img" :src="blogItem.imgSrc" :alt="blogItem.title">
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <div class="card-body">
                        <div class="card-meta">
                            <p>
                                <span><router-link :to="blogItem.categoryLink">{{ blogItem.author }}</router-link></span>
                                <span>-</span>
                                <span>Comments (1)</span>
                                <span>-</span>
                                <span><router-link :to="blogItem.categoryLink">{{ blogItem.category }}</router-link></span>
                            </p>
                        </div>

                        <h5 class="card-title">
                            <router-link :title="blogItem.title" :to="blogItem.link">{{ blogItem.title }}</router-link>
                        </h5>

                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                        <div class="card-btn no-space">
                            <router-link title="Read me" class="btn btn-link btn-line p-0 border-0 min-w-auto text-uppercase before" :to="blogItem.link">Read me</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <LoadMore />
    </div>
</template>

<script>
    import LoadMore from '../../components/Loadmore/Loadmore';

    import BlogData from '../../data/blog/blogData.json';

    export default {
        name: 'Blog',
        components: {
            LoadMore
        },
        data() {
            return {
                blogItems: BlogData.blogData
            }
        }
    }
</script>
