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

  await test.step('ตรวจสอบ URL เท่ากันกับ https://ui-sandbox-omega.vercel.app/shipping/success', async() =>{
    await expect(page).toHaveURL('/shipping/success')
  });

  await test.step('ตรวจสอบข้อความบนหน้าเว็บ Shipping confirmed', async() =>{
    await expect(page.getByTestId('success-heading')).toHaveText('Shipping confirmed')
  });

  await test.step('ตรวจสอบข้อมูลRecipient: Somchai Jaidee', async() =>{
    await expect(page.getByTestId('success-recipient')).toHaveText('Somchai Jaidee')
  });

  await test.step('ตรวจสอบข้อมูลPhone number: 089-654-2124', async() =>{
    await expect(page.getByTestId('success-phone')).toHaveText('089-654-2124')
  });

  await test.step('ตรวจสอบข้อมูลStreet address: 43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63', async() =>{
    await expect(page.getByTestId('success-address')).toHaveText('43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63')
  });

  await test.step('ตรวจสอบข้อมูลSubdistrict: วังทองหลาง (Wang Thonglang)', async() =>{
    await expect(page.getByTestId('success-subdistrict')).toHaveText('วังทองหลาง (Wang Thonglang)')
  });

  await test.step('ตรวจสอบข้อมูลProvince: กรุงเทพมหานคร (Bangkok)', async() =>{
    await expect(page.getByTestId('success-province')).toHaveText('กรุงเทพมหานคร (Bangkok)')
  });

  await test.step('ตรวจสอบข้อมูลPostal code: 10310', async() =>{
    await expect(page.getByTestId('success-postal-code')).toHaveText('10310')
  });
})

test('Confirm Shipping ไม่สำเร็จ ไม่กรอก Shipping details ', async ({ page }) => {
  await test.step('เข้าสู่หน้าเว็บไซต์ ไปหน้า Shipping details', async() =>{
    await page.goto('/')
    await page.getByRole('link', { name: 'Shipping Form'}).click()
  });
  
  await test.step('กด Confirm shipping', async () => {
    await page.getByTestId('shipping-submit').click()
  });
  
  await test.step('ตรวจสอบข้อความ First name error เมื่อไม่ได้กรอก First name จะแสดงข้อความ First name is required.', async () => {
    await expect(page.getByTestId('shipping-form-first-name-error')).toHaveText('First name is required.')
  });

  await test.step('ตรวจสอบข้อความ Last name error เมื่อไม่ได้กรอก Last name จะแสดงข้อความ Last name is required.', async () => {
    await expect(page.getByTestId('shipping-form-last-name-error')).toHaveText('Last name is required.')
  });

  await test.step('ตรวจสอบข้อความ Phone number error เมื่อไม่ได้กรอก Phone number จะแสดงข้อความ Phone number is required.', async () => {
    await expect(page.getByTestId('shipping-form-phone-error')).toHaveText('Phone number is required.')
  });
  
  await test.step('ตรวจสอบข้อความ Address error เมื่อไม่ได้กรอก Address จะแสดงข้อความ Address is required.', async () => {
    await expect(page.getByTestId('shipping-form-address-error')).toHaveText('Address is required.')
  });

  await test.step('ตรวจสอบข้อความ Province error เมื่อไม่ได้ระบุ Province จะแสดงข้อความ Please select a province.', async () => {
    await expect(page.getByTestId('shipping-form-province-error')).toHaveText('Please select a province.')
  });

  await test.step('ตรวจสอบข้อความ District error เมื่อไม่ได้ระบุ District จะแสดงข้อความ Please select a district.', async () => {
    await expect(page.getByTestId('shipping-form-district-error')).toHaveText('Please select a district.')
  });

  await test.step('ตรวจสอบข้อความ Subdistrict error เมื่อไม่ได้ระบุ Subdistrict จะแสดงข้อความ Please select a subdistrict.', async () => {
    await expect(page.getByTestId('shipping-form-subdistrict-error')).toHaveText('Please select a subdistrict.')
  });
})