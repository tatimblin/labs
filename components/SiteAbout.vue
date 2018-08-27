<template>
    <section class="site site-about">
        <div class="container site-about-content">
            <h1>I’m <a @click="popup($event)" href="#" id="action-link">Tristan</a>, a front-end developer using motion to tell <nuxt-link to="/project">engaging stories</nuxt-link> for brands.</h1>
            <h1>From my <nuxt-link to="/labs">labs</nuxt-link>, I design in code, it’s part of my <nuxt-link to="/process">process</nuxt-link>.</h1>
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
            }
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
        z-index: 1;
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


