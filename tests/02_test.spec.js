import { test, expect } from '@playwright/test';

test('check for visibility of playwright capability headings', async ({ page }) => {
  //action
  await page.goto('/');

  // assert
  await expect(page.getByRole('banner')).toContainText('Get started');
  await expect(page.getByRole('heading', { name: 'Built for testing' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Built for AI agents' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Powerful tooling' })).toBeVisible();

  await page.screenshot({path: 'screenshots/headings.png'});
});