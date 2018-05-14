import pupeteer from 'puppeteer';

let browser, page;

beforeEach(async () => {
  browser = await pupeteer.launch({headless: true});
  page = await browser.newPage();
  await page.goto('http://localhost:4444');
  await page.waitFor(1000);
});

afterEach(async () => {
  await browser.close();
});


test('Launch the Frets to Keys application', async () => {
  const header = await page
    .$eval('.header__logo h1', el => el.innerHTML);

  expect(header).toEqual('Frets to Keys');
});


test('The tuner dropdown has options', async () => {
  await page.click('.Dropdown-root');

  let dropdown_option_count = await page
    .$eval('.Dropdown-menu', el => el.childElementCount);

  expect(dropdown_option_count).not.toEqual(0);
  expect(dropdown_option_count).toEqual(47);
}, 15000); // max timeout


test('Adding and deleting active notes', async () => {
  // add three notes
  await page.click('#fret-0-0');
  await page.click('#fret-1-0');
  await page.click('#fret-2-0');

  // delete one
  await page.click('#fret-2-0');

  // get active notes count
  let chordbank_active_notes_count = await page
    .$eval('.chordbank__active-notes', el => el.childElementCount);

  expect(chordbank_active_notes_count).toEqual(2);
}, 15000);


test('Returning matching chords', async () => {
  // add two notes
  await page.click('#fret-0-0'); // E
  await page.click('#fret-1-0'); // A
  await page.click('#fret-2-0'); // D

  // turn on exact chord matches
  await page.click('.chords__match-toggle div');

  // get active notes count
  let chord_match_count = await page
    .$eval('.chords__list', el => el.childElementCount);

  expect(chord_match_count).toEqual(2);
}, 15000);


test('Selecting a chord and adding notes to the difference array', async () => {
  // add two notes
  await page.click('#fret-0-0'); // E
  await page.click('#fret-1-0'); // A

  // select 3rd chord match
  await page.click('#chord-match-3');

  let difference_notes_count = await page
    .$eval('.chordbank__difference-notes', el => el.childElementCount);

  let selected_chord_name = await page
    .$eval('.chordbank__selected-chord p', el => el.innerHTML);

  expect(difference_notes_count).not.toEqual(0);
  expect(difference_notes_count).toBeGreaterThanOrEqual(1);
  expect(selected_chord_name).not.toEqual('');
}, 15000);


test('Clearing all data and selections', async () => {
  // add two notes
  await page.click('#fret-0-0'); // E
  await page.click('#fret-1-0'); // A
  // select 3rd chord match
  await page.click('#chord-match-3');
  // execute a clear call
  await page.click('#clear-button');

  let difference_notes_count = await page
    .$eval('.chordbank__difference-notes', el => el.childElementCount);

  let chord_match_count = await page
    .$eval('.chords__list', el => el.childElementCount);

  let chordbank_active_notes_count = await page
    .$eval('.chordbank__active-notes', el => el.childElementCount);

  let selected_chord_name = await page
    .$eval('.chordbank__selected-chord p', el => el.innerHTML);

  expect(difference_notes_count).toEqual(0);
  expect(chord_match_count).toEqual(0);
  expect(chordbank_active_notes_count).toEqual(0);
  expect(selected_chord_name).toEqual('');
}, 15000);


test('Laptop keyboard notes', async () => {
  await page.click('.laptop-check__container > div:first-of-type');

  let scale_keyboard_note = await page
    .$eval('.keyboards__scale .keyboard #key-0 p', el => el.innerHTML);

  let chord_keyboard_note = await page
    .$eval('.keyboards__chord .keyboard #key-8 p', el => el.innerHTML);

  expect(scale_keyboard_note).toEqual('a');
  expect(chord_keyboard_note).toEqual('y');
}, 15000);


test('Scale select dropdown has no value until chord is selected', async () => {
  // add two notes
  await page.click('#fret-0-0'); // E
  await page.click('#fret-1-0'); // A

  // open scale select dropdown
  await page.click('.scales-selector .Dropdown-root');

  // get chord count
  let dropdown_selection_count = await page
    .$eval('.scales-selector .Dropdown-root .Dropdown-menu',
      el => el.childElementCount);

  expect(dropdown_selection_count).toBeLessThanOrEqual(1);
  expect(dropdown_selection_count).not.toBeGreaterThan(1);

  // select chord
  await page.click('#chord-match-3');

  // open scale select dropdown (again)
  await page.click('.scales-selector .Dropdown-root');

  // get chord count (again)
  let dropdown_selection_count_two = await page
    .$eval('.scales-selector .Dropdown-root .Dropdown-menu',
      el => el.childElementCount);

  expect(dropdown_selection_count_two).toBeGreaterThan(10);
}, 15000);
