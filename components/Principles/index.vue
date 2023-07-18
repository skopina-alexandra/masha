<script setup>
const principles = [
  {
    image: "/assets/images/paw-amber.png",
    header: "Ненасильственные методы",
    text: "Применяю методы, основанные на мягких и эффективных техниках, без физического или эмоционального насилия",
  },
  {
    image: "/assets/images/paw-violet.png",
    header: "Положительное подкрепление",
    text: "Использую похвалу, награды и игру, чтобы стимулировать желаемое поведение у собаки, создавая позитивный опыт обучения",
  },
  {
    image: "/assets/images/paw-pink.png",
    header: "Обучение владельцев",
    text: "Помогаю владельцам собак разобраться и использовать полученные навыки в повседневной жизни",
  },
];
</script>

<template>
  <section class="flex flex-col items-start">
    <h2 class="text-xl mb-20 pt-20 pb-5 border-b border-dashed border-font">Работаю по <span class="text-5xl font-extrabold">принципам</span></h2>
    <div class="flex flex-row justify-between">
      <PrinciplesItem
        v-for="principle in principles"
        :item="principle"
        class="basis-1/4"
      />
    </div>
  </section>
</template>
