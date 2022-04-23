const toggleSwitch = document.querySelector('input[type = "checkbox"]')

// Dark or Light Images

const imageMode = color => {
	image1.src = `img/undraw_proud_coder_${color}.svg`
	image2.src = `img/undraw_feeling_proud_${color}.svg`
	image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

// Dark Mode Styles
const darkMode = () => {
	nav.style.backgroundColor = "rgb(0 0 0 / 50%)"
	textBox.style.backgroundColor = "rgb(255 255 255 / 50%)"
	toggleIcon.children[0].textContent = "Dark Mode"
	toggleIcon.children[1].classList.replace("fa sun", "fa moon")
	imageMode("dark")
}

// Light Mode Styles
const lightMode = () => {
	nav.style.backgroundColor = "rgb(255 255 255 / 50%)"
	textBox.style.backgroundColor = "rgb(0 0 0 / 50%)"
	toggleIcon.children[0].textContent = "Light Mode"
	toggleIcon.children[1].classList.replace("fa moon", "fa sun")
	imageMode("light")
}

// Switch Theme Dynamically
const switchTheme = event => {
	if (event.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark")
	} else [document.documentElement.setAttribute("data-theme", "light")]
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme)
