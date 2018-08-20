<template>
    <section v-bind:class="[{ playing: playing}, 'page', 'limit-width']">
        <div class="container">
            <div class="album">
                <div class="album-cover"></div>
                <div class="album-desc">
                    <h1>Saint California</h1>
                    <h4>ieuan</h4>
                </div>
            </div>
            <div class="content">
                <div class="content-tweet">t</div>
                <div class="content-lyrics" v-if="playing">
                    <transition name="text-swipe" mode="out-in">
                        <p>{{ lyrics[index].line }}</p>
                    </transition>
                    <p>{{ lyrics[1].line }}</p>
                    <p>{{ lyrics[2].line }}</p>
                </div>
            </div>
        </div>
        <div class="player limit-width fixed-width">
            <div class="player-content container">
                <div class="player-content-desc">
                    <img src="/saint-california/saint-california-album-art.jpg" alt="Saint California By Ieuan">
                    <div class="player-content-desc-info">
                        <h4>Saint California</h4>
                        <p>Ieuan</p>
                    </div>
                </div>
                <div class="player-content-ctrl">
                    <div class="play" @click="playMusic"></div>
                </div>
                <div class="player-content-link">
                    links out
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    transition: 'slide',
    data() {
        return {
            playing: false,
            index: 0,
            lyrics: [
                {line: 'Eighteen with a Jesus piece, and he tellin me he does not feel safe'},
                {line: 'Well I am just like you, knives in my back'},
                {line: 'Tell me your name'},
                {line: 'And he said'}
            ]
        }
    },
    methods: {
        playMusic() {
            this.playing = !this.playing;
            this.index = 1
        }
    }
}
</script>

<style scoped lang="scss">
@import '~assets/sass/_variables.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,600');

$heading: 'Roboto', sans-serif;
$width: 400px;

.page {
    position: relative;
    background-color: #EBEBEB;
}

.player {
    width: 100%;
    bottom: 0;
    background-color: #fff;

    &-content {
        display: flex;
        justify-content: space-between;
        padding: 0;
        font-family: $heading;

        &-desc {
            display: flex;
            align-items: center;
            width: 40%;

            img {
                width: 80px; height: 80px;
            }
            &-info {
                margin: 0;
                padding: 0 $spacing/2;

                h4 {
                    margin: 0;
                    font-size: 22px;
                }
                p {
                    margin: 0;
                    font-size: 12px;
                }
            }
        }
        &-ctrl {
            height: 80px;

            .play {
                width: 50px; height: 50px;
                margin: 15px auto;
                background-color: red;
                border-radius: 50%;
            }
        }
        &-link {
            width: 40%;
        }
    }
}

.album {
	max-width: $width;
    margin: 60px auto;
    transition: all 600ms $ease;
	
	&-cover {
		position: relative;
		width: 100%; height: $width;
		background-image: url('/saint-california/saint-california-album-art.jpg');
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
		max-width: $width;
        margin: 0 auto;
        transition: all 600ms $ease;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        color: #2b2b2b;

        h1 {
            display: inline-block;
            margin: 0;
            padding: 20px 0 0px 0;
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
        margin: 0px auto;
        transform: translateY(-200px);
        
        .album-cover {
            transform: scale(2);
            transform-origin: center bottom;

            &:before {
                opacity: 1;
            }
        }
        .album-desc {
            transform: translateY(-150px) translateX(-125px);
            color: #fff;
        }
    }
    .content {
        transform: translateY(-200px);

        p {
            color: $light-txt;
        }
    }
}

// Song Lyrics
.content {
    position: relative;
    display: flex;
    max-width: $width * 2;
    margin: 0 auto;
    transition: all 600ms $ease;
    z-index: 1;

    &-tweet {
        width: 100px;
    }
    &-lyrics {
        width: 700px;
        font-family: $heading;
        font-size: 0.75em;

        p:first-child {
            font-size: 1.5em;
        }
        &-line {
            padding: 15px 0;
            font-family: 'Montserrat', sans-serif;
            color: #fff;
            line-height: 1.5em;
        }
    }
}

// Transition lab title
.text-swipe-enter-active, .text-swipe-leave-active {
    animation: text-swipe 1000ms 0ms 1 reverse forwards;
}
.text-swipe-enter, .text-swipe-leave-to {
    animation: text-swipe 1250ms 0ms 1 forwards;
}

@keyframes text-swipe {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

</style>
