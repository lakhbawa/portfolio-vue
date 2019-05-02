<script>

export default {

    props   : [
        'isModalActive',
        'project'
    ],
    data() {
        return {
            modalStatus: false
        }
    },

    methods : {
        async submit() {
            //await this.$store.dispatch('apps/getApps');
        }
    }
};
</script>

<template>
    <div>
        <b-modal v-if="project.tech_stack" :active.sync="isModalActive" scroll="keep">
            <div class="has-background-white pa-5 project">
                <div class="columns">
                    <div class="column">
                        <img :src="project.full" class="project__image">
                    </div>
                    <div class="column">
                        <div class="project__contents has-text-centered">
                            <div class="project__section-container">
                                <div class="project__section has-text-primary is-family-secondary">Project Name</div>
                                <div class="project__title">
                                    {{ project.title }}
                                </div>
                            </div>




                            <div class="project__section-container">
                                <div class="project__section has-text-primary is-family-secondary">
                                    Info
                                </div>
                                <div class="project__info">
                                    {{ project.info}}

                                </div>
                            </div>

                            <div class="project__section-container">
                                <div class="project__section has-text-primary is-family-secondary">
                                    Tech Stack
                                </div>
                                <div class="project__tech_stack">
                                    {{ project.tech_stack.join(', ')}}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<style lang="scss" scoped>

    .project {
        &__contents {
        }
        &__section {
            &-container {
                padding: .7rem 0;
            }
            font-size: 1.8rem;

        }
        &__title {
            font-size: 1.4em;
        }
        &__info {
            font-size: 1.2em;

        }

        &__tech_stack {
            font-size: 1.2em;

        }
        &__image {
            /*max-height: 80vh;*/
        }
    }
</style>