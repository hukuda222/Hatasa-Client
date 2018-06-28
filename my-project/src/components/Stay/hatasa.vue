<template>
  <div>
    <img class="rightBottom" :src="src" id="hatasa" @click="hatasaChange">
    <h2 class="rightBottom">{{hatasaState}}</h2>　
  </div>
</template>

<script>
export default {
  name: 'hatasa',
  data () {
    return {
      hatasaState: 'nai',
      src: 'static/img/hatasa_nai.png'
    }
  },
  methods: {
    hatasaChange: function () {
      if (this.hatasaState === 'nai') {
        this.src = 'static/img/hatasa_y.png'
        this.hatasaState = 'y'
      } else if (this.hatasaState === 'y') {
        this.hatasaState = 'nai'
        this.src = 'static/img/hatasa_nai.png'
      }
    }
  }
}
</script>

<style scoped>
.rightBottom{
  position:fixed; bottom:0%; right:0%;
  color:black;
  size:5;
}

#hatasa{
  width:200px;
  height:200px;
}
</style>
