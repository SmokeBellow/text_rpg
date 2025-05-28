console.log("script.js loaded");

let currentInventoryTab = "weapons"; // по умолчанию оружие

const monsterData = {
  "Древесный ужас": {
    level: 2,
    desc: "Огромное существо, сросшееся с деревьями. Его шаги гремят, как гром.",
    image: "Images/monsters/treehorror.jpg"
  },
  "Тенелис": {
    level: 4,
    desc: "Существо из тени, двигающееся бесшумно между деревьями.",
    image: "Images/monsters/shadowbeast.jpg"
  },
  "Водяная тварь": {
    level: 3,
    desc: "Скользкое создание, скрывающееся в глубинах и способное утянуть под воду.",
    image: "Images/monsters/waterbeast.jpg"
  },
  "Призрак легиона": {
    level: 6,
    desc: "Призрачный солдат прошлого, вечно ищущий битву.",
    image: "Images/monsters/legionghost.jpg"
  }
  // Добавь остальных монстров аналогично
};


// Данные NPC
const npcData = {
  "Староста Лем": {
    text: "Наш гонец ушёл с письмом к соседнему поселению, но так и не вернулся. Он не из тех, кто задерживается без причины... Пожалуйста, разыщи его. Я боюсь худшего.",
    desc: "Мудрый глава деревни, чьи глаза хранят тревогу за свой народ.",
    image: "Images/npc/oldman.jpg"
  },
  "Кузнец Бран": {
    text: "Без хорошего угля я не смогу ковать ни меча, ни подкову. Шахта к югу опустела, но уголь там всё ещё есть. Добудь немного — и я отблагодарю.",
    desc: "Грубый, но мастеровитый кузнец, чьи руки создают оружие легенд.",
    image: "Images/npc/blacksmith.jpg"
  },
  "Охотница Элира": {
    text: "Я нашла следы — крупные, с кровью. Это не волк. Что-то убивает зверей и пугает лес. Я иду на охоту. Не хочешь пойти со мной? Вдвоём у нас больше шансов.",
    desc: "Ловкая следопытка, чьё сердце принадлежит дикому лесу.",
    image: "Images/npc/hunter.jpg"
  },
  "Рыбак Нор": {
    text: "Я видел его — огромный, с усами, как у старого мудреца. Сомавр снова в пруду. Никто не может его вытащить. А ты попробуй... вдруг повезёт?",
    desc: "Седой рыбак, знающий тайны реки и её духов.",
    image: "Images/npc/fisherman.jpg"
  },
  "Мудрая жаба": {
    text: "Пей больше воды и высыпайся.",
    desc: "Она знает больше, чем кажется, и всегда говорит по делу.",
    image: "Images/npc/toad.jpg"
  },
  "Страж Ролан": {
    text: "Я на посту каждую ночь, и всё чаще слышу шаги наверху, когда башня должна быть пуста... Проверь это за меня. Я не могу уйти с поста.",
    desc: "Суровый воин, верный своему долгу охранять башню.",
    image: "Images/npc/guard.jpg"
  },
  "Старец Вейн": {
    text: "Заклятие рассыпается, как песок сквозь пальцы... Мне нужна одна старая книга. Её хранят руины на востоке. Опасное место, но ты справишься. Я чувствую это.",
    desc: "Хранитель озёрных легенд, чей взор устремлён в глубины.",
    image: "Images/npc/elder.jpg"
  },
  "Скиталец Кайр": {
    text: "Люди исчезают на старом тракте. Без шума, без следа. Я слышу шорохи в ночи, не похожие на зверей. Пройди по той дороге... но будь готов к теням.",
    desc: "Бродяга с острым умом, знающий каждый уголок каньона.",
    image: "Images/npc/wanderer.jpg"
  },
  "Комендант Рейн": {
    text: "Кто-то из моих стражей что-то скрывает. Я вижу взгляды, слышу шёпоты. Мне нужен тот, кому я могу доверять. Помоги мне выяснить правду — пока не поздно.",
    desc: "Бывший лидер крепости, жаждущий вернуть её былую славу.",
    image: "Images/npc/commander.jpg"
  },
   "Торговец Гелрик": {
    text: "У меня есть всё — от лечебных трав до трофеев пустыни! Погляди, не найдётся ли что тебе по вкусу.",
    desc: "Старый проныра с тюками товаров и историями о далёких землях. Всегда найдет, что продать.",
    image: "Images/npc/merchant.jpg"
  }
};

// Данные квестов (без Мудрой жабы)
const questData = {
  "Староста Лем": {
    title: "Пропавший гонец",
    desc: "Найди вестника в лесу",
    condition: "Найти и вернуть гонца живым",
    reward: "20 монет"
  },
  "Кузнец Бран": {
    title: "Угли для кузни",
    desc: "Добыть уголь в шахте",
    condition: "Принести 5 единиц угля",
    reward: "Прочный меч или броня"
  },
  "Охотница Элира": {
    title: "Тропами зверя",
    desc: "Убей вурдалака в лесу",
    condition: "Победить вурдалака в лесу",
    reward: "Охотничий плащ"
  },
  "Рыбак Нор": {
    title: "Большая рыба",
    desc: "Поймай редкого сомавра",
    condition: "Поймать и принести сомавра",
    reward: "Серебряный крючок"
  },
  "Страж Ролан": {
    title: "Тихая башня",
    desc: "Проверь странные звуки ночью",
    condition: "Выследить и устранить нарушителя",
    reward: "Доспех стража"
  },
  "Старец Вейн": {
    title: "Пыль времён",
    desc: "Найди древнюю книгу в руинах",
    condition: "Принести книгу из старого храма",
    reward: "Свиток заклинания или мана-камень"
  },
  "Скиталец Кайр": {
    title: "Следы теней",
    desc: "Расследуй исчезновения на дороге",
    condition: "Победить теневого врага на тракте",
    reward: "Плащ теней"
  },
  "Комендант Рейн": {
    title: "Запах мятежа",
    desc: "Раскрой заговор в крепости",
    condition: "Выявить и разоблачить заговорщиков",
    reward: "Орден коменданта"
  }
};

