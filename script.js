// Função para alternar o tema
const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle("dark-theme");

    // Salvar a preferência do tema no localStorage
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

// Aplicar o tema salvo ao carregar a página
const applySavedTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
};

// Adicionar botão de alternar tema
const addThemeButton = () => {
    const themeButton = document.createElement("button");
    themeButton.textContent = "Alternar Tema";
    themeButton.addEventListener("click", toggleTheme);
    document.body.prepend(themeButton);
};

// Inicializar
applySavedTheme();
addThemeButton();