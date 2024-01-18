javascript: (function () {
  // Variables for UI elements
  var mainModal, cardModal;
  var titleDisplay, taskDisplay, goalDisplay, behaviorsInput, thoughtsInput, timerButton, timerDisplay, ratingButtons, successButton, failButton, prevButton, nextButton, downloadButton;
  var cards = JSON.parse(localStorage.getItem('cards')) || [];
  var currentCard = 0;
  var timerInterval, timerRunning = false;

  // SVG icons
  var activeStarSVG = '<svg width="20" height="20" viewBox="0 0 20 20" fill="#FFD700" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z"/></svg>';
  var inactiveStarSVG = '<svg width="20" height="20" viewBox="0 0 20 20" fill="#ACACAC" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z"/></svg>';
  var successIcon = '<svg width="22" height="20" viewBox="0 0 22 20" fill="#00FF00" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 7H13.69L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.59C6.22 6.95 6 7.45 6 8V18C6 19.1 6.9 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9C22 7.9 21.1 7 20 7ZM20 11L17 18H8V8L12.34 3.66L11.23 9H20V11ZM4 8H0V20H4V8Z"/></svg>';
  var failIcon = '<svg width="22" height="20" viewBox="0 0 22 20" fill="#FF0000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 0H5C4.17 0 3.46 0.5 3.16 1.22L0.14 8.27C0.05 8.5 0 8.74 0 9V11C0 12.1 0.9 13 2 13H8.31L7.36 17.57L7.33 17.89C7.33 18.3 7.5 18.68 7.77 18.95L8.83 20L15.41 13.41C15.78 13.05 16 12.55 16 12V2C16 0.9 15.1 0 14 0ZM14 12L9.66 16.34L10.77 11H2V9L5 2H14V12ZM22 0H18V12H22V0Z"/></svg>';
  var playIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM14 10L8 5.5V14.5L14 10Z" fill="#ACACAC"/></svg>';
  var stopIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 14H14V6H6V14ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0Z" fill="#ACACAC"/></svg>';
  var clearIcon = '<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 10H12V2C12 0.9 11.1 0 10 0H8C6.9 0 6 0.9 6 2V10H5C2.24 10 0 12.24 0 15V22H18V15C18 12.24 15.76 10 13 10ZM16 20H14V17C14 16.45 13.55 16 13 16C12.45 16 12 16.45 12 17V20H10V17C10 16.45 9.55 16 9 16C8.45 16 8 16.45 8 17V20H6V17C6 16.45 5.55 16 5 16C4.45 16 4 16.45 4 17V20H2V15C2 13.35 3.35 12 5 12H13C14.65 12 16 13.35 16 15V20Z" fill="#ACACAC"/></svg>';
  var addIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM11 11H15V9H11V5H9V9H5V11H9V15H11V11Z" fill="#ACACAC"/></svg>';
  var removeIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM5 11H15V9H5V11Z" fill="#ACACAC"/></svg>';
  var leftIcon = '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.835 1.87001L10.055 0.100006L0.165039 10L10.065 19.9L11.835 18.13L3.70504 10L11.835 1.87001Z" fill="#ACACAC"/></svg>'
  var rightIcon = '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.165039 18.13L1.93504 19.9L11.835 10L1.93504 0.100006L0.165039 1.87001L8.29504 10L0.165039 18.13H0.165039Z" fill="#ACACAC"/></svg>'
  var upIcon = '<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0.295013L0 6.29501L1.41 7.70501L6 3.12501L10.59 7.70501L12 6.29501L6 0.295013Z" fill="#ACACAC"/></svg>';
  var downIcon = '<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.59 0.295013L6 4.87501L1.41 0.295013L0 1.70501L6 7.70501L12 1.70501L10.59 0.295013Z" fill="#ACACAC"/></svg>';
  var longLeftIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#ACACAC"/></svg>';
  var longRightIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#ACACAC"/></svg>';
  var saveIcon = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H14L18 4V16C18 17.1 17.1 18 16 18H2C0.89 18 0 17.1 0 16V2C0 0.9 0.89 0 2 0ZM16 16V4.83L13.17 2H2V16H16ZM9 9C7.34 9 6 10.34 6 12C6 13.66 7.34 15 9 15C10.66 15 12 13.66 12 12C12 10.34 10.66 9 9 9ZM12 3H3V7H12V3Z" fill="#ACACAC"/></svg>';
  var diceIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.88281 0C1.29939 0 0 1.28916 0 2.875V17.1172C0 18.703 1.29983 20 2.88281 20H17.125C18.7109 20 20 18.703 20 17.1172V2.875C20 1.28916 18.7113 0 17.125 0H2.88281ZM5.48438 3.53125C6.70605 3.53125 7.67968 4.5127 7.67968 5.73438C7.67968 6.95605 6.70605 7.9375 5.48438 7.9375C4.26272 7.9375 3.28125 6.95604 3.28125 5.73438C3.28125 4.51271 4.26272 3.53125 5.48438 3.53125ZM14.5234 3.53125C15.7451 3.53125 16.7266 4.51271 16.7266 5.73438C16.7266 6.95604 15.7451 7.9375 14.5234 7.9375C13.3018 7.9375 12.3203 6.95605 12.3203 5.73438C12.3203 4.5127 13.3018 3.53125 14.5234 3.53125ZM5.48438 12C6.70605 12 7.67968 12.9863 7.67968 14.2109C7.67968 15.4326 6.70605 16.4141 5.48438 16.4141C4.26272 16.4141 3.28125 15.4326 3.28125 14.2109C3.28125 12.9863 4.26272 12 5.48438 12ZM14.5234 12C15.7451 12 16.7266 12.9863 16.7266 14.2109C16.7266 15.4326 15.7451 16.4141 14.5234 16.4141C13.3018 16.4141 12.3203 15.4326 12.3203 14.2109C12.3203 12.9863 13.3018 12 14.5234 12Z" fill="#ACACAC"/></svg>';
  var downloadIcon = '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 10H12L8 14L4 10H7V0H9V10ZM0 18V16H16V18H0Z" fill="#ACACAC"/></svg>';
  var minimizeIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 19H18V21H6V19Z" fill="#ACACAC"/></svg>';
  var closeIcon = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#ACACAC"/></svg>';
  var menuIcon = '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z" fill="#ACACAC"/></svg>';

  // Save current state to local storage
  function saveToLocalStorage() {
      localStorage.setItem('cards', JSON.stringify(cards));
  }

  // Make an element draggable
  function makeDraggable(element, key) {
      var posX = 0,
          posY = 0,
          posInitialX = 0,
          posInitialY = 0;

      element.onmousedown = function (e) {
          // Check if the click is near the bottom-right corner (20px threshold)
          if (e.clientX < element.offsetLeft + element.offsetWidth - 20 ||
              e.clientY < element.offsetTop + element.offsetHeight - 20) {
              dragMouseDown(e);
          }
      };

      function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();

          // Get initial cursor position:
          posInitialX = e.clientX;
          posInitialY = e.clientY;

          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();

          // Calculate new cursor position:
          posX = posInitialX - e.clientX;
          posY = posInitialY - e.clientY;
          posInitialX = e.clientX;
          posInitialY = e.clientY;

          // Set new position of the element:
          element.style.top = (element.offsetTop - posY) + "px";
          element.style.left = (element.offsetLeft - posX) + "px";
      }

      function closeDragElement() {
          // Stop moving and remove mouse events:
          document.onmouseup = null;
          document.onmousemove = null;

          // Save the current position
          saveModalPositionAndSize(element, key);
      }

      element.onmouseup = function () {
          saveModalPositionAndSize(element, key);
      };
  }

  function saveModalPositionAndSize(modal, key) {
      var modalData = {
          width: modal.offsetWidth,
          height: modal.offsetHeight,
          top: modal.offsetTop,
          left: modal.offsetLeft
      };
      localStorage.setItem(key, JSON.stringify(modalData));
  }

  function restoreModalPositionAndSize(modal, key) {
      var modalData = JSON.parse(localStorage.getItem(key));
      if (modalData) {
          modal.style.width = modalData.width + 'px';
          modal.style.height = modalData.height + 'px';
          modal.style.top = modalData.top + 'px';
          modal.style.left = modalData.left + 'px';
      }
  }

  function createCloseButton(modal) {
      var closeButton = document.createElement('button');
      closeButton.innerHTML = closeIcon;
      closeButton.style.position = 'absolute';
      closeButton.style.top = '10px';
      closeButton.style.right = '10px';
      closeButton.style.border = 'none';
      closeButton.style.background = 'none';
      closeButton.style.cursor = 'pointer';
      closeButton.onclick = function () {
          modal.style.display = 'none';
      };
      return closeButton;
  }

  function createMinimizeButton(modal, buttonId) {
    var minimizeButton = document.createElement('button');
    minimizeButton.innerHTML = minimizeIcon;
    minimizeButton.style.position = 'absolute';
    minimizeButton.style.top = '10px';
    minimizeButton.style.right = '10px';
    minimizeButton.style.border = 'none';
    minimizeButton.style.background = 'none';
    minimizeButton.style.cursor = 'pointer';
    minimizeButton.onclick = function () {
        minimizeModal(modal, buttonId);
    };
    return minimizeButton;
  }


  function shuffleCards() {
      for (let i = cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      currentCard = 0; // Reset to the first card after shuffling
  }

  // Clear / Reset Current card
  function clearCurrentCard() {
      var card = cards[currentCard];
      card.behaviors = '';
      card.thoughts = '';
      card.timeSpent = 0;
      card.rating = 0;
      card.success = null;
      saveToLocalStorage();
      updateCardDisplay();
  }

  // Format milliseconds to time string
  function formatTime(ms) {
      var seconds = Math.floor(ms / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      seconds %= 60;
      minutes %= 60;
      return (hours ? hours + 'h ' : '') + (minutes ? minutes + 'm ' : '') + seconds + 's';
  }

  // Minimize a modal and create a button to reopen it
  function minimizeModal(modal, buttonId) {
      // Hide the modal
      modal.style.display = 'none';

      // Create and show a floating button
      var floatingButton = document.createElement('button');
      floatingButton.id = buttonId;
      floatingButton.textContent = 'Open';
      floatingButton.style.position = 'fixed';
      floatingButton.style.bottom = '20px';
      floatingButton.style.left = '20px';
      floatingButton.style.borderRadius = '50%';
      floatingButton.style.width = '50px';
      floatingButton.style.height = '50px';
      floatingButton.style.backgroundColor = 'blue';
      floatingButton.style.color = 'white';
      floatingButton.style.border = 'none';
      floatingButton.style.cursor = 'pointer';
      floatingButton.onclick = function () {
          // Show the modal and remove the button
          modal.style.display = 'flex';
          floatingButton.remove();
      };
      document.body.appendChild(floatingButton);
  }

  // Apply styles to a modal
  function applyModalStyles(modal) {
      modal.style.position = 'fixed';
      modal.style.top = '10%';
      modal.style.left = '10%';
      modal.style.backgroundColor = 'white';
      modal.style.padding = '20px';
      modal.style.zIndex = '1000';
      modal.style.overflow = 'auto';
      modal.style.border = '1px solid black';
      modal.style.borderRadius = '10px';
      modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
      modal.style.display = 'flex';
      modal.style.flexDirection = 'column';
      modal.style.alignItems = 'center';
      modal.style.resize = 'both'; // Enable resizing
      modal.style.overflow = 'auto'; // Add scrollbars when content overflows
  }

  // Create and display the card management modal
  function createManageCardsModal() {
      var manageModal = document.createElement('div');
      applyModalStyles(manageModal);
      makeDraggable(manageModal, 'manageModalData');
      restoreModalPositionAndSize(manageModal, 'manageModalData');
      manageModal.innerHTML = '<h3>Manage Testing Cards</h3>';

      var table = document.createElement('table');
      cards.forEach(function (card, index) {
          var row = table.insertRow();
          createCell(row, 0, card.title, index, 'title');
          createCell(row, 1, card.task, index, 'task');
          createCell(row, 2, card.goal, index, 'goal');
          var deleteButton = document.createElement('button');
          deleteButton.innerHTML = removeIcon;
          deleteButton.onclick = function () {
              cards.splice(index, 1);
              saveToLocalStorage();
              manageModal.removeChild(table);
              createManageCardsModal(); // Recreate the modal to refresh the view
          };
          var cell = row.insertCell(3);
          cell.appendChild(deleteButton);
      });

      var addButton = document.createElement('button');
      addButton.innerHTML = addIcon;
      addButton.onclick = function () {
          cards.push({
              title: '',
              task: '',
              goal: '',
              behaviors: '',
              thoughts: '',
              success: null,
              rating: 0,
              timeSpent: 0
          });
          saveToLocalStorage();
          manageModal.removeChild(table);
          createManageCardsModal(); // Recreate the modal to refresh the view
      };

      var saveButton = document.createElement('button');
      saveButton.innerHTML = saveIcon;
      saveButton.onclick = function () {
          saveToLocalStorage();
          alert('Changes saved!');
      };

      var resetButton = document.createElement('button');
      resetButton.innerHTML = clearIcon;
      resetButton.onclick = function () {
          if (confirm('Are you sure you want to reset all data?')) {
              cards = [];
              saveToLocalStorage();
              manageModal.removeChild(table);
              createManageCardsModal(); // Recreate the modal to refresh the view
          }
      };

      var backButton = document.createElement('button');
      backButton.innerHTML = leftIcon;
      backButton.onclick = function () {
          console.log("Back to Main Menu Clicked");
          manageModal.style.display = 'none';
          mainModal.style.display = 'flex';
      };

      // Create the first flex container for manage testing cards
      var navigationButtons = document.createElement('div');
      navigationButtons.style.display = 'flex';
      navigationButtons.style.justifyContent = 'space-around';
      navigationButtons.style.alignItems = 'center';
      navigationButtons.style.gap = '8px';
      navigationButtons.style.marginTop = '10px';

      // Add the shuffle, prev, and next buttons to the first container
      navigationButtons.appendChild(addButton);
      navigationButtons.appendChild(resetButton);
      navigationButtons.appendChild(saveButton);

      manageModal.appendChild(table);
      manageModal.appendChild(navigationButtons);
      manageModal.appendChild(backButton);

      document.body.appendChild(manageModal);

      // Restore modal size and position
      restoreModalPositionAndSize(cardModal);

      manageModal.appendChild(createCloseButton(manageModal));
      manageModal.appendChild(createMinimizeButton(manageModal, 'manageCardsModalButton'));
  }

  // Create an input cell for the table
  function createCell(row, index, text, cardIndex, field) {
      var cell = row.insertCell(index);
      var input = document.createElement('input');
      input.type = 'text';
      input.value = text;
      input.onchange = function () {
          cards[cardIndex][field] = input.value;
          saveToLocalStorage();
      };
      cell.appendChild(input);
  }

  // Create and display the main view modal
  function createMainView() {
      mainModal = document.createElement('div');
      applyModalStyles(mainModal);
      makeDraggable(mainModal, 'mainModalData');
      restoreModalPositionAndSize(mainModal, 'mainModalData');
      mainModal.innerHTML = '<h2>Main Menu</h2>';

      var manageCardsButton = document.createElement('button');
      manageCardsButton.textContent = 'Manage Testing Cards';
      manageCardsButton.onclick = function () {
          mainModal.style.display = 'none';
          createManageCardsModal();
      };

      var viewCardsButton = document.createElement('button');
      viewCardsButton.textContent = 'View Testing Cards';
      viewCardsButton.onclick = function () {
          console.log("View Testing Cards Clicked");
          mainModal.style.display = 'none';
          createCardViewModal();
      };

      mainModal.appendChild(manageCardsButton);
      mainModal.appendChild(viewCardsButton);
      document.body.appendChild(mainModal);

      // Restore modal size and position
      restoreModalPositionAndSize(cardModal);

      mainModal.appendChild(createCloseButton(mainModal));
      mainModal.appendChild(createMinimizeButton(mainModal, 'mainModalButton'));
  }

  // Create and display the card view modal
  function createCardViewModal() {
      cards = JSON.parse(localStorage.getItem('cards')) || [];
      currentCard = 0; // Reset to the first card

      console.log("Creating Card View Modal");
      cardModal = document.createElement('div');
      applyModalStyles(cardModal);
      makeDraggable(cardModal, 'cardModalData');
      restoreModalPositionAndSize(cardModal, 'cardModalData');
      cardModal.innerHTML = '<h3>Card View</h3>';

      // Create elements before using them in updateCardDisplay
      titleDisplay = document.createElement('div');
      taskDisplay = document.createElement('div');
      goalDisplay = document.createElement('div');
      var behaviorsLabel = document.createElement('label');
      behaviorsLabel.textContent = 'Behaviors:';
      behaviorsLabel.setAttribute('for', 'behaviorsInput');
      behaviorsInput = document.createElement('textarea');
      behaviorsInput.id = 'behaviorsInput';
      behaviorsInput.onchange = function () {
          if (cards.length > 0) {
              cards[currentCard].behaviors = behaviorsInput.value;
              saveToLocalStorage();
          }

          clearButton = document.createElement('button');
          clearButton.textContent = 'Clear';
          clearButton.onclick = function () {
              if (cards.length > 0) {
                  clearCurrentCard();
              }
          };
          cardModal.appendChild(clearButton);
      };

      clearButton = document.createElement('button');
      clearButton.innerHTML = clearIcon;

      clearButton.onclick = function () {
          if (cards.length > 0) {
              clearCurrentCard();
          }
      };
      cardModal.appendChild(clearButton);

      var thoughtsLabel = document.createElement('label');
      thoughtsLabel.textContent = 'Thoughts:';
      thoughtsLabel.setAttribute('for', 'thoughtsInput');
      thoughtsInput = document.createElement('textarea');
      thoughtsInput.id = 'thoughtsInput';
      thoughtsInput.onchange = function () {
          if (cards.length > 0) {
              cards[currentCard].thoughts = thoughtsInput.value;
              saveToLocalStorage();
          }
      };
      timerButton = document.createElement('button');
      timerDisplay = document.createElement('p');
      ratingButtons = document.createElement('div');
      ratingButtons.style.display = 'flex';

      for (let i = 1; i <= 5; i++) {
          let btn = createRatingButton(i, currentCard);
          btn.classList.add('rating-button');
          ratingButtons.appendChild(btn);
      }

      successButton = document.createElement('button');
      successButton.innerHTML = successIcon;

      failButton = document.createElement('button');
      failButton.innerHTML = failIcon;

      prevButton = document.createElement('button');
      prevButton.innerHTML = longLeftIcon;

      nextButton = document.createElement('button');
      nextButton.innerHTML = longRightIcon;

      downloadButton = document.createElement('button');
      downloadButton.innerHTML = downloadIcon

      var shuffleButton = document.createElement('button');
      shuffleButton.innerHTML = diceIcon;
      shuffleButton.onclick = function () {
          shuffleCards();
          updateCardDisplay();
      };

      // Create the first flex container for shuffle, prev, next buttons
      var navigationButtons = document.createElement('div');
      navigationButtons.style.display = 'flex';
      navigationButtons.style.justifyContent = 'space-around';
      navigationButtons.style.alignItems = 'center';
      navigationButtons.style.gap = '8px';
      navigationButtons.style.marginTop = '10px';

      // Add the shuffle, prev, and next buttons to the first container
      navigationButtons.appendChild(prevButton);
      navigationButtons.appendChild(shuffleButton);
      navigationButtons.appendChild(nextButton);

      // Create the second flex container for success and fail buttons
      var successFailButtons = document.createElement('div');
      successFailButtons.style.display = 'flex';
      successFailButtons.style.justifyContent = 'space-around';
      successFailButtons.style.alignItems = 'center';
      successFailButtons.style.gap = '8px';
      successFailButtons.style.marginTop = '10px';

      // Add the success and fail buttons to the second container
      successFailButtons.appendChild(failButton);
      successFailButtons.appendChild(successButton);

      cardModal.appendChild(titleDisplay);
      cardModal.appendChild(taskDisplay);
      cardModal.appendChild(goalDisplay);
      cardModal.appendChild(behaviorsLabel); // Add behaviors label
      cardModal.appendChild(behaviorsInput); // Add behaviors textarea
      cardModal.appendChild(thoughtsLabel); // Add thoughts label
      cardModal.appendChild(thoughtsInput); // Add thoughts textarea
      cardModal.appendChild(ratingButtons);
      cardModal.appendChild(timerButton);
      cardModal.appendChild(timerDisplay);
      cardModal.appendChild(successFailButtons);
      cardModal.appendChild(navigationButtons);
      cardModal.appendChild(downloadButton);

      timerButton.innerHTML = playIcon;

      var backButton = document.createElement('button');
      backButton.innerHTML = leftIcon;
      backButton.onclick = function () {
          console.log("Back to Main Menu Clicked");
          cardModal.style.display = 'none';
          mainModal.style.display = 'flex';
      };
      cardModal.appendChild(backButton);

      if (cards.length > 0) {
          updateCardDisplay();
          updateRatingButtons();
          setButtonFunctions();
      } else {
          handleEmptyState();
      }

      // Restore modal size and position
      restoreModalPositionAndSize(cardModal);

      cardModal.appendChild(createCloseButton(cardModal));
      cardModal.appendChild(createMinimizeButton(cardModal, 'cardViewModalButton'));

      document.body.appendChild(cardModal);
  }

  // Handle empty state for card view
  function handleEmptyState() {
      titleDisplay.textContent = 'No cards available';
      taskDisplay.textContent = '';
      goalDisplay.textContent = '';
      behaviorsInput.value = '';
      thoughtsInput.value = '';
      timerDisplay.textContent = '';
      ratingButtons.style.display = 'none';
      successButton.style.display = 'none';
      failButton.style.display = 'none';
      prevButton.style.display = 'none';
      nextButton.style.display = 'none';
      timerButton.style.display = 'none';
  }

  // Create a rating button
  function createRatingButton(idx, cardIndex) {
      var button = document.createElement('button');
      button.innerHTML = idx <= (cards[cardIndex] ? .rating || 0) ? activeStarSVG : inactiveStarSVG;
      button.onclick = function () {
          cards[cardIndex].rating = idx;
          updateRatingButtons(cardIndex);
          saveToLocalStorage();
      };
      return button;
  }

  // Update rating buttons display
  function updateRatingButtons(cardIndex) {
      var ratingButtons = document.querySelectorAll('.rating-button');
      for (var i = 0; i < ratingButtons.length; i++) {
          ratingButtons[i].innerHTML = i < (cards[cardIndex].rating || 0) ? activeStarSVG : inactiveStarSVG;
      }
  }

  // Set functions for navigation and other buttons
  function setButtonFunctions() {
      prevButton.onclick = function () {
          clearInterval(timerInterval);
          timerRunning = false;
          currentCard = (currentCard - 1 + cards.length) % cards.length;
          updateCardDisplay();
      };

      nextButton.onclick = function () {
          clearInterval(timerInterval);
          timerRunning = false;
          currentCard = (currentCard + 1) % cards.length;
          if (!cards[currentCard].timeSpent) {
              cards[currentCard].timeSpent = 0;
          }
          updateCardDisplay();
      };

      timerButton.onclick = function () {
          if (!timerRunning) {
              var startTime = Date.now() - cards[currentCard].timeSpent;
              timerInterval = setInterval(function () {
                  var elapsedTime = Date.now() - startTime;
                  cards[currentCard].timeSpent = elapsedTime;
                  timerDisplay.textContent = 'Time Elapsed: ' + formatTime(elapsedTime);
              }, 1000);
              timerButton.innerHTML = stopIcon;
              timerRunning = true;
          } else {
              clearInterval(timerInterval);
              timerButton.innerHTML = playIcon;
              timerRunning = false;
              saveToLocalStorage();
          }
      };

      successButton.onclick = function () {
          cards[currentCard].success = true;
          updateSuccessFailButtons();
          saveToLocalStorage();
      };

      failButton.onclick = function () {
          cards[currentCard].success = false;
          updateSuccessFailButtons();
          saveToLocalStorage();
      };

      downloadButton.onclick = downloadCSV;
  }

  // Update the card display
  function updateCardDisplay() {
      if (currentCard < cards.length) {
          var card = cards[currentCard];
          titleDisplay.textContent = 'Title: ' + card.title;
          taskDisplay.textContent = 'Task: ' + card.task;
          goalDisplay.textContent = 'Goal: ' + card.goal;
          behaviorsInput.value = card.behaviors;
          thoughtsInput.value = card.thoughts;
          timerDisplay.textContent = 'Time Spent: ' + formatTime(card.timeSpent);
          ratingButtons.innerHTML = ''; // Clear existing buttons
          for (let i = 1; i <= 5; i++) {
              let btn = createRatingButton(i, currentCard);
              btn.classList.add('rating-button');
              ratingButtons.appendChild(btn);
          }

          updateSuccessFailButtons();
      } else {
          titleDisplay.textContent = 'No cards available';
          taskDisplay.textContent = '';
          goalDisplay.textContent = '';
          behaviorsInput.value = '';
          thoughtsInput.value = '';
          timerDisplay.textContent = '';
      }
  }

  // Update success and fail button displays
  function updateSuccessFailButtons() {
      if (cards.length === 0) return;
      successButton.firstChild.setAttribute('fill', cards[currentCard].success === true ? '#00FF00' : '#ACACAC');
      failButton.firstChild.setAttribute('fill', cards[currentCard].success === false ? '#FF0000' : '#ACACAC');
  }

  // Function to download card data as CSV
  function downloadCSV() {
      var csvContent = 'data:text/csv;charset=utf-8,';
      csvContent += 'Title,Task,Goal,Behaviors,Thoughts,Success,Rating,Time Spent\n'; // Header

      cards.forEach(function (card) {
          var successText = card.success ? 'Success' : (card.success === false ? 'Fail' : '');
          var timeSpentFormatted = formatTime(card.timeSpent); // Format time spent
          // Escape potential commas in text fields
          var title = card.title.replace(/,/g, ';');
          var task = card.task.replace(/,/g, ';');
          var goal = card.goal.replace(/,/g, ';');
          var behaviors = card.behaviors.replace(/,/g, ';');
          var thoughts = card.thoughts.replace(/,/g, ';');

          csvContent += `"${title}","${task}","${goal}","${behaviors}","${thoughts}","${successText}","${card.rating}","${timeSpentFormatted}"\n`;
      });

      var encodedUri = encodeURI(csvContent);
      var link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'test_cards_data.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  // Initialize the main view
  createMainView();
})();