<template>
    <div class="sections">
        <m-section-home></m-section-home>
        <m-section-about></m-section-about>
        <m-section-experience></m-section-experience>
        <section id="logo2"></section>
        <m-section-education></m-section-education>
        <m-section-skills></m-section-skills>
        <m-section-interests></m-section-interests>
        <m-section-portfolio></m-section-portfolio>
    </div>
</template>

<script>
    import MSectionHome from "./m-section-home.vue";
    import MSectionAbout from "./m-section-about.vue";
    import MSectionSkills from "./m-section-skills.vue";
    import MSectionEducation from "./m-section-education.vue";
    import MSectionExperience from "./m-section-experience.vue";
    import MSectionInterests from "./m-section-interests.vue";
    import MSectionPortfolio from "./m-section-portfolio.vue";

    export default {
        components: {
            MSectionPortfolio,
            MSectionInterests,
            MSectionExperience,
            MSectionEducation,
            MSectionSkills,
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
        &#education {
            background-image: url("/images/s3.png");
        }
        &#skills {
            background-image: url("/images/s3.png");
        }
        &#interests {
            background-image: url("/images/s3.png");
        }
    }
</style>