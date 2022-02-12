const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');



let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice){
	localStorage.setItem('selectedMovieIndex',movieIndex );
	localStorage.setItem('selectedMoviePrice', moviePrice );
}
// Update total and count
function updateSelectedCount(){
	const selectedSeats = document.querySelectorAll('.row .selected');

	// Copy selected seats into an array
	// Map through the array
	// return a new array of indexes
	const seatsIndex = [...selectedSeats].map(asiento =>[...seats].indexOf(asiento));

	// storing values in local storage
	localStorage.setItem('asientosSelectos', JSON.stringify(seatsIndex));


	const selectedSeatsCount = selectedSeats.length;
	count.innerText = selectedSeatsCount;
	total.innerText = selectedSeatsCount * ticketPrice;
}


// Movie select event
movieSelect.addEventListener('change', e => {
	ticketPrice = +e.target.value;
	setMovieData(e.target.selectedIndex, e.target.value);
	updateSelectedCount();
})
// Seat click event
container.addEventListener('click', e =>{
	if(e.target.classList.contains('seat')
	 && !e.target.classList.contains('occupied'))
	 {
		e.target.classList.toggle('selected');
		updateSelectedCount();
	}
})