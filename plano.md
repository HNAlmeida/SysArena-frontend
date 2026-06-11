# 📋 Plano de Migração de Dependências - SysArena Frontend

**Data:** 07/06/2026  
**Projeto:** SysArena Frontend  
**Status:** Planejamento

---

## 🎯 Objetivo

Atualizar todas as dependências possíveis do projeto para as versões mais recentes, garantindo compatibilidade e aproveitando novas funcionalidades, correções de segurança e melhorias de performance.

---

## 📊 Análise Atual de Dependências

### ✅ Dependências Atualizadas (Nenhuma ação necessária)

- ✅ **React**: ^19.2.5 (Atual: v19.2.5)
- ✅ **React-DOM**: ^19.2.5 (Atual: v19.2.5)
- ✅ **Tailwind CSS**: ^4.2.2 (Atual: v4.2.2)
- ✅ **@tailwindcss/vite**: ^4.2.2 (Atual: v4.2.2)
- ✅ **ESLint**: ^10.2.1 (Atual: v10.2.1)
- ✅ **@eslint/js**: ^10.0.1 (Atual: v10.0.1)
- ✅ **Prettier**: ^3.8.3 (Atual: v3.8.3)
- ✅ **@types/react**: ^19.2.14 (Atual: v19.2.14)
- ✅ **@types/react-dom**: ^19.2.3 (Atual: v19.2.3)
- ✅ **@vitejs/plugin-react**: ^5.2.0 (Atual: v5.2.0)
- ✅ **Lucide React**: ^1.8.0 (Atual: v1.8.0)

### 🚀 Dependências com Potencial de Atualização

#### 1. **Vite** - PRIORIDADE ALTA ⚠️

- **Atual:** ^7.3.2
- **Recomendado:** ^8.0.10
- **Mudanças Principais:**
  - Migração de Rollup para Rolldown como bundler padrão
  - Melhorias significativas de performance
  - Mudanças na configuração de `manualChunks` → `codeSplitting`
  - Mudanças em algumas opções do esbuild
- **Ação Necessária:**
  1. Atualizar versão do Vite
  2. Revisar e atualizar `vite.config.js` (se necessário)
  3. Testar build e dev server
  4. Verificar compatibilidade com plugins

#### 2. **React Router** - REVISAR ⚠️

- **Atual:** ^7.14.1
- **Status:** Versão está acima da esperada (últimas v7.x ~7.9.4)
- **Ação Necessária:**
  1. Verificar integridade da versão instalada
  2. Se estiver muito acima, pode indicar versão pré-release ou instalação irregular
  3. Considerar limpar `node_modules` e reinstalar: `npm install`
  4. Revisar imports se migrou de `react-router-dom` → `react-router`

#### 3. **DaisyUI** - REVISAR ⚠️

- **Atual:** ^5.5.19 (e ^5.3.11 - duplicado!)
- **Recomendado:** ^5.0.50 (estável) ou ^5.x (latest)
- **Problemas Identificados:**
  - Existem **duas versões diferentes do DaisyUI** no `package.json`
  - `Daisyui` (npm alias) com ^5.5.19
  - `daisyui` (dev dependency) com ^5.3.11
- **Ação Necessária:**
  1. **REMOVER duplicação** - manter apenas uma referência
  2. Unificar para única versão (recomendado: ^5.x latest)
  3. Executar `npm dedupe` para otimizar dependências

#### 4. **Globals** - VERIFICAR

- **Atual:** ^17.5.0
- **Ação Necessária:**
  1. Verificar se é usado no projeto
  2. Atualizar se necessário
  3. Considerar substituir se não for mais necessário

#### 5. **UUID** - REVISAR

- **Atual:** ^13.0.0
- **Status:** Versão parece anormalmente alta (última estável é v9.x)
- **Ação Necessária:**
  1. Verificar versão real instalada
  2. Considerar downgrade para ^9.x se necessário
  3. Testar compatibilidade

#### 6. **@fontsource/inter** - OPCIONAL

- **Atual:** ^5.2.8
- **Ação Necessária:**
  1. Verificar se está sendo usado
  2. Atualizar se necessário ou considerar uso de web fonts nativas

---

## 📅 Plano de Ação

### **Fase 1: Limpeza e Verificação (30 min)**

- [ ] Fazer backup do `package.json` e `package-lock.json`
- [ ] Executar `npm list` para verificar instalação real
- [ ] Executar `npm outdated` para confirmar versões disponíveis
- [ ] Documentar versões atuais instaladas

### **Fase 2: Resolver Duplicações (15 min)**

- [ ] Remover duplicação do DaisyUI
- [ ] Unificar versão única
- [ ] Executar `npm dedupe`
- [ ] Testar compilação

