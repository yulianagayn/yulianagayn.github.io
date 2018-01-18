<template>
    <section id="education" class="d-flex">
        <div class="my-auto p-5 black">
            <h2 class="mb-5" v-lang="'education.title'"></h2>
            <div class="d-flex flex-column flex-md-row mb-5">
                <div class="mr-auto">
                    <h3 class="mb-0" v-lang="'education.mntu.title'"></h3>
                    <div class="subheading mb-3" v-lang="'education.mntu.special'"></div>
                </div>
                <div class="my-date text-md-right">
                    <span v-lang="'education.mntu.time'"></span>
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row mb-5">
                <div class="mr-auto">
                    <h3 class="mb-0" v-lang="'education.additional.title'"></h3>
                    <ul class="subheading my-exp">
                        <li class="list-item" v-lang="'education.additional.1'"></li>
                        <li class="list-item" v-lang="'education.additional.2'"></li>
                        <li class="list-item" v-lang="'education.additional.3'"></li>
                        <li class="list-item" v-lang="'education.additional.4'"></li>
                        <li class="list-item" v-lang="'education.additional.5'"></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "m-section-education"
    }
</script>

<style lang="scss" scoped>
    .my-exp {
        list-style: square outside;
    }
</style>