import { useCallback } from "react";

export const useCheckInputs = () => {
  const checkInputs = useCallback(() => {
    const checkInput: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".check-input");

    checkInput.forEach((input) => {
      if (input.value === "") {
        input.classList.add("input-error");
      } else {
        input.classList.remove("input-error");
      }
    });
  }, []);

  return checkInputs;
};
