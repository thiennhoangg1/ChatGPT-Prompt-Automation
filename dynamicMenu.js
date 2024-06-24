// Define multiple prompts with short messages for testing
const prompt1 = `Prompt 1`;
const prompt2 = `Prompt 2`;
const prompt3 = `Prompt 3`;
const prompt4 = `Prompt 4`;
const prompt5 = `Prompt 5`;
const prompt6 = `Prompt 6`;
const prompt7 = `Prompt 7`;
const prompt8 = `Prompt 8`;
const prompt9 = `Prompt 9`;
const prompt10 = `Prompt 10`;
const prompt11 = `Prompt 11`;
const prompt12 = `Prompt 12`;
const prompt13 = `Prompt 13`;
const prompt14 = `Prompt 14`;
const prompt15 = `Prompt 15`;

// Function to open ChatGPT and pre-fill the selected prompt
function openChatGPTWithPrompt(prompt) {
    const version = document.getElementById('chatgpt-version').value;
    const encodedPrompt = encodeURIComponent(prompt);
    const chatGPTURL = `https://chat.openai.com/?model=${version}&q=${encodedPrompt}`;
    window.open(chatGPTURL, '_blank');
}

// New menus for detailed days
const menus = {
    'week1Day1': [
        'Detailed Prompt 1-1',
        'Detailed Prompt 1-2',
        'Detailed Prompt 1-3',
        'Detailed Prompt 1-4',
        'Detailed Prompt 1-5',
        'Detailed Prompt 1-6',
        'Detailed Prompt 1-7',
        'Detailed Prompt 1-8',
        'Detailed Prompt 1-9'
    ],
    'week1Day2': [
        'Detailed Prompt 2-1',
        'Detailed Prompt 2-2',
        'Detailed Prompt 2-3',
        'Detailed Prompt 2-4',
        'Detailed Prompt 2-5',
        'Detailed Prompt 2-6'
    ],
    'week1Day3': [
        'Detailed Prompt 3-1',
        'Detailed Prompt 3-2',
        'Detailed Prompt 3-3',
        'Detailed Prompt 3-4',
        'Detailed Prompt 3-5',
        'Detailed Prompt 3-6',
        'Detailed Prompt 3-7',
        'Detailed Prompt 3-8'
    ],
    'week1Day4': [
        'Detailed Prompt 4-1',
        'Detailed Prompt 4-2',
        'Detailed Prompt 4-3',
        'Detailed Prompt 4-4',
        'Detailed Prompt 4-5',
        'Detailed Prompt 4-6',
        'Detailed Prompt 4-7',
        'Detailed Prompt 4-8',
        'Detailed Prompt 4-9',
        'Detailed Prompt 4-10',
        'Detailed Prompt 4-11',
        'Detailed Prompt 4-12'
    ],
    'week1Day5': [
        'Detailed Prompt 5-1',
        'Detailed Prompt 5-2',
        'Detailed Prompt 5-3',
        'Detailed Prompt 5-4',
        'Detailed Prompt 5-5',
        'Detailed Prompt 5-6',
        'Detailed Prompt 5-7',
        'Detailed Prompt 5-8',
        'Detailed Prompt 5-9',
        'Detailed Prompt 5-10',
        'Detailed Prompt 5-11',
        'Detailed Prompt 5-12'
    ],
    'week2Day1': [
        'Detailed Prompt 6-1',
        'Detailed Prompt 6-2',
        'Detailed Prompt 6-3'
    ],
    'week2Day2': [
        'Detailed Prompt 7-1',
        'Detailed Prompt 7-2',
        'Detailed Prompt 7-3',
        'Detailed Prompt 7-4',
        'Detailed Prompt 7-5',
        'Detailed Prompt 7-6',
        'Detailed Prompt 7-7'
    ],
    'week2Day3': [
        'Detailed Prompt 8-1',
        'Detailed Prompt 8-2',
        'Detailed Prompt 8-3',
        'Detailed Prompt 8-4',
        'Detailed Prompt 8-5',
        'Detailed Prompt 8-6',
        'Detailed Prompt 8-7'
    ],
    'week2Day4': [
        'Detailed Prompt 9-1',
        'Detailed Prompt 9-2',
        'Detailed Prompt 9-3'
    ],
    'week2Day5': [
        'Detailed Prompt 10-1'
    ],
    'week3Day1': [
        'Detailed Prompt 11-1',
        'Detailed Prompt 11-2',
        'Detailed Prompt 11-3'
    ],
    'week3Day2': [
        'Detailed Prompt 12-1',
        'Detailed Prompt 12-2',
        'Detailed Prompt 12-3',
        'Detailed Prompt 12-4',
        'Detailed Prompt 12-5'
    ],
    'week3Day3': [
        'Detailed Prompt 13-1',
        'Detailed Prompt 13-2',
        'Detailed Prompt 13-3',
        'Detailed Prompt 13-4'
    ],
    'week3Day4': [
        'Detailed Prompt 14-1',
        'Detailed Prompt 14-2',
        'Detailed Prompt 14-3',
        'Detailed Prompt 14-4',
        'Detailed Prompt 14-5',
        'Detailed Prompt 14-6',
        'Detailed Prompt 14-7'
    ],
    'week3Day5': []
};

// Function to open the detailed menu
function openDetailedWeek(day) {
    const menuContainer = document.getElementById('dynamic-menu');
    const menuContainerWrapper = document.getElementById('dynamic-menu-container');
    menuContainer.innerHTML = ''; // Clear previous content

    if (menus[day]) {
        menus[day].forEach(prompt => {
            const button = document.createElement('button');
            button.textContent = prompt;
            button.onclick = () => openChatGPTWithPrompt(prompt);
            menuContainer.appendChild(button);
        });
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.className = 'close-button';
        closeButton.onclick = () => {
            menuContainerWrapper.classList.add('hidden');
        };
        menuContainer.appendChild(closeButton);
        menuContainerWrapper.classList.remove('hidden');
        menuContainer.style.display = 'block';
    } else {
        menuContainer.style.display = 'none';
    }
}
