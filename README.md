# Portal de Compras Moderno

## Introdução

Bem-vindo à documentação do nosso Portal de Compras Moderno, uma aplicação web de ponta construída usando o ecossistema React e projetada para fornecer uma experiência de compra digital premium. Esta aplicação de página única demonstra as melhores práticas em desenvolvimento frontend, design responsivo e integração perfeita com API.

## Base Tecnológica

Este projeto utiliza um conjunto cuidadosamente selecionado de tecnologias web modernas:

- **React** - Construção de UI baseada em componentes com otimização de DOM virtual
- **TypeScript** - Superconjunto de JavaScript com tipagem estática para qualidade de código robusta
- **Material UI** - Sistema de design abrangente baseado no Material Design do Google
- **React Router** - Roteamento declarativo para arquitetura de navegação intuitiva
- **Axios** - Cliente HTTP rico em recursos para comunicação simplificada com API
- **Context API** - Gerenciamento de estado incorporado para fluxo de dados entre componentes

## Configuração do Ambiente

As instruções a seguir guiarão você na configuração de um ambiente de desenvolvimento local.

### Pré-requisitos

- Ambiente Node.js (versão 16.x ou posterior)
- Gerenciador de pacotes (npm ou yarn)
- Git para controle de versão

### Instalação para Desenvolvimento

```bash
# Clone o repositório para sua máquina local
git clone https://github.com/suaempresa/portal-de-compras-moderno.git

# Entre no diretório do projeto
cd portal-de-compras-moderno

# Instale todas as dependências necessárias
npm install
# ou com yarn
yarn

# Inicie o servidor de desenvolvimento local
npm run dev
# ou com yarn
yarn dev
```

O servidor de desenvolvimento estará acessível em http://localhost:5173 por padrão.

## Organização do Código-fonte

O código-fonte da aplicação segue uma estrutura lógica otimizada para manutenção:

```
src/
│
├── components/             # Componentes de UI compartilhados
│   ├── ProfileAvatar/      # Visualização de perfil do usuário
│   └── ProtectedRoute/     # Componente de limite de autenticação
│
├── pages/                  # Visualizações principais da aplicação
│   ├── Login/              # Interface de autenticação do usuário
│   ├── Products/           # Catálogo de produtos e experiência de navegação
│   └── ProductDetail/      # Visualização de informações expandidas do produto
│
├── services/               # Integração de dados externos
│   └── api.ts              # Configuração do cliente de API e endpoints
│
├── context/                # Gerenciamento de estado da aplicação
│   └── AuthContext.tsx     # Provedor de estado de autenticação
│
├── types/                  # Definições de tipos TypeScript
│   └── Product.ts          # Modelos de dados e interfaces
│
├── App.tsx                 # Raiz da aplicação e configuração de rotas
└── main.tsx               # Ponto de entrada e provedores globais
```

## Implementação de Segurança

A aplicação implementa uma camada de segurança com as seguintes características:

- Fluxo de autenticação baseado em JWT
- Proteção segura de rotas através de componentes de ordem superior
- Persistência de token no armazenamento do navegador
- Inclusão automática de token em requisições de API via interceptadores

Para testar o sistema de autenticação durante o desenvolvimento, use estas credenciais:
- Nome de usuário: `caio123`
- Senha: `caio123`

## Recursos e Capacidades

- **Autenticação Intuitiva**: Processo de login simplificado com validação de credenciais
- **Descoberta de Produtos**: Navegue por listagens de produtos categorizadas com capacidades de busca
- **Exame Detalhado de Produtos**: Informações abrangentes do produto com imagens de alta resolução
- **Interface Responsiva**: Experiência de visualização otimizada em diferentes tipos de dispositivos e tamanhos de tela
- **Feedback Visual**: Indicadores de carregamento e notificações de status para ações do usuário

## Integração com API

A aplicação integra-se com o serviço FakeStoreAPI, fornecendo:
- Endpoints de autenticação
- Recuperação de catálogo de produtos
- Detalhes individuais de produtos

Esta integração serve como uma demonstração de padrões de comunicação com API do mundo real.

## Diretrizes de Personalização

### Tema Visual

A identidade visual da aplicação pode ser personalizada modificando a configuração do tema em `src/main.tsx`:

```typescript
// Ajuste esquemas de cores, tipografia, estilo de componentes, etc.
const theme = createTheme({
  palette: {
    primary: { main: '#F4F4F4' },
    secondary: { main: '#white' },
    // Parâmetros adicionais de estilo
  },
  // Opções adicionais de personalização
});
```

### Fonte de Produtos

Para conectar com uma fonte alternativa de dados de produtos:

1. Atualize a configuração da API em `src/services/api.ts`
2. Ajuste a lógica de transformação de dados, se necessário, para corresponder aos requisitos da interface
3. Atualize as definições de tipo para refletir a nova estrutura de dados

## Preparação para Produção

Gere uma build pronta para produção com ativos otimizados:

```bash
# Crie uma build de produção minificada
npm run build
# ou
yarn build
```

O pacote de aplicação compilado será gerado no diretório `dist`, pronto para implantação em serviços de hospedagem estática.

## Informações de Licença

Este projeto é distribuído sob a Licença MIT, permitindo uso livre, modificação e distribuição com atribuição.