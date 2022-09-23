<template>
  <div class="app-searchbox-container">
    <div class="app-searchbox">
        
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.app-searchbox-container{
    width: 600px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: rgba(0, 0, 0, 0.13); */
}

.app-searchbox{
    width: 300px;
    height: 40px;
    border-radius: 10px;
    transition: 0.3s all;
    background-color: rgba(255, 255, 255, 0.4);
}

.app-searchbox:hover{
    width: 500px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.8);
}
</style>