// Тексты для экрана перехода
const travelTexts = {
  "Деревня": "Тепло очагов зовёт путника домой...",
  "Лес": "Тени шепчут в чаще, скрывая путь...",
  "Река": "Я в своем познании настолько преисполнился...",
  "Горы": "Ветер несёт эхо древних битв...",
  "Поляна": "Звёзды над поляной предвещают судьбу...",
  "Пещера": "Тьма пещеры хранит забытые тайны...",
  "Развалины": "Камни помнят славу ушедших эпох...",
  "Башня": "Эфир кружит у стен одинокой башни...",
  "Храм": "Свет вечного огня манит вперёд...",
  "Портал": "Иные миры ждут за гранью света...",
  "Озеро": "Гладь озера скрывает древние секреты...",
  "Болото": "Туман болот таит смертельные ловушки...",
  "Каньон": "Красные скалы хранят знаки предков...",
  "Равнина": "Травы шепчут о героях прошлого...",
  "Крепость": "Стены крепости помнят клятвы рыцарей..."
};

// Иконки для предметов
const itemIcons = {
  "Зелье здоровья": "Images/items/healthpotion.png",
  "Походные сапоги": "Images/items/boots.png",
  "Лук": "Images/items/bow.png",
  "Кожаная броня": "Images/items/leatherarmor.png",
  "Кольчужный капюшон": "Images/items/chainhood.png",
  "Меч": "Images/items/sword.png",
  "Щит": "Images/items/shield.png",
  "Стальная броня": "Images/items/steelarmor.png",
  "Кинжал": "Images/items/daggers.png",
  "Плащ": "Images/items/shadowcloak.png",
  "Маска": "Images/items/mask.png",
  "Золото": "Images/items/gold.png",
};

// Описания предметов
const itemDescriptions = {
  "Зелье здоровья": "Восстанавливает 50 единиц здоровья при использовании.",
  "Походные сапоги": "Увеличивают скорость передвижения на 10%.",
  "Лук": "Оружие дальнего боя, наносит 15 урона. Только для следопыта.",
  "Меч": "Мощное оружие ближнего боя, наносит 20 урона. Только для воина.",
  "Кинжал": "Быстрое оружие, наносит 12 урона с шансом критического удара. Только для разбойника.",
  "Щит": "Блокирует 30% входящего урона. Только для воина.",
  "Кожаная броня": "Лёгкая броня, добавляет 10 защиты. Только для следопыта.",
  "Кольчужный капюшон": "Защищает голову, добавляет 5 защиты. Только для следопыта.",
  "Стальная броня": "Тяжёлая броня, добавляет 20 защиты. Только для воина.",
  "Плащ": "Лёгкий плащ, улучшающий манёвренность. Только для разбойника.",
  "Маска": "Скрывает личность, повышает скрытность. Только для разбойника.",
  "Золото": "Монеты, используемые для покупок."
};

// Данные классов
const classData = {
  archer: {
    name: "Следопыт",
    image: "Images/npc/archer.jpg",
    desc: "Искры глаз следят за каждым движением в чаще, а стрелы бьют без промаха.",
    feature: "Перемещается на 10% быстрее.",
    equipment: ["Лук", "Кожаная броня", "Кольчужный капюшон"]
  },
  warrior: {
    name: "Воин",
    image: "Images/npc/warrior.jpg",
    desc: "Сильный и выносливый боец, готовый стоять до последнего.",
    feature: "Получает на 15% меньше урона.",
    equipment: ["Меч", "Щит", "Стальная броня"]
  },
  rogue: {
    name: "Разбойник",
    image: "Images/npc/rogue.jpg",
    desc: "Тень, что крадётся в ночи, с клинком, готовым к удару.",
    feature: "Наносит на 20% больше урона при скрытной атаке.",
    equipment: ["Кинжалы", "Плащ", "Маска"]
  }
};

// Сброс всех экранов
function resetScreens() {
  document.querySelectorAll(
    "#splash-dev, #splash-title, #main-menu, #about-screen, #class-selection, #game-screen, #travel-screen, #npc-dialog, #character-screen, #quests-screen, #inventory-screen"
  ).forEach(el => {
    el.classList.remove("visible");
    el.classList.add("hidden");
  });
  document.getElementById("sidebar-menu").classList.remove("open");
  document.getElementById("menu-button").classList.add("hidden");
}

// Управление боковым меню
function closeMenuOnOutsideClick(event) {
  const sidebar = document.getElementById("sidebar-menu");
  const menuButton = document.getElementById("menu-button");
  const sidebarClose = document.getElementById("sidebar-close");
  if (sidebar.classList.contains("open") &&
      !event.target.closest("#sidebar-menu") &&
      !event.target.closest("#menu-button") &&
      !event.target.closest("#sidebar-close")) {
    toggleMenu();
  }
}

function toggleMenu() {
  const sidebar = document.getElementById("sidebar-menu");
  sidebar.classList.toggle("open");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("hidden");
    sidebar.classList.add("visible");
    document.addEventListener("click", closeMenuOnOutsideClick);
  } else {
    sidebar.classList.remove("visible");
    document.removeEventListener("click", closeMenuOnOutsideClick);
    setTimeout(() => {
      if (!sidebar.classList.contains("open")) {
        sidebar.classList.add("hidden");
      }
    }, 300);
  }
}

document.getElementById("sidebar-close").addEventListener("click", toggleMenu);

// Экран разговора с NPC
let currentNpc = null;

