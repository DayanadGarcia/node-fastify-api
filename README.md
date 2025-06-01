# 📌 Node Fastify API

Uma API simples para gerenciar vídeos, desenvolvida com **Fastify**, **PostgreSQL** e **Node.js**.  
**Deploy em produção**: [node-fastify-api-8eau.onrender.com](https://node-fastify-api-8eau.onrender.com)

## 🛠 Tecnologias Utilizadas

| Tecnologia       | Descrição                                                                 |
|------------------|--------------------------------------------------------------------------|
| **Fastify**      | Micro Framework web para Node.js                            |
| **PostgreSQL**   | Banco de dados relacional (hospedado no [Neon.tech](https://neon.tech)) |
| **Node.js**      | Ambiente de execução JavaScript                                         |
| **Render**       | Plataforma de deploy                      |
| **REST Client**  | Extensão do VS Code para testar requisições HTTP                        |

## 📋 Funcionalidades

✅ **CRUD de vídeos** (Create, Read, Update, Delete)  
✅ **Validação de dados** (campos obrigatórios e tipos)  
✅ **Banco de dados PostgreSQL** (com UUID como chave primária)  
✅ **Deploy automático** no Render

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v18+)  
- PostgreSQL (local ou Neon.tech)  
- Git

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/DayanadGarcia/node-fastify-api.git
   cd node-fastify-api

## Instalação e Configuração

### Dependências

Execute o comando para instalar todas as dependências necessárias:
```bash
npm install
```

## Configuração do Banco de Dados

Crie um arquivo `.env` na raiz do projeto com a seguinte configuração:

```plaintext
PGHOST=seu-host
PGDATABASE=nome-do-banco
PGUSER=seu-usuario
PGPASSWORD=sua-senha
```

📌 Alternativamente, você pode usar uma URL do Neon.tech para um banco de dados remoto.

## Execução da Aplicação

Para iniciar o servidor:
```bash
npm run dev
```

A API estará disponível em: [http://localhost:3333](http://localhost:3333)

## Testando a API

Utilize o arquivo `routes.http` (com a extensão REST Client do VS Code) ou ferramentas como Postman.

### Exemplos de Requisições

#### Criar um vídeo
```http
POST http://localhost:3333/videos
Content-Type: application/json

{
    "title": "Tutorial Fastify",
    "description": "Aprenda a usar Fastify",
    "duration": 300
}
```

#### Listar todos os vídeos
```http
GET http://localhost:3333/videos
```

#### Atualizar um vídeo
```http
PUT http://localhost:3333/videos/:uuid
Content-Type: application/json

{
    "title": "Tutorial Fastify (Atualizado)",
    "description": "Guia completo",
    "duration": 350
}
```

#### Deletar um vídeo
```http
DELETE http://localhost:3333/videos/:uuid
```

## Deploy no Render

🌐 A API está em produção com as seguintes configurações:

- PostgreSQL hospedado no Neon.tech (banco gratuito para desenvolvimento)
- Deploy contínuo (automatizado via GitHub)
- 🔗 URL da API em produção: [node-fastify-api-8bau.onrender.com/videos](http://node-fastify-api-8bau.onrender.com/videos)

## Estrutura do Banco de Dados

```sql
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL
);
```
Feito com 💜 por Dayana Garcia.
