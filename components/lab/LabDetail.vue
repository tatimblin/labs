<template>
    <div class="lab-detail container medium-width">
        <div class="content">
            <div class="content-intro">
                <h2>Description</h2>
                <p>{{ body }}</p>
            </div>
            <div class="content-asset">
                <h2>Resources</h2>
                <ul>
                    <li>CSS Transitions</li>
                    <li>Vue.js</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props:['body'],
        data() {
            return {

            };
        },
        methods: {
            
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: $spacing*2 0;

    @include query ($screen-sm) {
        flex-direction: row;
    }

    h2 {
        margin-bottom: $spacing;
    }

    &-asset {
        padding: 0;

        @include query ($screen-sm) {
            padding: 0 0 0 $spacing*2;
        }

        ul {
            li {
                white-space: nowrap;
            }
        }
    }
}
</style>