function showNpcDialog(name) {
  resetScreens();
  const dialog = document.getElementById("npc-dialog");
  document.getElementById("npc-name").innerText = name;
  document.getElementById("npc-desc").innerText = npcData[name].desc;
  document.getElementById("npc-text").innerText = npcData[name].text;
  document.getElementById("npc-image").src = npcData[name].image;
  currentNpc = name;

  const questButton = document.getElementById("npc-quest");
  const questLimitMsg = document.getElementById("quest-limit-msg");

  // Удаляем старые кнопки: кастомные и кнопки назад
  dialog.querySelectorAll(".back-button").forEach(btn => btn.remove());

  if (name === "Мудрая жаба") {
    questButton.classList.add("hidden");
    questLimitMsg.classList.add("hidden");

  } else if (name === "Торговец Гелрик") {
    questButton.classList.add("hidden");
    questLimitMsg.classList.add("hidden");

    const buyBtn = document.createElement("button");
    buyBtn.innerText = "Купить";
    buyBtn.classList.add("back-button");
    buyBtn.onclick = () => openBuyScreen();
    dialog.appendChild(buyBtn);

    const sellBtn = document.createElement("button");
    sellBtn.innerText = "Продать";
    sellBtn.classList.add("back-button");
    sellBtn.onclick = () => openSellScreen();
    dialog.appendChild(sellBtn);

  } else {
    const alreadyTaken = playerData.quests.find(q => q.npc === name);
    const tooManyQuests = playerData.quests.length >= 4;

    if (alreadyTaken) {
      questButton.classList.add("hidden");
      questLimitMsg.classList.add("hidden");
    } else if (tooManyQuests) {
      questButton.disabled = true;
      questButton.classList.remove("hidden");
      questLimitMsg.classList.remove("hidden");
    } else {
      questButton.disabled = false;
      questButton.classList.remove("hidden");
      questLimitMsg.classList.add("hidden");
    }
  }

  dialog.classList.remove("hidden");
  dialog.classList.add("visible");
}


function styleTradeButton(btn) {
  btn.className = "back-button"; // как у кнопки "Назад"

}



const merchantInventory = [
  { name: "Зелье здоровья", price: 20 },
  { name: "Укрепленные сапоги", price: 50 },
  { name: "Хороший плащ", price: 80 }
];

function openBuyScreen() {
  const container = document.getElementById("trade-items");
  const title = document.getElementById("trade-title");
  title.innerText = "Покупка предметов";
  container.innerHTML = "";

  merchantInventory.forEach(item => {
    const el = document.createElement("div");
    el.className = "trade-item";
    el.innerHTML = `
      <div style="display: flex; align-items: center;">
        <img src="${itemIcons[item.name] || 'Images/items/default.png'}" alt="${item.name}" class="item-icon">
        <span>${item.name}</span>
      </div>
      <button class="trade-button" onclick="buyItem('${item.name}', ${item.price})">
        <img src="${itemIcons['Золото']}" alt="Золото" style="width: 20px; height: 20px;">
        <span>${item.price}</span>
      </button>
    `;
    container.appendChild(el);
  });

  document.getElementById("trade-screen").classList.remove("hidden");
}


function buyItem(itemName, price) {
  const gold = playerData.inventory.keyItems.filter(i => i === "Золото").length;
  if (gold < price) {
    alert("Недостаточно золота!");
    return;
  }

  for (let i = 0; i < price; i++) {
    const index = playerData.inventory.keyItems.indexOf("Золото");
    if (index !== -1) playerData.inventory.keyItems.splice(index, 1);
  }

  if (itemName.includes("сапоги") || itemName.includes("броня")) {
    playerData.inventory.armor.push(itemName);
  } else if (itemName.includes("Зелье")) {
    playerData.inventory.potions.push(itemName);
  } else {
    playerData.inventory.weapons.push(itemName);
  }

  alert(`Вы купили ${itemName}`);
  saveGame();
}

function openSellScreen() {
  const container = document.getElementById("trade-items");
  const title = document.getElementById("trade-title");
  title.innerText = "Продажа предметов";
  container.innerHTML = "";

  const allItems = [
    ...playerData.inventory.weapons,
    ...playerData.inventory.armor,
    ...playerData.inventory.potions
  ];

  if (allItems.length === 0) {
    container.innerHTML = "<p>У вас нет ничего на продажу.</p>";
    return;
  }

  allItems.forEach((item, index) => {
    const el = document.createElement("div");
    el.className = "trade-item";
    el.innerHTML = `
      <div style="display: flex; align-items: center;">
        <img src="${itemIcons[item] || 'Images/items/default.png'}" alt="${item}" class="item-icon">
        <span>${item}</span>
      </div>
      <button class="trade-button" onclick="sellItem('${item}', ${index})">
        <img src="${itemIcons['Золото']}" alt="Золото" style="width: 20px; height: 20px;">
        <span>10</span>
      </button>
    `;
    container.appendChild(el);
  });

  document.getElementById("trade-screen").classList.remove("hidden");
}


function sellItem(itemName, index) {
  const sections = ["weapons", "armor", "potions"];
  for (let section of sections) {
    const i = playerData.inventory[section].indexOf(itemName);
    if (i !== -1) {
      playerData.inventory[section].splice(i, 1);
      break;
    }
  }

  for (let i = 0; i < 10; i++) {
    playerData.inventory.keyItems.push("Золото");
  }

  alert(`Вы продали ${itemName} за 10 золота`);
  saveGame();
  openSellScreen(); // Обновим список
}

function closeTrade() {
  document.getElementById("trade-screen").classList.add("hidden");
}


function closeNpcDialog() {
  resetScreens();
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("game-screen").classList.add("visible");
  document.getElementById("menu-button").classList.remove("hidden");
  document.getElementById("menu-button").classList.add("visible");
  currentNpc = null;
  updateLocation();
}

function takeQuest() {
  if (currentNpc && questData[currentNpc]) {
    const quest = questData[currentNpc];
    if (!playerData.quests.find(q => q.npc === currentNpc) && playerData.quests.length < 4) {
      playerData.quests.push({
        npc: currentNpc,
        title: quest.title,
        desc: quest.desc,
        condition: quest.condition,
        reward: quest.reward
      });
      gainXp(150); // фиксированная награда за квест
    }
    closeNpcDialog();
  }
}

