import { test, expect } from '@playwright/test';

test('menu-subsecoes', async ({ page }) => {
  await page.goto('https://steamcommunity.com/');
  await page.getByRole('link', { name: 'Screenshots' }).click();
  await expect(page).toHaveURL('https://steamcommunity.com/?subsection=screenshots');
  await page.getByRole('link', { name: 'Artwork' }).click();
  await expect(page).toHaveURL('https://steamcommunity.com/?subsection=images');
  await page.getByRole('link', { name: 'Broadcasts' }).click();
  await expect(page).toHaveURL('https://steamcommunity.com/?subsection=broadcasts');
  await page.getByRole('link', { name: 'Videos' }).click();
  await expect(page).toHaveURL('https://steamcommunity.com/?subsection=videos');
  await page.getByRole('link', { name: 'Workshop' }).click();
  await expect(page).toHaveURL('https://steamcommunity.com/?subsection=workshop');
  await page.getByRole('link', { name: 'News' }).click();
  await expect(page).toHaveURL('https://steamcommunity.com/?subsection=news');
  await page.getByRole('link', { name: 'Guides' }).click();
  await expect(page).toHaveURL('https://steamcommunity.com/?subsection=guides');
  await page.getByRole('link', { name: 'Reviews' }).click();
  await expect(page).toHaveURL('https://steamcommunity.com/?subsection=reviews');
});

test('permanencia-botao-favoritar-screenshot', async ({ page }) => {
  await page.goto('https://store.steampowered.com/login/');
  await page.locator('#responsive_page_template_content input[type="text"]').fill('nome_usuario');
  await page.locator('input[type="password"]').fill('senha_certa');
  await page.locator('input[type="password"]').press('Enter');
  await expect(page).toHaveURL('https://store.steampowered.com/');
  await page.getByRole('link', { name: 'COMMUNITY' }).click();
  await page.getByRole('link', { name: 'Screenshots' }).click();
  await page.locator('.apphub_CardContentTitle').first().click();
  await page.frameLocator('iframe').locator('#settings_btn').click();
  await page.frameLocator('iframe').getByRole('link', { name: 'Favorite' }).click();
  await page.frameLocator('iframe').getByRole('paragraph').first().click();
  await page.frameLocator('iframe').locator('#settings_btn').click();
  await expect(page.frameLocator('iframe').getByRole('link', { name: 'Unfavorite' })).toBeVisible();
});

test('informacoes-screenshot', async ({ page }) => {
  await page.goto('https://steamcommunity.com/');
  await page.getByRole('link', { name: 'Screenshots' }).click();
  await page.locator('.apphub_CardContentTitle').first().click();
  var tag = await page.frameLocator('iframe').getByText('Tags: ').textContent();
  var tag = tag.replace('Tags: ', '');
  await page.frameLocator('iframe').getByRole('link', { name: 'comments & details' }).click();
  await expect(page.getByText(`${ tag }`).first()).toBeVisible();
  await expect(page.getByText('Comments')).toBeVisible();
  await expect(page.getByText('Created by')).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Unique Visitors' })).toBeVisible();
});

test('videos-modal', async ({ page }) => {
  await page.goto('https://steamcommunity.com/');
  await page.getByRole('link', { name: 'Videos' }).click();
  await page.locator('.apphub_CardContentTitle').first().click();
  await expect(page.locator('#modalContentTitleBar')).toBeVisible();
});

test('se-inscrever-workshop', async ({ page }) => {
  await page.goto('https://store.steampowered.com/login/');
  await page.locator('#responsive_page_template_content input[type="text"]').fill('nome_usuario');
  await page.locator('input[type="password"]').fill('senha_certa');
  await page.locator('input[type="password"]').press('Enter');
  await expect(page).toHaveURL('https://store.steampowered.com/');
  await page.getByRole('link', { name: 'COMMUNITY' }).click();
  await page.getByRole('link', { name: 'Workshop' }).click();
  await page.locator('.apphub_CardContentTitle').first().click();
  await page.frameLocator('iframe').locator('#SubscribeItemBtn').click();
  await expect(page.frameLocator('iframe').getByText('This item has been added to your Subscriptions.')).toBeVisible();
  await page.frameLocator('iframe').locator('#SubscribeItemBtn').click();
});

test('Img-worksshop', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=steam&oq=steam&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE2MTVqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.goto('https://store.steampowered.com/?l=portuguese');
  await page.getByRole('link', { name: 'COMUNIDADE' }).click();
  await page.getByRole('link', { name: 'Workshop' }).click();
  await page.locator('.apphub_CardContentTitle').first().click();
});

test('Botão de like-Guides', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=steam&oq=steam&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI4NTJqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Bem-vindo(a) ao Steam Steam' }).click();
  await page.getByRole('link', { name: 'COMUNIDADE' }).click();
  await page.getByRole('link', { name: 'Guides' }).click();
  await page.locator('#apphub_Card_3324030720').getByText('Star Trucker: Guide').click();
  await page.frameLocator('iframe').locator('#VoteUpBtn').click();
});

test('Botão de Like-Reviews', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=steam&oq=steam&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE2NzlqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Bem-vindo(a) ao Steam Steam' }).click();
  await page.getByRole('link', { name: 'COMUNIDADE' }).click();
  await page.getByRole('link', { name: 'Reviews' }).click();
  await page.getByText('Posted: September 2 Product').click();
  await page.frameLocator('iframe').locator('#RecommendationVoteUpBtn174051829').getByText('Yes').click();
  await page.frameLocator('iframe').getByText('Sign In').click();
  await page.goto('https://steamcommunity.com/profiles/76561198401087067/recommended/632360/?insideModal=0');
  await page.locator('#RecommendationVoteUpBtn174051829 i').click();
});

test('Botão de Deslike-Reviews', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=steam&oq=steam&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE5MDlqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Bem-vindo(a) ao Steam Steam' }).click();
  await page.getByRole('link', { name: 'COMUNIDADE' }).click();
  await page.getByRole('link', { name: 'Reviews' }).click();
  await page.getByText('Posted: September 2 Product').click();
  await page.frameLocator('iframe').locator('#RecommendationVoteDownBtn174051829 i').click();
  await page.frameLocator('iframe').getByText('Sign In').click();
  await page.goto('https://steamcommunity.com/profiles/76561198401087067/recommended/632360/?insideModal=0');
  await page.locator('#RecommendationVoteDownBtn174051829').getByText('No').click();
});

test('Botão de Funny-Reviews', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=steam&oq=steam&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEzMjZqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Bem-vindo(a) ao Steam Steam' }).click();
  await page.getByRole('link', { name: 'COMUNIDADE' }).click();
  await page.getByRole('link', { name: 'Reviews' }).click();
  await page.getByText('Posted: September 2 Product').click();
  await page.frameLocator('iframe').getByText('Funny', { exact: true }).click();
  await page.frameLocator('iframe').getByText('Sign In').click();
  await page.goto('https://steamcommunity.com/profiles/76561198401087067/recommended/632360/?insideModal=0');
  await page.getByText('Funny', { exact: true }).click();
});