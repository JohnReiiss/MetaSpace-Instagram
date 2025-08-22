export function initializeCopyButtons() {
  const buttons = document.querySelectorAll(".btn-copy");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const url = button.dataset.urlMedia;

      navigator.clipboard
        .writeText(url)
        .then(() => {
          button.textContent = "Copiado!";
          button.classList.add("copied");

          setTimeout(() => {
            button.textContent = "Copiar link";
            button.classList.remove("copied");
          }, 1000);
        })
        .catch((err) => {
          console.error("Falha ao copiar o link: ", err);
          button.textContent = "Erro!";
        });
    });
  });
}
