# votoAutomaticoEdukio
Projeto de Automação de votação com Selenium
Este projeto utiliza o Selenium WebDriver com Node.js para automação de navegação em múltiplas janelas do navegador. A automação executa a tarefa de abrir uma URL especificada em 10 janelas anônimas simultâneas, localizando e clicando em um botão específico da página e aguardando um alerta para interagir com ele.

Tecnologias Utilizadas
Node.js (versão 18.0.0): Linguagem de execução para o projeto, proporcionando um ambiente JavaScript no lado do servidor.
Selenium WebDriver: Biblioteca para automação de testes e interações com navegadores, permitindo navegação, interação com elementos e gerenciamento de janelas e alertas.
ChromeDriver: Driver do navegador Chrome utilizado pelo Selenium para controlar o navegador. A versão do ChromeDriver precisa ser compatível com a versão instalada do Google Chrome.
Funcionalidades
Abertura Simultânea de Janelas: O projeto abre 10 janelas anônimas com a URL desejada, executando o processo em cada janela individualmente.
Interação com Elementos: A automação localiza um botão específico usando XPath completo e interage com ele, clicando no botão em cada janela.
Aguardando Alertas: Após clicar no botão, o código espera por um alerta na página e interage com ele ao aparecer, aceitando-o automaticamente.
Configuração de Intervalo e Repetição: Permite definir intervalos entre as interações e o número de repetições desejado.
Como Usar
Pré-requisitos
Node.js (>= 18.0.0)
ChromeDriver compatível com a versão instalada do Google Chrome
Selenium WebDriver para Node.js
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/seuusuario/nome-do-repositorio.git
cd nome-do-repositorio
Instale as dependências do projeto:

bash
Copiar código
npm install selenium-webdriver
Baixe e configure o ChromeDriver, ajustando o caminho no código se necessário.

Uso
Execute o código com Node.js:

bash
Copiar código
node seu_arquivo.js
O código abrirá 10 janelas com a URL especificada e executará as interações em cada janela de forma sequencial.
