(function() {
  var cards = JSON.parse(localStorage.getItem('cards')) || [
      { title: 'Cash Flow with Search and Filter', task: 'Use the search and filter functions on the cash flow page.', goal: 'Understand and utilize the search and filter options to explore cash flow data.', behaviors: '', thoughts: '', success: null, rating: 0, timeSpent: 0 },
      { title: 'Investigating a Specific Transaction', task: 'Select a specific transaction from the list to view more details.', goal: 'Evaluate the ease of finding and understanding detailed transaction information.', behaviors: '', thoughts: '', success: null, rating: 0, timeSpent: 0 }
  ];
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

  function createRatingButton(idx) {
      var button = document.createElement('button');
      button.innerHTML = idx <= cards[currentCard].rating ? activeStarSVG : inactiveStarSVG;
      button.onclick = function() {
          cards[currentCard].rating = idx;
          updateRatingButtons();
          saveToLocalStorage();
      };
      return button;
  }

  function updateRatingButtons() {
      var ratingButtons = document.querySelectorAll('.rating-button'); // Assuming you have a class for these buttons
      for (var i = 0; i < ratingButtons.length; i++) {
          ratingButtons[i].innerHTML = i < cards[currentCard].rating ? activeStarSVG : inactiveStarSVG;
      }
  }

  function createModal() {
      var modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = '10%';
      modal.style.left = '10%';
      modal.style.right = '10%';
      modal.style.bottom = '10%';
      modal.style.backgroundColor = 'white';
      modal.style.padding = '20px';
      modal.style.zIndex = '1000';
      modal.style.overflow = 'auto';
      modal.style.border = '1px solid black';
      modal.style.borderRadius = '10px';
      modal.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
      modal.style.display = 'flex';
      modal.style.flexDirection = 'column';
      modal.style.alignItems = 'flex-start';

      var titleDisplay = document.createElement('div');
      var taskDisplay = document.createElement('div');
      var goalDisplay = document.createElement('div');
      var behaviorsInput = document.createElement('textarea');
      var thoughtsInput = document.createElement('textarea');
      var timerButton = document.createElement('button');
      var timerDisplay = document.createElement('p');

      var ratingButtons = document.createElement('div');
      ratingButtons.style.display = 'flex';

      for (let i = 1; i <= 5; i++) {
          let btn = createRatingButton(i);
          btn.classList.add('rating-button');
          ratingButtons.appendChild(btn);
      }

      var successButton = document.createElement('button');
      successButton.innerHTML = successIcon;
      successButton.onclick = function() {
          cards[currentCard].success = true;
          updateSuccessFailButtons();
          saveToLocalStorage();
      };

      var failButton = document.createElement('button');
      failButton.innerHTML = failIcon;
      failButton.onclick = function() {
          cards[currentCard].success = false;
          updateSuccessFailButtons();
          saveToLocalStorage();
      };

      var prevButton = document.createElement('button');
      prevButton.textContent = 'Previous';
      prevButton.onclick = function() {
          clearInterval(timerInterval);
          timerRunning = false;
          currentCard = (currentCard - 1 + cards.length) % cards.length;
          updateCardDisplay();
      };

      var nextButton = document.createElement('button');
      nextButton.textContent = 'Next';
      nextButton.onclick = function() {
          clearInterval(timerInterval);
          timerRunning = false;
          currentCard = (currentCard + 1) % cards.length;
          if (!cards[currentCard].timeSpent) {
              cards[currentCard].timeSpent = 0;
          }
          updateCardDisplay();
      };

      var closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.onclick = function() {
          clearInterval(timerInterval);
          document.body.removeChild(modal);
      };

      var downloadButton = document.createElement('button');
      downloadButton.textContent = 'Download Data (CSV)';
      downloadButton.onclick = downloadCSV;

      var resetButton = document.createElement('button');
      resetButton.textContent = 'Reset Timer';
      resetButton.onclick = function() {
          clearInterval(timerInterval);
          timerRunning = false;
          cards[currentCard].timeSpent = 0;
          timerDisplay.textContent = 'Time Spent: 0s';
          saveToLocalStorage();
      };

      modal.appendChild(titleDisplay);
      modal.appendChild(taskDisplay);
      modal.appendChild(goalDisplay);
      modal.appendChild(behaviorsInput);
      modal.appendChild(thoughtsInput);
      modal.appendChild(ratingButtons);
      modal.appendChild(timerButton);
      modal.appendChild(timerDisplay);
      modal.appendChild(successButton);
      modal.appendChild(failButton);
      modal.appendChild(prevButton);
      modal.appendChild(nextButton);
      modal.appendChild(closeButton);
      modal.appendChild(downloadButton);
      modal.appendChild(resetButton);

      function updateCardDisplay() {
          var card = cards[currentCard];
          titleDisplay.textContent = 'Title: ' + card.title;
          taskDisplay.textContent = 'Task: ' + card.task;
          goalDisplay.textContent = 'Goal: ' + card.goal;
          behaviorsInput.value = card.behaviors;
          thoughtsInput.value = card.thoughts;
          timerDisplay.textContent = 'Time Spent: ' + formatTime(card.timeSpent);
          updateRatingButtons();
          updateSuccessFailButtons();
          timerButton.textContent = timerRunning ? 'Stop Timer' : 'Start Timer';
      }

      function updateSuccessFailButtons() {
          successButton.firstChild.setAttribute('fill', cards[currentCard].success === true ? '#00FF00' : '#ACACAC');
          failButton.firstChild.setAttribute('fill', cards[currentCard].success === false ? '#FF0000' : '#ACACAC');
      }

      timerButton.textContent = 'Start Timer';
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

      function downloadCSV() {
          var csvContent = 'data:text/csv;charset=utf-8,Title,Task,Goal,Behaviors,Thoughts,Success,Rating,Time Spent\n';
          cards.forEach(function(card) {
              var successText = card.success ? 'Success' : (card.success === false ? 'Fail' : '');
              csvContent += `${card.title},${card.task},${card.goal},${card.behaviors},${card.thoughts},${successText},${card.rating},${formatTime(card.timeSpent)}\n`;
          });
          var encodedUri = encodeURI(csvContent);
          var link = document.createElement('a');
          link.setAttribute('href', encodedUri);
          link.setAttribute('download', 'test_cards_data.csv');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }

      document.body.appendChild(modal);
      updateCardDisplay();
  }

  createModal();
})();
