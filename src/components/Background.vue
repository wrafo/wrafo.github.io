<template>
    <div class="text-2xl text-secondary font-bold pb-4">
      BACKGROUND
    </div>
    <div class="items-center text-left">
      <div class="mt-4 mb-4 text-xl">
        <p class="mb-2">I am a Computer Engineering graduate with a passion for creating remarkable digital experiences. My career took off in the world of Front-end development, where I honed my skills and specialized in crafting dynamic and immersive e-commerce projects. Working on projects for companies around the globe, I had the opportunity to contribute to various innovative solutions that reshaped the online shopping landscape.</p>
        <p class="mb-2">Driven by my love for pushing boundaries and exploring new realms, I made a bold transition to the exciting universe of Game Development. Currently, I am thriving as an Online Engineer, actively contributing to the creation of captivating gaming experiences that bring joy and excitement to players worldwide.</p>
        <p class="mb-2">With a diverse background in both web and game development, I embrace challenges and strive to deliver excellence in every endeavor. My journey has taught me the value of creativity, teamwork, and a relentless pursuit of growth.</p>
        <p>I am always seeking opportunities to collaborate on projects that can make a positive impact, and I am eager to be part of the ever-evolving landscape of technology and entertainment.</p>
      </div>
      <div class="flex justify-center">
          <img class="" :src="img" width="300" height="300"/>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent ({
    props: {
      img: String,
    }
  })
  </script>
  
  <style scoped>
  </style>
  