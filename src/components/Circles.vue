<template>
  <div class="circle-wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: 'Circles',
}
</script>

<style lang="scss" scoped>
  .circle-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-text{
    font-size: 20px;
    margin:0;
    padding: 0;
    text-transform: uppercase;
  }

  .circle{
    z-index: -1;
    border-radius: 50%;
    position: absolute;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transform-origin: center;
    border: 1px solid #cccccc;
    animation: pulse 2s infinite linear;
    animation-delay: 0s;
    opacity: 1;
    width: 525px;
    height: 525px;

    &:nth-child(2){
      animation-delay: 0.3s;
    }

    &:nth-child(3){
      animation-delay: 0.6s;
    }

    &:nth-child(4){
      animation-delay: 0.9s;
    }
  }

  @keyframes pulse {
    50%{
      opacity: 1;
    }
    100%{
      transform: translate(-50%, -50%) scale(1.3);
      opacity: 0;
    }
  }
</style>
