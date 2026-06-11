# 📋 Plano de Migração de Dependências v2 - SysArena Frontend

**Data:** 11/06/2026  
**Projeto:** SysArena Frontend  
**Base:** Análise comparativa de `package.json` vs. últimas versões publicadas no npm  
**Status:** Planejamento

---

## 🎯 Objetivo

Realizar o **round 2 de migração** das dependências do projeto, explorando:

1. **Patches** disponíveis (correções compatíveis)
2. **Minors** (novos recursos, sem quebras)
3. **Majors** com migração guiada (Vite 8, plugin-react 6, uuid 14, prettier-plugin-tailwindcss 0.8)
4. **Limpezas estruturais** (duplicidade do daisyUI, alias `Daisyui` com letra maiúscula)

A migração foi consultada com a documentação oficial via **Context7** (Vite, daisyUI).

---

## 📊 Análise Atual × Disponível (`npx npm-check-updates`)

### 🔵 Patch (backwards-compatible) — Aplicar sem medo

| Pacote                     | Atual    | Disponível | Observação        |
| -------------------------- | -------- | ---------- | ----------------- |
| `@types/react`             | ^19.2.14 | ^19.2.17   | Tipos React 19    |
| `react`                    | ^19.2.5  | ^19.2.7    | Runtime           |
| `react-dom`                | ^19.2.5  | ^19.2.7    | Runtime           |
| `Daisyui` (alias)          | ^5.5.19  | ^5.5.23    | Bump do alias     |
| `prettier`                 | ^3.8.3   | ^3.8.4     | Formatador        |
| `baseline-browser-mapping` | ^2.10.20 | ^2.10.36   | Devtool do ESLint |

### 🟢 Minor (novos recursos, sem quebras) — Aplicar com testes

| Pacote              | Atual   | Disponível | Observação                          |
| ------------------- | ------- | ---------- | ----------------------------------- |
| `tailwindcss`       | ^4.2.2  | ^4.3.0     | Novas utilidades / tokens           |
| `@tailwindcss/vite` | ^4.2.2  | ^4.3.0     | Plugin oficial Vite                 |
| `daisyui`           | ^5.3.11 | ^5.5.23    | **Unificar com alias**              |
| `eslint`            | ^10.2.1 | ^10.4.1    | Novas regras                        |
| `globals`           | ^17.5.0 | ^17.6.0    | Defs de globals                     |
| `lucide-react`      | ^1.8.0  | ^1.17.0    | Novos ícones                        |
| `react-router`      | ^7.14.1 | ^7.17.0    | Apenas correções (versão 7 estável) |

### 🟠 Major (breaking changes) — Requer migração

| Pacote                        | Atual   | Disponível | Breaking?                                                                                           |
| ----------------------------- | ------- | ---------- | --------------------------------------------------------------------------------------------------- |
| `vite`                        | ^7.3.2  | ^8.0.16    | **SIM** — migra para Rolldown, remove `esbuildOptions`/`rollupOptions.output.manualChunks` (objeto) |
| `@vitejs/plugin-react`        | ^5.2.0  | ^6.0.2     | **SIM (leve)** — Babel removido, agora usa Oxc. v5 ainda funciona com Vite 8, dá pra ser gradual    |
| `uuid`                        | ^13.0.0 | ^14.0.0    | **SIM** — ESM-only, drop de CJS. Verificar se exige Node ≥20                                        |
| `prettier-plugin-tailwindcss` | ^0.7.2  | ^0.8.0     | Possível (versão 0.x). Verificar changelog                                                          |

### ⚪ Sem atualização

| Pacote                        | Versão atual |
| ----------------------------- | ------------ |
| `@eslint/js`                  | ^10.0.1      |
| `@types/react-dom`            | ^19.2.3      |
| `@fontsource/inter`           | ^5.2.8       |
| `tailwind-scrollbar`          | ^4.0.2       |
| `eslint-plugin-react-hooks`   | ^7.1.1       |
| `eslint-plugin-react-refresh` | ^0.5.2       |

---

## 🔬 Mudanças Críticas Documentadas (via Context7)

### 1. **Vite 8 — Migração para Rolldown** ⚠️

