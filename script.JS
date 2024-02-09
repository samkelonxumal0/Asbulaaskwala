const loveQuotes = [
    "u make me smile on a cloudy day.",
    "I love you more than words can say.",
    "DO U AGREE TO BE WITH ME FOREVER."
 ];
 
 const quoteElement = document.getElementById('quote');
 const newQuoteButton = document.getElementById('new-quote');
 
 newQuoteButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    quoteElement.textContent = loveQuotes[randomIndex];
 });