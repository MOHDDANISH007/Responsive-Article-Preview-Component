// Select the share button and the share box
const shareButton = document.querySelector('.share-icon');
const shareBox = document.querySelector('.share-box');
// const visi = shareBox.setAttribute("style", "display: visible;");

// Add event listener to toggle the share box visibility
shareButton.addEventListener('click', function() {
    shareBox.classList.toggle('visible'); // Toggle the visibility
    if(shareBox.classList.contains('visible')){
        shareBox.classList.remove('hidden');
    }else{
        shareBox.classList.toggle('hidden');
    }
});