function takeQuest() {
  if (currentNpc && questData[currentNpc]) {
    const quest = questData[currentNpc];
    if (!playerData.quests.find(q => q.npc === currentNpc) && playerData.quests.length < 4) {
      playerData.quests.push({
        npc: currentNpc,
        title: quest.title,
        desc: quest.desc,
        condition: quest.condition,
        reward: quest.reward
      });
      gainXp(50); // фиксированная награда за квест
    }
    closeNpcDialog();
  }
}


// Экран квестов
function showQuests() {
  resetScreens();
  const questsScreen = document.getElementById("quests-screen");
  const questsList = document.getElementById("quests-list");
  questsList.innerHTML = "";

  if (playerData.quests.length === 0) {
    questsList.innerHTML = '<p>У вас еще нет заданий. Походите по округ и поговорите с людьми - может кому-то нужна помощь.</p>';
  } else {
    playerData.quests.forEach((quest, index) => {
      const questItem = document.createElement("div");
      questItem.className = "quest-item";
      questItem.innerHTML = `
        <strong>${quest.title}</strong>
        <div>${quest.desc}</div>
        <div class="quest-details hidden" id="quest-details-${index}">
          <p><strong>Условие:</strong> ${quest.condition}</p>
          <p><strong>Награда:</strong> ${quest.reward}</p>
        </div>
      `;
      questItem.addEventListener("click", (e) => {
        e.stopPropagation();
        const details = document.getElementById(`quest-details-${index}`);
        const isHidden = details.classList.contains("hidden");
        document.querySelectorAll(".quest-details").forEach(d => d.classList.add("hidden"));
        if (isHidden) {
          details.classList.remove("hidden");
        }
      });
      questsList.appendChild(questItem);
    });
  }

  questsScreen.classList.remove("hidden");
  questsScreen.classList.add("visible");
  document.getElementById("menu-button").classList.remove("hidden");
  document.getElementById("menu-button").classList.add("visible");

  document.addEventListener("click", closeQuestDetailsOnOutsideClick);
}

function closeQuestDetailsOnOutsideClick(event) {
  if (!event.target.closest(".quest-item")) {
    document.querySelectorAll(".quest-details").forEach(d => d.classList.add("hidden"));
  }
}

function backToGame() {
  resetScreens();
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("game-screen").classList.add("visible");
  document.getElementById("menu-button").classList.remove("hidden");
  document.getElementById("menu-button").classList.add("visible");
  document.getElementById("trade-screen").classList.add("hidden");
  document.removeEventListener("click", closeQuestDetailsOnOutsideClick);
  updateLocation();
}

// Экипировка предметов
function equipItem(item, itemType) {
  if (itemType === "potion") {
    alert("Зелья нельзя экипировать!");
    return;
  }

  let inventorySection;
  if (itemType === "weapon" || itemType === "twohanded") {
    inventorySection = "weapons";
  } else if (itemType === "armor" || itemType === "helmet" || itemType === "boots") {
    inventorySection = "armor";
  } else {
    inventorySection = "keyItems";
  }

  const itemIndex = playerData.inventory[inventorySection].indexOf(item);
  if (itemIndex !== -1) {
    playerData.inventory[inventorySection].splice(itemIndex, 1);
  } else {
    console.error(`Предмет ${item} не найден в инвентаре ${inventorySection}`);
    return;
  }

  // Ограничения по классу
  const cls = playerData.class;
  const restrictedItems = {
    "Лук": "archer",
    "Меч": "warrior",
    "Щит": "warrior",
    "Кинжал": "rogue",
    "Кожаная броня": "archer",
    "Кольчужный капюшон": "archer",
    "Стальная броня": "warrior",
    "Плащ": "rogue",
    "Маска": "rogue"
  };
  if (restrictedItems[item] && restrictedItems[item] !== cls) {
    alert("Этот предмет может использовать только выбранный класс.");
    playerData.inventory[inventorySection].push(item); // вернуть обратно
    return;
  }

  if (itemType === "twohanded") {
    if (playerData.equipment.weapon1) playerData.inventory.weapons.push(playerData.equipment.weapon1);
    if (playerData.equipment.weapon2 && playerData.equipment.weapon2 !== "Лук") {
      playerData.inventory.weapons.push(playerData.equipment.weapon2);
    }
    playerData.equipment.weapon1 = item;
    playerData.equipment.weapon2 = item;
  } else if (itemType === "weapon") {
    if (item === "Щит") {
      if (playerData.equipment.weapon2) {
        playerData.inventory.weapons.push(playerData.equipment.weapon2);
      }
      playerData.equipment.weapon2 = item;
    } else {
      if (!playerData.equipment.weapon1) {
        playerData.equipment.weapon1 = item;
      } else if (!playerData.equipment.weapon2) {
        playerData.equipment.weapon2 = item;
      } else {
        playerData.inventory.weapons.push(playerData.equipment.weapon1);
        playerData.equipment.weapon1 = item;
      }
    }

    if (playerData.equipment.weapon1 === "Лук" && item !== "Лук") {
      playerData.equipment.weapon1 = null;
      playerData.equipment.weapon2 = null;
      playerData.equipment.weapon1 = item;
    }
    if (playerData.equipment.weapon2 === "Лук" && item !== "Лук") {
      playerData.equipment.weapon2 = null;
    }
  } else {
    const equipSlot = itemType === "helmet" ? "helmet"
                      : itemType === "armor" ? "armor"
                      : itemType === "boots" ? "boots"
                      : "amulet";
    if (playerData.equipment[equipSlot]) {
      playerData.inventory[inventorySection].push(playerData.equipment[equipSlot]);
    }
    playerData.equipment[equipSlot] = item;
  }

  recalculateModifiers();
  saveGame();
  showInventory(currentInventoryTab);

  if (!document.getElementById("character-screen").classList.contains("hidden")) {
    showAboutCharacter();
  }
}

