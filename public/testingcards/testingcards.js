javascript:(function() {
  var mainModal, cardModal;
  var titleDisplay, taskDisplay, goalDisplay, behaviorsInput, thoughtsInput, timerButton, timerDisplay, ratingButtons, successButton, failButton, prevButton, nextButton, downloadButton;
  var cards = JSON.parse(localStorage.getItem('cards')) || [];

var currentCard = 0;
var timerInterval, timerRunning = false;
var activeStarSVG = '<svg width="20" height="20" viewBox="0 0 20 20" fill="#FFD700" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z"/></svg>';
var inactiveStarSVG = '<svg width="20" height="20" viewBox="0 0 20 20" fill="#ACACAC" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z"/></svg>';
var successIcon = '<svg width="22" height="20" viewBox="0 0 22 20" fill="#00FF00" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 7H13.69L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.59C6.22 6.95 6 7.45 6 8V18C6 19.1 6.9 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9C22 7.9 21.1 7 20 7ZM20 11L17 18H8V8L12.34 3.66L11.23 9H20V11ZM4 8H0V20H4V8Z"/></svg>';
var failIcon = '<svg width="22" height="20" viewBox="0 0 22 20" fill="#FF0000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 0H5C4.17 0 3.46 0.5 3.16 1.22L0.14 8.27C0.05 8.5 0 8.74 0 9V11C0 12.1 0.9 13 2 13H8.31L7.36 17.57L7.33 17.89C7.33 18.3 7.5 18.68 7.77 18.95L8.83 20L15.41 13.41C15.78 13.05 16 12.55 16 12V2C16 0.9 15.1 0 14 0ZM14 12L9.66 16.34L10.77 11H2V9L5 2H14V12ZM22 0H18V12H22V0Z"/></svg>';

  function saveToLocalStorage() {
      localStorage.setItem('cards', JSON.stringify(cards));
  }

function formatTime(ms) {
  var seconds = Math.floor(ms / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  seconds %= 60;
  minutes %= 60;
  return (hours ? hours + 'h ' : '') + (minutes ? minutes + 'm ' : '') + seconds + 's';
}


  // Function to apply styles to modals
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
  }

  function createManageCardsModal() {
      var manageModal = document.createElement('div');
      applyModalStyles(manageModal);
      manageModal.innerHTML = '<h3>Manage Testing Cards</h3>';

      var table = document.createElement('table');
      cards.forEach(function(card, index) {
          var row = table.insertRow();
          createCell(row, 0, card.title, index, 'title');
          createCell(row, 1, card.task, index, 'task');
          createCell(row, 2, card.goal, index, 'goal');
          var deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.onclick = function() {
              cards.splice(index, 1);
              saveToLocalStorage();
              manageModal.removeChild(table);
              createManageCardsModal(); // Recreate the modal to refresh the view
          };
          var cell = row.insertCell(3);
          cell.appendChild(deleteButton);
      });

      var addButton = document.createElement('button');
      addButton.textContent = 'Add Row';
      addButton.onclick = function() {
          cards.push({ title: '', task: '', goal: '', behaviors: '', thoughts: '', success: null, rating: 0, timeSpent: 0 });
          saveToLocalStorage();
          manageModal.removeChild(table);
          createManageCardsModal(); // Recreate the modal to refresh the view
      };

      var saveButton = document.createElement('button');
      saveButton.textContent = 'Save Changes';
      saveButton.onclick = function() {
          saveToLocalStorage();
          alert('Changes saved!');
      };

      var resetButton = document.createElement('button');
      resetButton.textContent = 'Reset';
      resetButton.onclick = function() {
          if(confirm('Are you sure you want to reset all data?')) {
              cards = [];
              saveToLocalStorage();
              manageModal.removeChild(table);
              createManageCardsModal(); // Recreate the modal to refresh the view
          }
      };

      var backButton = document.createElement('button');
      backButton.textContent = 'Back to Main Menu';
      backButton.onclick = function() {
          console.log("Back to Main Menu Clicked");
          manageModal.style.display = 'none';
          mainModal.style.display = 'flex';
      };

      manageModal.appendChild(table);
      manageModal.appendChild(addButton);
      manageModal.appendChild(saveButton);
      manageModal.appendChild(resetButton);
      manageModal.appendChild(backButton);

      document.body.appendChild(manageModal);
  }

  function createCell(row, index, text, cardIndex, field) {
      var cell = row.insertCell(index);
      var input = document.createElement('input');
      input.type = 'text';
      input.value = text;
      input.onchange = function() {
          cards[cardIndex][field] = input.value;
          saveToLocalStorage();
      };
      cell.appendChild(input);
  }

  // Main view setup
  function createMainView() {
      mainModal = document.createElement('div');
      applyModalStyles(mainModal);
      mainModal.innerHTML = '<h2>Main Menu</h2>';

      var manageCardsButton = document.createElement('button');
      manageCardsButton.textContent = 'Manage Testing Cards';
      manageCardsButton.onclick = function() {
          mainModal.style.display = 'none';
          createManageCardsModal();
      };

      var viewCardsButton = document.createElement('button');
      viewCardsButton.textContent = 'View Testing Cards';
      viewCardsButton.onclick = function() {
          console.log("View Testing Cards Clicked");
          mainModal.style.display = 'none';
          createCardViewModal();
      };

      mainModal.appendChild(manageCardsButton);
      mainModal.appendChild(viewCardsButton);
      document.body.appendChild(mainModal);
  }

  // Function to create the card viewing modal
  function createCardViewModal() {
      cards = JSON.parse(localStorage.getItem('cards')) || [];
      currentCard = 0; // Reset to the first card

      console.log("Creating Card View Modal");
      cardModal = document.createElement('div');
      applyModalStyles(cardModal);
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
  behaviorsInput.onchange = function() {
      if (cards.length > 0) {
          cards[currentCard].behaviors = behaviorsInput.value;
          saveToLocalStorage();
      }
  };

  var thoughtsLabel = document.createElement('label');
  thoughtsLabel.textContent = 'Thoughts:';
  thoughtsLabel.setAttribute('for', 'thoughtsInput');
  thoughtsInput = document.createElement('textarea');
  thoughtsInput.id = 'thoughtsInput';
  thoughtsInput.onchange = function() {
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
      let btn = createRatingButton(i);
      btn.classList.add('rating-button');
      ratingButtons.appendChild(btn);
  }

  successButton = document.createElement('button');
  successButton.innerHTML = successIcon;
  // successButton.onclick = function() {
  //     cards[currentCard].success = true;
  //     updateSuccessFailButtons();
  //     saveToLocalStorage();
  // };

  failButton = document.createElement('button');
  failButton.innerHTML = failIcon;
  // failButton.onclick = function() {
  //     cards[currentCard].success = false;
  //     updateSuccessFailButtons();
  //     saveToLocalStorage();
  // };

  prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  // prevButton.onclick = function() {
  //     clearInterval(timerInterval);
  //     timerRunning = false;
  //     currentCard = (currentCard - 1 + cards.length) % cards.length;
  //     updateCardDisplay();
  // };

  nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  // nextButton.onclick = function() {
  //     clearInterval(timerInterval);
  //     timerRunning = false;
  //     currentCard = (currentCard + 1) % cards.length;
  //     if (!cards[currentCard].timeSpent) {
  //         cards[currentCard].timeSpent = 0;
  //     }
  //     updateCardDisplay();
  // };

  downloadButton = document.createElement('button');
  downloadButton.textContent = 'Download Data (CSV)';
  // downloadButton.onclick = downloadCSV;

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
  cardModal.appendChild(successButton);
  cardModal.appendChild(failButton);
  cardModal.appendChild(prevButton);
  cardModal.appendChild(nextButton);
  cardModal.appendChild(downloadButton);

    timerButton.textContent = 'Start Timer';
  //   timerButton.onclick = function() {
  //       if (!timerRunning) {
  //           var startTime = Date.now() - cards[currentCard].timeSpent;
  //           timerInterval = setInterval(function() {
  //               var elapsedTime = Date.now() - startTime;
  //               cards[currentCard].timeSpent = elapsedTime;
  //               timerDisplay.textContent = 'Time Elapsed: ' + formatTime(elapsedTime);
  //           }, 1000);
  //           timerButton.textContent = 'Stop Timer';
  //           timerRunning = true;
  //       } else {
  //           clearInterval(timerInterval);
  //           timerButton.textContent = 'Start Timer';
  //           timerRunning = false;
  //           saveToLocalStorage();
  //       }
  //   };

    var backButton = document.createElement('button');
    backButton.textContent = 'Back to Main Menu';
    backButton.onclick = function() {
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

    document.body.appendChild(cardModal);
  }

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

  function createRatingButton(idx) {
      var button = document.createElement('button');
      button.innerHTML = idx <= (cards[currentCard]?.rating || 0) ? activeStarSVG : inactiveStarSVG;
      button.onclick = function() {
          if (cards.length > 0) {
              cards[currentCard].rating = idx;
              updateRatingButtons();
              saveToLocalStorage();
          }
      };
      return button;
  }

  function updateRatingButtons() {
      if (cards.length === 0) {
          return; // Exit if there are no cards
      }
      var ratingButtons = document.querySelectorAll('.rating-button');
      for (var i = 0; i < ratingButtons.length; i++) {
          ratingButtons[i].innerHTML = i < (cards[currentCard].rating || 0) ? activeStarSVG : inactiveStarSVG;
      }
  }


  function setButtonFunctions() {
      prevButton.onclick = function() {
          clearInterval(timerInterval);
          timerRunning = false;
          currentCard = (currentCard - 1 + cards.length) % cards.length;
          updateCardDisplay();
      };
  
      nextButton.onclick = function() {
          clearInterval(timerInterval);
          timerRunning = false;
          currentCard = (currentCard + 1) % cards.length;
          if (!cards[currentCard].timeSpent) {
              cards[currentCard].timeSpent = 0;
          }
          updateCardDisplay();
      };
  
      timerButton.onclick = function() {
          if (!timerRunning) {
              var startTime = Date.now() - cards[currentCard].timeSpent;
              timerInterval = setInterval(function() {
                  var elapsedTime = Date.now() - startTime;
                  cards[currentCard].timeSpent = elapsedTime;
                  timerDisplay.textContent = 'Time Elapsed: ' + formatTime(elapsedTime);
              }, 1000);
              timerButton.textContent = 'Stop Timer';
              timerRunning = true;
          } else {
              clearInterval(timerInterval);
              timerButton.textContent = 'Start Timer';
              timerRunning = false;
              saveToLocalStorage();
          }
      };
  
      successButton.onclick = function() {
          cards[currentCard].success = true;
          updateSuccessFailButtons();
          saveToLocalStorage();
      };
  
      failButton.onclick = function() {
          cards[currentCard].success = false;
          updateSuccessFailButtons();
          saveToLocalStorage();
      };
  
      downloadButton.onclick = downloadCSV;
  }
  

  function updateCardDisplay() {
      if (currentCard < cards.length) {
          var card = cards[currentCard];
          titleDisplay.textContent = 'Title: ' + card.title;
          taskDisplay.textContent = 'Task: ' + card.task;
          goalDisplay.textContent = 'Goal: ' + card.goal;
          behaviorsInput.value = card.behaviors;
          thoughtsInput.value = card.thoughts;
          timerDisplay.textContent = 'Time Spent: ' + formatTime(card.timeSpent);
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

  function updateSuccessFailButtons() {
      if (cards.length === 0) return;
      successButton.firstChild.setAttribute('fill', cards[currentCard].success === true ? '#00FF00' : '#ACACAC');
      failButton.firstChild.setAttribute('fill', cards[currentCard].success === false ? '#FF0000' : '#ACACAC');
  }

  function downloadCSV() {
      var csvContent = 'data:text/csv;charset=utf-8,';
      csvContent += 'Title,Task,Goal,Behaviors,Thoughts,Success,Rating,Time Spent\n'; // Header
  
      cards.forEach(function(card) {
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
