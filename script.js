const counter = document.getElementById('counter')
	const incBtn = document.getElementById('inc')
	const resBtn = document.getElementById('res')
	const decBtn = document.getElementById('dec')
	


	let cValue = 0;
	incBtn.addEventListener('click', function (event) {
        cValue += 1;
        var audio = new Audio("sounds/incSound.wav");
        audio.play();
        counter.innerHTML = cValue;
        
	})
	decBtn.addEventListener('click', function (event) {
        cValue -= 1;
        var audio = new Audio("sounds/decSound.wav");
        audio.play();
		counter.innerHTML = cValue;
	})
	resBtn.addEventListener('click', function (event) {
        cValue = 0;
        var audio = new Audio("sounds/resSound.wav");
        audio.play();
		counter.innerHTML = cValue;
    })
    