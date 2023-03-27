const BASE_URL = 'http://localhost:5000';

const fetchCharacters = () => {
	return fetch('http://localhost:5000/characters', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.log(error);
		});
};

document.addEventListener('DOMContentLoaded', async () => {
	const charactersDiv = document.getElementById('characters');

	fetchCharacters().then((characters) => {
		const header = document.createElement('h1');
		header.innerText = 'Fetched characters';

		charactersDiv.append(header);

		// const modifiedCharacters = characters.map((character) => {
		// 	const paragraph = document.createElement('p');
		// 	paragraph.innerText = character.name;
		// 	charactersDiv.appendChild(paragraph);

		// });
		characters.forEach((character) => {
			const paragraph = document.createElement('p');
			paragraph.innerText = character.name;
			paragraph.innerHTML = `<span>${character.votes}</span>`;
			charactersDiv.appendChild(paragraph);
		});

		for (let index = 0; index < characters.length; index++) {
			const character = characters[index];
			const image = document.createElement('img');
			image.src = character.image;
			image.style.width = 100;
			image.style.height = 100;
			// paragraph.innerHTML = `<span>${character.votes}</span>`;
			charactersDiv.appendChild(image);
		}

		// charactersDiv.innerHTML = `<h1>Fetched characters</h1>`;
		// charactersDiv.innerHTML = characters.map((character) => {
		// 	console.log(character);
		// 	return `<p>${character.name}</p>`;
		// });
	});
});