// Снятие экипировки
function unequipItem(slot) {
  const item = playerData.equipment[slot];
  if (!item) return; // Нет предмета в слоте

  // Определяем секцию инвентаря
  const itemType = getItemType(item);
  let inventorySection;
  if (itemType === "weapon" || itemType === "twohanded") {
    inventorySection = "weapons";
  } else if (itemType === "armor" || itemType === "helmet" || itemType === "boots") {
    inventorySection = "armor";
  } else {
    inventorySection = "keyItems";
  }

  // Особая обработка для двуручного оружия (например, Лук)
  if (itemType === "twohanded") {
    playerData.inventory[inventorySection].push(item);
    playerData.equipment.weapon1 = null;
    playerData.equipment.weapon2 = null;
  } else if (slot === "weapon1" || slot === "weapon2") {
    playerData.inventory[inventorySection].push(item);
    playerData.equipment[slot] = null;
    // Если снимаем Лук, очищаем оба слота оружия
    if (item === "Лук") {
      playerData.equipment.weapon1 = null;
      playerData.equipment.weapon2 = null;
    }
  } else {
    playerData.inventory[inventorySection].push(item);
    playerData.equipment[slot] = null;
  }

  recalculateModifiers();
  saveGame();
  showAboutCharacter(); // Обновляем экран персонажа
}

// Экран инвентаря
function showInventory(tabToShow) {
  resetScreens();
  const inventoryScreen = document.getElementById("inventory-screen");
  const inventoryList = document.getElementById("inventory-list");
  const inventoryEmpty = document.getElementById("inventory-empty");
  const tabs = document.querySelectorAll(".tab-button");

  // Используем либо tabToShow, либо текущий сохранённый таб
  if (tabToShow) currentInventoryTab = tabToShow;
  let currentTab = currentInventoryTab || "weapons";
  tabs.forEach(tab => {
    tab.classList.remove("active");
    if (tab.dataset.tab === currentTab) {
      tab.classList.add("active");
    }
  });

  function renderInventory(tab) {
    inventoryList.innerHTML = "";
    const rawItems = playerData.inventory[tab] || [];
    inventoryEmpty.classList.add("hidden");

    if (rawItems.length === 0) {
      inventoryEmpty.classList.remove("hidden");
    } else {
      // Группировка предметов
      const itemMap = {};
      rawItems.forEach(item => {
        itemMap[item] = (itemMap[item] || 0) + 1;
      });

      const items = Object.entries(itemMap);
      items.forEach(([item, count]) => {
        const itemType = getItemType(item);
        const itemElement = document.createElement("div");
        itemElement.className = "inventory-item";
        itemElement.innerHTML = `
          <img src="${itemIcons[item]}" alt="${item}">
          <div class="item-text">
            <div class="item-name">${item} ${count > 1 ? `×${count}` : ""}</div>
            <div class="item-desc">${itemDescriptions[item]}</div>
          </div>
          ${itemType !== "potion" && item !== "Золото" ? `<button onclick="equipItem('${item}', '${itemType}')">Надеть</button>` : ""}
        `;
        inventoryList.appendChild(itemElement);
      });
    }
  }

  renderInventory(currentTab);

  // Чит-код: 5 кликов по вкладке ключевых предметов
  let keyTabClickCount = 0;
  let keyTabClickTimer = null;

  tabs.forEach(tab => {
    tab.onclick = () => {
      const selectedTab = tab.dataset.tab;
      currentInventoryTab = selectedTab;
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderInventory(currentInventoryTab);

      if (selectedTab === "keyItems") {
        keyTabClickCount++;
        if (keyTabClickCount === 5) {
          gainXp(150);
          alert("💡 Чит-код активирован: +150 XP!");
          keyTabClickCount = 0;
        }

        clearTimeout(keyTabClickTimer);
        keyTabClickTimer = setTimeout(() => {
          keyTabClickCount = 0;
        }, 3000);
      } else {
        keyTabClickCount = 0;
      }
    };
  });

  inventoryScreen.classList.remove("hidden");
  inventoryScreen.classList.add("visible");
  document.getElementById("menu-button").classList.remove("hidden");
  document.getElementById("menu-button").classList.add("visible");
}


function showSkills() {
  alert("Раздел 'Умения' в разработке!");
}

// Splash-экраны
resetScreens();
document.getElementById("splash-dev").classList.remove("hidden");
document.getElementById("splash-dev").classList.add("visible");

setTimeout(() => {
  document.getElementById("splash-dev").classList.remove("visible");
  document.getElementById("splash-dev").classList.add("hidden");
  setTimeout(() => {
    resetScreens();
    document.getElementById("splash-title").classList.remove("hidden");
    document.getElementById("splash-title").classList.add("visible");
    setTimeout(() => {
      document.getElementById("splash-title").classList.remove("visible");
      document.getElementById("splash-title").classList.add("hidden");
      setTimeout(() => {
        resetScreens();
        document.getElementById("main-menu").classList.remove("hidden");
        document.getElementById("main-menu").classList.add("visible");
      }, 500);
    }, 3000);
  }, 500);
}, 3000);

// Состояние игры
let playerData = {
  class: null,
  location: "Деревня",
  level: 1,
  xp: 0,
  quests: [],
  inventory: {
    weapons: [],
    armor: [],
    potions: [],
    keyItems: ["Золото"]
  },
  equipment: {
    weapon1: null,
    weapon2: null,
    helmet: null,
    armor: null,
    boots: null,
    amulet: null
  },
  stats: {
    strength: 5,
    agility: 5,
    endurance: 5,
    luck: 5
  },
  modifiers: {
    speedFactor: 1.0,
    damageReduction: 1.0,
    damageBoost: 1.0
  }
};


// Расстояния от Деревни
const locationDistances = {
  "Деревня": 0,
  "Лес": 1,
  "Река": 1,
  "Горы": 2,
  "Поляна": 2,
  "Пещера": 2,
  "Развалины": 3,
  "Башня": 3,
  "Храм": 4,
  "Портал": 5,
  "Озеро": 2,
  "Болото": 3,
  "Каньон": 3,
  "Равнина": 4,
  "Крепость": 5
};

