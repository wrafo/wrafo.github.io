<template>
    <div class="pt-8 pb-4">
        <div class="text-2xl text-secondary font-bold pb-4">
            PROJECTS
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ProjectCard img="/public/avatar.jpg" />
            <ProjectCard img="/public/avatar.jpg" />
        </div>
        <div class="running-slime-container -mt-12">
            <div class="running-slime animate-moving" src="/slime_green.gif"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ProjectCard img="/public/avatar.jpg" />
            <ProjectCard img="/public/avatar.jpg" />
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import ProjectCard from './ProjectCard.vue';

export default defineComponent({
    props: {
        img: String,
    },
    components: {
        ProjectCard,
    }
})
</script>
  
<style scoped>

.running-slime-container {
    width: 100%;
    height: 480px;
    overflow: hidden;
    position: relative;
  }
.running-slime {
    background-image: url(/slime_green.gif);
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
}

</style>
  