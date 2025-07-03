
---

# 📘 Projeto com Bootstrap & GSAP

Este projeto utiliza duas poderosas bibliotecas front-end:

* **[Bootstrap](https://getbootstrap.com/)**: um framework CSS que facilita a criação de layouts responsivos e componentes estilizados.
* **[GSAP (GreenSock Animation Platform)](https://gsap.com/)**: uma biblioteca JavaScript robusta para animações rápidas, suaves e altamente controladas.

---

## 📦 Tecnologias Utilizadas

| Biblioteca    | Descrição                                                                 |
| ------------- | ------------------------------------------------------------------------- |
| **Bootstrap** | Framework front-end para design responsivo com classes CSS pré-definidas. |
| **GSAP**      | Biblioteca de animação para elementos DOM, SVG, canvas, etc.              |

---

## 🚀 Como Usar

### 1. Clonando o Projeto

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Estrutura Básica do HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap + GSAP</title>

  <!-- Bootstrap CSS via CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- GSAP via CDN -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"></script>
</head>
<body>

  <div class="container text-center mt-5">
    <h1 class="display-4 text-primary">Bem-vindo!</h1>
    <button class="btn btn-success mt-4" id="animateBtn">Animar</button>
    <div class="box bg-info mt-5" style="width: 100px; height: 100px; margin: auto;"></div>
  </div>

  <script>
    const btn = document.getElementById('animateBtn');
    btn.addEventListener('click', () => {
      gsap.to('.box', { duration: 1, x: 200, rotation: 360, scale: 1.5 });
    });
  </script>

</body>
</html>
```

---

## 🎨 O que o Bootstrap oferece?

* Sistema de **grid responsivo** baseado em Flexbox.
* **Componentes prontos** como botões, cards, modais, navbars, etc.
* Utilitários para espaçamento, cores, tipografia e visibilidade.
* Integração simples com JavaScript para elementos interativos.

---

## 🎥 O que o GSAP oferece?

* Animações de alta performance.
* Controle total sobre **tempo, delay, repetição** e **easing**.
* Suporte a animações complexas em SVG, Canvas e DOM.
* Pode ser usado com ScrollTrigger, Draggable, e outros plugins.

### Exemplo com `ScrollTrigger` (plugin do GSAP):

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".box", {
    scrollTrigger: ".box",
    y: 100,
    opacity: 0,
    duration: 1
  });
</script>
```

---

## 📁 Organização recomendada

```
/seu-projeto
│
├── index.html
├── /css
│   └── style.css
├── /js
│   └── script.js
```

---

## ✅ Requisitos

* Navegador moderno (Chrome, Firefox, Edge, etc.)
* Conexão com a internet (para os CDNs) ou os arquivos baixados localmente.

---

## 📚 Referências

* [Documentação do Bootstrap](https://getbootstrap.com/docs/)
* [Documentação do GSAP](https://gsap.com/docs/)

---

## 🧠 Dicas

* Use o DevTools do navegador para depurar animações e testar responsividade.
* Combine os utilitários do Bootstrap com animações suaves do GSAP para uma UI moderna e elegante.
* Explore os plugins do GSAP como `ScrollTrigger`, `SplitText`, `Draggable`, etc.

---

Se quiser, posso personalizar esse README com base no seu projeto real. É só me dizer o que está desenvolvendo!
