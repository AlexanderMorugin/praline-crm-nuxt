const isScreenMedium = ref(null);
const windowWidth = ref(null);

export function useResizeMedium() {
  onMounted(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resizeHandler);
  });

  const resizeHandler = () => {
    windowWidth.value = window.innerWidth;

    if (windowWidth.value <= 1024) {
      isScreenMedium.value = true;
      return;
    }

    isScreenMedium.value = false;
  };

  return {
    isScreenMedium,
  };
}
