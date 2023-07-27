<template>
  <div class="hidden lg:block">
    <div class="text-3xl">
      Hi there!
    </div>
    <div class="flex items-center text-left">
      <div class="mr-8 text-3xl w-4/5">
        I'm <b class="text-primary">Rafael Pereira</b>, aka <b class="text-primary">Rafo</b>, a passionate Software
        Engineer currently working in the Game Development Industry.
        Based in Brazil, I have a deep love for creating immersive and engaging experiences through technology.
      </div>
      <div>
        <img class="rounded-full" :src="img" width="300" height="300" />
      </div>
    </div>
  </div>

  <div class="lg:hidden flex flex-col items-center">
    <div class="mb-4">
      <img class="rounded-full" :src="img" width="300" height="300" />
    </div>
    <div class="text-2xl mb-4">
      Hi there!
    </div>
    <div class="text-center mb-4">
      <div class="text-2xl">
        I'm <b class="text-primary">Rafael Pereira</b>, aka <b class="text-primary">Rafo</b>, a passionate Software
        Engineer currently working in the Game Development Industry.
        Based in Brazil, I have a deep love for creating immersive and engaging experiences through technology.
      </div>
    </div>
  </div>

  <span class="text-md text-center lg:text-xl lg:text-left">
    Scroll down to check my <a
      class="underline decoration-primary underline-offset-4 font-medium hover:text-primary">background</a> and some cool
    <a class="underline decoration-primary underline-offset-4 font-medium hover:text-primary">projects</a> I've done!
  </span>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    img: String,
  }
})
</script>

<style scoped></style>
