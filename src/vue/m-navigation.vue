<template>
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="info" v-b-scrollspy:spy
              v-bind:class="['left','my-nav']">
        <b-navbar-brand href="#" class="mt-lg-5 mr-0">
            <span class="d-block d-lg-none" v-lang="'menu.portfolio'"></span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
            <b-nav v-bind:vertical="true">
                <b-nav-item href="#home"><span class="icon-circle-up"></span></b-nav-item>
                <b-nav-item href="#about" v-lang-children="'menu.about'"></b-nav-item>
                <b-nav-item href="#experience" v-lang-children="'menu.experience'"></b-nav-item>
                <b-nav-item href="#education" v-lang-children="'menu.education'"></b-nav-item>
                <b-nav-item href="#skills" v-lang-children="'menu.skills'"></b-nav-item>
                <b-nav-item href="#interests" v-lang-children="'menu.interests'"></b-nav-item>
                <b-nav-item href="#portfolio" v-lang-children="'menu.portfolio'"></b-nav-item>
            </b-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "m-navigation",
        props: ['current']
    }
</script>

<style lang="scss" scoped>
    body {
        padding-top: 0;
        padding-left: 20rem;
    }

    .nav-item {
        &.active {
            background-color: transparent;
            .nav-link {
                color: #ffffff;
            }
        }

        .nav-link {
            color: #999999;
            text-transform: uppercase;
            font-size: 1.5rem;
        }
    }
</style>