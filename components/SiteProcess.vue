<template>
    <section class="container site-process">
        <div class="process-list">
            <div class="process-list-item">
                <div class="process-list-item-num">
                    <h1>01</h1>
                    <small>Inspiration</small>
                </div>
                <div class="process-list-item-detail">
                    <h3>What is this</h3>
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
        
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.site-process {

    .process-list {
        margin: $spacing*4 auto;
        
        &-item {
            display: flex;
            padding: $spacing*2 0;
            border-top: 2px solid $light-bg;

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
            &-detail {
                
            }
            &-expand {
                margin-left: auto !important;
                align-self: center;
            }
        }
    }
}
</style>