import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost/Concessionaria-PCGM/public/index.php';

test('CT04 - deve agendar Test Drive com sucesso', async ({ page }) => {

    await page.goto(`${BASE_URL}?pagina=detalhes&id=1`);

    await page.getByRole('button', {
        name: /Agendar Test Drive/i
    }).click();

    const modal = page.locator('#modalTestDrive');

    await modal.locator('input[name="nome_cliente"]')
        .fill('Gabriel Oliveira');

    await modal.locator('input[name="telefone"]')
        .fill('66999999999');

    // CNH válida encontrada no próprio projeto
    await modal.locator('input[name="cnh"]')
        .fill('22580807200');

    await modal.locator('input[name="data_interesse"]')
        .fill('2026-06-20');

    await modal.getByRole('button', {
        name: /Confirmar Test Drive/i
    }).click();

    await expect(page).toHaveURL(/sucesso=1/);
});

test('CT05 - não deve aceitar CNH inválida', async ({ page }) => {

    await page.goto(`${BASE_URL}?pagina=detalhes&id=1`);

    await page.getByRole('button', {
        name: /Agendar Test Drive/i
    }).click();

    const modal = page.locator('#modalTestDrive');

    await modal.locator('input[name="nome_cliente"]')
        .fill('Gabriel Oliveira');

    await modal.locator('input[name="telefone"]')
        .fill('66999999999');

    await modal.locator('input[name="cnh"]')
        .fill('12345678901');

    await modal.locator('input[name="data_interesse"]')
        .fill('2026-06-20');

    await modal.getByRole('button', {
        name: /Confirmar Test Drive/i
    }).click();

    await expect(page).toHaveURL(/erro_cnh=1/);
});

test('CT06 - deve registrar proposta de compra com sucesso', async ({ page }) => {

    await page.goto(`${BASE_URL}?pagina=detalhes&id=1`);

    await page.getByRole('button', {
        name: /Comprar/i
    }).click();

    const modal = page.locator('#modalCompra');

    await modal.locator('input[name="nome_cliente"]')
        .fill('Gabriel Oliveira');

    await modal.locator('input[name="telefone"]')
        .fill('66999999999');

    await modal.locator('select[name="forma_pagamento"]')
        .selectOption({ index: 1 });

    await modal.getByRole('button', {
        name: /Enviar|Confirmar/i
    }).click();

    await expect(page).toHaveURL(/sucesso_compra=1/);
});

test('CT07 - não deve aceitar WhatsApp inválido', async ({ page }) => {

    await page.goto(`${BASE_URL}?pagina=detalhes&id=1`);

    await page.getByRole('button', {
        name: /Comprar/i
    }).click();

    const modal = page.locator('#modalCompra');

    await modal.locator('input[name="nome_cliente"]')
        .fill('Gabriel Oliveira');

    await modal.locator('input[name="telefone"]')
        .fill('11111111111');

    await modal.locator('select[name="forma_pagamento"]')
        .selectOption({ index: 1 });

    await modal.getByRole('button', {
        name: /Enviar|Confirmar/i
    }).click();

    await expect(page).toHaveURL(/erro_whatsapp=1/);
});