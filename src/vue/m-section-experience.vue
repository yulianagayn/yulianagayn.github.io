<template>
    <section id="experience" class="d-flex mb-5">
        <div class="my-auto p-5">
            <h2 class="my-about-name mb-5" v-lang="'experience.title'"></h2>
            <div class="d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                    <h3 class="mb-0" v-lang="'experience.pb.prof'"></h3>
                    <div class="subheading mb-3" v-lang="'experience.pb.name'"></div>
                    <p class="subheading" v-lang="'experience.pb.text'"></p>
                </div>
                <div class="my-date text-md-right">
                    <span v-lang="'experience.pb.time'"></span>
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                    <h3 class="mb-0" v-lang="'experience.it20.prof'"></h3>
                    <div class="subheading mb-3" v-lang="'experience.it20.name'"></div>
                    <p class="subheading" v-lang="'experience.it20.text'"></p>
                </div>
                <div class="my-date text-md-right">
                    <span v-lang="'experience.it20.time'"></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "m-section-experience"
    }
</script>

<style lang="scss" scoped>
    .my-date {
        min-width: 18rem;
        font-weight: 500;
        font-size: 1.2rem;
        font-family: Bebas;
    }
</style>