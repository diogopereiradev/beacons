<script setup lang="ts">
import { i18n } from '@/plugins/i18n';
import { ref } from 'vue';

const isOpen = ref(false);

function getLocaleFullname(locale: string) {
  switch (locale) {
  case 'pt':
    return 'Português';
  case 'en':
    return 'English';
  }
}

function changeLocale(locale: string) {
  i18n.global.locale = locale as 'pt' | 'en';
  window.localStorage.setItem('locale', locale);
  isOpen.value = false;
}
</script>

<template>
  <div class="relative flex flex-col">
    <!--Value-->
    <button @click="isOpen = !isOpen" class="flex justify-between items-center w-[170px] h-[43px] bg-secondary-200 rounded-[5px] px-[15px]">
      <div class="flex items-center gap-[10px]">
        <font-awesome-icon class="text-primary-100 text-[19px]" icon="fa-solid fa-earth-americas" />
        <p class="text-primary-100 text-[14px] font-default font-[500] mt-[2px]">{{ getLocaleFullname($i18n.locale) }}</p>
      </div>
      <font-awesome-icon :class="`text-primary-100 text-[14px] mt-[2px] duration-300 ${isOpen && 'rotate-180'}`" icon="fa-solid fa-angle-down" />
    </button>
    <!--Select Menu-->
    <div :class="`flex flex-col absolute left-0 top-[52px] w-full duration-300 ${!isOpen && 'opacity-0 pointer-events-none top-[64px]'}`">
      <button 
        class="w-full text-left h-[43px] bg-secondary-200 hover:bg-secondary-300 last:rounded-b-[5px] first:rounded-t-[5px] duration-300 px-[20px] text-primary-100 text-[15px] font-default font-[500]" 
        v-for="locale in $i18n.availableLocales" 
        :key="locale"
        @click="changeLocale(locale)"
      >
        {{ getLocaleFullname(locale) }}
      </button>
    </div>
  </div>
</template>