import { test, expect } from '@playwright/test';

test('กรอก Receipt จำนวน 2 ชิ้น สำเร็จ', async ({ page }) => {
  await test.step('เข้าสู่หน้าเว็บไซต์ ไปหน้า Invoice Form', async() =>{
    await page.goto('/')
    await page.getByRole('link', { name: 'Invoice Form'}).click()
  });

  await test.step('เลือก Document type เป็น Receipt', async() =>{
    await page.getByTestId('invoice-type-select').selectOption({label: 'Receipt'})
  });

  await test.step('กรอก Item name เป็น C-Level Consulting', async() =>{
    await page.getByTestId('row-1-name').fill('C-Level Consulting')
  });

  await test.step('กรอก Category เป็น Con', async() =>{
    await page.getByTestId('row-1-category').fill('Con')
  });

  await test.step('เลือก Consulting', async() =>{
    await page.getByTestId('row-1-category-option-0').click()
  });

  await test.step('กรอก Unit price เป็น 2,000', async() =>{
    await page.getByTestId('row-1-unit-price').fill('2,000')
  });

  await test.step('กรอก Qty เป็น 4', async() =>{
    await page.getByTestId('row-1-qty').clear()
    await page.getByTestId('row-1-qty').fill('4')
  });

  await test.step('ตรวจ Total เป็น 8,000.00', async() =>{
    await page.locator('body').click()
    await expect(page.getByTestId('row-1-total')).toHaveValue('8,000.00')
  });

  await test.step('กด +Add item', async() =>{
    await page.getByTestId('add-row-button').click()
  });

  await test.step('กรอก Item name เป็น E2E Automation Test via APIs', async() =>{
    await page.getByTestId('row-2-name').fill('E2E Automation Test via APIs')
  });

  await test.step('กรอก Category เป็น Main', async() =>{
    await page.getByTestId('row-2-category').fill('Main')
  });

  await test.step('เลือก Maintenance', async() =>{
    await page.getByTestId('row-2-category-option-0').click()
  });

  await test.step('กรอก Unit price เป็น 10,000', async() =>{
    await page.getByTestId('row-2-unit-price').fill('10,000')
  });

  await test.step('กรอก Unit price เป็น 10,000', async() =>{
    await page.getByTestId('row-2-unit-price').fill('10,000')
  });

  await test.step('กรอก Qty เป็น 1', async() =>{
    await page.getByTestId('row-2-qty').clear()
    await page.getByTestId('row-2-qty').fill('1')
  });

  await test.step('ตรวจ Total เป็น 10,000.00', async() =>{
    await page.locator('body').click()
    await expect(page.getByTestId('row-2-total')).toHaveValue('10,000.00')
  });

  await test.step('เปลี่ยน Total เป็น 8,000.00', async() =>{
    await page.getByTestId('row-2-total').clear()
    await page.getByTestId('row-2-total').fill('8,000')
  });

  await test.step('ตรวจ Total เป็น 8,000.00', async() =>{
    await page.locator('body').click()
    await expect(page.getByTestId('row-2-total')).toHaveValue('8,000.00')
  });

  await test.step('ตรวจ Subtotal เป็น 14,880.00', async() =>{
    await expect(page.getByTestId('summary-subtotal')).toHaveText('14,880.00')
  });

  await test.step('ตรวจ VAT (7%) เป็น 1,120.00', async() =>{
    await expect(page.getByTestId('summary-vat')).toHaveText('1,120.00')
  });

  await test.step('ตรวจ Grand total เป็น 16,000.00', async() =>{
    await expect(page.getByTestId('summary-grand-total')).toHaveText('16,000.00')
  });

  await test.step('กด Submit document', async() =>{
    await page.getByTestId('submit-button').click()
  });
  
});