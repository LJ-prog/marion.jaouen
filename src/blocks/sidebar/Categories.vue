<template>
    <div class="widget widget_categories">
        <h6 class="widget-title">Categories</h6>

        <ul>
            <li v-for="categoriesItem in categoriesItems" :key="categoriesItem.id" class="cat-item">
                <router-link :title="categoriesItem.title" :to="categoriesItem.link">{{ categoriesItem.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import CategorieList from '../../data/sidebar/categoriesData';

    export default {
        name: 'Categories',
        data() {
            return {
                categoriesItems: CategorieList.categoriesData
            }
        }
    }
</script>
