<template>
  <div>
    <h1>
      <img src="../assets//images/fish.png" alt="fish">
      {{ msg }}
      <img src="../assets//images/treasure.png" alt="treasure" class="treasure">
    </h1>
    <button @click="handleStartGame">Start</button>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ msg: string }>();

  const emits = defineEmits(['startGame']);

  const handleStartGame = () => {
    emits('startGame', true);
  };
</script>

<style lang="scss" scoped>
  div {

    h1 {
      @include flex(center, center, row);
      color: #7dd87d;
      font-size: $nav-font-size;
      text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.8);
      background-color: rgba(0, 0, 0, 0.8);
      padding: 20px 0;

      img {
        width: 120px;
        height: auto;
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
    }

  }

  @media screen and (max-width: 786px) {
    div {
      h1 {
        font-size: $big-font-size;
        
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

  @media screen and (max-width: 480px) {
    div {
      h1 {
        font-size: $primary-font-size;
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