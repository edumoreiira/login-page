# Página de Login

Este projeto é uma implementação de front-end para uma tela de autenticação e registro de usuários, desenvolvida com Angular. A aplicação utiliza Reactive Forms para a manipulação e validação dos formulários e a nova View Transition API para criar animações fluidas e suaves entre as transições de rota, especificamente entre a tela de login e a de registro.

**Observação:** O back-end original, desenvolvido em Spring Boot, que se comunicava com esta aplicação, foi perdido. Portanto, a funcionalidade de comunicação com a API (autenticação e registro de fato) não está operacional. No entanto, toda a interface do usuário, as validações de formulário (incluindo validadores customizados) e os alertas de erro estão completamente funcionais para demonstração.

## 🚀 Acesso Rápido (Live Demo)

**Visualize o projeto em ação acessando o link do GitHub Pages:**

### **[https://edumoreiira.github.io/login-page/](https://edumoreiira.github.io/login-page/)**

## ✨ Funcionalidades

  - **Formulário de Autenticação:** Interface para login de usuários.
  - **Formulário de Registro:** Interface para cadastro de novos usuários.
  - **Validação Reativa:** Uso de Reactive Forms para validação de campos em tempo real.
  - **Validadores Customizados:** Implementação de regras de validação personalizadas.
  - **Alertas de Erro:** Feedback visual para o usuário em caso de dados inválidos.
  - **Transições de View:** Animações suaves entre as telas de login e registro utilizando a View Transition API.
  - **Design Responsivo:** Interface adaptável para diferentes tamanhos de tela.

## ⚙️ Tecnologias Utilizadas

  - **Angular:** Framework principal para a construção da Single Page Application (SPA).
  - **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código.
  - **Reactive Forms:** Abordagem do Angular para criar e gerenciar formulários de maneira robusta e escalável.
  - **View Transition API:** API experimental do navegador para criar transições animadas entre diferentes estados da view.
  - **HTML5 & SCSS:** Para estruturação e estilização avançada da página.

## 🛠️ Instalação e Execução

Siga os passos abaixo para executar o projeto localmente:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/edumoreiira/login-page.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd login-page
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**

    ```bash
    ng serve
    ```

    Acesse `http://localhost:4200/` no seu navegador. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## 🤝 Boas Práticas e Convenções

Este projeto foi desenvolvido seguindo boas práticas de desenvolvimento de software, com foco em código limpo, manutenível e escalável. Abaixo estão alguns dos destaques e convenções adotados.

### Angular & RxJS

  * **Controle de Fluxo de Dados com RXJS:** A reatividade é um pilar do Angular. Utilizamos Observables e operadores do RXJS para gerenciar eventos e fluxos de dados assíncronos, como as interações do usuário nos formulários.
  * **Reactive Forms para Validações Complexas:** O uso de Reactive Forms permite a criação de validações síncronas e assíncronas complexas, além de validadores customizados, garantindo que os dados inseridos pelo usuário sejam consistentes e seguros.
  * **Cuidado ao Desinscrever-se de Observables para evitar Memory Leak:** Para evitar vazamentos de memória, é fundamental realizar o "unsubscribe" de Observables que não são finalizados automaticamente. A prática recomendada é usar operadores como `takeUntil` ou o pipe `async` nos templates, que gerencia o ciclo de vida da inscrição automaticamente.
  * **Gerenciamento de Estado com Services:** Os serviços são utilizados para encapsular a lógica de negócio e compartilhar estado entre os componentes, seguindo o princípio de injeção de dependência do Angular.

### TypeScript

  * **Tipagem Forte:** Todo o código é fortemente tipado, aproveitando o poder do TypeScript para garantir a segurança dos tipos em tempo de desenvolvimento, o que reduz a ocorrência de bugs em tempo de execução.
  * **Interfaces e Models:** Utilizamos interfaces para definir contratos claros para as estruturas de dados, como as credenciais de usuário, tornando o código mais legível e fácil de manter.
  * **Configuração `strict`:** O `tsconfig.json` está configurado com o modo `strict` habilitado, aplicando regras mais rigorosas de verificação de tipos e nulidade para um código mais robusto.

### HTML & CSS

  * **Tags HTML contendo acessibilidade, utilizando `aria attributes`:** As tags HTML foram escritas com a semântica em mente. Utilizamos atributos `aria` (como `aria-label`, `aria-required`) nos campos de formulário e botões para garantir que a aplicação seja acessível para usuários que utilizam leitores de tela e outras tecnologias assistivas.
  * **SCSS e Variáveis CSS:** A estilização é feita com SCSS, aproveitando recursos como aninhamento e modularidade. O uso de variáveis CSS (`var(...)`) ajuda a manter a consistência no design e facilita a manutenção dos estilos.
  * **Design Responsivo:** O layout foi construído com uma abordagem *mobile-first*, garantindo uma boa experiência de usuário em diferentes tamanhos de tela.
