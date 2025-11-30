import { test, expect } from '@playwright/test';

const ALL_BUTTON_TEST_IDS = [
  'bluesky', 'email', 'facebook', 'hackernews', 'line', 'linkedin',
  'pinterest', 'reddit', 'telegram', 'tumblr', 'viber',
  'vk', 'whatsapp', 'x', 'xing'
];

test.describe('Share Button Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Bluesky button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="bluesky"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /bsky\.app\/intent\/compose/);
    await expect(link).toHaveAttribute('aria-label', 'Share on Bluesky');
  });

  test('Email button renders with correct href', async ({ page }) => {
    const emailContainer = page.locator('[data-testid="email"]');
    const link = emailContainer.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /mailto:\?subject=.*&body=.*/);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(link).toHaveAttribute('aria-label', 'Share by Email');
  });

  test('Facebook button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="facebook"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /facebook\.com\/sharer\/sharer\.php/);
    await expect(link).toHaveAttribute('href', /u=https:\/\/example\.com\/share-test/);
    await expect(link).toHaveAttribute('aria-label', 'Share on Facebook');
  });

  test('HackerNews button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="hackernews"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /news\.ycombinator\.com\/submitlink/);
    await expect(link).toHaveAttribute('aria-label', 'Share on HackerNews');
  });

  test('Line button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="line"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /social-plugins\.line\.me\/lineit\/share/);
    await expect(link).toHaveAttribute('aria-label', 'Share on Line');
  });

  test('LinkedIn button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="linkedin"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /linkedin\.com\/sharing\/share-offsite/);
    await expect(link).toHaveAttribute('aria-label', 'Share on LinkedIn');
  });

  test('Pinterest button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="pinterest"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /pinterest\.com\/pin\/create\/button/);
    await expect(link).toHaveAttribute('aria-label', 'Share on Pinterest');
  });

  test('Reddit button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="reddit"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /reddit\.com\/submit/);
    await expect(link).toHaveAttribute('aria-label', 'Share on Reddit');
  });

  test('Telegram button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="telegram"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /telegram\.me\/share\/url/);
    await expect(link).toHaveAttribute('aria-label', 'Share on Telegram');
  });

  test('Tumblr button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="tumblr"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /tumblr\.com\/widgets\/share\/tool/);
    await expect(link).toHaveAttribute('aria-label', 'Share on Tumblr');
  });

  test('Viber button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="viber"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /viber:\/\/forward/);
    await expect(link).toHaveAttribute('aria-label', 'Share on Viber');
  });

  test('Vk button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="vk"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /vk\.com\/share\.php/);
    await expect(link).toHaveAttribute('aria-label', 'Share on VK');
  });

  test('WhatsApp button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="whatsapp"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /whatsapp:\/\/send/);
    await expect(link).toHaveAttribute('aria-label', 'Share on WhatsApp');
  });

  test('X button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="x"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /x\.com\/intent\/tweet/);
    await expect(link).toHaveAttribute('aria-label', 'Share on X');
  });

  test('Xing button renders with correct href', async ({ page }) => {
    const container = page.locator('[data-testid="xing"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /xing\.com\/app\/user/);
    await expect(link).toHaveAttribute('aria-label', 'Share on Xing');
  });

  test('Button with label displays label text', async ({ page }) => {
    const container = page.locator('[data-testid="facebook-with-label"]');
    const button = container.locator('.ssbc-button');
    
    await expect(button).toContainText('Share on Facebook');
  });

  test('Button accepts custom class', async ({ page }) => {
    const container = page.locator('[data-testid="email-custom-class"]');
    const button = container.locator('.ssbc-button');
    
    await expect(button).toHaveClass(/custom-class/);
  });

  test('Button accepts custom aria-label', async ({ page }) => {
    const container = page.locator('[data-testid="facebook-aria"]');
    const link = container.locator('a.ssbc-button__link');
    
    await expect(link).toHaveAttribute('aria-label', 'Custom Facebook aria label');
  });

  test('All buttons contain SVG icons', async ({ page }) => {
    for (const testId of ALL_BUTTON_TEST_IDS) {
      const container = page.locator(`[data-testid="${testId}"]`);
      const svg = container.locator('svg');
      await expect(svg).toBeVisible();
    }
  });

  test('All buttons have proper structure', async ({ page }) => {
    for (const testId of ALL_BUTTON_TEST_IDS) {
      const container = page.locator(`[data-testid="${testId}"]`);
      const link = container.locator('a.ssbc-button__link');
      const button = container.locator('.ssbc-button');
      const iconDiv = container.locator('.ssbc-button__icon');
      
      await expect(link).toBeVisible();
      await expect(button).toBeVisible();
      await expect(iconDiv).toBeVisible();
      await expect(iconDiv).toHaveAttribute('aria-hidden', 'true');
    }
  });
});
