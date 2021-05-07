import {expect, device, element, by, waitFor} from 'detox';

describe('Login Flow', () => {
  beforeEach(async () => {
    await device.installApp();
  });
  beforeEach(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login screen components visible', async () => {
    await expect(element(by.id('baseInput_email'))).toBeVisible();
    await expect(element(by.id('baseInput_password'))).toBeVisible();
    await expect(element(by.id('login_button'))).toBeVisible();
  });

  it('verify email input', async () => {
    await expect(element(by.id('baseInput_email'))).toBeVisible();
    await element(by.id('baseInput_email')).typeText('danielhotmail.com');
    await element(by.id('baseInput_email')).tapReturnKey();
    await expect(element(by.id('errorMessage_email'))).toBeVisible();
    await expect(element(by.id('errorMessage_email'))).toHaveText(
      'Insira um email valido',
    );
    await element(by.id('baseInput_email')).clearText();
    await element(by.id('baseInput_email')).typeText('daniel@hotmail.com');
    await element(by.id('baseInput_email')).tapReturnKey();
    await expect(element(by.id('errorMessage_email'))).not.toBeVisible();
  });

  it('verify password input', async () => {
    await expect(element(by.id('baseInput_password'))).toBeVisible();
    await element(by.id('baseInput_password')).typeText('1234567');
    await element(by.id('baseInput_password')).tapReturnKey();
    await expect(element(by.id('errorMessage_password'))).toBeVisible();
    await expect(element(by.id('errorMessage_password'))).toHaveText(
      'A senha deve ter no minimo 8 caracteres',
    );
    await element(by.id('baseInput_password')).clearText();
    await element(by.id('baseInput_password')).typeText('12345678');
    await element(by.id('baseInput_password')).tapReturnKey();
    await expect(element(by.id('errorMessage_password'))).not.toBeVisible();
  });

  it('test login flow', async () => {
    await expect(element(by.id('baseInput_email'))).toBeVisible();
    await element(by.id('baseInput_email')).typeText('daniel@hotmail.com');
    await element(by.id('baseInput_email')).tapReturnKey();
    await expect(element(by.id('baseInput_password'))).toBeVisible();
    await element(by.id('baseInput_password')).typeText('12345678');
    await element(by.id('baseInput_email')).tapReturnKey();
    await expect(element(by.id('login_button'))).toBeVisible();
    await element(by.id('login_button')).tap();
    await waitFor(element(by.id('back_button')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('back_button'))).toBeVisible();
    await element(by.id('back_button')).tap();
    await expect(element(by.id('login_button'))).toBeVisible();
  });
});
