<template>

    <section class="container site-process">

        <div class="process-list">

            <div v-for="(item) in items" :key="item.index" class="process-list-item">

                <div class="process-list-item-num">

                    <h1>{{ item.index }}</h1>

                    <small>{{ item.title }}</small>

                </div>

                <div class="process-list-item-detail">

                    <h3>{{ item.description }}</h3>

                </div>

                <div class="process-list-item-expand">
                    +
                </div>

            </div>

        </div>

    </section>

</template>

<script>
    

    export default {
        data() {
            // Using webpacks context to gather all files from a folder
            const context = require.context('~/content/process/items/', false, /\.json$/);

            const items = context.keys().map(key => ({
                ...context(key),
                _path: `/process/${key.replace('.json', '').replace('./', '')}`
            }));

            return { 
                items,
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
                        title: 'Journeys',
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

.site-process {

    .process-list {
        margin: 0 auto;
        padding: 0 0 $spacing*4 0;

        &-item {
            position: relative;
            display: flex;
            margin: $spacing*4 0;
            padding: $spacing;
            border-radius: 2px;
            cursor: pointer;

            &:before {
                content: '';
                position: absolute;
                width: 100%;
                top: -$spacing*2; left: 0;
                border-top: 1px solid lighten($dark-bg, 10%);
            }
            &:hover {
                background-color: lighten($dark-bg, 10%);

                .process-list-item-expand {
                    transform: scale(1.5);
                }
            }

            div {
                margin: 0 $spacing;
            }
            &-num {
                text-align: center;
                line-height: 0.5em;

                h1 {
                    margin: 0;
                }
                small {
                    font-family: $font;
                    font-size: 0.45em;
                }
            }
            &-expand {
                margin-left: auto !important;
                align-self: center;
            }
        }
    }
}
</style>