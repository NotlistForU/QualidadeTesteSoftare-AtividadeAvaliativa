import { test, expect } from '@playwright/test';

// test.use({ launchOptions: { slowMo: 2000 } });

const BASE_URL = 'http://localhost/Concessionaria-PCGM/public/index.php';

test('CT12 - Fluxo completo cliente', async ({page}) => {
    await page.goto(`${BASE_URL}?pagina=home`);

    await page.getByRole('link', {name: 'Ver Estoque'}).click();

    await expect(page).toHaveURL(`${BASE_URL}?pagina=modelos`);

    await page.locator('div[onclick*="id=2"]').click();

    await expect(page).toHaveURL(`${BASE_URL}?pagina=detalhes&id=2`);

    await page.getByRole('button', { name: 'Comprar / Reservar' }).click();

    const modal = page.locator('#modalCompra');

    await modal.locator('input[name="nome_cliente"]')
        .fill('Neymar Santos Junior');

    await modal.locator('input[name="telefone"]')
        .fill('11998765432');
    
    await modal.locator('select[name="forma_pagamento"]')
        .selectOption({ index: 1 });
    
    await modal.getByRole('button', {
        name: /Enviar|Confirmar/i
    }).click();

    await expect(page).toHaveURL(/sucesso_compra=1/);
    await expect(page.locator('body'))
        .toContainText('Sucesso! Sua proposta de compra foi enviada');

    //await page.waitForTimeout(5000);
})