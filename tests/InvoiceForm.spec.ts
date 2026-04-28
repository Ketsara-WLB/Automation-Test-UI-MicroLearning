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
});