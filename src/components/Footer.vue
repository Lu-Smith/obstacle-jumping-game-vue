<template>
     <h3>Coded by 
        <a
            href='https://www.lunasmithart.com/' 
            target='_blank'
            className='portfolio'>
            Luna Smith
        </a>
        -
        <a 
        href='https://github.com/Lu-Smith/obstacle-jumping-game-vue'
        target='_blank'>
            GitHub
        </a>
        .
    </h3>
</template>

<style lang="scss" scoped>
    h3 {
        background-color: $primary-color;
        color: $primary-background;
        padding: $button-padding;
        font-family: 'Roboto', sans-serif;
        border: 2px solid $third-color;
        font-size: $primary-font-size;
        line-height: $primary-line-height;
        border-radius: 5px;
        z-index: 99;

        a {
            color: $secondary-background;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .portfolio {
            color: $third-color;
        }

        a:hover {
            color: #7dd87d;
        }

        .portfolio::before {
            content: '';
            display: inline-block;
            color: $third-color;
        }
    }

    @media screen and (max-width: 786px), (max-height: 600px){
        h3 {
        font-size: $mobile-font-size;
        line-height: $mobile-line-height;
        padding: $small-button-padding;
        }
    }

    @media screen and (max-width: 480px), (max-height: 380px) {
        h3 {
            border-radius: 2px;
            font-size: $small-mobile-font-size;
            line-height: $mobile-line-height;
            border: 1px solid $third-color;
            padding: $mobile-button-padding;
        }
    }
</style>