<script setup lang="ts">
import { ref } from 'vue';
import TabContacts from './childrens/TabContacts.vue';

const tabs: {
  [key: string]: typeof TabContacts
} = {
  TabContacts
};
const currentTab = ref('TabContacts');
</script>

<template>
  <div class="flex items-center">
    <button 
      @click="currentTab = 'TabContacts'"
      :class="`w-[160px] h-[40px] hover:bg-secondary-100 hover:text-secondary-100 TabContacts-300 first:rounded-tl-[5px] last:rounded-tr-[5px] text-[16px] font-default font-[400] border-r-[2px] border-secondary-100 last:border-[0px] text-primary-100 ${currentTab === 'TabContacts'? 'bg-secondary-100 text-secondary-100' : 'bg-secondary-200'}`"
    >
      {{ $t('home.profile-area-tabs-contacts') }}
    </button>
  </div>
  <hr class="w-full h-[2px] bg-secondary-100 border-none"/>
  <component :is="tabs[currentTab]"></component>
</template>