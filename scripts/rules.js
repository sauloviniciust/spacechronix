/**
 * EVENT 001 - Rules
 * change content displayed state based on user's choice by clicking the filter button
 */

const formats = document.getElementById('formatsFilter');
const rules = document.getElementById('rulesFilter');
const formatsContent = document.getElementById('theFormatsContent');
const rulesContent = document.getElementById('theRulesContent');

formatsFilter.addEventListener('click', () => {
	theFormatsContent.classList.add('active');
	formatsFilter.classList.add('active-button');
	theRulesContent.classList.add('content');
	theFormatsContent.classList.remove('content');
	theRulesContent.classList.remove('active');
	rulesFilter.classList.remove('active-button');
});

rulesFilter.addEventListener('click', () => {
	theRulesContent.classList.add('active');
	rulesFilter.classList.add('active-button');
	theFormatsContent.classList.add('content');
	theRulesContent.classList.remove('content');
	theFormatsContent.classList.remove('active');
	formatsFilter.classList.remove('active-button');
});

/**
 * EVENT 002 - Rules
 * change formats content based on user's choice by picking a format on the side menu
 */

const listItems = document.querySelectorAll('.formats-item');
const contents = document.querySelectorAll('.format-content');

listItems.forEach((item) => {
	item.addEventListener('click', () => {
		// hide default content
		document.querySelector('.default-content').style.display = 'none';

		// hide all contents
		contents.forEach((content) => {
			content.style.display = 'none';
		});

		// show content related to clicked item
		const contentId = item.id + '-content';
		document.getElementById(contentId).style.display = 'block';
	});
});
