import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    showHeader: true,
  }),
  actions: {
    setHeaderVisibility(isVisible: boolean) {
      this.showHeader = isVisible;
    },
  },
});
