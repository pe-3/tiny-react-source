import { test, expect } from '@playwright/test'

test('PopEditor 编辑框大小', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#size')

  const preview = page.locator('#preview')
  const textBox = preview.locator('.tiny-popeditor')

  await expect(textBox).toHaveCSS('height', '40px')
})
