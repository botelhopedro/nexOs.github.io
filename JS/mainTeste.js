const showNoteButton = document.getElementById('showNoteButton');
const noteWindow = document.getElementById('noteWindow');
const closeNoteButton = document.getElementById('closeNoteButton');

// Function to show the note window
function showNote() {
    noteWindow.style.display = 'block';
}

// Function to hide the note window
function hideNote() {
    noteWindow.style.display = 'none';
}

// Attach click event handlers to the buttons
showNoteButton.addEventListener('click', showNote);
closeNoteButton.addEventListener('click', hideNote);

let isDragging = false;
        let initialX;
        let initialY;

        noteWindow.addEventListener('mousedown', (e) => {
            isDragging = true;
            initialX = e.clientX - noteWindow.offsetLeft;
            initialY = e.clientY - noteWindow.offsetTop;
        });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const currentX = e.clientX - initialX;
                const currentY = e.clientY - initialY;
                noteWindow.style.left = `${currentX}px`;
                noteWindow.style.top = `${currentY}px`;
            }
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });