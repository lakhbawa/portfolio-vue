<script>

export default {

    props   : [
        'isModalActive',
        'project'
    ],

    methods : {
        async submit() {
            //await this.$store.dispatch('apps/getApps');
        }
    }
};
</script>

<template>
    <div>
        <b-modal :active.sync="isModalActive" scroll="keep">
            <div class="has-background-white pa-5 project">
                <div class="columns">
                    <div class="column">
                        <img :src="project.image" class="project__image">
                    </div>
                    <div class="column">
                        <div class="project__title">
                            {{ project.title }}
                        </div>


                        Info: <br>
                        <div class="project__info">
                            {{ project.info}}

                        </div>
                        <strong>Tech Stack:</strong> <br>
                        <div class="project__tech_stack">
                            {{ project.tech_stack.join(', ')}}

                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<style lang="scss" scoped>

    .project {
        &__title {
            font-size: 1.4em;
        }
        &__info {

        }
        &__tech_stack {

        }
    }
</style>