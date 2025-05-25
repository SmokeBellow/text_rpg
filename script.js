function toggleMenu() {
  const sidebar = document.getElementById('sidebar-menu');
  const menuButton = document.getElementById('menu-button');
  sidebar.classList.toggle('open');
  sidebar.classList.toggle('hidden');
  menuButton.classList.toggle('hidden');
}

// Заглушки для других функций, упомянутых в index.html
function newGame() { console.log('New game started'); }
function continueGame() { console.log('Continue game'); }
function showAbout() { console.log('Show about'); }
function selectClass() { console.log('Class selected'); }
function backToGame() { console.log('Back to game'); }
function showAboutCharacter() { console.log('Show character'); }
function showInventory() { console.log('Show inventory'); }
function showSkills() { console.log('Show skills'); }
function showQuests() { console.log('Show quests'); }
function takeQuest() { console.log('Take quest'); }
function closeNpcDialog() { console.log('Close NPC dialog'); }
function backToMenu() { console.log('Back to menu'); }
function toggleClassInfo(element) { console.log('Toggle class info', element); }