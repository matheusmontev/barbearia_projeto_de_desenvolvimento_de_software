# ⚙️ Configuração do BarberPro

## 🔧 Variáveis de Ambiente

O projeto usa variáveis de ambiente para configuração. O arquivo `.env` foi criado na raiz do projeto.

### Arquivo `.env`

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api

# WhatsApp Configuration
VITE_WHATSAPP_NUMBER=+5511987654321

# PIX Configuration
VITE_PIX_KEY=seuemail@gmail.com
```

### Como Configurar

1. **Abra o arquivo `.env`** na raiz do projeto
2. **Atualize os valores**:
   - `VITE_API_URL`: URL da sua API backend
   - `VITE_WHATSAPP_NUMBER`: Seu número de WhatsApp com DDI
   - `VITE_PIX_KEY`: Sua chave PIX

### Exemplo de Configuração

```env
# API Configuration
VITE_API_URL=https://api.barberpro.com/api

# WhatsApp Configuration
VITE_WHATSAPP_NUMBER=+5511998765432

# PIX Configuration
VITE_PIX_KEY=meuemail@gmail.com
```

---

## 🚀 Modo Desenvolvimento (Sem Backend)

O sistema funciona sem backend configurado:

- ✅ UI completa navegável
- ✅ Todos os componentes renderizam
- ❌ Dados não persistem (erro esperado ao criar agendamentos)
- ❌ API calls falham gracefully

### Toast de Erro Esperado

Ao fazer login, você verá:
```
⚠️ Erro ao carregar agendamentos. Usando modo offline.
```

Isso é **normal** quando o backend não está configurado.

---

## 🔌 Conectar com Backend

### 1. Tenha o Backend Rodando

```bash
# Backend deve estar rodando em:
http://localhost:3000/api

# Ou sua URL de produção:
https://api.barberpro.com/api
```

### 2. Atualize o `.env`

```env
VITE_API_URL=http://localhost:3000/api
```

### 3. Reinicie o Servidor de Desenvolvimento

```bash
# Pare o servidor (Ctrl+C)
# Inicie novamente
npm run dev
```

**Importante**: Variáveis de ambiente só são carregadas no início. Sempre reinicie após alterar o `.env`.

---

## 🛡️ Segurança

### O que NÃO fazer

❌ **Nunca commite o arquivo `.env`**
- Já está no `.gitignore`
- Contém informações sensíveis

❌ **Nunca exponha chaves secretas**
- PIX key não é secreta, mas cuidado com outras keys

### O que fazer

✅ **Use `.env.example` como template**
- Já existe no projeto
- Copie para `.env` e configure

✅ **Configure no servidor de produção**
- Netlify: Settings > Environment Variables
- Vercel: Settings > Environment Variables
- Heroku: Config Vars

---

## 📝 Valores Padrão (Fallback)

Se o `.env` não existir, o sistema usa valores padrão:

| Variável | Valor Padrão |
|----------|--------------|
| `VITE_API_URL` | `http://localhost:3000/api` |
| `VITE_WHATSAPP_NUMBER` | `+5511987654321` |
| `VITE_PIX_KEY` | `seuemail@gmail.com` |

---

## 🔍 Verificar Configuração

### No Console do Navegador (F12)

```javascript
// Verificar se variáveis estão carregadas
console.log(import.meta.env.VITE_API_URL);
console.log(import.meta.env.VITE_WHATSAPP_NUMBER);
console.log(import.meta.env.VITE_PIX_KEY);
```

### Deve retornar seus valores configurados ou os padrões.

---

## 🚢 Deploy em Produção

### Netlify

1. Vá em **Site settings > Environment variables**
2. Adicione:
   - `VITE_API_URL` = `https://sua-api.com/api`
   - `VITE_WHATSAPP_NUMBER` = `+5511987654321`
   - `VITE_PIX_KEY` = `suachave@pix.com`
3. Redeploy

### Vercel

1. Vá em **Settings > Environment Variables**
2. Adicione as mesmas variáveis
3. Redeploy

### Railway/Render

Mesma lógica: adicione as variáveis nas configurações do projeto.

---

## ✅ Checklist de Configuração

Antes de usar:

- [ ] Arquivo `.env` criado na raiz
- [ ] `VITE_API_URL` configurado (se tiver backend)
- [ ] `VITE_WHATSAPP_NUMBER` com seu número
- [ ] `VITE_PIX_KEY` com sua chave PIX
- [ ] Servidor reiniciado após alterar `.env`
- [ ] Testado no navegador (F12 > Console)

---

## 🐛 Troubleshooting

### Erro: "Cannot read properties of undefined"

**Causa**: Variáveis de ambiente não carregadas

**Solução**:
1. Verifique se `.env` existe na raiz
2. Reinicie o servidor (`npm run dev`)
3. Limpe cache do navegador (Ctrl+Shift+R)

### Erro: "Failed to fetch" ao criar agendamento

**Causa**: Backend não está rodando ou URL incorreta

**Solução**:
1. Verifique se backend está rodando
2. Verifique `VITE_API_URL` no `.env`
3. Teste a URL diretamente no navegador

### WhatsApp abre mas sem mensagem

**Causa**: `VITE_WHATSAPP_NUMBER` incorreto

**Solução**:
1. Formato correto: `+5511987654321` (com DDI)
2. Sem espaços, parênteses ou traços

---

**Desenvolvido para configuração fácil** ⚙️
