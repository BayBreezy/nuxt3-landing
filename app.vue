<template>
  <div>
    <div class="min-h-screen dark:bg-slate-900 dark:text-gray-200 bg-gradient-to-b from-transparent dark:from-transparent dark:via-gray-800 dark:to-primary-900 via-primary-200 to-blue-100">
      <Nav />
      <div class="md:px-desktop mx-auto h-full w-full pt-24 relative">
        <h1 class="text-7xl font-bold text-center z-10">
          Fresh salads for the <br />
          <span class="text-transparent bg-gradient-to-r from-primary-800 via-teal-600 to-blue-400 bg-clip-text">Entire Family</span>
        </h1>
        <img src="/h2.png" alt="Lovely Freshh Salad" class="object-cover h-full w-auto mt-10 mx-auto z-0" />
        <div class="absolute top-[50%] left-[20%] p-4 px-6 rounded-lg dark:bg-slate-800 shadow-md">
          <p class="font-medium mb-5">Customer reviews</p>
          <div class="flex justify-between -space-x-2">
            <div v-for="(img, i) in images" :key="`user${i}`" class="border-2 border-white rounded-full">
              <img :src="img" class="w-12 h-12 rounded-full" alt="" />
            </div>
          </div>
          <p class="flex mt-4 text-sm"><StarIcon class="w-5 h-5 text-amber-400 mr-1" /> Over 5k reviews</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StarIcon from "@/assets/icons/star.svg?component";
const images = [
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/75.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
  "https://randomuser.me/api/portraits/women/85.jpg",
];
</script>