// Названия локаций в винительном падеже
const locationAccusative = {
  "Деревня": "Деревню",
  "Лес": "Лес",
  "Река": "к Реке",
  "Горы": "Горы",
  "Поляна": "к Поляне",
  "Пещера": "Пещеру",
  "Развалины": "Развалины",
  "Башня": "Башню",
  "Храм": "Храм",
  "Портал": "к Порталу",
  "Озеро": "к Озеру",
  "Болото": "к Болотам",
  "Каньон": "Каньон",
  "Равнина": "к Равнине",
  "Крепость": "Крепость"
};

// Классы
function toggleClassInfo(element) {
  console.log("toggleClassInfo called");
  const options = document.querySelectorAll(".class-option");
  options.forEach(opt => {
    const details = opt.querySelector(".class-details");
    opt.classList.remove("selected");
    details.classList.add("hidden");
  });
  const details = element.querySelector(".class-details");
  details.classList.toggle("hidden");
  if (!details.classList.contains("hidden")) {
    element.classList.add("selected");
  }
}

function newGame() {
  playerData = {
    class: null,
    location: "Деревня",
    quests: [],
    inventory: {
      weapons: [],
      armor: [],
      potions: [],
      keyItems: []
    },
    equipment: {
      weapon1: null,
      weapon2: null,
      helmet: null,
      armor: null,
      boots: null,
      amulet: null
    }
  };
  resetScreens();
  document.getElementById("class-selection").classList.remove("hidden");
  document.getElementById("class-selection").classList.add("visible");
  document.querySelectorAll(".class-option").forEach(opt => {
    opt.classList.remove("selected");
    opt.querySelector(".class-details").classList.add("hidden");
  });
}

function continueGame() {
  const data = localStorage.getItem("mygame-save");
  if (data) {
    playerData = JSON.parse(data);
    startGame();
  } else {
    alert("Сохранённой игры не найдено. Начните новую игру.");
  }
}

function showAbout() {
  resetScreens();
  document.getElementById("about-screen").classList.remove("hidden");
  document.getElementById("about-screen").classList.add("visible");
}

function backToMenu() {
  resetScreens();
  document.getElementById("main-menu").classList.remove("hidden");
  document.getElementById("main-menu").classList.add("visible");
}

function selectClass() {
  if (!playerData.class) {
    const selectedOption = document.querySelector(".class-option .class-details:not(.hidden)");
    const selectedClass = selectedOption
      ? selectedOption.closest(".class-option").dataset.class
      : "warrior";
    playerData.class = selectedClass;
  }

  if (playerData.class === "archer") {
    playerData.stats = { strength: 4, agility: 7, endurance: 5, luck: 5 };
    playerData.modifiers = { speedFactor: 0.9, damageReduction: 1.0, damageBoost: 1.0 };
    playerData.inventory.weapons.push("Лук");
    playerData.inventory.armor.push("Кожаная броня", "Кольчужный капюшон");
  } else if (playerData.class === "warrior") {
    playerData.stats = { strength: 7, agility: 4, endurance: 7, luck: 4 };
    playerData.modifiers = { speedFactor: 1.0, damageReduction: 0.9, damageBoost: 1.0 };
    playerData.inventory.weapons.push("Меч", "Щит");
    playerData.inventory.armor.push("Стальная броня");
  } else if (playerData.class === "rogue") {
    playerData.stats = { strength: 5, agility: 7, endurance: 4, luck: 6 };
    playerData.modifiers = { speedFactor: 1.0, damageReduction: 1.0, damageBoost: 1.1 };
    playerData.inventory.weapons.push("Кинжал", "Кинжал");
    playerData.inventory.armor.push("Плащ", "Маска");
  }

  playerData.inventory.potions.push("Зелье здоровья");
  playerData.inventory.armor.push("Походные сапоги");
  // Добавляем стартовое золото
  playerData.inventory.keyItems.push("Золото", "Золото", "Золото", "Золото", "Золото");

  saveGame();
  resetScreens();
  startGame();
}

function startGame() {
  resetScreens();
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("game-screen").classList.add("visible");
  document.getElementById("menu-button").classList.remove("hidden");
  document.getElementById("menu-button").classList.add("visible");
  updateLocation();
}

function saveGame() {
  localStorage.setItem("mygame-save", JSON.stringify(playerData));
}

function showTravelScreen(targetLocation, duration) {
  resetScreens();
  const travelScreen = document.getElementById("travel-screen");
  const travelTimer = document.getElementById("travel-timer");
  const travelText = document.getElementById("travel-text");
  travelScreen.classList.remove("hidden");
  travelScreen.classList.add("visible");

  // Учитываем ускорение передвижения
  const speedFactor = playerData.modifiers?.speedFactor || 1.0;
  let timeLeft = Math.max(1, Math.round((duration * speedFactor) / 1000));

  travelTimer.innerText = `Вы идёте ${locationAccusative[targetLocation]}... ${timeLeft} сек`;
  travelText.innerText = travelTexts[targetLocation] || "Путь манит вперёд...";

  const interval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      travelTimer.innerText = `Вы идёте ${locationAccusative[targetLocation]}... ${timeLeft} сек`;
    } else {
      clearInterval(interval);
      playerData.location = targetLocation;
      saveGame();
      resetScreens();
      document.getElementById("game-screen").classList.remove("hidden");
      document.getElementById("game-screen").classList.add("visible");
      document.getElementById("menu-button").classList.remove("hidden");
      document.getElementById("menu-button").classList.add("visible");
      updateLocation();
    }
  }, 1000);
}

