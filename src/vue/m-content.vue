<template>
    <div class="sections">
        <m-section-home></m-section-home>
        <m-section-contact></m-section-contact>
        <section id="logo2"></section>
        <m-section-about></m-section-about>
        <m-section-education></m-section-education>
    </div>
</template>

<script>
    import MSectionHome from "./m-section-home.vue";
    import MSectionAbout from "./m-section-about.vue";
    import MSectionContact from "./m-section-contact.vue";
    import MSectionEducation from "./m-section-education.vue";

    export default {
        components: {
            MSectionEducation,
            MSectionContact,
            MSectionAbout,
            MSectionHome
        },
        name: "m-content"
    }
</script>

<style lang="scss" scoped>
    section {
        height: 100vh;
        &#home {
            background-image: url("/images/s1.png");
        }
        &#logo2 {
            background-image: url("/images/s2.png");
        }
    }
</style>