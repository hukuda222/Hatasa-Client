<template>
<div>
  <img src="./../../../static/img/chino.jpg" v-bind:class="[(data.from === 'debug : unti')?'myMessage' :'otherMessage']">
  <div>{{data.class}}</div>
  <div class="from">from:{{data.from}}</div>
  <div>mes:{{data.message}}</div>
  <div>time:{{data.time}}</div>
  <br><br><br>
</div>
</template>

<script>
export default{
  name: 'message',
  props: ['data']
}

</script>

<style scoped>
.myMessage{
  width:200px;
  height:100px;
  right:10%;
  position: absolute;
}
.otherMessage{
  width:200px;
  height:100px;
  left:10%;
  position: absolute;
}
.from{
  position: relative;
}
</style>