### **Fase 3: Atualizar Dependências (1-2h)**

#### 3.1 - Vite (PRIORIDADE ALTA)

```bash
npm install vite@^8.0.10
```

- Revisar `vite.config.js`
- Testar `npm run dev`
- Testar `npm run build`
- Verificar se há warnings de configuração

#### 3.2 - Corrigir Versões Anormais

```bash
npm install uuid@^9.0.0
npm install globals@^14.0.0 (ou remover se não usado)
```

#### 3.3 - Atualizar Outras Libs (se houver versões mais recentes)

```bash
npm install @fontsource/inter@latest
npm install lucide-react@latest
```

### **Fase 4: Atualizar DevDependencies (30 min)**

```bash
npm install --save-dev baseline-browser-mapping@latest
npm install --save-dev prettier-plugin-tailwindcss@latest
npm install --save-dev eslint-plugin-react-hooks@latest
npm install --save-dev eslint-plugin-react-refresh@latest
```

### **Fase 5: Testes e Validação (1-2h)**

- [ ] Limpar `node_modules` e reinstalar: `npm ci`
- [ ] Executar linter: `npm run lint`
- [ ] Executar formatter: `npm run format`
- [ ] Testar servidor dev: `npm run dev`
- [ ] Testar build: `npm run build`
- [ ] Testar preview: `npm run preview`
- [ ] Verificar console do navegador para warnings/errors
- [ ] Revisar funcionalidades principais da aplicação
- [ ] Testar navegação com React Router
- [ ] Testar componentes DaisyUI

### **Fase 6: Otimizações Finais (30 min)**

- [ ] Executar `npm audit` para verificar vulnerabilidades
- [ ] Executar `npm audit fix` se necessário
- [ ] Executar `npm dedupe` para otimizar tree
- [ ] Revisar `package-lock.json` e fazer commit

---

## 🔍 Verificações Críticas

### Pontos de Atenção:

1. **Vite v8** - Grande mudança no bundler (Rolldown)
   - Verificar se algum plugin custom não é compatível
   - Testar performance do build

2. **React Router v7** - Se houver imports de `react-router-dom`
   - Todos os imports devem estar em `react-router`
   - Verificar se há rotas customizadas que precisam de ajuste

3. **DaisyUI Duplicado** - Risco de conflitos
   - Causa inconsistência de componentes
   - Aumenta bundle desnecessariamente

4. **TypeScript** - Embora não haja dependência explícita
   - Considerar adicionar TypeScript se for expandir projeto
   - Revisar tipos se ocorrerem erros

---

## 📦 Comando Completo de Atualização

```bash
# 1. Limpar
npm ci
npm cache clean --force

# 2. Atualizar produção
npm install react@latest react-dom@latest
npm install vite@^8.0.0

# 3. Atualizar devDependencies
npm install --save-dev @vitejs/plugin-react@latest
npm install --save-dev eslint@latest @eslint/js@latest

# 4. Remover duplicações
npm dedupe

# 5. Auditoria
npm audit fix
npm outdated

# 6. Testar
npm run lint
npm run build
npm run dev
```

---

## ⚠️ Riscos Identificados

| Risco                             | Probabilidade | Impacto | Mitigação                        |
| --------------------------------- | ------------- | ------- | -------------------------------- |
| Vite v8 quebra build              | Média         | Alto    | Revisar config, testar build     |
| DaisyUI duplicado causa conflitos | Alta          | Médio   | Remover duplicação imediatamente |
| React Router quebra navegação     | Baixa         | Alto    | Revisar imports e rotas          |
| Libs com versões anormais         | Média         | Médio   | Verificar instalação real        |

---

## ✅ Checklist Final

- [ ] Backup de arquivos críticos realizados
- [ ] Plano revisado e validado
- [ ] Dependências duplicadas removidas
- [ ] Vite atualizado e testado
- [ ] Build passando sem erros
- [ ] Dev server funcionando
- [ ] Linter passando
- [ ] Formatter aplicado
- [ ] Testes de funcionalidades realizados
- [ ] Console do navegador sem erros
- [ ] Commits realizados

---

## 📝 Notas Adicionais

- **Tempo Estimado Total:** 3-4 horas
- **Recomendação:** Fazer em sessão dedicada com testes completos
- **Backup:** Sempre manter branch de backup (`git checkout -b backup-pre-migration`)
- **Comunicação:** Informar time sobre atualizações após validação completa

---

**Status:** � **CONCLUÍDO COM SUCESSO**  
**Data de Conclusão:** 07/06/2026  
**Tempo Total:** ~30 minutos  
**Próximo Passo:** Revisar relatório em RELATORIO_MIGRACAO.md
