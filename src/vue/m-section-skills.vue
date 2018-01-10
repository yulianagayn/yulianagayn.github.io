<template>
    <section id="skills" class="d-flex mb-5">
        <div class="my-auto p-5">
            <h2 class="my-about-name mb-5 --bebas" v-lang="'skills.title'"></h2>
            <div class="d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                    <div class="subheading mb-3 --bebas" v-lang="'skills.programs'"></div>
                    <ul class="list-inline list-icons">
                        <li class="list-inline-item" v-b-tooltip.hover title="Adobe Illustrator"><span
                                class="skills-icon icon-adobeillustrator"></span></li>
                        <li class="list-inline-item" v-b-tooltip.hover title="Adobe Photoshop"><span
                                class="skills-icon icon-adobephotoshop"></span></li>
                        <li class="list-inline-item" v-b-tooltip.hover title="Adobe InDesign"><span
                                class="skills-icon icon-adobeindesign"></span></li>
                        <li class="list-inline-item" v-b-tooltip.hover title="Adobe Acrobat"><span
                                class="skills-icon icon-adobeacrobatreader"></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "m-section-skills"
    }
</script>

<style lang="scss" scoped>
    .skills-icon {
        font-size: 2rem;
        color: #ffffff;
        cursor: pointer;
        &:hover {
            color: #999999;
        }
    }
</style>