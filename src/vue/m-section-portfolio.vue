<template>
    <section id="portfolio" class="d-flex">
        <div class="my-auto p-5">
            <h2 class="mb-5" v-lang="'portfolio.title'"></h2>
            <div class="d-flex flex-column flex-md-row mb-5">
                <div class="mr-auto">
                    <ul class="list-inline">
                        <li class="list-inline-item my-img mb-2" v-for="image, index in images">
                            <img v-bind:src="path+image+'-min.png'" v-on:click="openGallery(index)"
                                 v-b-tooltip.hover title="click to zoom">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "m-section-portfolio",
        data() {
            return {
                path: '/images/gallery/',
                images: [
                    'pb-portall', 'pb-web', 'pb-p1', 'pb-p2', 'pb-p3', 'pb-rup', 'rso', 'artic'
                ]
            }
        },
        methods: {
            openGallery(index) {
                $(document).trigger('show:image:full', {
                    src: this.path + this.images[index] + '.png',
                    min: this.path + this.images[index] + '-min.png'
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-img {
        max-width: 10rem;
        overflow: hidden;
        vertical-align: top;
        img {
            width: 100%;
            cursor: pointer;
        }
    }
</style>