import { test, expect } from '@playwright/test'

test('节点被展开时触发的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-menu#event-node-expand')

  const treeMenu = page.locator('#preview .tiny-tree-menu')
  await treeMenu.getByTitle('指南', { exact: true }).click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '节点-指南被打开了' })).toBeVisible()
})
