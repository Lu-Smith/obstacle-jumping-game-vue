<template>
    <div class="instructionsContainer">
        <button v-if="!showInfo" @click="emitShowInstructions" class="infoButton">Instructions</button>
        <button  v-if="showInfo" @click="emitShowInstructions" class="infoButton">X </button>
        <h3 v-if="showInfo">Can you find the treasure?</h3>
        <ol v-if="showInfo" >
            <li> 
                <h3>1. Collect keys</h3>
                <div class="imageContainer key">
                    <img src="../assets/images/key.png" alt="key">
                </div>
                <h3>to get points.</h3>
            </li>
            <li> 
                <h3>2. Press <span>Enter</span> or <span>Space</span> key or click a <span>Mouse</span> to jump.</h3>
            </li>
            <li> 
                <h3>3. Press <span>Shift</span> or <span>c</span> key to speed up.</h3>
            </li>
            <li>
                <h3>4. Avoid bouncy monsters</h3>
                <div class="imageContainer monsters">
                    <img src="../assets/images/monsters1.png" alt="monsters"> 
                </div>
                <h3>or die.</h3>
            </li>
            <li> 
                <h3>3. Press <span>R</span> or <span>tap</span> to restart.</h3>
            </li>
        </ol>
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
    background-color: $primary-background;
    max-width: 90%;
    z-index: 99;

    h3 {
        text-align: center;
        margin-top: 20px; 
    }

    ol {
        @include flex(start, center, column);
        border: 2px solid white;
        padding: 5px;
        margin: 20px;

        li {
            @include flex(start, center, row);
            text-align: left;
            align-items: start;
            padding: 5px;
            gap: 10px;

            h3 {
                font-size: 14px;
                margin: 0;
            }

            .imageContainer {
                @include flex(start, center, row);
                background: none;

                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }

            .imageContainer.key {
                height: 20px;
                width: 20px;
            }

            .imageContainer.monsters {
                height: 20px;
                width: 50px;
            }
        }
    }

    button {
        position: fixed;
        bottom: 0;
        right: 0;
        translate: (-50%);
        width: 100vw;
        font-size: $primary-font-size;
        line-height: $primary-line-height;
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