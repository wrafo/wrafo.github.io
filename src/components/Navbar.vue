<template>
    <nav class="pt-4 pb-4 top-0 w-full">
      <ul class="flex m-0 p-0 justify-center lg:justify-start">
        <li class="mr-4" v-for="(item, index) in navbarItems" :key="index">
          <a class="text-white font-bold hover:text-primary" :href="item.link">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  const navbarItems = [
    { label: 'About Me', link: '#about-me' },
    { label: 'Background', link: '#background' },
    { label: 'Projects', link: '#projects' },
    { label: 'Experience', link: '#experience' },
  ];
  </script>
  
  <style>
  </style>