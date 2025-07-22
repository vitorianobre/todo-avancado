# TO-DO Avançado com React 🚀

Este projeto é um gerenciador de tarefas (To-Do List) avançado, desenvolvido como parte dos meus estudos em ReactJS. A aplicação foi inspirada no projeto do canal [Hora de Codar](https://youtu.be/HSssE1PRQcA?si=rlvztlq_jWcN7MHe) para aprofundar os conhecimentos no framework.

O objetivo é fornecer uma ferramenta completa para organização de tarefas diárias, permitindo não apenas o gerenciamento básico, mas também a busca e filtragem para uma melhor organização.

![GIF da aplicação](./public/TO-DO%20Avançado.gif)

## ✨ Funcionalidades:
- ➕ Adicionar Novas Tarefas: Interface simples para incluir novas tarefas na lista.

- ✏️ Editar Tarefas: Modifique o nome de tarefas já existentes diretamente na interface.

- 🗑️ Remover Tarefas: Exclua tarefas que não são mais necessárias.

- ✅ Marcar como Concluída: Alterne o status de uma tarefa entre "A fazer" e "Concluída" com um clique (toggle).

- 🔍 Pesquisa em Tempo Real: Encontre tarefas rapidamente digitando seu nome no campo de busca.

- 🚦 Filtragem por Status: Visualize apenas as tarefas que estão "A fazer", "Concluídas" ou todas elas. A filtragem tem prioridade sobre as buscas.

## 🛠️ Tecnologias Utilizadas
Este projeto foi construído utilizando as seguintes tecnologias:

- React.js: Biblioteca principal para a construção da interface de usuário.

- CSS Modules: Para estilização de componentes.

- React Icons: Para a utilização de ícones na interface.

- JSON Server: Para criar um mock de API RESTful e simular um backend simples.

## 🚀 Como Executar o Projeto Localmente
Para rodar este projeto na sua máquina, siga os passos abaixo.

### Pré-requisitos
- Git

- Node.js (versão 16 ou superior)

- npm ou Yarn

### Passo a Passo
1. **Clone o repositório:**
``` 
git clone https://github.com/vitorianobre/todo-avancado.git
```

2. **Acesse a pasta do projeto:**
````
cd todo-avancado
````

3. **Instale as dependências do projeto:**
````
npm install
````
ou, se use *Yarn*:
````
yarn
````

4. **Inicie o Backend (JSON Server):**

A aplicação precisa do json-server para simular o banco de dados. Abra um novo terminal (mantenha o primeiro aberto) e execute o seguinte comando na raiz do projeto:

````
npm run backend
````

Este comando é um script que irá iniciar um servidor na porta 5000 que "assiste" o arquivo *db.json*. Qualquer alteração feita na aplicação (adicionar, editar, etc.) será salva nesse arquivo.

5. **Inicie o Frontend (Aplicação React):**

Volte para o primeiro terminal e execute:
````
npm start
````
ou, se usar *Yarn*:
````
yarn start
````

6. **Acesse a aplicação:**

Abra seu navegador e acesse http://localhost:3000. A aplicação deve estar funcionando, conectada ao seu backend local na porta 5000.

## ✒️ Autor
Desenvolvido por Vitoria Nobre.

LinkedIn: <https://www.linkedin.com/in/vitoria-nobre>

GitHub: @vitorianobre

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.