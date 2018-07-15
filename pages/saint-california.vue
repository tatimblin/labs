<template>
    <section v-bind:class="[{ playing: playing}, 'page']">
        <div class="play" @click="playMusic">play</div>
        <div class="album">
			<div class="album-cover"></div>
			<div class="album-desc">
				<h1>Saint California</h1>
				<h4>ieuan</h4>
			</div>
		</div>
    </section>
</template>

<script>

export default {
    transition: 'slide',
    data() {
        return {
            playing: false
        }
    },
    methods: {
        playMusic() {
            this.playing = !this.playing;
        }
    }
}
</script>

<style scoped lang="scss">
@import '~assets/sass/_variables.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,600');

.page {
    background-color: #EBEBEB;
}

.album {
	max-width: 400px;
    margin: 60px auto;
    transition: all 600ms $ease;
	
	&-cover {
		position: relative;
		width: 100%; height: 400px;
		background-image: url('https://lh3.googleusercontent.com/p5fsGueNHDLOctpmRgPlyNsLiCMjdF4sFdm8jJ2dMiZU5rWCSY1bprrDMr4-7vF87KynQX05ew=s1024-c-e100-rwu-v1');
		background-size: cover;
        background-position: bottom center;
        transition: all 600ms $ease;
        	
		&:before {
			content:'';
			position: absolute;
			width: 100%; height: 100%;
			background: linear-gradient(rgba(5, 86, 127, 0), #05567F);
			opacity: 0;
			z-index:0;
		}
	}
	&-desc {
		max-width: 400px;
        margin: 0 auto;
        transition: all 600ms $ease;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        color: #2b2b2b;

        h1 {
            padding: 20px 0 10px 0;
            text-align: left;
            font-size: 2em;
        }
        h4 {
            font-size: 1em;
            font-weight: 600;
            letter-spacing: 0.07em;
        }
	}
}

.playing { 
    background-color: #05567F;

    .album {
        width: 80%;
        max-width: 80%;
        margin: 0px auto;
        transform: translatey(-60%);
        
        .album-cover {
            height: 800px;

            &:before {
                opacity: 1;
            }
        }
        .album-desc {
            transform: translateY(-200%);
            color: #fff;
        }
    }
}
</style>
