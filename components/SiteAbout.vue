<template>
    <section class="site site-about">
        <div class="site-about-content">
            <h1>I’m <a @click="popup($event)" href="#" id="action-link">Tristan</a>, a front-end developer using motion to tell <nuxt-link to="/projects">engaging stories</nuxt-link> for brands.</h1>
            <h1>From the <nuxt-link to="/labs">labs</nuxt-link>, I design in code, it’s part of my <nuxt-link to="/process">process</nuxt-link>.</h1>
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
                    {img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=43b23ffecdd73c911f9846d64f353bfd'},
                    {img:'https://images.unsplash.com/photo-1524108633824-d73da6fd508c?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a593d67255f7e58e2e4bd730e933cf3b'},
                    {img:'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=43aaaa646666a2c370b706a36c09ebfc'},
                    {img:'https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=4a868d9cb0ead954b650717371055a86'}
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
                node.src = this.images[this.count].img;
                
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
    min-height: 100vh;
    background-color: $dark-bg;

    &-content {
        position: relative;
        padding: 0 3vw;
        z-index: 100;

        h1 {
            color: $light-txt;
        }
    }
}

#image-wrap {
	position: absolute;
	top: 0; left: 0;
	
	img {
		position: absolute;
		display: block;
		transform-origin: center center;
	}
}

</style>


