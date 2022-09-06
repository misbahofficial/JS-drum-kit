function removeTransition(e) {
    // console.log(e)
    if (e.propertyName !== 'transform') return; // skip the function
    e.target.classList.remove('playing');
}

    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return; // skip the function

        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);



// window.addEventListener('keydown', function(e){
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     if(!audio) return;
//     key.classList.add('playing');
//     audio.currenTime = 0;
//     audio.play()
    
//     // setTimeout(function(){
//     //     key.classList.remove('playing');
//     // }, 0.07)
// })

// function removeTransition(e){
//     if(e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

