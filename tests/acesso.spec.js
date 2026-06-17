import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost/Concessionaria-PCGMV/public/index.php';

test('CT01 - usuário sem login não acessa painel', async ({ page }) => {
    await page.goto(`${BASE_URL}?pagina=painel`);

    await expect(page).toHaveURL(/pagina=login/);
});

test('CT02 - usuário sem login não acessa cadastro', async ({ page }) => {
    await page.goto(`${BASE_URL}?pagina=cadastrar`);

    await expect(page).toHaveURL(/pagina=login/);
});

test('CT03 - usuário sem login não acessa agendamentos', async ({ page }) => {
    await page.goto(`${BASE_URL}?pagina=agendamentos`);

    await expect(page).toHaveURL(/pagina=login/);
});