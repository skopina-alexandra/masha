<script setup>
const principles = [
  {
    image: "/assets/images/paw-amber.png",
    header: "Ненасильственные методы",
    text: "Применяю методы, основанные на мягких и эффективных техниках, избегая физического или эмоционального насилия",
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
  <h2>Работаю по <span class="text-3xl font-extrabold">принципам</span></h2>
  <section class="grid grid-cols-3 gap-x-24 mx-auto">
    <PrinciplesItem
      v-for="principle in principles"
      :item="principle"
    />
  </section>
</template>