// Локации
const locations = {
"Деревня": {
  desc: "Небольшая деревня с булыжными улицами и простыми каменными домами...",
  paths: ["Лес", "Река"],
  characters: ["Староста Лем", "Кузнец Бран", "Торговец Гелрик"],
  monsters: []
},
  "Лес": {
    desc: "Широкий лес, полный дичи и опасностей. Узкие тропы петляют между деревьями, а хруст веток часто не сулит ничего хорошего.",
    paths: ["Деревня", "Горы", "Поляна"],
    characters: ["Охотница Элира"],
    monsters: ["Древесный ужас", "Тенелис"]
  },
  "Река": {
    desc: "Спокойная река с прохладной водой, где рыбаки закидывают сети, а дети плещутся у берега. Порой здесь можно найти странные артефакты.",
    paths: ["Деревня", "Пещера", "Озеро"],
    characters: ["Рыбак Нор"],
    monsters: ["Водяная тварь"]
  },
  "Горы": {
    desc: "Высокие скалистые горы, поросшие соснами. Путники часто теряются здесь, а на склонах можно встретить големов и хищников.",
    paths: ["Лес", "Развалины", "Каньон"],
    characters: [],
    monsters: ["Горный голем"]
  },
  "Поляна": {
    desc: "Открытая лесная поляна, где травы колышутся на ветру. Уединённое место, где можно передохнуть или устроить привал.",
    paths: ["Лес", "Башня"],
    characters: [],
    monsters: []
  },
  "Пещера": {
    desc: "Сырая пещера с извилистыми тоннелями. Здесь темно, сыро и опасно — ходят слухи о чудовищах, живущих в глубине.",
    paths: ["Река", "Развалины", "Болото"],
    characters: [],
    monsters: ["Слизень", "Пещерный паук"]
  },
  "Развалины": {
    desc: "Остатки древних построек, разрушенных временем и войнами. Каменные колонны и фрагменты стен покрыты мхом и трещинами.",
    paths: ["Горы", "Пещера", "Храм"],
    characters: [],
    monsters: ["Призрак легиона"]
  },
  "Башня": {
    desc: "Старая каменная башня, одиноко стоящая среди холмов. Внутри живёт страж, который следит за порядком и безопасностью окрестностей.",
    paths: ["Поляна", "Храм"],
    characters: ["Страж Ролан"],
    monsters: []
  },
  "Храм": {
    desc: "Невысокий храм из светлого камня, давно покинутый жрецами. Внутри ещё тлеет светильник, и в воздухе витает магия.",
    paths: ["Башня", "Развалины", "Портал", "Крепость"],
    characters: [],
    monsters: ["Служитель Тени"]
  },
  "Портал": {
    desc: "Круг камней с высеченными рунами. При определённом свете они начинают мерцать, открывая путь в иные миры.",
    paths: ["Храм"],
    characters: [],
    monsters: ["Страж Бездны"]
  },
  "Озеро": {
    desc: "Глубокое озеро с тихой гладью. Вода здесь необычайно чистая, но дно скрывает много тайн.",
    paths: ["Река", "Болото"],
    characters: ["Старец Вейн"],
    monsters: ["Озёрный дух"]
  },
  "Болото": {
    desc: "Топкое болото, где легко увязнуть. Плотный туман, мерзкие запахи и неясные силуэты между деревьями.",
    paths: ["Озеро", "Пещера"],
    characters: ["Мудрая жаба"],
    monsters: ["Болотный призрак", "Гнилец"]
  },
  "Каньон": {
    desc: "Глубокий каньон с крутыми стенами. Переходить его непросто, а крики птиц и отголоски шагов пугают путников.",
    paths: ["Горы", "Равнина"],
    characters: ["Скиталец Кайр"],
    monsters: ["Песчаный ящер"]
  },
  "Равнина": {
    desc: "Просторная равнина, покрытая травой и цветами. Иногда здесь виднеются древние курганы и охотники в поисках дичи.",
    paths: ["Каньон", "Крепость"],
    characters: [],
    monsters: ["Степной волк"]
  },
  "Крепость": {
    desc: "Каменная крепость с высокими стенами и сторожевыми башнями. Здесь несёт службу отряд стражников под руководством строгого коменданта.",
    paths: ["Равнина", "Храм"],
    characters: ["Комендант Рейн"],
    monsters: ["Оживший доспех"]
  }
};

function updateLocation() {
  const loc = playerData.location;
  const data = locations[loc];
  document.getElementById("location-name").innerText = loc;
  document.getElementById("location-desc").innerText = data.desc;

  const buttons = document.getElementById("location-buttons");
  buttons.innerHTML = "";

  data.paths.forEach(path => {
    const btn = document.createElement("button");
    btn.innerText = path;
    btn.onclick = () => {
      const distance = locationDistances[path];
      const travelTime = Math.min(distance * 5000, 15000);
      showTravelScreen(path, travelTime);
    };
    buttons.appendChild(btn);
  });

  const extraContent = document.getElementById("extra-content");
  extraContent.innerHTML = "";

  if (data.characters.length > 0) {
    const charTitle = document.createElement("div");
    charTitle.className = "section-title";
    charTitle.innerText = "Персонажи";
    const content = document.createElement("div");
    content.className = "section-content hidden";

    data.characters.forEach(name => {
      const btn = document.createElement("button");
      btn.innerText = name;
      btn.style.width = "100%";
      btn.style.margin = "5px 0";
      btn.onclick = () => showNpcDialog(name);
      content.appendChild(btn);
    });

    charTitle.onclick = () => {
      content.classList.toggle("hidden");
      charTitle.classList.toggle("open");
    };

    extraContent.appendChild(charTitle);
    extraContent.appendChild(content);
  }

  if (data.monsters.length > 0) {
    const monTitle = document.createElement("div");
    monTitle.className = "section-title";
    monTitle.innerText = "Монстры";
    const content = document.createElement("div");
    content.className = "section-content hidden";

    data.monsters.forEach(name => {
      const m = document.createElement("div");
      m.innerText = name;
      content.appendChild(m);
    });

    monTitle.onclick = () => {
      content.classList.toggle("hidden");
      monTitle.classList.toggle("open");
    };

    extraContent.appendChild(monTitle);
    extraContent.appendChild(content);
  }
}

