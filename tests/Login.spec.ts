import { test, expect } from '@playwright/test';

test('Login Page: Success', async ({ page }) => {
  await test.step('เข้าสู่หน้าเว็บไซต์ ไปหน้า Login', async() =>{
    await page.goto('/')
    await page.getByRole('link', { name: 'Login Form Practice login'}).click()
  });

  await test.step('กรอก email', async() =>{
    await page.getByTestId('email-input').fill('user@company.com')
  });

  await test.step('กรอก   password', async() =>{
    await page.getByTestId('password-input').fill('Test1234!')
  });
});

