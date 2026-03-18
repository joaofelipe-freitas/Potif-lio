<div align="center">
  <img src="https://img.shields.io/badge/Status-Access_Granted-00ff9d?style=for-the-badge&logo=quicklook&logoColor=black" alt="Status" />
  <img src="https://img.shields.io/badge/Security-Blue_Team-0052cc?style=for-the-badge&logo=shield&logoColor=white" alt="Blue Team" />
  <img src="https://img.shields.io/badge/Availability-99.9%25-green?style=for-the-badge" alt="Availability" />
</div>

<br />

<div align="center">
  <h1 align="center">{ João Felipe Silva Freitas }</h1>
  <p align="center">
    <strong>Hybrid Cybersecurity & Engineering Portfolio Dashboard</strong>
  </p>
  <p align="center">
    Analista de Cibersegurança focado em operações Blue Team, governança e engenharia de software seguro.
  </p>
</div>

<div align="center">
  <a href="https://joaofelipe-freitas.github.io/Potif-lio/">
    <img src="https://img.shields.io/badge/Live_Preview-View_Dashboard-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Preview" />
  </a>
</div>

---

## 🎯 Visão Geral do Sistema (System Overview)

Este projeto não é um portfólio comum. É uma **Single Page Application (SPA) Híbrida** desenvolvida para refletir a interface de trabalho de um analista em um SOC (Security Operations Center). 

A aplicação sincroniza uma navegação visual avançada (GUI) com um Terminal de Linha de Comando interativo (CLI), proporcionando uma experiência imersiva e responsiva (Dual-Mode UX).

### Recursos de Destaque
- 🛡️ **Dual-Mode UX**: Todos os painéis possuem comandos equivalentes no terminal (`whoami`, `analyze skills`, `cat achievements.txt`). Cliques na interface invocam graficamente ações automáticas no terminal.
- 📊 **Dashboards Analíticos**: Gráficos complexos e responsivos (Radar) projetados com `recharts` para exibição de arsenal e proficiências.
- ⚡ **Performance e Otimização**: Interface implementada no padrão Mobile-First, com arquitetura em componentização flexível.
- 🔒 **Secure by Design**: Utiliza exportação estática servida em Edge e blindagem de segurança via _Strict Headers_.

---

## 💻 Tech Stack (Arsenal Tecnológico)

<div align="center">

| Core | Visual & UX | Infra & DevOps |
| :---: | :---: | :---: |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) <br/> ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) <br/> ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) <br/> ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue) <br/> ![Recharts](https://img.shields.io/badge/Recharts-22b3b8?style=for-the-badge) | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white) <br/> ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-121013?style=for-the-badge&logo=github&logoColor=white) <br/> ![Zustand](https://img.shields.io/badge/Zustand-Bear-brown?style=for-the-badge) |

</div>

---

## 📁 Arquitetura Limpa (Clean Code)

O projeto foi componentizado focado em separação de responsabilidades. Nenhum dado (Hardcoded) fica solto nas _views_ da tela. Toda a narrativa do perfil está centralizada e tipificada através do artefato estático gerado em:
`/src/data/portfolio.ts`.

Isso facilita drasticamente a atualização do currículo, deixando a _view layer_ concentrada apenas em gerir _framer-motion_ e regras de UI.

---

## ⚙️ Implantação e Execução Local

### Pré-requisitos
- Node.js LTS (v18.x ou superior)
- NPM, Yarn ou PNPM

### Instalação

\`\`\`bash
# Clone o repositório
git clone https://github.com/joaofelipe-freitas/Potif-lio.git

# Acesse a pasta do projeto
cd Potif-lio

# Instale os pacotes necessários
npm install
\`\`\`

### Execução em Desenvolvimento

Inicie o servidor de desenvolvimento:

\`\`\`bash
npm run dev
\`\`\`

Acesse a URL [http://localhost:3000](http://localhost:3000) no seu navegador para verificar a interface do terminal rodando localmente.

---

<div align="center">
  <sub>"Defesa profunda, resposta ágil e governança inteligente."</sub>
</div>
