<template>
    <div class="animtationContainer">
        <img src="../assets//images/boubles1.png" alt="boubles" class="moving_image1">
        <img src="../assets//images/boubles2.png" alt="boubles" class="moving_image">
        <img src="../assets//images/boubles3.png" alt="boubles" class="moving_image2">
        <img src="../assets//images/boubles4.png" alt="boubles" class="moving_image3">
        <img src="../assets//images/boubles.png" alt="boubles" class="moving_image4">
        <img src="../assets//images/boubles1.png" alt="boubles" class="moving_image5">
        <img src="../assets//images/fish.png" alt="fish" class="fish">
    </div>
  </template>
  
  <style lang="scss" scoped>
  @keyframes moveUp {
    0% {
      bottom: 20px;
      right: -140%;
      transform: rotate(0deg);
    }
    30% {
      bottom: 60px;
      right: -30%;
      transform: rotate(3deg);
    }
    60% {
      bottom: 50px;
      right: 30%;
      transform: rotate(-3deg);
    }
    100% {
      bottom: 20px;
      right: 100%;
      transform: rotate(0deg);
    }
  }
  
  @keyframes moveUp1 {
    0% {
      bottom: -120;
      right: -20px;
      transform: rotate(0deg);
    }
    50% {
      bottom: 160%;
      right: 100px;
      transform: rotate(180deg);
    }
    100% {
      bottom: 160%;
      right: 60px;
      transform: rotate(0deg);
    }
  }
  
  @keyframes moveUp2 {
    0% {
      bottom: -130;
      right: 20px;
      transform: rotate(0deg);
    }
    50% {
      bottom: 180%;
      right: 100px;
      transform: rotate(360deg);
    }
    100% {
      bottom: 250%;
      right: -200px;
      transform: rotate(0deg);
    }
  }
  
  @keyframes moveUp3 {
    0% {
      bottom: -150;
      right: 200px;
      transform: rotate(0deg);
    }
    40% {
      bottom: 300px;
      right: 300px;
      transform: rotate(180deg);
    }
    60% {
      bottom: 400px;
      right: 100px;
      transform: rotate(0deg);
    }
    100% {
      bottom: -150;
      right: 200px;
      transform: rotate(0deg);
    }
  }
  
  @keyframes moveUp4 {
    0% {
      bottom: 150px;
      right: 120%;
      transform: rotate(0deg);
    }
    30% {
      bottom: 100px;
      right: 20%;
      transform: rotate(2deg);
    }
    60% {
      bottom: 120px;
      right: -20%;
      transform: rotate(-2deg);
    }
    100% {
      bottom: 150px;
      right: -120%;
      transform: rotate(0deg);
    }
  }
  
  @keyframes fish {
    0% {
      bottom: 200px;
      right: 100%;
      transform: rotate(0deg);
    }
    30% {
      bottom: 300px;
      right: 0;
      transform: rotate(5deg);
    }
    60% {
      bottom: 350px;
      right: 0;
      transform: rotate(-5deg);
    }
    100% {
      bottom: 200px;
      right: -100%;
      transform: rotate(0deg);
    }
  }

  @keyframes moveUp5 {
    0% {
      bottom: -10px;
      right: 100%;
      transform: rotate(0deg);
    }
    30% {
      bottom: -10px;
      right: 20%;
      transform: rotate(45deg);
    }
    60% {
      bottom: -80px;
      right: -10%;
      transform: rotate(-45deg);
    }
    100% {
      bottom: -10px;
      right: -100%;
      transform: rotate(0deg);
    }
  }
  
    .animtationContainer {
        background-color: rgba(0, 0, 0, 0.8);
        height: 40%;
        width: 100vw;
        position: fixed;
        bottom: 0;
        border-top-left-radius: 30%;
        border-top-right-radius: 30%;
        z-index: 1;

        .moving_image, .moving_image1, .moving_image2, .moving_image3, .moving_image4, .moving_image5, .fish {
        bottom: 0;
        position: relative;
      }
  
      .moving_image {
        animation: moveUp 5s linear infinite; 
      }
  
      .moving_image1 {
        animation: moveUp1 5s linear infinite; 
      }
  
      .moving_image2 {
        animation: moveUp2 5s linear infinite; 
      }
  
      .moving_image3 {
        animation: moveUp3 5s linear infinite; 
      }
  
      .moving_image4 {
        animation: moveUp4 5s linear infinite; 
      }

      .moving_image5 {
        animation: moveUp5 5s linear infinite; 
      }
  
      .fish {
        animation: fish 5s linear infinite; 
      }
    }

@media screen and (max-width: 786px), (max-height: 600px)  {
    .animtationContainer {
        height: 40%;
    }
}
  </style>