
<p align="center">
  <img alt="Logo - Rocketseat" src="./github/logo.png" width="200px" />
</p>

<h1 align="center"> API de ticket de suporte </h1>

<p align="center">
  <img alt="API" src="./github/API.png" width="15%">
</p>

<h2>## Sobre:</h2>
<p align="center">
API para gerenciar ticket de suporte técnico, permitindo criar um ticket solicitando suporte, atualizar as informações do ticket, listar os tickets podendo filtrar pelo status e atualizar o status de um ticket para fechado.
</p>
<br>

## Criar Ticket ##
<i>Cria um novo ticket de suporte.<i><br><br>

**Método:** POST

**URL:** `/tickets`

**Dados:**

- `equipment` (string, obrigatório): Nome do equipamento (exemplo: computador)
- `description` (string, obrigatório): Descrição do problema.
- `user_name` (string, obrigatório): nome do usuário que está criando o ticket.<br><br>


## Obter Tickets<br>
**Método:** GET

**URL:** `/tickets`

**Descrição:** Obtém uma lista de todos os tickets de suporte.

**Parâmetros de Consulta (Query Parameters)**:

- `status` (string, opcional): Filtra os tickets pelo status ("open" ou "closed").<br><br>

## Atualizar Ticket<br>
**Método:** PUT

**URL:** `/tickets/:id`

**Descrição:** Atualiza as informações de um ticket específico.

**Parâmetros de Rota:**

- `id` (UUID, obrigatório): ID do ticket.

**Parâmetros no Corpo (JSON):**

- `equipment` (string, obrigatório): Nome do equipamento (exemplo: computador)
- `description` (string, obrigatório): Descrição do problema.
- `user_name` não altera.<br><br>

## Fechar Ticket<br>
**Método:** PATCH

**URL:** `/tickets/:id/status`

**Descrição:** Atualiza as informações de um ticket específico.

**Parâmetros de Rota:**

- `id` (UUID, obrigatório): ID do ticket.<br><br>

## Excluir Ticket<br>
**Método:** DELETE

**URL:** `/tickets/:id`

**Descrição:** Exclui um ticket específico pelo seu ID.

**Parâmetros de Rota:**

- `id` (UUID, obrigatório): ID do ticket.<br><br>

## 💻 Projeto

O projeto foi executado junto com instrutor da Rocketseat somente API nodeJS sem fremeworks somente proprio biblioteca ja existente no nodejs.

---

Rocketseat: [Participe da nossa comunidade!](https://www.rocketseat.com.br/)
