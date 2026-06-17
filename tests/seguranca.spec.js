import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost/Concessionaria-PCGM/public/index.php';

test('CT10 - não deve autenticar com SQL Injection', async ({ page }) => {
    await page.goto(`${BASE_URL}?pagina=login`);

    await page.locator('input[name="nome"]')
        .fill("' OR 1=1 --");

    await page.locator('input[name="senha"]')
        .fill('qualquercoisa');

    await page.getByRole('button', {
        name: 'Entrar no Sistema'
    }).click();
    
    await expect(page).toHaveURL(/erro_login=1/);

    await expect(page.locator('body'))
        .toContainText('Login incorreto');
});

// Teste de XSS
test('CT11 - não deve executar código HTML ou JavaScript em campos de texto', async ({ page }) => {
    await page.goto(`${BASE_URL}?pagina=login`);

    await page.locator('input[name="nome"]')
        .fill('<script>alert("xss")</script>');

    await page.locator('input[name="senha"]')
        .fill('qualquercoisa');

    await page.getByRole('button', {
        name: 'Entrar no Sistema'
    }).click();

    await expect(page.locator('body'))
        .not.toContainText('<script>');
});