<template>
    <section id="about" class="d-flex">
        <div class="my-auto p-5">
            <div class="d-flex flex-column flex-md-row mb-5 justify-content-between">
                <div class="my-info">
                    <h1 class="my-about-name mb-0">
                        <span v-lang="'about.name'"></span>
                        <span v-lang="'about.surname'" class="--my-color"></span>
                    </h1>
                    <div class="subheading mb-5 uppercase">
                        <a class="my-contact" href="mailto:name@email.com" v-lang="'about.mail'"></a>
                        <span> · </span>
                        <span v-lang="'about.location'"></span>
                        <span> · </span>
                        <a class="my-contact" href="tel:+38 (099) 147-74-55">+38 (099) 147-74-55</a>
                    </div>
                </div>
            </div>
            <div class="subheading mb-5">
                <span v-lang="'about.information'"></span>
            </div>

            <div class="subheading mb-5">
                <a href="https://vk.com/juliana_g" target="_blank" class="my-link" v-b-tooltip.hover
                   title="Vkontakte"><span
                        class="icon-vk p-2"></span></a>
                <a href="https://t.me/DreamerEly" target="_blank" class="my-link" v-b-tooltip.hover
                   title="Telegram"><span
                        class="icon-telegram p-2"></span></a>
                <a href="viber://chat?number=+380990757619" target="_blank" class="my-link" v-b-tooltip.hover
                   title="Viber"><span
                        class="icon-viber p-2"></span></a>
                <a href="skype:g_juliana_?call" target="_blank" class="my-link" v-b-tooltip.hover title="Skype"><span
                        class="icon-skype p-2"></span></a>
                <a href="https://www.instagram.com/julianagayun/" target="_blank" class="my-link" v-b-tooltip.hover
                   title="Instagram"><span
                        class="icon-instagram p-2"></span></a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "m-section-about"
    }
</script>

<style lang="scss" scoped>
    .my-link {
        color: #ffffff;
        line-height: 1.37rem;;
        height: 1.37rem;;
        font-size: 1.37rem;
        text-decoration: none;

        span {
            border: 2px solid #ffffff;
            border-radius: 100%;
            &:hover {
                border-color: #999999;
                color: #999999;
            }
        }

        &:hover {
            text-decoration: none;
        }
    }
</style>