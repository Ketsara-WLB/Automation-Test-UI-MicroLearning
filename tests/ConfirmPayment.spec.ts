import { test, expect } from '@playwright/test';
import path from 'path';

test('กรอก Payment confirmation Detail อัปโหลดไฟล์.jpgสำเร็จ', async ({ page }) => {
    await test.step('ไปหน้า Confirm Payment', async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app');
        await page.getByRole('link', { name: 'Confirm Payment' }).click()
    })
    
    await test.step('อัปโหลดรูป cat-1.jpg', async () => {
        await page.getByTestId('slip-file-input').setInputFiles(path.join(__dirname, '../assets/images/cat-1.jpg'))
    })
    
    await test.step('ตรวจสอบการอัปโหลดรูป cat-1.jpg', async () => {
        await expect(page.getByTestId('slip-remove')).toBeVisible()
    })

    await test.step('กรอก Order ID เป็น 1234567890123456', async () => {
        await page.getByTestId('order-id').fill('1234567890123456')
    });

    await test.step('กรอก Amount เป็น 3,000.00', async () => {
        await page.getByTestId('payment-amount').fill('3000')
    });

    await test.step('กรอก Transaction date เป็น 28/04/2026', async () => {
        await page.getByTestId('transaction-date').fill('2026-04-28')
    });

    await test.step('กรอก Transaction time เป็น 09:31', async () => {
        await page.getByTestId('transaction-time').fill('09:31')
    });

    await test.step('กด Confirm Payment', async () => {
        await page.getByTestId('payment-submit').click()
    });

    await test.step('ตรวจสอบไปหน้า Payment received', async () => {
        await expect(page).toHaveURL('/payment/success')
        await expect(page.getByTestId('success-heading')).toHaveText('Payment received')
    });

    await test.step('ตรวจสอบการแสดงรูป cat-1.jpg', async () => {
        await expect(page.getByTestId('success-slip-filename')).toBeVisible
    });

    await test.step('ตรวจสอบ Order ID เป็น 1234567890123456', async () => {
        await expect(page.getByTestId('success-order-id')).toHaveText('1234567890123456')
    });

    await test.step('Amount เป็น 3,000.00', async () => {
        await expect(page.getByTestId('success-amount')).toHaveText('฿ 3,000.00')
    });

    await test.step('Date เป็น 28/04/2026', async () => {
        await expect(page.getByTestId('success-date')).toHaveText('28/04/2026')
    });

    await test.step('Time เป็น 09:31 ', async () => {
        await expect(page.getByTestId('success-time')).toHaveText('09:31')
    });

    await test.step('Slip file เป็น cat-01.jpg', async () => {
        await expect(page.getByTestId('success-filename')).toHaveText('cat-1.jpg')
    });
});
