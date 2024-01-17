// Bookmarklet for Testing Card App
(function() {
    var cards = JSON.parse(localStorage.getItem('cards')) || [];

    function saveToLocalStorage() {
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    function addCard() {
        var addCardModal = document.createElement('div');
        // Add styling to addCardModal

        var titleInput = document.createElement('input');
        titleInput.placeholder = 'Title';
        var taskInput = document.createElement('input');
        taskInput.placeholder = 'Task';
        var goalInput = document.createElement('input');
        goalInput.placeholder = 'Goal';

        var submitBtn = document.createElement('button');
        submitBtn.textContent = 'Add Card';
        submitBtn.onclick = function() {
            cards.push({
                title: titleInput.value,
                task: taskInput.value,
                goal: goalInput.value,
                behaviors: '',
                thoughts: '',
                success: null,
                rating: 0,
                timeSpent: 0
            });
            saveToLocalStorage();
            document.body.removeChild(addCardModal);
        };

        addCardModal.appendChild(titleInput);
        addCardModal.appendChild(taskInput);
        addCardModal.appendChild(goalInput);
        addCardModal.appendChild(submitBtn);
        document.body.appendChild(addCardModal);
    }

    function startTesting() {
        var testIndex = Math.floor(Math.random() * cards.length);
        var testCard = cards[testIndex];

        var testCardModal = document.createElement('div');
        // Add styling to testCardModal

        var titleDisplay = document.createElement('div');
        titleDisplay.textContent = 'Title: ' + testCard.title;
        var taskDisplay = document.createElement('div');
        taskDisplay.textContent = 'Task: ' + testCard.task;
        var goalDisplay = document.createElement('div');
        goalDisplay.textContent = 'Goal: ' + testCard.goal;

        // Add more elements and logic for testing

        testCardModal.appendChild(titleDisplay);
        testCardModal.appendChild(taskDisplay);
        testCardModal.appendChild(goalDisplay);
        document.body.appendChild(testCardModal);
    }

    function downloadCSV() {
        var csvContent = 'data:text/csv;charset=utf-8,Title,Task,Goal\n';
        cards.forEach(function(card) {
            csvContent += `${card.title},${card.task},${card.goal}\n`;
        });
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'test_cards_data.csv');
        link.click();
    }

    // Main Interface
    var addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.onclick = addCard;

    var startTestBtn = document.createElement('button');
    startTestBtn.textContent = 'Start Testing';
    startTestBtn.onclick = startTesting;

    var downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Download Data (CSV)';
    downloadBtn.onclick = downloadCSV;

    var container = document.createElement('div');
    // Add styling to container

    container.appendChild(addBtn);
    container.appendChild(startTestBtn);
    container.appendChild(downloadBtn);
    document.body.appendChild(container);
})();
