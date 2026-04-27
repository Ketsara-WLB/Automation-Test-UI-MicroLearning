import { test, expect } from '@playwright/test';

test('Confirm Shipping สำเร็จ', async ({ page }) => {
    await test.step('เข้าสู่หน้าเว็บไซต์ ไปหน้า Shipping details', async() =>{
        await page.goto('/')
        await page.getByRole('link', { name: 'Shipping Form'}).click()
    });

    await test.step('กรอกข้อมูล First name Somchai', async() =>{
        await page.getByTestId('shipping-form-first-name').fill('Somchai')
    });

    await test.step('กรอกข้อมูล Last name Jaidee', async() =>{
        await page.getByTestId('shipping-form-last-name').fill('Jaidee')
    });

    await test.step('กรอกข้อมูล Phone number  089-654-2124', async() =>{
        await page.getByTestId('shipping-form-phone').fill('089-654-2124')
    });

    await test.step('กรอกข้อมูล Street address  43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63', async() =>{
        await page.getByTestId('shipping-form-address').fill('43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63')
    });

    await test.step('เลือก Province กรุงเทพมหานคร (Bangkok)', async() =>{
        await page.getByTestId('shipping-form-province-select').selectOption({label: 'กรุงเทพมหานคร (Bangkok)'})
    });

    await test.step('เลือก District เขตวังทองหลาง (Khet Wang Thonglang)', async() =>{
        await page.getByTestId('shipping-form-district-select').selectOption({label: 'เขตวังทองหลาง (Khet Wang Thonglang)'})
    });

    await test.step('เลือก Subdistrict วังทองหลาง (Wang Thonglang)', async() =>{
        await page.getByTestId('shipping-form-subdistrict-select').selectOption({label: 'วังทองหลาง (Wang Thonglang)'})
    });

    await test.step('ตรวจสอบ Postal code 10310', async() =>{
        await expect(page.getByTestId('shipping-form-postal-code')).toHaveValue('10310')
    });

    await test.step('กดปุ่ม Confirm Shipping', async() =>{
        await page.getByTestId('shipping-submit').click()
    });

    await test.step('ตรวจสอบข้อมูลหน้า Shipping confirmed', async() =>{
        await expect(page).toHaveURL('/shipping/success')
        await expect(page.getByTestId('success-heading')).toHaveText('Shipping confirmed')
        await expect(page.getByTestId('success-recipient')).toHaveText('Somchai Jaidee')
        await expect(page.getByTestId('success-phone')).toHaveText('089-654-2124')
        await expect(page.getByTestId('success-address')).toHaveText('43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63')
        await expect(page.getByTestId('success-subdistrict')).toHaveText('วังทองหลาง (Wang Thonglang)')
        await expect(page.getByTestId('success-district')).toHaveText('เขตวังทองหลาง (Khet Wang Thonglang)')
        await expect(page.getByTestId('success-province')).toHaveText('กรุงเทพมหานคร (Bangkok)')
        await expect(page.getByTestId('success-postal-code')).toHaveText('10310')
    });
});