<template>
    <section id="interests" class="d-flex">
        <div class="my-auto p-5">
            <h2 class="my-about-name mb-5" v-lang="'interests.title'"></h2>
            <div class="d-flex flex-column flex-md-row mb-5">
                <div class="mr-auto">
                    <p class="subheading" v-lang="'interests.text'"></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "m-section-interests"
    }
</script>

<style scoped>

</style>