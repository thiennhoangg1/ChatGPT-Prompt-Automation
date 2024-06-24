document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.style.display = 'none';
    });

    fetchPrompts();
});

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === 'none' || !dropdown.classList.contains('show')) {
        dropdown.style.display = 'block';
        setTimeout(() => dropdown.classList.add('show'), 10); // Add a small delay to ensure the transition works
    } else {
        dropdown.classList.remove('show');
        setTimeout(() => dropdown.style.display = 'none', 500); // Wait for the transition to end before hiding
    }
}

function openChatGPTWithPrompt(selectorId) {
    const version = document.getElementById('chatgpt-version').value;
    const selector = document.getElementById(selectorId);
    const promptIndex = selector.value;
    const promptContent = prompts[selectorId.split('-')[2]][promptIndex].content;
    const encodedPrompt = encodeURIComponent(promptContent);
    const chatGPTURL = `https://chat.openai.com/?model=${version}&q=${encodedPrompt}`;
    window.open(chatGPTURL, '_blank');
}

function selectNextPrompt(selectorId) {
    const selector = document.getElementById(selectorId);
    if (selector.selectedIndex < selector.options.length - 1) {
        selector.selectedIndex += 1;
    }
}

function selectPreviousPrompt(selectorId) {
    const selector = document.getElementById(selectorId);
    if (selector.selectedIndex > 0) {
        selector.selectedIndex -= 1;
    }
}

let prompts = {};

async function fetchPrompts() {
    try {
        const response = await fetch('prompts.json');
        const data = await response.json();
        prompts = data.prompts;
        populatePromptSelectors();
    } catch (error) {
        console.error('Error fetching prompts:', error);
    }
}

function populatePromptSelectors() {
    for (const day in prompts) {
        const selector = document.getElementById(`prompt-selector-${day}`);
        prompts[day].forEach((prompt, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = prompt.title;
            selector.appendChild(option);
        });
    }
}
