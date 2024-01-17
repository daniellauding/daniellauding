javascript:(function() {
  // Array of cards
  var cards = [
      '<div>Card 1 Content</div>',
      '<div>Card 2 Content</div>',
      // Add more cards as needed
  ];

  // Current card index
  var currentCard = 0;

  // Create overlay
  var overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  overlay.style.zIndex = '1000';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  // Create card container
  var cardContainer = document.createElement('div');
  cardContainer.style.backgroundColor = '#fff';
  cardContainer.style.padding = '20px';
  cardContainer.style.borderRadius = '5px';
  cardContainer.innerHTML = cards[currentCard];
  overlay.appendChild(cardContainer);

  // Next button
  var nextButton = document.createElement('button');
  nextButton.innerText = 'Next';
  nextButton.onclick = function() {
      currentCard = (currentCard + 1) % cards.length;
      cardContainer.innerHTML = cards[currentCard];
  };
  cardContainer.appendChild(nextButton);

  // Close button
  var closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.onclick = function() {
      document.body.removeChild(overlay);
  };
  cardContainer.appendChild(closeButton);

  // Append overlay to body
  document.body.appendChild(overlay);
})();
