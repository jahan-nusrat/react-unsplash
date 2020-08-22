import axios from 'axios';

export default axios.create({
	baseURL : 'https://api.unsplash.com',
	headers : {
		Authorization : 'Client-ID 38aPnuBAcxsyfqLSd8EJfZak530yLEnXYQlwgQQt6u8'
	}
});
