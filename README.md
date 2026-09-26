# React + Vite

## API mocks com MSW

O projeto usa o Mock Service Worker para simular a API no navegador. Os dados
iniciais são carregados de `db.json` e as alterações de CRUD permanecem em
memória até a página ser recarregada.

No desenvolvimento local, os mocks já estão habilitados por
`.env.development`:

```bash
npm run dev
```

Para usar o JSON Server local em vez do MSW, defina
`VITE_ENABLE_MSW=false` em `.env.local` e execute:

```bash
npm run dev:all
```

Deploys Preview da Vercel ativam o MSW automaticamente por meio de
`VITE_VERCEL_ENV=preview`. Em um ambiente customizado de Homologação, configure
as seguintes variáveis nas configurações do projeto na Vercel:

```dotenv
VITE_ENABLE_MSW=true
VITE_API_URL=/api
```

Em Production, mantenha `VITE_ENABLE_MSW=false` e configure `VITE_API_URL` com
a URL real da API. Variáveis alteradas na Vercel só entram em vigor após um novo
deploy.

O arquivo `public/mockServiceWorker.js` é gerado pelo MSW e deve permanecer
versionado. Para atualizá-lo após uma mudança de versão do pacote:

```bash
npx msw init public --save
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
