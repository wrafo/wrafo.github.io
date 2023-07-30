<template>
    <div class="pt-8 pb-4">
        <div class="text-2xl text-secondary font-bold pb-4">
            PROJECTS
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ProjectCard img="/public/avatar.jpg" />
            <ProjectCard img="/public/avatar.jpg" />
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
  
<style scoped></style>
  