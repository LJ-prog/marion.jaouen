<template>
    <aside id="aside" class="widget-area">
        <div class="widget widget_search">
            <SearchForm />
        </div>

        <Categories />

        <RecentEntries />

        <RecentComments />

        <TagCloud />
    </aside>
</template>

<script>
    import SearchForm from '../../components/Forms/SearchForm';
    import Categories from '../../blocks/sidebar/Categories';
    import RecentEntries from '../../blocks/sidebar/RecentEntries';
    import RecentComments from '../../blocks/sidebar/RecentComments';
    import TagCloud from '../../blocks/sidebar/TagCloud';

    export default {
        name: 'Sidebar',
        components: {
            SearchForm,
            Categories,
            RecentEntries,
            RecentComments,
            TagCloud
        }
    }
</script>
