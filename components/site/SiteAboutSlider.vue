<template>
    <div class="slider">
            
            <div class="slider-img" @click="changeImage()">
                <transition name="slide-change" mode="out-in">
                    <div :key="index" class="slider-img-cell" :style="`background-image: url('images/site/${ images[index].img }')`"></div>
                </transition>
            </div>

            <div class="slider-meta">
                <div class="slider-meta-index">
                    
                    <p>{{ index }}/{{ images.length }}</p>
                    
                </div>
                <div class="slider-meta-date">

                    <p>06 . 11 . 2017</p>

                </div>
                <div class="slider-meta-credit">

                    <p>cred. Tristan Timblin</p>
                </div>
            </div>
        </div>
</template>

<script>

export default {
    data() {
        return {
            index: 0,
            images: [
                {
                    img:'timblin-aboutme-1.jpg'
                },
                {
                    img:'timblin-aboutme-4.jpg'
                }
            ]
        }
    },
    methods: {
        changeImage () {
            if(this.index === this.images.length - 1) {
                this.index = 0
            } else {
                ++this.index
            }
        },
        preloadImages (srcs) {
            function loadImage(src) {
                return new Promise(function(resolve, reject) {
                    var img = new Image();
                    img.onload = function() {
                        resolve(img);
                    };
                    img.onerror = img.onabort = function() {
                        reject(src);
                    };
                    img.src = src;
                });
            }
            var promises = [];
            for (var i = 0; i < srcs.length; i++) {
                promises.push(loadImage(srcs[i]));
            }
            return Promise.all(promises);
        }
    },
    created () {
        this.preloadImages(
            [
                'images/site/timblin-aboutme-1.jpg',
                'images/site/timblin-aboutme-2.jpg',
                'images/site/timblin-aboutme-3.gif',
                'images/site/timblin-aboutme-4.jpg'
        ]).then(function(imgs) {
            console.log('images loaded');
        }, function(errImg) {
            console.log('error loading images');
        });
    }
}
</script>

<style lang="scss">
@import '~assets/sass/_variables.scss';

.slider {
    
    &-img {
        position: relative;
        height: 650px;
        padding: $spacing*2;
        overflow: hidden;
        border: 2px solid $light-bg;
        border-bottom: 6px solid $light-bg;
        
        &-cell {
            position: absolute;
            width: 80%; height: 100%;
            margin: 0 auto;
            background-size: 100%;
            background-repeat: repeat-y;
            transition: all 300ms $ease;
        }
    }
    &-meta {
        display: flex;
        justify-content: space-between;
        padding: $spacing 0;
    }
}

// Image Slider
.slide-change-enter-active {
    animation: slide-in 1s $ease 1;
}
.slide-change-leave-active {
    background-size: 100%;
        background-position: center top;

    animation: slide-out 1s 2s $ease 1;
}

@keyframes slide-in {
    0% {
        background-size: 16.667%;
        background-position: center bottom;
        transform: translateY(100%);
    }
    100% {
        background-size: 100%;
        background-position: center bottom;
    }
}

@keyframes slide-out {
    0% {
        background-size: 100%;
        background-position: center top;
    }
    50% {
        
    }
    100% {
        background-size: 16.667%;
        background-position: center top;
        transform: translateY(-100%);
    }
}


</style>


