<template>
    <div class="content">
        <m-navigation v-bind:current="current"></m-navigation>
        <m-content></m-content>
    </div>
</template>

<script>
    import MNavigation from "./m-navigation.vue";
    import MContent from "./m-content.vue";

    export default {
        props: ['current'],
        components: {
            MContent,
            MNavigation
        },
        name: "m-application"
    }
</script>

<style scoped>

</style>