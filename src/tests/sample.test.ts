import { test } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('https://example.com')
})
