<template>
    <section id="about-the-project" class="block spacer p-top-xl">
        <div class="wrapper">
            <div class="title">
                <h2>About the project</h2>
            </div>

            <div class="row gutter-width-md with-pb-md">
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div class="project-info">
                        <div class="project-info-items">
                            <div v-for="projectItem in projectItems" :key="projectItem.id" class="project-info-item">
                                <div class="project-info-item-content">
                                    <div class="img object-fit">
                                        <div class="object-fit-cover">
                                            <img :src="projectItem.imgSrc" :alt="projectItem.title">
                                        </div>
                                    </div>

                                    <div class="project-info-item-description">
                                        <h5 class="project-info-title after">{{ projectItem.title }}</h5>
                                        <p class="project-info-description">{{ projectItem.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div class="description">
                        <h4 class="max-width-3">Let me introduce you this amazing wedding project.</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import ProjectData from '../../data/portfolio-inside/projectData.json'

    export default {
        name: 'AboutProject',
        data() {
            return { 
                projectItems: ProjectData.projectData
            }
        }
    }
</script>
