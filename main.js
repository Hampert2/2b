// function openGoogleSearch() {
//     const query = document.getElementById('search-input').value;
//     const url = `https://www.google.com/search?q=${query}`;
//     window.open(url, '_blank');
// }

// function handleKeyPress(event) {
//     if (event.key === 'Enter') {
//         openGoogleSearch();
//     }
// }

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('hidden-input').value = document.getElementById('search-input').value;
        document.getElementById('search-form').submit();
    }
}

const colors = [
    'linear-gradient(45deg, #FF7E5F, #FEB47B, #FFD194)',
    'linear-gradient(45deg, #00C9FF, #92FE9D, #00F5A0)',
    'linear-gradient(45deg, #F6F7D7, #FFD55E, #FF8C00)',
    'linear-gradient(45deg, #D4FC79, #96E6A1, #00F260)',
    'linear-gradient(45deg, #FFAFBD, #FFC3A0, #FFEB3B)',
    'linear-gradient(45deg, #FF7E5F, #FEB47B, #FFD194, #00C9FF, #92FE9D, #00F5A0, #F6F7D7, #FFD55E, #FF8C00, #D4FC79, #96E6A1, #00F260, #FFAFBD, #FFC3A0, #FFEB3B'
  ];

  let currentColorIndex = 0;

  function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.querySelector('.border-animation').style.background = colors[currentColorIndex];
  }