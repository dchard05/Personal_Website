const tabButtons = document.querySelectorAll('.tab-item');
const seeMoreButtons = document.querySelectorAll('see-more')
//tab button event listener and action
tabButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Get the target ID from the button's data-target attribute
    const targetPanelId = button.getAttribute('data-target');

    // Pass the click event and the target ID into your function
    switchTab(event, targetPanelId);
  });
});

document.querySelector('.see-more').addEventListener('click', function () {
  // Find the text panel using the ID
  const panel = document.getElementById('see-more-description-panel');

  // Toggle the 'show' class on the panel
  panel.classList.toggle('show');

  // Optional: Change the button text based on whether it is open or closed
  if (panel.classList.contains('show')) {
    this.textContent = '--- click to see less ---';
  } else {
    this.textContent = '--- click to see more ---';
  }
});


const themeToggle = document.querySelector('#theme-checkbox');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
themeToggle.checked = systemPrefersDark
themeToggle.addEventListener('click', function () {
  const root = document.documentElement;

  // If system is dark, toggle a 'light-theme' override class
  if (systemPrefersDark) {
    root.classList.toggle('light-theme');
  } else {
    // If system is light, toggle a 'dark-theme' override class
    root.classList.toggle('dark-theme');
  }
});

function switchTab(event, targetPanelId) {
  console.log("Button clicked! Target panel is:", targetPanelId);

  // 1. Hide all content panels
  const panels = document.querySelectorAll('.tab-panel.active-panel');
  panels.forEach(panel => {
    panel.classList.remove('active-panel');
  });

  // 2. Remove the "active" highlight class from all nav buttons
  const buttons = document.querySelectorAll('.tab-item.active');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // 3. Find the target panel
  const targetPanel = document.getElementById(targetPanelId);

  if (targetPanel) {
    // Show the targeted content panel
    targetPanel.classList.add('active-panel');
    // Add the "active" visual state to the clicked nav button
    event.currentTarget.classList.add('active');
  } else {
    console.error("Could not find an element with ID:", targetPanelId);
  }
}


