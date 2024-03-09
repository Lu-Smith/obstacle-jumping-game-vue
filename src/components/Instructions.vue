<template>
    <div class="instructionsContainer">
        <button v-if="!showInfo && !gameRunning" @click="emitShowInstructions" class="infoButton">Instructions</button>
        <ul v-if="showInfo" >
            <button @click="emitShowInstructions" class="infoButton">
            X
            </button>
            <li> 
                <div class="imageContainer key">
                    <img src="../assets/images/key.png" alt="key">
                </div>
                <h3>Collect keys to get points.</h3>
            </li>
            <li> 
                <h3>Press <span>Enter</span> or <span>Space</span> key or click a <span>Mouse</span> to jump.</h3>
            </li>
            <li>
                <div class="imageContainer monsters">
                    <img src="../assets/images/monsters.png" alt="monsters"> 
                </div>
                <h3>Avoid bouncy monsters.</h3>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import {defineEmits} from 'vue';

    defineProps(['gameRunning', 'showInfo']);
    const emit = defineEmits(['showInstructions']);

    const emitShowInstructions = () => {
        emit('showInstructions');
    }
 
</script>

<style lang="scss">
.instructionsContainer {
    font-family: "Roboto", sans-serif;
    position: fixed;
    top: 0;
    padding: 10px;
    background-color: $primary-background;
    border: 2px solid rgb(25, 65, 117);
    max-width: 90%;

    ul {
        @include flex(start, center, column);
        border: 2px solid white;
        list-style-type: disc;

        li {
            @include flex(start, center, row);
            text-align: left;
            align-items: start;
            padding: 5px;
            gap: 10px;

            .imageContainer {
                @include flex(start, center, row);
                background: none;

                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }

            .imageContainer.key {
                height: 25px;
                width: 30px;
            }

            .imageContainer.monsters {
                height: 25px;
                width: 80px;
            }
        }
    }

    button {
        position: fixed;
        bottom: 0;
        right: 0;
        translate: (-50%);
        width: 100vw;
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        border: none;
        padding: 5px 0;
    }

    .infoContainer {
        background-color: red;
        height: 20vh;
    }

}
</style>