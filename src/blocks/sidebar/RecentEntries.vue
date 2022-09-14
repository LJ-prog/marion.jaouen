<template>
    <div class="widget widget_recent_entries">
        <h5 class="widget-title"><span class="widget-line"></span>Recent posts</h5>

        <ul class="list-unstyled items">
            <li v-for="recentEntry in recentItems" :key="recentEntry.id" class="item">
                <div class="row gutter-width-xs">
                    <div class="col-3">
                        <router-link :to="recentEntry.link">
                            <div class="img object-fit overflow-hidden">
                                <div class="object-fit-cover transform-scale-h">
                                    <img :src="recentEntry.imgSrc" :alt="recentEntry.title">
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <div class="col-9 align-self-center">
                        <p class="item-t-head"><router-link :title="recentEntry.title" :to="recentEntry.link">{{ recentEntry.title }}</router-link></p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import RecentEntriesData from '../../data/sidebar/recentEntriesData.json';

    export default {
        name: 'RecentEntries',
        data() {
            return {
                recentItems: RecentEntriesData.recentEntriesData
            }
        }
    }
</script>
