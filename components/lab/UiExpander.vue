<template>
    <div v-bind:class="{ closed: $store.state.isNav }" class="ui-expander" @click="toggleNav">
        <div class="ui-expander-icon"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
            ...mapState(['isNav', 'isDetail']),
    },
    data() {
        return {

        };
    },
    methods: {
        toggleNav() {
            this.$store.commit('toggleNav')
        },
    }
}
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

// Open close navigation
.ui-expander {
    position: absolute;
    top: 0; left: 50%;
    cursor: pointer;
    z-index: 999;

    &-icon {
        display: inline-block;
        height: $spacing; width: $spacing;
        padding: $spacing/2 $spacing $spacing $spacing;
        transform: translateX(-50%);
        
        &:before, &:after {
            content: '';
            position: absolute;
            width: $spacing; height: 3px;
            top: 50%;
            background-color: #a1a1a1;
            transition: all 300ms 100ms $ease;
        }
        &:before {
            border-radius: 0 10px 10px 0;
            transform-origin: 0 top;
            transform: translateX(50%);
        }
        &:after {
            border-radius: 10px 0 0 10px;
            transform-origin: 100% top;
            transform: translateX(-50%);
        }
    }
    &:hover .ui-expander-icon:before {
        border-radius: 0 10px 10px 0;
        transform: translateX(50%) rotate(-25deg);
    }
    &:hover .ui-expander-icon:after {
        border-radius: 10px 0 0 10px;
        transform: translateX(-50%) rotate(25deg);
    }
}

.closed {
    .ui-expander-icon {
        &:before {
            border-radius: 10px 10px 10px 10px;
            transform-origin: 100% bottom !important;
            transform: translateX(50%);
        } 
        &:after {
            border-radius: 10px 10px 10px 10px;
            transform-origin: 0 bottom !important;
            transform: translateX(-50%);
        }
    }
    &:hover {
        & .ui-expander-icon:before {
            //border-radius: 10px 10px 10px 10px;
            transform: translateX(50%) rotate(25deg);
        }
        & .ui-expander-icon:after {
            //border-radius: 10px 10px 10px 10px;
            transform: translateX(-50%) rotate(-25deg);
        }
    }
}
</style>