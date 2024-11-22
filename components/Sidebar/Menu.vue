<script setup>
const items = ref([
  {
    title: "Area Chart",
    path: "/",
    icon: "material-symbols:area-chart",
  },
  {
    title: "Line Chart",
    path: "/line",
    icon: "material-symbols-light:line-axis",
  },
  {
    title: "Bar Chart",
    path: "/bar",
    icon: "material-symbols:bar-chart",
  },
  {
    title: "Donut Chart",
    path: "/donut",
    icon: "material-symbols:pie-chart",
  },
]);
</script>

<template>
  <div>
    <header class="flex items-center gap-2 p-4 hover:scale-[105%] transition cursor-pointer">
      <Logo />
      <p class="font-bold text-foreground">Ultimate Nuxt</p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          :to="item.path"
          class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-muted"
        >
          <Icon :name="item.icon" size="20" style="color: hsl(var(--foreground))" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
