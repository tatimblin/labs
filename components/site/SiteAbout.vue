<template>
    <section class="site site-about">
        <div class="container site-about-content">
            <h1 :class="{ hide: isHidden }">
                I’m 
                <a @click="popup($event)" href="#" id="action-link" @mouseover="highlightLink()" @mouseleave="highlightLink()">
                    Tristan
                </a>
                  , a front-end developer using motion to tell 
                <nuxt-link to="/project" @mouseover.native="highlightLink()" @mouseleave.native="highlightLink()">
                    engaging stories
                </nuxt-link> 
                for brands.
                </h1>
            <h1 :class="{ hide: isHidden }">
                From my 
                <nuxt-link to="/labs" @mouseover.native="highlightLink()" @mouseleave.native="highlightLink()">
                    labs
                </nuxt-link>
                , I design in code, it’s part of my  
                <nuxt-link to="/process" @mouseover.native="highlightLink()" @mouseleave.native="highlightLink()">
                    process
                </nuxt-link>
                .
            </h1>
        </div>
        <div id="image-wrap"></div>
    </section>
</template>

<script>

    export default {
        data() {
            return {
                load: true,
                count: 0,
                isHidden: false,
                images: [
                    {img:'timblin-aboutme-1.jpg'},
                    {img:'timblin-aboutme-2.jpg'},
                    {img:'timblin-aboutme-3.gif'},
                    {img:'timblin-aboutme-4.jpg'}
                ]
            }
        },
        methods: {
            popup(event) {
                let sizex = Math.random() * (250 - 100) + 100;
                let sizey = Math.random() * (175 - 100) + 100;
                let x = event.clientX - sizex/2;
                let y = event.clientY - sizey;
                
                console.log(x + ', ' + y);
                
                // create el
                let node = document.createElement("img");
                // add attr
                node.src = 'images/site/' + this.images[this.count].img;
                
                // draggable
                let drag = document.createAttribute("v-drag");
                node.setAttributeNode(drag);

                node.setAttribute('style', 'transform:translateX('+ x +'px) translateY('+ y +'px); width: '+ sizex +'px;');
                // place in dom
                document.getElementById("image-wrap").appendChild(node);
                
                if (this.images.length  > this.count + 1) {
                    this.count = this.count + 1;
                } else {
                    this.count = 0;
                }
                
                let imageWrap = document.getElementById("image-wrap");
                if (imageWrap.childElementCount > this.images.length) {
                    imageWrap.removeChild(imageWrap.childNodes[0])
                }
                console.log('child: ' + this.images[this.count].img)
            },
            highlightLink() {
                this.isHidden = !this.isHidden
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
                    'images/site/timblin-aboutme-3.jpg',
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

.site-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 85vh;

    &-content {
        position: relative;
        perspective: 90px;
        z-index: 1;

        a {
            position: relative;
            color: $light-txt;
            text-decoration: none;
            &:before {
                content: '';
                position: absolute;
                width: 100%; height: 6px;
                top: 66%; bottom: 33%; left: 0;
                background-color: $brand;
                opacity: 0.33;
                transform-origin: 0;
                z-index: -1;
                transition: transform 300ms $ease;
            }
            &:after {
                content: '';
                position: absolute;
                width: 100%; height: 6px;
                top: 66%; bottom: 33%; left: 0;
                background-color: $brand;
                transform: scale(0, 1);
                transform-origin: 0;
                z-index: -1;
                transition: transform 300ms 900ms $ease;
            }

            &:hover:after {
                transform: scale(1, 1);
            }
        }
        h1 {
            transition: all 300ms 300ms $ease;
            a {
                display: inline-block;
                transition: all 300ms 300ms $ease;
            }
        }
        .hide {
            color: #ececec20;
            transition: all 300ms $ease;
            transform: translate3d(0,0,-15px);

            a {
                transition: all 300ms $ease;
                transform: scale(1.3);
            }
        }
    }
}

#image-wrap {
	position: absolute;
    top: 0; left: 0;
    z-index: 0;
	
	img {
		position: absolute;
		display: block;
        transform-origin: center center;
        filter: saturate(75%) contrast(0.8);
	}
}

</style>


