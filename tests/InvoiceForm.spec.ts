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
});