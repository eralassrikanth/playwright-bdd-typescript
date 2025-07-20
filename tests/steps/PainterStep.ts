import { When, Then } from '@cucumber/cucumber'

When('User navigate to the painter page', async function () {
    // After login, admin user is redirected to dashboard. Click the painters menu using the correct data-testid.
    await this.page.getByTestId('dashboard_menu_painters').click()
    // Wait for the painter page to load (URL should contain /painter)
    await this.page.waitForURL(/.*\/painters/)
})

/* When('User add a new painter', async function () {
  // Click the "Add Painter" button
  await this.page.getByTestId('add-painter-button').click()
  // Fill in painter details; replace with actual test ids and values as needed
  await this.page.getByTestId('painter-name-input').fill('Test Painter')
  await this.page.getByTestId('painter-phone-input').fill('9876543210')
  // Submit the form
  await this.page.getByTestId('submit-painter-button').click()
  // Optionally, wait for a success message or the list to update
  await this.page.waitForSelector('[data-testid="painter-list"]')
})

Then('User should see the new painter in the list', async function () {
  // Assert that the new painter appears in the list
  const painterExists = await this.page.getByTestId('painter-list').locator('text=Test Painter').isVisible()
  if (!painterExists) {
    throw new Error('New painter "Test Painter" not found in the list')
  }
}) */