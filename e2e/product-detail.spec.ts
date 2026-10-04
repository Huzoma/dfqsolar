import { test, expect } from '@playwright/test';

test.describe('Product Detail Views', () => {
  test('navigates to product detail page and verifies content (AC-1, AC-2, AC-3, AC-6)', async ({ page }) => {
    // Go to the home page (catalog)
    await page.goto('/?tab=products');
    
    // Click on the first product card. Assuming it has a link to /product/solar-panels
    await page.click('a[href="/product/solar-panels"]');
    
    // Verify navigation
    await expect(page).toHaveURL('/product/solar-panels');
    
    // AC-6: Title
    await expect(page).toHaveTitle('DFQ Solar Panels | DFQ Solar');
    
    // AC-2: Product name, description, specs
    await expect(page.locator('h1')).toHaveText('DFQ Solar Panels');
    await expect(page.getByText('Efficiency', { exact: true })).toBeVisible();
    await expect(page.locator('text=Up to 22.5%')).toBeVisible();
    
    // AC-3: Lead capture form
    await expect(page.locator('h3:has-text("Request a Quote")')).toBeVisible();
  });

  test('redirects to home with error when invalid product ID is provided (AC-5)', async ({ page }) => {
    await page.goto('/product/invalid-id');
    await expect(page).toHaveURL('/?error=product-not-found');
  });
});
