//©Pedro Lucas da Silva Santos 07/2024 @p_pedro_santos

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function abrirSiteAnonimo(url, intervaloMs, repeticoes) {
    for (let i = 0; i < repeticoes; i++) {
        // Configuração para abrir em modo anônimo
        let options = new chrome.Options();
        options.addArguments('--incognito');

        // Iniciar o driver com o Chrome
        let driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        try {
            // Acessa o site
            await driver.get(url);

            // Espera até o botão ser localizado (usando o XPath)
            let botao = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/div/div/div[2]/button')), 10000);

            // Verifica se o botão foi encontrado
            console.log("Botão localizado com sucesso!");

            // Clica no botão
            await botao.click();
            console.log("Botão clicado com sucesso!");
            console.log(`Acesso ${i + 1} ao site: ${url}`);

            // Esperar até que um alert seja mostrado
            console.log("Esperando pelo alert...");
            let alert = await driver.wait(until.alertIsPresent(), 10000);  // Espera até o alerta aparecer
            
            // Interage com o alerta (aceitando)
            console.log("Alert encontrado! Aceitando o alerta...");
            await alert.accept();  // Aceita o alerta (você pode usar alert.dismiss() para recusar)
            

        } catch (error) {
            console.log("Erro ao localizar ou clicar no botão:", error);
        } finally {
            // Fecha o navegador após o uso (se necessário)
            await driver.quit();
        }

        // Aguardar o intervalo antes de repetir
        await new Promise(resolve => setTimeout(resolve, intervaloMs));
    }
}

// URL do site, intervalo em milissegundos (2000 ms) e número de repetições
const url = "https://eventos.edukio.com/app/exposicao-projetos.php?projeto=119&ev=1";
const intervaloMs = 1500;
const repeticoes = 1000;

abrirSiteAnonimo(url, intervaloMs, repeticoes);
