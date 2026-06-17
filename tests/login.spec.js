import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost/Concessionaria-PCGM/public/index.php';

test('CT08 - deve permitir login com credenciais válidas', async ({ page }) => {
    await page.goto(`${BASE_URL}?pagina=login`);

    await page.locator('input[name="nome"]')
        .fill('admin');

    await page.locator('input[name="senha"]')
        .fill('admin123');

    await page.getByRole('button', {
        name: 'Entrar no Sistema'
    }).click();

    await expect(page).toHaveURL(`${BASE_URL}?pagina=painel`);
});

test('CT09 - não deve permitir login com senha incorreta', async ({ page }) => {
    await page.goto(`${BASE_URL}?pagina=login`);

    await page.locator('input[name="nome"]')
        .fill('usuario_inexistente');

    await page.locator('input[name="senha"]')
        .fill('senha_errada');

    await page.getByRole('button', {
        name: 'Entrar no Sistema'
    }).click();

    await expect(page).toHaveURL(/erro_login=1/);
    await expect(page.locator('body'))
        .toContainText('Ops! Login incorreto');
});
