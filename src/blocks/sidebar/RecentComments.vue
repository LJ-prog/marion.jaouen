<template>
    <div class="widget widget_recent_comments">
        <h5 class="widget-title"><span class="widget-line"></span>Recent Comments</h5>

        <ul class="recentcomments">
            <li v-for="recentItem in recentItems" :key="recentItem.id" class="recentcomments">
                <span class="comment-author-link">{{ recentItem.author }}</span> on
                <router-link :title="recentItem.author" :to="recentItem.link">{{ recentItem.comment }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import RecentComments from '../../data/sidebar/recentCommentsData.json';

    export default {
        name: 'RecentComments',
        data() {
            return {
                recentItems: RecentComments.recentCommentsData
            }
        }
    }
</script>
