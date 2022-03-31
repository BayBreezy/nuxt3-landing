<template>
  <nav class="flex justify-between items-center h-24 md:px-desktop mx-auto dark:text-gray-200">
    <ul class="flex space-x-6">
      <li v-for="(l, i) in links" class="group cursor-pointer" :key="`link${i}`">
        <nuxt-link class="text-sm group-hover:text-primary-600" to="#">{{ l }}</nuxt-link>
        <div class="h-0.5 mt-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300 w-10/12"></div>
      </li>
    </ul>
    <h1 class="text-3xl cursor-pointer font-medium">Fress<span class="text-green-600">hh</span></h1>
    <div class="flex space-x-6">
      <ul class="flex space-x-6">
        <li v-for="(l, i) in links2" class="group cursor-pointer" :key="`link2${i}`">
          <nuxt-link class="text-sm group-hover:text-primary-600" to="#">{{ l }}</nuxt-link>
          <div class="h-0.5 mt-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300 w-10/12"></div>
        </li>
      </ul>
      <button @click="toggleTheme">
        <SunIcon class="h-5 w-5 hover:text-primary-600" />
      </button>
      <button>
        <UserIcon class="h-5 w-5 hover:text-primary-600" />
      </button>
    </div>
  </nav>
</template>

<script setup>
const links = ["Home", "About", "Contact", "Products"];
const links2 = ["Farms", "Blog", "Collections"];
import SunIcon from "@/assets/icons/sun.svg?component";
import UserIcon from "@/assets/icons/user.svg?component";

const toggleTheme = () => {
  const colorMode = useColorMode();
  switch (colorMode.value) {
    case "dark":
      colorMode.preference = "light";
      break;
    case "light":
      colorMode.preference = "dark";
      break;

    default:
      break;
  }
};
</script>
