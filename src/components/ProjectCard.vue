<template>
<div class="max-w-xl w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')">
  </div>
  <div class="border-r border-b border-l border-primaryGray lg:border-l-0 lg:border-t lg:border-primaryGray bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-black font-bold text-xl mb-2">Mortal Kombar Onlsaugth</div>
      <p class="text-black text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
  </div>
</div>
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
  