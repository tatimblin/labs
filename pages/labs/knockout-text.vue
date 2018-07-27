<template>
    <section class="page limit-width">
        <div class="container">
            <div class="nav">
                <h2>zine</h2>
                <ul class="header-nav">
                    <li>art</li>
                    <li>culture</li>
                    <li>style</li>
                    <li>living</li>
                </ul>
            </div>
            <div class="header">
                <div class="background" v-bind:class="{ 'background-fade': this.scrolled}"></div>
                <div class="header-hero" v-bind:class="{ 'header-hero-fade': this.scrolled}">
                    <div class="header-hero_inner">
                        <h1>Art Ignites Change</h1>
                    </div>
                </div>
                <span class="caption">Philadelphia Muses by Meg Saligman</span>
            </div>
            <div class="body">
                <div class="quote">
                    <div class="quote-img">
                        <img src="/knockout-text/mural-arts-logo.jpg" alt="Philadelphia Mural Arts Logo">
                    </div>
                    <div class="quote-copy">
                        <h3>"creating public art to transform places, individuals, and communities."</h3>
                    </div>
                </div>
                <div class="copy">
                    <p>We create art with others to transform places, individuals, communities and institutions. Through this work, we establish new standards of excellence in the practice of public and contemporary art.</p>
                    <p>Our process empowers artists to be change agents, stimulates dialogue about critical issues, and builds bridges of connection and understanding.</p>
                    <p>Our work is created in service of a larger movement that values equity, fairness and progress across all of society.</p>
                </div>
                <div class="callout">
                    <h3>invest in mural arts</h3>
                    <div class="callout-form" contenteditable>signup</div>
                </div>
                <div class="copy">
                    <p>We listen with empathetic ears to understand the aspirations of our partners and participants. And through beautiful collaborative art, we provide people with the inspiration and tools to seize their own future.</p>
                </div>
                <div class="feature">
                    <div class="feature-img">
                        <img src="/knockout-text/philadelphia-mural-history.jpg" alt="Philadelphias first mural">
                        <span>Dr. J by Kent Twitchell • Photo by Jack Ramsdale</span>
                    </div>
                    <div class="feature-copy">
                        <h3>history</h3>
                        <p>In 1984, Mural Arts is established as part of the Philadelphia Anti-Graffiti Network.</p>
                    </div>
                </div>
                <div class="copy">
                    <p>Artist Jane Golden reaches out to graffiti writers in order to redirect their energies into constructive public art projects. Mural Arts’ collective mural-making process proves to be a powerful tool for generating dialogue, building relationships, empowering communities, and sparking economic revitalization.</p>
                </div>
            </div>
            <div class="footer">
                <div class="footer-info">
                    <h3>art ignites change.</h3>
                    <span>Lincoln Financial Mural Arts Center</span><br/>
                    <span>info(at)muralarts.org</span><br/>
                    <span><a href="muralarts.org/" target="_blank">muralarts.org/</a></span>
                </div>
                <div class="footer-social">
                    <div class="footer-social-item"><span>facebook</span></div>
                    <div class="footer-social-item"><span>twitter</span></div>
                    <div class="footer-social-item"><span>instagram</span></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    layout: 'default',
    transition: 'slide',
    data () {
        return {
            scrolled: false
        }
    },
    methods: {
        handleScroll () {
            var height;
            height = document.documentElement.scrollTop;
            if (height > 50) {
                this.scrolled = true;
            } else {
                this.scrolled = false;
            }
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped lang="scss">
@import '~assets/sass/_variables.scss';
@import url('https://fonts.googleapis.com/css?family=Kumar+One|Kumar+One+Outline');

// GENERAL
$solid: 'Kumar One', cursive;
$outline: 'Kumar One Outline', cursive;
$body: 'Helvetica Neue', sans-serif;
$text: #2b2b2b;
$alt-dark: #3F41A6;
$alt-light: #F34B2F;

.page {
    background-color: lighten(#DC483C, 40%);
    font-size: 14px;
    color: $text;

    @include bigger ($screen-xs) { font-size: 16px; }
    @include bigger ($screen-sm) { font-size: 14px; }
    @include bigger ($screen-md) { font-size: 16px; }
    @include bigger ($screen-lg) { font-size: 18px; }
}

h1, h2, span {
    font-family: $solid;
}

h1 {
    font-size: 4em;
    line-height: 1.5em;

    @include bigger ($screen-md) { font-size: 5em; }
    @include bigger ($screen-lg) { font-size: 6.5em; }
}

h2 {
    font-size: 2em;
}

h3 {
    font-family: $outline;
    font-size: 1.33em;
    color: $alt-dark;
    line-height: 1.5em;
    letter-spacing: 0.07em;
    text-transform: lowercase;
}

p {
    font-family: $body;
    font-weight: 300;
    letter-spacing: 0.08em;
    line-height: 1.5em;
}

span {
    font-size: 0.66em;
    letter-spacing: 0.1em;
    line-height: 2.5em;
}

a { color: $alt-dark; }

// LABS
.container {
    max-width: $container-md;
    margin: 0 auto;
    padding: $spacing;
}

.nav {
    h2 {
        padding: $spacing*2 0 $spacing 0;
    }
    ul {
        

        li {
            position: relative;
            display: inline-block;
            width: 50%;
            margin: $spacing 0;
            font-family: $outline;
            font-size: 0.9em;
            cursor: pointer;

            &:hover {
                font-family: $solid;
                color: $alt-dark;

                &:after {
                    width: 66%;
                }
            }

            &:after {
                content: '';
                position: absolute;
                width: 0%; height: 60%;
                left: 0; bottom: 0;
                background-color: $alt-light;
                opacity: 0.33;
                transition: all 300ms $ease;
            }
        }
    }
}

.header {
    position: relative;
    height: 550px + $spacing*2;
    margin: $spacing*2 0;

    h2 {
        margin-bottom: $spacing;
    }
    span {
        position: absolute;
        bottom: 0px;
    }
    &-hero {
        position:absolute;
        width: 100%; height:550px;
        background-image: url('/knockout-text/philadelphia-mural-hero.jpg');
        background-position: 20%;
        background-size:cover;
        border-bottom: 1px solid $alt-light;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: brightness(5%) grayscale(0%);
        transition: all 400ms $ease;

        &_inner {
            max-width:90%;
            margin: 100px auto;
            text-align:center;

            @include bigger ($screen-sm) { margin-top: 180px; }
            @include bigger ($screen-lg) { margin-top: 100px; }
        }
        &-fade {
            filter: brightness(90%) grayscale(0%);
        }
    }
}

.background {
    position:absolute;
    width:100%; height:550px;
	background: url('/knockout-text/philadelphia-mural-hero.jpg');
    background-position: 20% center;
	background-size:cover;
	opacity:1;
    filter: blur(0px) brightness(110%) contrast(80%);
    transition: all 400ms 100ms $ease;
    
    &-fade {
        filter: blur(4px);
	    opacity:0;
    }
}

.body {
    max-width: 600px;
    margin: 0 auto;

    .quote {
        display: flex;
        align-items: center;

        @include smaller ($screen-sm) {
            flex-direction: column;
            align-items: flex-start;
        }

        &-img {
            width: 100px; height: 100px;
            margin-right: $spacing;
            border-radius: 50%;
            overflow: hidden;

            @include smaller ($screen-sm) {
                margin-bottom: $spacing*2;
            }

            img {
                width: 100px; height: 100px;
            }
        }
        &-copy {
            max-width: 500px;
        }
    } 
    .copy {
        margin: $spacing 0;

        @include bigger($screen-sm) {
            width: 300px;
            margin: $spacing*2 auto;
        }

        p {
            margin: $spacing 0;
        }
    }
    .callout {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: $spacing*2 $spacing $spacing $spacing;
        border: 1px solid $alt-dark;

        @include smaller ($screen-xs) {
            flex-direction: column;
            align-items: center;
        }

        h3 {
            display: block;
            line-height: 1em;
            @include smaller ($screen-xs) {
                padding-bottom: $spacing;
            }
        }
        &-form {
            width: 150px;
            padding: 6px;
            text-align: center;
            border: 1px solid $alt-dark;
            color: $alt-dark;
            font-family: $body; 
        }
    }
    .feature {
        display: flex;
        align-items: center;

        @include smaller($screen-sm) {
            flex-direction: column;
        }

        div {
            width: 100%;

            @include bigger($screen-sm) {
                width: 50%;
            }
        }
        &-img {

            img {
                width: 100%;
            }
        }
        &-copy {
            padding: $spacing 0 0 0;

            @include bigger($screen-sm) {
                padding: 0 0 0 $spacing;
            }
        }
    }
}

.footer {
    display: flex;
    justify-content: space-between;
    max-width: $container-md;
    margin: 0 auto;
    padding: $spacing*2 0;
    border-top: 1px solid $alt-light;

    @include smaller($screen-xs) {
        flex-direction: column;
    }

    &-info {
        h3 {
            padding-bottom: $spacing;
        }
    }
    &-social {
        display: flex;
        &-item {
            margin: $spacing;

            @include smaller($screen-xs) {
                margin: $spacing $spacing*2 0 0;
            }
        }
    }
}
</style>
