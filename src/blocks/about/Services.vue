<template>
    <div class="row gutter-width-md with-pb-sm">
        <div v-for="serviceItem in serviceItems" :key="serviceItem.id" class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div class="service-item">
                <div class="img object-fit">
                    <div class="object-fit-cover">
                        <img :src="serviceItem.imgSrc" :alt="serviceItem.title">
                    </div>
                </div>

                <div class="img-bg-color"></div>

                <h5 class="service-item-title">{{ serviceItem.title }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    import ServiceData from '../../data/about/servicesData.json';

    export default {
        name: 'Services',
        data() {
            return {
                serviceItems: ServiceData.servicesData
            }
        }
    }
</script>
