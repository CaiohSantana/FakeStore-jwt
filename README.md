# 🛒 Portal de Compras Moderno

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-5.x-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)

*Uma aplicação web moderna de e-commerce construída com React, TypeScript e Material-UI*

[📖 Demo](#-demo) • [🚀 Início Rápido](#-início-rápido) • [⚡ Funcionalidades](#-funcionalidades) • [🛠️ Tecnologias](#️-tecnologias)

</div>

---

## 📖 Demo

<div align="center">

| Tela de Login | Dashboard de Produtos | Detalhes do Produto |
|:---:|:---:|:---:|
| ![Login](https://img.shields.io/badge/Login-Autenticação_JWT-success) | ![Dashboard](https://img.shields.io/badge/Dashboard-Listagem_Paginada-blue) | ![Details](https://img.shields.io/badge/Detalhes-Visualização_Completa-orange) |

</div>

### 🔑 Credenciais de Teste
```
Username: mor_2314
Password: 83r5^_
```

---

## ⚡ Funcionalidades

### 🔐 **Sistema de Autenticação**
- Login com JWT (JSON Web Token)
- Rotas protegidas e redirecionamento automático
- Interceptadores Axios para gerenciamento de token
- Logout seguro com limpeza de estado

### 📦 **Gerenciamento de Produtos**
- **Listagem Paginada**: Tabela responsiva com controles de paginação
- **Busca e Filtros**: Interface intuitiva para navegação
- **Detalhes Completos**: Visualização expandida com imagens e especificações
- **Categorização**: Chips coloridos para identificação rápida

### 🎨 **Interface Moderna**
- **Design System**: Material-UI com tema customizado
- **Responsivo**: Adaptável para mobile, tablet e desktop
- **Dark/Light Theme**: Suporte completo a temas
- **Micro-animações**: Feedbacks visuais suaves

### 🏗️ **Arquitetura Robusta**
- **Context API**: Gerenciamento de estado global
- **TypeScript**: Tipagem estática para maior confiabilidade
- **Component Composition**: Reutilização e manutenibilidade
- **Error Boundaries**: Tratamento elegante de erros

---

## 🛠️ Tecnologias

### **Frontend Core**
- **React 18** - Biblioteca UI com Concurrent Features
- **TypeScript 5** - Superset JavaScript com tipagem estática
- **Vite 6** - Build tool moderna e ultra-rápida

### **UI/UX**
- **Material-UI 5** - Sistema de design Google Material
- **Emotion** - CSS-in-JS para estilização performática
- **React Router 6** - Roteamento declarativo SPA

### **Estado e API**
- **Context API** - Gerenciamento de estado nativo React
- **Axios** - Cliente HTTP com interceptadores
- **JWT Decode** - Decodificação de tokens JWT

### **Desenvolvimento**
- **ESLint** - Linter para qualidade de código
- **Prettier** - Formatação consistente
- **Hot Module Replacement** - Desenvolvimento em tempo real

---

## 🚀 Início Rápido

### **Pré-requisitos**
- Node.js 16+ 
- npm ou yarn
- Git

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portal-compras-moderno.git

# Navegue para o diretório
cd portal-compras-moderno

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### **Scripts Disponíveis**

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview da build
npm run lint     # Verificação de código
```

---

## 📁 Estrutura do Projeto

```
src/
├── 📂 components/          # Componentes reutilizáveis
│   ├── ProfileAvatar/      # Avatar do usuário
│   └── ProtectedRoute/     # HOC para rotas protegidas
├── 📂 pages/              # Páginas da aplicação
│   ├── Login/             # Autenticação
│   ├── Products/          # Listagem de produtos
│   └── ProductDetail/     # Detalhes do produto
├── 📂 contexts/           # Context API
│   └── AuthContext.tsx    # Estado de autenticação
├── 📂 services/           # Camada de API
│   └── api.ts            # Cliente HTTP configurado
├── 📂 interfaces/         # Tipagens TypeScript
└── 📂 assets/            # Recursos estáticos
```

---

## 🎯 Destaques Técnicos

### **Padrões de Código Aplicados**
- **Clean Architecture**: Separação clara de responsabilidades
- **SOLID Principles**: Código extensível e manutenível
- **Custom Hooks**: Lógica reutilizável e testável
- **Error Handling**: Tratamento robusto de exceções

### **Performance**
- **Lazy Loading**: Carregamento sob demanda de componentes
- **Memoization**: Otimização de re-renderizações
- **Bundle Splitting**: Divisão inteligente do código
- **Image Optimization**: Carregamento otimizado de imagens

### **Segurança**
- **JWT Validation**: Validação de tokens no frontend
- **Route Guards**: Proteção de rotas sensíveis
- **XSS Prevention**: Sanitização de inputs
- **HTTPS Ready**: Configuração para produção segura

---

## 🔧 Configurações Avançadas

### **Proxy de Desenvolvimento**
```typescript
// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'https://fakestoreapi.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
```

### **Tema Customizado**
```typescript
// Material-UI Theme
const theme = createTheme({
  palette: {
    primary: { main: '#5c6bc0' },
    secondary: { main: '#ec407a' }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif"
  }
});
```

---

## 🚀 Deploy

### **Build de Produção**
```bash
npm run build
```

### **Plataformas Recomendadas**
- **Vercel** - Deploy automático com Git
- **Netlify** - Hospedagem JAMstack
- **AWS S3** - Storage estático escalável
- **GitHub Pages** - Hosting gratuito

---

## 👨‍💻 Desenvolvedor

**Caio Henrique**
- LinkedIn: [Seu LinkedIn](https://www.linkedin.com/in/caiohsantana/)
- GitHub: [@seu-usuario](https://github.com/CaiohSantana)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Made with ❤️ and ☕ by [Caio Henrique](https://www.linkedin.com/in/caiohsantana/)

</div>
