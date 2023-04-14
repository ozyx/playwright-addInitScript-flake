const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('addInitScript', () => {
    test("Add a non-default plugin and verify it has been installed", async ({ page }) => {
        // Install the plugin
        await page.addInitScript({ path: path.join(__dirname, 'addNonDefaultPlugin.js')})
        await page.goto('./'); 

        // Verify that the "Fault Management" tree item is visible
        await expect(page.getByRole('tree', {
          name: "Main Tree"
        }).getByRole('treeitem', {
          name: "Fault Management"
        })).toBeVisible();
      });
})
