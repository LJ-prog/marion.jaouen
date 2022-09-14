<template>
    <div id="clients" class="block spacer p-top-xl">
        <div class="bg-light-full-width clients-bottom-no-space">
            <div class="clients">
                <div class="clients-items">
                    <div v-for="clientsItem in clientsItems" :key="clientsItem.id" class="clients-item">
                        <div class="clients-item-content">
                            <img :src="clientsItem.imgSrc" :alt="clientsItem.name">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ClientsData from '../../data/about/clientsData.json';

    export default {
        name: 'Clients',
        data() {
            return {
                clientsItems: ClientsData.clientsData
            }
        }
    }
</script>