> Fonte: [announcing-vite8.md](https://github.com/vitejs/vite/blob/main/docs/blog/announcing-vite8.md) — Release **2026-03-12**

- **O que muda:** Vite 8 unifica esbuild + Rollup num único bundler Rust (Rolldown). Builds até **10–30× mais rápidos**.
- **Compatibilidade automática:** Vite tem uma _compatibility layer_ que auto-converte `esbuild` e `rollupOptions` para `rolldownOptions`/`oxc` (vide mapeamento oficial).
- **Breaking changes reais:**
  - ❌ `build.rollupOptions.output.manualChunks` (forma objeto) — **removido**
  - ⚠️ `build.rollupOptions.output.manualChunks` (forma função) — **deprecated**
  - ⚠️ `build.esbuildOptions` — **deprecated** (auto-convertido, mas recomendado migrar)
  - ⚠️ `esbuild` no top-level — **deprecated** (auto-convertido para `oxc`)
  - 📌 Padrão de `build.minify` agora é `'oxc'` (cliente) e `false` (SSR)
- **Recomendação oficial (Vite team):** fazer migração gradual:
  1. Em Vite 7, trocar `vite` por `rolldown-vite` (npm alias) para isolar problemas do bundler
  2. Depois atualizar para `vite@^8`
- **Caminho novo recomendado:**

```javascript
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [{ name: "vendor", test: /[\\\/]node_modules[\\\/]/ }],
        },
      },
    },
  },
});
```

> O `vite.config.js` atual é mínimo (não usa `manualChunks` nem `esbuildOptions`), então a migração automática deve cobrir tudo. **Manteremos a config intacta** mas validaremos.

### 2. **@vitejs/plugin-react v6 — Oxc + Drop de Babel**

- Babel não é mais dependência. Refresh do React passa a ser feito por **Oxc** (mais rápido, menor bundle).
- v5 **continua funcionando com Vite 8** — o que permite migração **gradual e segura**:
  - Subir Vite primeiro (com plugin v5)
  - Depois subir plugin para v6
- Novo: `reactCompilerPreset` (opt-in, requer `@rolldown/plugin-babel`) — **não usar aqui**.

### 3. **daisyUI 5 + Tailwind 4 — Plugin via CSS**

> Fonte: [daisyUI 5 install](<https://github.com/saadeghi/daisyui/blob/master/packages/docs/src/routes/(routes)/docs/v5/+page.md>)

- daisyUI 5 **requer Tailwind 4** (já estamos no 4.2.x → 4.3 ✓).
- Em Tailwind 4 **não existe `tailwind.config.js`** — daisyUI é carregado via CSS com `@plugin "daisyui";`
- **Verificar** se o projeto usa CSS config (provável, dado que `@tailwindcss/vite` está instalado). Se sim, nada muda; se houver `tailwind.config.js` herdado, remover.

### 4. **uuid v14 — ESM-only**

- Provável quebra em qualquer import CJS. O projeto é `"type": "module"` → **sem impacto**.
- API continua a mesma (`import { v4 as uuid } from "uuid"`).

### 5. **prettier-plugin-tailwindcss 0.8**

- Compatível com Tailwind 4 e prettier 3.8. **Risco baixo** (versão 0.x mas amplamente usada).
- Após upgrade, rodar `npm run format` para reclassificar classes.

---

## 🚨 Problemas Estruturais Identificados

### A) Duplicação do daisyUI

```jsonc
"dependencies": {
  "Daisyui": "npm:daisyui@^5.5.19"   // ← alias com maiúscula
},
"devDependencies": {
  "daisyui": "^5.3.11"                // ← versão antiga
}
```

- **Causa:** o alias `"Daisyui"` foi criado para o plugin funcionar via CSS, mas o `daisyui` antigo nunca foi removido.
- **Impacto:** dois resolvers, versões divergentes, bundle inchado.
- **Ação:** **manter** o alias `"Daisyui"` (lowercase é case-sensitive no npm) — **remover** o `daisyui` duplicado de devDependencies.

### B) Vite config "padrão" — não tira proveito do Vite 8

- Não há `manualChunks`/`esbuildOptions`/`rollupOptions` customizados. Logo, a _compatibility layer_ cobre 100%.
- Adicionaremos **opcionalmente** `codeSplitting` para vendor chunk, mas só se o build ficar mais lento do que o esperado.

### C) Versões "fantasma" do plano anterior

- O `plano.md` indicava `react-router ^7.14.1` como "muito acima" — confirmado: era apenas versão estável. Já foi resolvido.
- `uuid ^13.0.0` e `lucide-react ^1.8.0` — **versões existem e são estáveis** (não eram "anormais"). Mantemos e subimos para 14 / 1.17.

---

## 📅 Plano de Ação (Fases)

### **Fase 0 — Backup e Baseline (10 min)**

- [ ] `git checkout -b chore/dep-migration-2026-06`
- [ ] `git add -A && git commit -m "chore: snapshot before migration"`
- [ ] Anotar saída de `npm run build` e `npm run lint` como **baseline de referência**
- [ ] Limpar caches: `npm cache clean --force`

### **Fase 1 — Atualizações Seguras (15 min)** — Patches + Minors sem majors

```bash
# Patches
npm install \
  react@^19.2.7 \
  react-dom@^19.2.7 \
  @types/react@^19.2.17 \
  prettier@^3.8.4 \
  baseline-browser-mapping@^2.10.36

# Minors
npm install \
  tailwindcss@^4.3.0 \
  @tailwindcss/vite@^4.3.0 \
  daisyui@^5.5.23 \
  lucide-react@^1.17.0 \
  eslint@^10.4.1 \
  globals@^17.6.0 \
  react-router@^7.17.0

# Alias (renomear para acompanhar versão)
npm install "Daisyui@npm:daisyui@^5.5.23"
```

- [ ] Rodar `npm run lint` → esperado: 0 erros
- [ ] Rodar `npm run build` → esperado: sucesso
- [ ] Rodar `npm run dev` e navegar 1 rota

### **Fase 2 — Limpeza Estrutural (10 min)**

```bash
# Remover duplicação do daisyUI (manter só o alias)
npm uninstall daisyui

# Dedupe
npm dedupe
```

- [ ] Confirmar em `package.json` que **só existe `"Daisyui"`** (alias)
- [ ] `npm ls daisyui` deve mostrar **uma única versão** resolvida

### **Fase 3 — Vite 8 (PRIORIDADE ALTA, 30 min)**

> Estratégia gradual recomendada pelo time do Vite.

**3.1 — Instalar Vite 8 com plugin v5 (compatível)**

```bash
npm install --save-dev vite@^8.0.16
# (mantém @vitejs/plugin-react em v5 por enquanto)
```

- [ ] `npm run dev` → testar HMR e console
- [ ] `npm run build` → comparar tamanho antes/depois
- [ ] Verificar **warnings** sobre configs deprecated no terminal

**3.2 — Migrar config (somente se houver warnings)**

Se Vite reclamar de `esbuild` ou `rollupOptions`, ajustar `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Opcional: vendor chunk via Rolldown codeSplitting
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [{ name: "vendor", test: /[\\\/]node_modules[\\\/]/ }],
        },
      },
    },
  },
});
```

**3.3 — Subir plugin-react para v6**

```bash
npm install --save-dev @vitejs/plugin-react@^6.0.2
```

- [ ] `npm run dev` e `npm run build` novamente
- [ ] Confirmar que **Babel não está mais no node_modules**: `npm ls @babel/core` → deve dar `empty`

### **Fase 4 — Outras Majors (15 min)**

```bash
npm install uuid@^14.0.0
npm install --save-dev prettier-plugin-tailwindcss@^0.8.0
```

- [ ] Buscar usos de `uuid`: `grep -r "from 'uuid'" src/` → confirmar só ESM imports
- [ ] Rodar `npm run format` para reclassificar classes Tailwind

### **Fase 5 — Validação Completa (30 min)**

- [ ] `rm -rf node_modules package-lock.json && npm ci`
- [ ] `npm run lint` → 0 erros
- [ ] `npm run format` → 0 diffs
- [ ] `npm run build` → sucesso + bundle size
- [ ] `npm run preview` → smoke test manual
- [ ] Navegar **todas** as rotas (Dashboard, TaskPage, TasksPage)
- [ ] Testar componentes daisyUI (botões, drawer, sidebar)
- [ ] Verificar console do navegador: **zero warnings/errors**
- [ ] `npm audit` → revisar e aplicar `npm audit fix` se houver
- [ ] `npm outdated` → deve mostrar tudo atualizado

### **Fase 6 — Commits e PR (10 min)**

```bash
git add package.json package-lock.json
git commit -m "chore(deps): migrate to latest stable releases (2026-06)

- Vite 7 → 8 (Rolldown bundler, ~10-30x faster builds)
- @vitejs/plugin-react 5 → 6 (Oxc, drop Babel)
- uuid 13 → 14 (ESM)
- tailwindcss 4.2 → 4.3
- daisyui unified to 5.5.23 (removed duplicate)
- patch updates: react 19.2.7, prettier 3.8.4, eslint 10.4.1
- minor updates: react-router 7.17, lucide-react 1.17

Build passes, lint passes, dev server OK."
```

---

## 📦 Comando Completo (single-shot, após Fase 0)

Para quem quiser executar tudo de uma vez em uma branch isolada:

```bash
# Fase 1+2+3+4
npm install \
  react@^19.2.7 \
  react-dom@^19.2.7 \
  @types/react@^19.2.17 \
  prettier@^3.8.4 \
  baseline-browser-mapping@^2.10.36 \
  tailwindcss@^4.3.0 \
  @tailwindcss/vite@^4.3.0 \
  daisyui@^5.5.23 \
  "Daisyui@npm:daisyui@^5.5.23" \
  lucide-react@^1.17.0 \
  eslint@^10.4.1 \
  globals@^17.6.0 \
  react-router@^7.17.0 \
  uuid@^14.0.0

npm install --save-dev \
  vite@^8.0.16 \
  @vitejs/plugin-react@^6.0.2 \
  prettier-plugin-tailwindcss@^0.8.0

npm uninstall daisyui   # remove duplicação
npm dedupe
npm audit fix
```

> ⚠️ **Não recomendo** o single-shot. A divisão em fases permite isolar qual major quebrou algo (se quebrar).

---

## ⚠️ Riscos e Mitigações

| Risco                                           | Prob. | Impacto | Mitigação                                           |
| ----------------------------------------------- | ----- | ------- | --------------------------------------------------- |
| Vite 8 quebra HMR em algum plugin               | Média | Alto    | Migração gradual (Vite 7→8 primeiro, plugin depois) |
| daisyUI duplicado causa inconsistência de temas | Alta  | Médio   | Fase 2 remove duplicação antes de tudo              |
| uuid v14 quebra import dinâmico                 | Baixa | Médio   | Buscar imports, projeto é `"type": "module"`        |
| prettier-plugin-tailwindcss 0.8 muda ordem      | Média | Baixo   | Rodar `npm run format` e committar o reformat       |
| Bundle size aumenta por causa do vendor chunk   | Baixa | Baixo   | Comparar `dist/` antes/depois                       |
| React Router 7.17 introduz breaking em data API | Baixa | Alto    | Verificar uso de `loader`/`action` em `src/routes/` |

---

## ✅ Checklist Final

- [ ] Branch `chore/dep-migration-2026-06` criada
- [ ] Backup (`package.json` e `package-lock.json`) commitado
- [ ] Baseline de build/lint anotado
- [ ] Todas as fases 1–5 executadas
- [ ] `package.json` contém **apenas** o alias `"Daisyui"` (sem `daisyui` em devDeps)
- [ ] `npm ls` sem duplicações
- [ ] `npm audit` sem vulnerabilidades altas/críticas
- [ ] Build, lint, format, dev server **todos verdes**
- [ ] Smoke test manual em todas as rotas
- [ ] Console do navegador limpo
- [ ] Commit e PR aberto

---

## 📝 Notas Finais

- **Tempo estimado:** 1h30 – 2h (incluindo smoke tests).
- **Janela recomendada:** horário de baixo tráfego no app.
- **Rollback:** `git revert` do commit da migração restaura `package.json` e `package-lock.json`. `node_modules` deve ser reinstalado.
- **Próximas oportunidades (não neste round):**
  - Migrar `AddTask.jsx`, `Tasks.jsx` para React 19 Actions / `useOptimistic` (se aplicável)
  - Habilitar `prettier-plugin-tailwindcss` config em `.prettierrc`
  - Considerar `vite-plugin-checker` para typecheck em dev (se TS for introduzido)

---

**Status:** 📝 Plano pronto para execução  
**Próximo passo:** aguardar aprovação e executar Fase 0
