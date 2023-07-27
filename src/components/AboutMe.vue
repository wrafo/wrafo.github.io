<template>
  <div class="flex">
    <div class="">
      I'm Rafael Pereira, a passionate Software Engineer currently working in the Game Development Industry.
      Based in Brazil, I have a deep love for creating immersive and engaging experiences through technology.
    </div>
    <div>
      <img :src="img"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
  }
}
</script>

<style scoped>
</style>
