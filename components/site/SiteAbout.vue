<template>
    <section class="site-about container large-width">
            
        <site-about-slider></site-about-slider>

        <div class="about">
            <h1 class="stretch">Tristan Timblin</h1>
            <p>developing at <a href="http://cohere.city/" target="_blank">cohere.city/</a></p>
            
            <div class="about-sec">
                <small>Mission</small>
                <h2 class="highlight">
                    interaction designer using motion to tell <nuxt-link to="/project">engaging stories</nuxt-link> for brands. From my <nuxt-link to="/labs">labs</nuxt-link>, I design in code, it’s part of my <nuxt-link to="/process">process</nuxt-link>.
                </h2>
            </div>
            
            <div class="about-sec">
                <small>Footprint</small>
                
            </div>
        </div>
    </section>
</template>

<script>
import SiteAboutSlider from '~/components/site/SiteAboutSlider.vue'

export default {
    components: {
        SiteAboutSlider
    },
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.site-about {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 85vh;

    @include query ($screen-md) {
        flex-direction: row;
        align-items: center;
    }

    & > div {

        @include query ($screen-md) {
            width: calc(50% - 15px);
        }
    }
}

.about {
    position: relative;
    perspective: 90px;

    h1 {
        @include query ($screen-lg) {
            font-size: 5.75em;
            line-height: 1em;
        }
    }
    p {
        text-align: right;
        opacity: 0.5;
    }
    &-sec {
        display: flex;
        margin-left: $spacing*4;
        padding: $spacing*3 0;
        border-top: 6px solid $light-bg;
        align-items:flex-start;

        h2, small {
            display: block;
        }
        small {
            position: absolute;
            left: 0;
            transform: rotateZ(-90deg) translateX(-120%);
            transform-origin: top left;
        }
        h2, h2 a {
            position: relative;
            display: inline-block;
            transition: all 900ms 300ms $ease;
        }
        .highlight {
            transform-origin: center center;
        
            &:hover {
                color: #ececec20;
                transition: all 900ms $ease;
                transform: translate3d(0,0,-15px);
                a {
                    transition: all 900ms $ease;
                    transform: scale(1.3);
                }
            }

            a {
                &:after {
                    transition: transform 300ms 300ms $ease;
                }
                &:before, &:hover:after {
                    transform: scale(1, 1);
                }
            }
        }
    }
}

</style>


