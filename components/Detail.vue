<template>
    <div class="detail__scroll">
    <section class="detail">
        <div class="detail-content">
            <div class="detail-content-desc">
                <h3>About This Experiment</h3>
                <p>{{ labs[indexedLab].desc }}</p>
            </div>
            <div class="detail-content-res">
                <h3>Resources</h3>
                <ul>
                    <li>Vue</li>
                    <li>Codepen</li>
                    <li>Css-Tricks</li>
                    <li>Tympanus</li>
                    <li><a href="">Timblin.co</a></li>
                </ul>
            </div>
        </div>
        <div class="detail-meta">
            <p>Labs by Tristan Timblin • <a href="" target="_blank">timblin.co</a> • Reach out about contributing on <a href="" target="_blank">Twitter</a></p>
        </div>
    </section>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapState(['labs', 'indexedLab']),
        }
    }
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

h3 {
    padding: 0 0 $spacing 0;
    font-family: $font;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: .16em;
    font-weight: 600;
}

.detail__scroll {
    position: relative;
    width: 100%; height: 100%;
    max-width: $screen-md;
    margin: 0 auto;
    overflow: hidden;
}

.detail {
    position: absolute;
    height: 100%;
    left: 0;
    margin: $spacing*2 auto;
    padding: $spacing*2 0;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    &-content {
        display: flex;
        flex-direction: column;

        @include bigger($screen-xs) {
            flex-direction: row;
        }

        div {
            margin: $spacing 0;
            padding: 0 $spacing;
            line-height: 2em;
            font-family: montserrat;
            font-size: 12px;
            letter-spacing: 0.06em;

            @include bigger($screen-xs) {
                margin: 0;
            }
        }
        &-desc p {

            @include bigger($screen-sm) {
                columns: 2;
                column-gap: $spacing*2;
            }
        }
        &-res {

            @include bigger($screen-sm) {
                max-width: 50%;
            }

            ul {
                list-style-type: circle;
                list-style-position: inside;

                li {
                    a {
                        color: $brand;
                    }
                }
            }
        }
    }
    &-meta {
        margin: 0 0 $spacing*2 0;
        padding: $spacing*2 $spacing;
        font-family: montserrat;
        font-size: 10px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: lighten($brand, 50%);
        line-height: 1.5em;
    }
}

</style>


