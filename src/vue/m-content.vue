<template>
    <div class="sections">
        <m-section-home></m-section-home>
        <m-section-about></m-section-about>
        <m-section-experience></m-section-experience>
        <section id="logo2"></section>
        <m-section-education></m-section-education>
        <m-section-contact></m-section-contact>
        <section id="logo3"></section>
    </div>
</template>

<script>
    import MSectionHome from "./m-section-home.vue";
    import MSectionAbout from "./m-section-about.vue";
    import MSectionContact from "./m-section-contact.vue";
    import MSectionEducation from "./m-section-education.vue";
    import MSectionExperience from "./m-section-experience.vue";

    export default {
        components: {
            MSectionExperience,
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
        min-height: 100vh;
        &#home {
            background-image: url("/images/s1.png");
        }
        &#logo2 {
            background-image: url("/images/s2.png");
        }
        &#logo3 {
            background-image: url("/images/s3.png");
        }
    }
</style>