<template>
  <div class="flex flex-col gap-[25px] p-[40px] px-[0px] lg:px-[40px]">
    <!--Contact infos-->
    <div class="flex flex-col">
      <h2 class="text-[17px] text-primary-100 font-default font-[500]">{{ $t('home.profile-area-contact-informations-title') }}</h2>
      <div class="flex flex-col lg:flex-row lg:gap-[80px]">
        <div class="flex flex-col gap-[15px] mt-[20px] ml-[10px]">
          <p class="text-[16px] text-primary-200 font-default font-[500]">Email: <span class="text-secondary-200">diogopereira.contact@gmail.com</span></p>
          <p class="text-[16px] text-primary-200 font-default font-[500]">
            {{ $t('home.profile-area-personal-website-message') }}: 
            <a 
              href="https://diogopereira.tech"
              target="_blank"
              rel="noreferrer"
              class="text-secondary-200 underline"
            >
              https://diogopereira.tech
            </a>
          </p>
        </div>
        <div class="flex flex-col gap-[15px] mt-[20px] ml-[10px] lg:ml-[0px]">
          <p class="text-[16px] text-primary-200 font-default font-[500]">
            Discord: 
            <a 
              href="https://discord.com/users/882178309205671956"
              target="_blank"
              rel="noreferrer"
              class="text-secondary-200 underline"
            >
              diogo_dev
            </a>
          </p>
          <p class="text-[16px] text-primary-200 font-default font-[500]">
            Linkedin: 
            <a 
              href="https://www.linkedin.com/in/fhill-slinger/"
              target="_blank"
              rel="noreferrer"
              class="text-secondary-200 underline"
            >
              Diogo Pereira
            </a>
          </p>
        </div>
      </div>
    </div>
    <!--Basic infos about me-->
    <div class="flex flex-col">
      <h2 class="text-[17px] text-primary-100 font-default font-[500]">{{ $t('home.profile-area-about-me-title') }}</h2>
      <div class="flex flex-col gap-[15px] mt-[20px] ml-[10px]">
        <p class="text-[16px] text-primary-200 font-default font-[500]">
          {{ $t('home.profile-area-birthday-message') }}: 
          <span class="text-secondary-200">{{ 
            $i18n.locale === 'pt'? 
              new Date('2005-05-16').toLocaleString('pt-br', { dateStyle: 'full' }) : 
              new Date('2005-05-16').toDateString() 
            }}
          </span>
        </p>
        <p class="text-[16px] text-primary-200 font-default font-[500]">{{ $t('home.profile-area-gender-message') }}: <span class="text-secondary-200">{{ $t('home.profile-area-gender-value') }}</span></p>
      </div>
    </div>
  </div>
</template>