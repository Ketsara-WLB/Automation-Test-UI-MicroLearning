import { test, expect } from '@playwright/test';

test('กรอก Receipt จำนวน 2 ชิ้น สำเร็จ', async ({ page }) => {
  await test.step('เข้าสู่หน้าเว็บไซต์ ไปหน้า Invoice Form', async() =>{
    await page.goto('/')
    await page.getByRole('link', { name: 'Invoice Form'}).click()
  });
});