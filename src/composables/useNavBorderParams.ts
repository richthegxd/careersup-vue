import { ref } from "vue";

export const useNavBorderParams = () => {
  const borderParams = ref({
    backgroundColor: "#000",
    width: "0px",
    left: "0px",
  });

  const setBorderParams = (event: MouseEvent, borderColor: string) => {
    const navItemElement = event.target as HTMLElement;
    const navItemBounding = navItemElement.getBoundingClientRect();

    borderParams.value = {
      backgroundColor: borderColor,
      width: `${navItemBounding.width}px`,
      left: `${navItemBounding.x}px`,
    };
  };

  return { borderParams, setBorderParams };
};
