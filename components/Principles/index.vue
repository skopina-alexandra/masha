<script setup>
const principles = [
  {
    header: "Ненасильственные методы",
    text: "Применяю методы, основанные на мягких и эффективных техниках, избегая физического или эмоционального насилия",
  },
  {
    header: "Положительное подкрепление",
    text: "Использует похвалу, награды и игру, чтобы стимулировать желаемое поведение у собаки, создавая позитивный опыт обучения",
  },
  {
    header: "Обучение владельцев",
    text: "Помогаю владельцам собак разобраться и использовать полученные навыки в повседневной жизни",
  },
];
</script>

<template>
  <h2>Работаю по <span class="text-3xl font-extrabold">принципам</span></h2>
  <section class="grid grid-cols-3 gap-6 mx-auto">
    <PrinciplesItem
      v-for="principle in principles"
      class="bg-violet-500"
      :item="principle"
    />
  </section>
</template>
