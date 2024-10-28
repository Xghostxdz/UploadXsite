// JavaScript to handle scene transitions
let currentScene = 1;

function nextScene(sceneNumber) {
    document.getElementById(`scene${currentScene}`).classList.remove('active');
    currentScene = sceneNumber;
    document.getElementById(`scene${currentScene}`).classList.add('active');
}

// Start with the first scene
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById(`scene${currentScene}`).classList.add('active');
});
