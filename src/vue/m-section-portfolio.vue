<template>
    <section id="portfolio" class="d-flex">
        <div class="my-auto p-5">
            <h2 class="mb-5" v-lang="'portfolio.title'"></h2>
            <div class="d-flex flex-column flex-md-row">
                <div class="mr-auto">
                    <div class="d-flex flex-wrap">
                        <div class="my-img pr-1 pt-1" v-for="image, index in images">
                            <img v-bind:src="path+image+'-min.png'" v-on:click="openGallery(index)"
                                 v-b-tooltip.hover title="click to zoom">
                        </div>
                    </div>
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
                    'rso', 'artic', 'pb-portall', 'pb-web', 'pb-p1', 'pb-p2', 'pb-p3', 'pb-rup'
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
        flex-grow: 1;
        width: 33%;
        vertical-align: top;
        max-height: 30rem;
        overflow: hidden;
        img {
            width: 100%;
            cursor: pointer;
        }
    }
</style>