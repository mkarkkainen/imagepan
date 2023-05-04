const dots = document.querySelectorAll('.dot')
const panner = document.getElementById('left')

dots.forEach((dot) => {
	dot.addEventListener('click', () => {
		dots.forEach((dot) => dot.classList.remove('animation'))
		panner.classList.remove('animation')
	})
})
