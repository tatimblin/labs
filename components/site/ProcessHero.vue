<template>

    <div class="process-hero container">

        <div class="process-hero-content">

            <div class="slide">

                <div class="slide-cell">
                    <h4>00</h4>
                    <h1>{{ steps[index].title }}</h1>
                    <h2>{{ steps[index].desc }}</h2>
                </div>
                <div class="slide-cell slide-next">
                    <h4>00</h4>
                    <h1>{{ steps[index+1].title }}</h1>
                    <h2>{{ steps[index+1].desc }}</h2>
                </div>

            </div>

            <div class="process-hero-ctrl">
                controls
            </div>

        </div>

    </div>

</template>

<script>
    

    export default {
        data() {
            return { 
                index: 0,
                steps: [
                    {
                        title: 'Discovery',
                        desc: 'An initial meeting, focusing on what the product aims to accomplish for potential users.'
                    },
                    {
                        title: 'Requirements',
                        desc: 'A concise list of everything needed for the product to perform its function for all involved.'
                    },
                    {
                        title: 'Reference',
                        desc: 'Compiling successful competitive products and relevant examples in other industries.'
                    },
                    {
                        title: 'Journies',
                        desc: 'a desc.'
                    },
                    {
                        title: 'Manuscript',
                        desc: 'a desc.'
                    },
                    {
                        title: 'Wireframe',
                        desc: 'a desc.'
                    },
                    {
                        title: 'Styleguide',
                        desc: 'a desc.'
                    },
                    {
                        title: 'Asset Creation',
                        desc: 'a desc.'
                    },
                    {
                        title: 'Static Design',
                        desc: 'a desc.'
                    },
                    {
                        title: 'Prototyping',
                        desc: 'a desc.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.process-hero {
    position: relative;
    max-width: $container-lg; min-height:85vh; 

    &-content {
        bottom: 0;

        @include bigger($screen-md) {
            position: absolute;
        }

        .slide {
            @include bigger($screen-md) {
                display: flex;
            }

            &-cell {
                width: auto;
            }
            &-next {
                opacity: 0.33;

                @include bigger($screen-md) {
                    transform: translateX($container-md/4);
                }
                @include bigger($screen-lg) {
                    transform: translateX($container-lg/4);
                }

                h2 {
                    opacity: 0;
                }
            }
        }
    }
    &-ctrl {
        padding: $spacing*2 0;
    }
}
</style>