function showAboutCharacter() {
  resetScreens();
  const screen = document.getElementById("character-screen");
  const charImg = document.getElementById("character-image");

  recalculateModifiers(); // обновляем модификаторы
  updateXpDisplay();      // обновляем XP-интерфейс

  const classMap = {
    archer: "archer_profile.png",
    warrior: "warrior_profile.png",
    rogue: "rogue_profile.png"
  };

  charImg.src = `Images/${classMap[playerData.class]}`;

  const slotPlaceholders = {
    helmet: "Images/empty_items/helmet_empty.png",
    armor: "Images/empty_items/armor_empty.png",
    boots: "Images/empty_items/boots_empty.png",
    weapon1: "Images/empty_items/weapon_empty.png",
    weapon2: "Images/empty_items/shield_empty.png",
    amulet: "Images/empty_items/amulet_empty.png"
  };

  document.querySelectorAll(".equipment-slot").forEach(slot => {
    const slotName = slot.dataset.slot;
    const item = playerData.equipment[slotName];

    // Очищаем существующие обработчики событий
    slot.style.cursor = item ? "pointer" : "default";
    const newSlot = slot.cloneNode(true);
    slot.parentNode.replaceChild(newSlot, slot);

    if (item) {
      const iconSrc = itemIcons[item] || "Images/items/unknown.png";
      newSlot.innerHTML = `<div class="equipment-item"><img src="${iconSrc}" alt="${item}" title="${item}" style="width:100%; height:100%; object-fit:contain;" /></div>`;
      newSlot.addEventListener("click", () => unequipItem(slotName));
    } else {
      const emptyIcon = slotPlaceholders[slotName] || "Images/items/unknown.png";
      newSlot.innerHTML = `<img src="${emptyIcon}" alt="Пусто" title="Пусто" style="width:100%; height:100%; object-fit:contain; opacity:0.4;" />`;
    }
  });

  let statsBlock = document.getElementById("character-stats");
  if (!statsBlock) {
    statsBlock = document.createElement("div");
    statsBlock.id = "character-stats";
    screen.appendChild(statsBlock);
  }

  const stats = playerData.stats || { strength: 0, agility: 0, endurance: 0, luck: 0 };

  statsBlock.innerHTML = `
    <div class="stat-row"><span>🦾 Сила:</span> <span><b>${stats.strength}</b></span></div>
    <div class="stat-row"><span>🗡️ Ловкость:</span> <span><b>${stats.agility}</b></span></div>
    <div class="stat-row"><span>❤️ Выносливость:</span> <span><b>${stats.endurance}</b></span></div>
    <div class="stat-row"><span>🍀 Удача:</span> <span><b>${stats.luck}</b></span></div>
  `;

  screen.classList.remove("hidden");
  screen.classList.add("visible");
  document.getElementById("menu-button").classList.remove("hidden");
  document.getElementById("menu-button").classList.add("visible");
  updateXpDisplay();
}

function getItemType(item) {
  if (item === "Лук") return "twohanded";
  if (["Меч", "Кинжал", "Щит"].includes(item)) return "weapon";
  if (["Кожаная броня", "Стальная броня", "Плащ"].includes(item)) return "armor";
  if (["Кольчужный капюшон", "Маска"].includes(item)) return "helmet";
  if (["Походные сапоги"].includes(item)) return "boots";
  if (["Зелье здоровья"].includes(item)) return "potion";
  return "amulet";
}

function getCritChance() {
  const agi = playerData.stats?.agility || 0;
  return 5 + Math.floor(agi / 10); // базово 5% + 1% за каждые 10 ловкости
}

function getDropChanceBonus() {
  const luck = playerData.stats?.luck || 0;
  return Math.floor(luck / 10); // +1% за каждые 10 удачи
}

function recalculateModifiers() {
  const baseModifiers = {
    speedFactor: 1.0,
    damageReduction: 1.0,
    damageBoost: 1.0
  };

  // Классовые бонусы
  if (playerData.class === "archer") baseModifiers.speedFactor = 0.9;
  if (playerData.class === "warrior") baseModifiers.damageReduction = 0.9;
  if (playerData.class === "rogue") baseModifiers.damageBoost = 1.1;

  // Предмет: Походные сапоги
  const boots = playerData.equipment.boots;
  if (boots === "Походные сапоги") {
    baseModifiers.speedFactor *= 0.9;
  }

  playerData.modifiers = baseModifiers;
}

function getXpToNextLevel(level) {
  if (level >= 20) return Infinity;
  return 100 + (level - 1) * 75;
}


function gainXp(amount) {
  playerData.xp += amount;
  while (playerData.xp >= getXpToNextLevel(playerData.level)) {
    playerData.xp -= getXpToNextLevel(playerData.level);
    playerData.level++;
    alert(`Поздравляем! Вы достигли уровня ${playerData.level}!`);
  }
  updateXpDisplay();
  saveGame();
}


function updateXpDisplay() {
  // Защита от отсутствующих данных
  if (typeof playerData.level !== "number") playerData.level = 1;
  if (typeof playerData.xp !== "number") playerData.xp = 0;

  const levelEl = document.getElementById("player-level");
  const xpEl = document.getElementById("current-xp");
  const xpNextEl = document.getElementById("xp-to-next");
  const xpFill = document.getElementById("xp-fill");

  const xpToNext = getXpToNextLevel(playerData.level);

  if (levelEl) levelEl.textContent = playerData.level;
  if (xpEl) xpEl.textContent = playerData.xp;
  if (xpNextEl) xpNextEl.textContent = xpToNext === Infinity ? "Макс" : xpToNext;

  if (xpFill) {
    const percent = xpToNext === Infinity ? 100 : (playerData.xp / xpToNext) * 100;
    xpFill.style.width = `${Math.min(percent, 100)}%`;
  }
}

function getDangerLevel(monsterLevel) {
  const diff = monsterLevel - playerData.level;
  if (diff <= -2) return { label: "низкая", color: "green" };
  if (diff <= 1) return { label: "средняя", color: "orange" };
  if (diff <= 3) return { label: "высокая", color: "purple" };
  return { label: "смерть", color: "black" };
}
