<template>
  <div>
    <h1>
      <img src="../assets//images/fish.png" alt="fish" class="fish_title">
      {{ msg }}
      <img src="../assets//images/treasure.png" alt="treasure" class="treasure">
    </h1>
    <button @click="handleStartGame">Start</button>
    <Animations />
  </div>
</template>

<script setup lang="ts">
import Animations from './Animations.vue';

  defineProps<{ msg: string }>();

  const emits = defineEmits(['startGame']);

  const handleStartGame = () => {
    emits('startGame', true);
  };
</script>

<style lang="scss" scoped>

@keyframes fishInTitle {
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(15deg);
  }
  60% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

  div {
    h1 {
      @include flex(center, center, row);
      color: #7dd87d;
      font-size: $nav-font-size;
      line-height: $nav-line-height;
      text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.8);
      background-color: rgba(0, 0, 0, 0.8);
      padding: 20px 0;

      img {
        width: 120px;
        height: auto;
      }

      .fish_title {
        animation: fishInTitle 5s linear infinite; 
      }

      .treasure {
        width: 80px;
        height: auto;
        margin-left: 20px;
      }
    }

    button {
      font-family: 'Roboto', sans-serif;
      padding: $button-padding;
      margin-top: 30px;
      z-index: 999;
    }
  }

  @media screen and (max-width: 786px), (max-height: 600px) {
    div {
      h1 {
        font-size: $big-font-size;
        line-height: $big-line-height;
        
        img {
          width: 80px;
          height: auto;
        }

        .treasure {
          width: 40px;
          height: auto;
          margin-left: 10px;
        }
      }

      button {
          padding: $small-button-padding;
      }
    }
  }

  @media screen and (max-width: 480px), (max-height: 300px) {
    div {
      h1 {
        font-size: $primary-font-size;
        line-height: $primary-line-height;
        @include flex(center, center, column);
        img {
          width: 60px;
          height: auto;
        }

        .treasure {
          width: 20px;
          height: auto;
          margin-left: 5px;
        }
      }

      button {
        padding: $mobile-button-padding;
        margin-top: 20px;
      }
    }
  }
</style>