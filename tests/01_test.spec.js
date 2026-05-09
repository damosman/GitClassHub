// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // arrange, action and assert
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await page.screenshot({path: 'screenshots/title.png'});
});

test('click on the get started link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

    await page.screenshot({path: 'screenshots/link.png'});
});


test('check Url path', async ({ page }) => {
  await page.goto('/docs/test-assertions');

  // Expects page to have a path '/docs/test-assertions'
  await expect(page).toHaveURL('https://playwright.dev/docs/test-assertions');

  await page.screenshot({path: 'screenshots/url.png'});
});
