<template>
  <header>
    <Navbar />
  </header>
  <div class="h-screen flex flex-col justify-center">
    <AboutMe img="/avatar.jpg"></AboutMe>
  </div>
  <main>
    <Background img="/slime_fire_2.gif"></Background>

    <div class="text-3xl mt-8 text-secondary">
      THIS IS STILL A WIP! ANY DOUBTS PLEASE CONTACT ME VIA EMAIL: <b>wraafo@gmail.com</b>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import AboutMe from './components/AboutMe.vue';
import Navbar from './components/Navbar.vue';
import Background from './components/Background.vue';

export default defineComponent({
    components: {
        AboutMe,
        Navbar,
        Background,
    },
})

</script>

<style scoped>
header {
  margin: 0 auto;
}
</style>
