/**
 * EVENT 001 - Database
 * collect data from Scryfall API and display card's images based on user's search
 * also display filter modal content when user clicks the filterBtn
 */

// filter-btn default state
let filterModalOpen = false;

// filter display function
function toggleFilterModal() {
	const filterModal = document.querySelector('.filter-modal');
	const filterButton = document.querySelector('.filter-btn');

	// state verification and change based on it
	if (filterModalOpen) {
		filterModal.style.display = 'none';
	} else {
		filterModal.style.display = 'block';
	}

	filterModalOpen = !filterModalOpen;
}

// search for the cards from API
function searchCards() {
	// get the value from user
	const userInput = document.querySelector('.search-input').value;

	// remove whitespace from value
	const query = userInput.trim();

	// get the filter checkboxes for card types
	const typeCheckboxes = document.querySelectorAll('.type-checkbox');

	// creating an array to store selected types
	const selectedTypes = [];

	// types selected verification
	typeCheckboxes.forEach((checkbox) => {
		if (checkbox.checked) {
			selectedTypes.push(checkbox.value);
		}
	});

	// verify if the search input is empty or no selected types
	if (query !== '' || selectedTypes.length === 0) {
		// encoding to avoid special characters
		const encodedQuery = encodeURIComponent(query);

		// URL for Scryfall API with name searching and type filtering
		let url = `https://api.scryfall.com/cards/search?q=${encodedQuery}`;

		// add the type filter to URL
		if (selectedTypes.length > 0) {
			const encodedTypes = selectedTypes.map((type) =>
				encodeURIComponent(`type:${type}`)
			);

			const typesFilter = encodedTypes.join('+');
			url += `+(${typesFilter})`;
		}

		// make HTTP request to API
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// verifying if there's at least one corresponding card
				if (data.total_cards > 0) {
					// clear the current content
					const cardsContainer = document.querySelector('.cards-container');
					cardsContainer.innerHTML = '';

					// showing images of the cards
					data.data.forEach((card) => {
						if (card.image_uris) {
							const imageUrl = card.image_uris.normal;
							const imgElement = document.createElement('img');
							imgElement.src = imageUrl;
							imgElement.alt = 'Magic: The Gathering Card';
							cardsContainer.appendChild(imgElement);
						}
					});
				} else {
					// in case of card are not found
					alert('No cards to show...');
				}
			})
			.catch((error) => {
				console.error('Erro:', error);
				alert('Something went wrong. Try again later.');
			});
	}
}

// filter-btn click event
const filterButton = document.querySelector('.filter-btn');

filterButton.addEventListener('click', function (e) {
	e.preventDefault();
	toggleFilterModal();
});

// search-btn click event
const searchButon = document.querySelector('.search-btn');

searchButon.addEventListener('click', function (e) {
	e.preventDefault();
	searchCards();
});

// search by using 'Enter' on keyboard event
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keydown', function (e) {
	if (e.key === 'Enter') {
		e.preventDefault();
		searchCards();
	}
});

// filter checkboxes checked event
const typeCheckboxes = document.querySelectorAll('.type-checkbox');

typeCheckboxes.forEach((checkbox) => {
	checkbox.addEventListener('change', function (e) {
		searchCards();
	});
});
