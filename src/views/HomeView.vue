<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue';
import LocaleSelect from '@/components/LocaleSelect.vue';
import InfosTabs from '@/components/InfosTabs/InfosTabs.vue';

const mySkills = ['React.js', 'Next.js', 'Vue.js', 'Nuxt.js', 'Typescript'];
</script>

<template>
  <main class="py-[35px] px-[50px]">
    <!--Navbar-->
    <nav class="flex items-center justify-between w-full h-[60px]">
      <AppIcon size="38" color="#d3d3d3"/>
      <LocaleSelect />
    </nav>
    <!--Content-->
    <div class="flex flex-col 2xl:flex-row pt-[40px] 3xl:px-[50px]">
      <!--Avatar and skills menu-->
      <aside class="max-w-[250px] 3xl:w-[310px] flex flex-col">
        <img class="w-full rounded-[8px] mb-[20px]" src="/images/avatar.png" alt="diogopereira-avatar"/>
        <div class="hidden 2xl:flex w-full flex-col px-[5px] py-[30px]">
          <div class="flex items-center">
            <h2 class="text-[17px] text-primary-100 font-default font-[500]">{{ $t('home.profile-skills-message') }}</h2>
            <hr class="w-full h-[2px] bg-secondary-100 border-none ml-[7px] mt-[8px]"/>
          </div>
          <div class="w-full flex gap-[10px] flex-wrap pt-[20px]">
            <div 
              class="flex gap-[10px] items-center grow h-[35px] bg-secondary-0 rounded-[5px] px-[15px]"
              v-for="skill in mySkills"
              :key="skill"
            >
              <div class="w-[8px] h-[8px] bg-[#75c7e0] rounded-full"></div>
              <p class="text-secondary-100 font-default font-[500]">{{ skill }}</p>
            </div>
          </div>
        </div>
      </aside>
      <!--Tabs section-->
      <section class="w-full 2xl:px-[70px]">
        <div class="flex flex-col">
          <div class="flex gap-[15px] items-center">
            <h2 class="text-[20px] md:text-[32px] text-[#f0f0f0] font-default font-[500]">Diogo Pereira</h2>
            <div class="flex items-center gap-[6px] text-secondary-100 font-default font-[500] mt-[5px]">
              <font-awesome-icon class="text-[18px]" icon="fa-solid fa-location-dot"></font-awesome-icon>
              <p>Bra{{ $i18n.locale === 'pt'? 's' : 'z' }}il, SP</p>
            </div>
          </div>
          <h2 class="flex items-center gap-[6px] text-primary-200 text-[18px] font-default font-[400]">{{ $t('home.profile-area-message') }}</h2>
        </div>
        <div class="w-full mt-[30px]">
          <InfosTabs />
        </div>
      </section>
    </div>
  </main>
</template>