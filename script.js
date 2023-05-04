const dots = document.querySelectorAll('.dot')
const panner = document.getElementById('left')

dots.forEach((dot) => {
	dot.addEventListener('click', (e) => {
		console.log(e)
	})
})
