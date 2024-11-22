import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useDarkStore = defineStore("darkMode", () => {
  const dark = ref(false);
  const isDark = computed(() => dark.value);
  function toggle() {
    dark.value = !dark.value;
  }

  return { isDark, toggle };
});
