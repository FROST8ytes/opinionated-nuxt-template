<script setup>
const open = ref(false);
</script>

<template>
  <div>
    <div class="flex lg:hidden z-50 items-center justify-between w-full h-full p-4">
      <Logo />
      <Icon
        name="iconamoon:menu-burger-horizontal"
        class="z-50 cursor-pointer left-2 top-2"
        size="30"
        @click="open = true"
      />
      <div v-if="open" class="fixed top-0 left-0 z-50 w-full h-screen bg-background">
        <Icon
          name="material-symbols:close"
          class="absolute z-50 cursor-pointer right-4 top-4"
          size="30"
          @click="open = false"
        />
        <SidebarMenu />
        <div class="fixed bottom-0 p-5 w-full">
          <SidebarDarkModeSwitcher />
        </div>
      </div>
    </div>
    <div class="hidden lg:flex grow w-[250px] min-h-screen flex-col justify-between border-r">
      <SidebarMenu />
      <SidebarDarkModeSwitcher />
    </div>
  </div>
</template>

<style scoped></style>
