import { test, expect } from '@playwright/test';

test('Login Page: Success', async ({ page }) => {
  await test.step('เข้าสู่หน้าเว็บไซต์ ไปหน้า Login', async() =>{
    await page.goto('/')
    await page.getByRole('link', { name: 'Login Form Practice login'}).click()
  });

  await test.step('กรอก email', async() =>{
    await page.getByTestId('email-input').fill('user@company.com')
  });

  await test.step('กรอก password', async() =>{
    await page.getByTestId('password-input').fill('Test1234!')
  });

  await test.step('กดปุ่ม Sign in', async() =>{
    await page.getByTestId('login-btn').click()
  });

  await test.step('ตรวจสอบ URL เท่ากันกับ https://ui-sandbox-omega.vercel.app/login/success', async() =>{
    await expect(page).toHaveURL('/login/success')
  });

  await test.step('ตรวจสอบข้อความบนหน้าเว็บ Login successful', async() =>{
    await expect(page.getByTestId('success-heading')).toHaveText('Login successful');
  });
});


test('Login Page: Login ไม่สำเร็จ password ไม่ถูกต้อง ', async ({ page }) => {

});
