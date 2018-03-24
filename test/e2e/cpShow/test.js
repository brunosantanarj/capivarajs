module.exports = {
	'cpShow': function (browser) {
		browser.resizeWindow(1920, 1080);
		browser
			.url('http://localhost:1111/test/e2e/cpShow/template.html')
			.waitForElementVisible('button', 10000)
			.pause(1000)
			.getText('button', function (result) {
				if (result.value === 'Clique para Mostrar') {
					browser.click('button')
						.pause(1000)
						.getText('h1', function (result) {
							if (result.value === 'Esse é um texto de exemplo.') {
								browser.pause(1000);
								console.log('Passou no teste');
							} else {
								browser.pause(1000);
								console.log('Falhou!!!');
								browser.waitForElementVisible('div', 10);

							}
						});
				}
			});
		browser.end();
	}
};