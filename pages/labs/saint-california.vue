<template>
    <section v-bind:class="[{ playing: playing}, 'page', 'limit-width']">
        <div class="container">
            <div class="album-wrap">
                <div class="album">
                    <div class="album-cover"></div>
                    <div class="album-desc">
                        <h1>Saint California</h1>
                        <h4>ieuan</h4>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content-tweet">t</div>
                <div class="content-lyrics" v-if="playing">
                    <transition name="text-swipe" mode="out-in">
                        <p :key="index">{{ lyrics[index].line }}</p>
                    </transition>
                    <p v-if="lyrics.length > index + 1">{{ lyrics[index + 1].line }}</p>
                    <p v-if="lyrics.length > index + 2">{{ lyrics[index + 2].line }}</p>
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
                {line: 'Eighteen with a Jesus piece, and he tellin me he does not feel safe',
                duration: 5000},
                {line: 'Well I am just like you, knives in my back',
                duration: 6000},
                {line: 'Tell me your name',
                duration: 7000},
                {line: 'And he said',
                duration: 8000},
                {line: 'Saint California',
                duration: 9000},
                {line: 'Come pray the Rosary tonight',
                duration: 10000},
                {line: 'And if I said that I want ya',
                duration: 11000},
                {line: 'Would you put on a fight',
                duration: 12000}
            ]
        }
    },
    methods: {
        playMusic() {
            this.playing = !this.playing;
            this.updateLine()
            console.log(this.lyrics.length)
        },
        updateLine() {
            if (this.index === this.lyrics.length - 1) {
                this.index = 0
            } else {
                this.index = this.index + 1
            }
            setTimeout( () => {
                console.log('Current line - ' + this.index);
                this.updateLine()
            }, this.lyrics[this.index].duration );
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

.album-wrap {
    //position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%; height: 100vh;
    transition: height 600ms $ease;
}

.album {
	max-width: $width;
    margin: auto;
    transition: all 600ms $ease;
	
	&-cover {
		position: relative;
		width: $width; height: $width;
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

    .album-wrap {
        height: 50vh;
    }
    .album {
        margin: auto;
        transform: translateY(-14vh);
        
        .album-cover {
            transform: scale(2);
            transform-origin: center bottom;

            &:before {
                opacity: 1;
            }
        }
        .album-desc {
            transform: translateY(-150px) translateX(-100px);
            color: #fff;
        }
    }
    .content {
        transform: translateY(-14vh);

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
        width: 800px;
        font-family: $heading;
        font-size: 0.75em;

        p:first-child {
            font-size: 1.5em;
            opacity: 1;
        }
        p {
            padding: 15px 0;
            //font-family: 'Montserrat', sans-serif;
            color: #fff;
            opacity: 0.66;
            line-height: 1.5em;
        }
    }
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

// Transition lab title
.text-swipe-enter-active {
    transform-origin: center left;
    transition: all .3s ease;
}

.text-swipe-leave-active {
    transition: all .3s ease;
}

.text-swipe-enter {
    transform: translateY(60px) scale(0.5);
    opacity: 0 !important;
}

.text-swipe-leave-to {
    transform: translateY(-60px);
    opacity: 0 !important;
}

</style>
