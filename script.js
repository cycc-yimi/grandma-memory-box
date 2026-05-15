const levels = [
  {
    title: "第一關：重建的巧手",
    locationName: "第一關地點：灣潭泗洲佛祖寺",
    mapText: "請依照地圖走到灣潭泗洲佛祖寺位置，抵達後再開始答題。",
    mapUrl: "https://maps.app.goo.gl/rvBHWmd5RJvpvcwA7",
    mapImage: "images/A1.jpg",
    mapImageAlt: "第一關地圖指引",
    image: "images/A2.jpg",
    imageAlt: "",
    intro:
      "以前這條汗路只能靠雙腳走，大家挑著東西一走就是好幾公里。那時候，大家還要防土匪，所以在村子外種滿刺竹，像替家園穿上一層盔甲。",
    question:
      "問題1：在民國53年白河大地震導致許多土塊厝倒塌後，堅韌的村民們利用了哪些天然材料，重新搭建起「竹管厝」來重建家園？",
    choices: ["木材與竹子", "大理石與花崗岩", "鋼筋與預拌混凝土", "強化玻璃與塑膠皮"],
    answer: 0,
    explanation:
      "答對了！白河大地震後土塊厝全倒，村民便以竹子作為主要支撐，外覆泥土與稻草混合建成「竹管厝」，這體現了早期農村取材自然、互相扶持的強韌生命力。",
    explanationImage: "images/A3.jpg",
    explanationImageAlt: "竹管厝示意圖"
  },
  {
    title: "第二關：山谷的搬運手",
    locationName: "第二關地點：灣潭仙姑娘廟",
    mapText: "請依照地圖走到灣潭仙姑娘廟位置，抵達後再開始答題。",
    mapUrl: "https://maps.app.goo.gl/o569xrMqmVxZZ96f9",
    mapImage: "images/B1.jpg",
    mapImageAlt: "第二關地圖指引",
    image: "images/B2.jpg",
    imageAlt: "",
    intro:
      "以前沒有水泥橋，大家只能踩著石頭過溪，遇到大雨就只能靠吊橋或散竹橋。不過，過溪還不是最難的，最辛苦的，是把山上的寶貝運下來。以前山上有很多杉木，還有燒石灰用的石灰石，牛車根本上不去。於是聰明的長輩們，就在山谷間架起了一條神祕的「空中運輸線」。",
    question:
      "問題2：以前的人為了將山上的石灰石或厚重的杉木運送下山，最常利用哪一種工具來進行山間吊運？",
    choices: ["牛車運輸", "流籠", "鐵牛仔", "手抬搬運"],
    answer: 1,
    explanation:
      "答對了！當時的人會利用「流籠」將石灰石從山上吊運下山後運到石灰窯，或是運送珍貴的杉木。整個過程主要靠人力拉動，是早期山區非常重要的搬運方式。",
    explanationImage: "images/B3.jpg",
    explanationImageAlt: "流籠示意圖"
  },
  {
    title: "第三關：金黃色傳家寶",
    locationName: "第三關地點：鹽館菸樓",
    mapText: "請依照地圖走到鹽館菸樓位置，抵達後再開始答題。",
    mapUrl: "https://maps.app.goo.gl/MexWBeuYZTd1zUcN9",
    mapImage: "images/C1.jpg",
    mapImageAlt: "第三關地圖指引",
    image: "images/C2.jpg",
    imageAlt: "",
    intro:
      "以前為了生活，大家什麼苦工都做，有人上山砍竹子，泡進紙礐仔，撒上石灰做粗紙；有人去抽滿身是刺的黃藤，拖回來剖條、燻白換錢。那些石灰水流進溪裡，魚蝦暫時昏倒，小孩子就跑去撿魚撿蝦，幫家裡加菜。",
    question: "問題3：以前鹽館村最有名的經濟支柱是什麼呢？",
    choices: ["菸草", "檳榔", "稻米", "甘蔗"],
    answer: 0,
    explanation:
      "答對了！以前鹽館村高達三分之二的收入都來自菸草。每年九月稻子收割後，大家就開始忙著種菸草。收成後，還要一葉一葉用菸針串起來，吊進菸樓裡慢慢烘，直到變成漂亮的黃褐色，再送往十字路的驗菸廠。這項產業在當年可是外銷出口的「綠色黃金」呢！",
    explanationImage: "images/C3.jpg",
    explanationImageAlt: "曬煙示意圖"
  },
  {
    title: "第四關：流動的日常",
    locationName: "第四關地點：鹽館晉南宮（王爺廟）",
    mapText: "請依照地圖走到鹽館晉南宮（王爺廟）位置，抵達後再開始答題。",
    mapUrl: "https://maps.app.goo.gl/P6aeaeEHGqZoAr4g7",
    mapImage: "images/D1.jpg",
    mapImageAlt: "第四關地圖指引",
    image: "images/D2.jpg",
    imageAlt: "",
    intro:
      "在自來水尚未普及的年代，溪流就是生活重心。婦女們合力到溪邊洗衣，以木板槌打、漂洗、日曬。當時家家戶戶都依賴赤蘭溪與其支流生活，從洗衣、取水到灌溉，溪水串起了村落的節奏與人情。",
    question: "問題4：以前的村民會如何利用赤蘭溪與其支流的水呢？",
    choices: ["養海豚", "游泳比賽", "用來發電", "灌溉與洗衣"],
    answer: 3,
    explanation:
      "答對了！赤蘭溪的水會經由溝渠引入稻田灌溉，婦女也會們合力到溪邊洗衣。早期農民甚至會自力救濟，抱石頭堆砌小水壩引支流灌溉，並開鑿埤塘儲存水源，這就是最真實的農村日常。",
    explanationImage: "images/D3.jpg",
    explanationImageAlt: "洗衣示意圖"
  }
];

const STORAGE_KEY = "questQuizProgress";
const POINTS_PER_LEVEL = 2;
const totalPoints = levels.length * POINTS_PER_LEVEL;

let state = loadState();
let currentLevel = getFirstPlayableLevel();
let answeredCorrectly = false;

const pointsEl = document.querySelector("#points");
const totalPointsEl = document.querySelector("#totalPoints");
const levelListEl = document.querySelector("#levelList");
const progressFillEl = document.querySelector("#progressFill");
const gamePanelEl = document.querySelector("#gamePanel");

render();

function loadState() {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return { completed: [] };
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : []
    };
  } catch {
    return { completed: [] };
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getPoints() {
  return state.completed.filter((levelIndex) => levelIndex < levels.length).length * POINTS_PER_LEVEL;
}

function getFirstPlayableLevel() {
  return Math.min(state.completed.length, levels.length - 1);
}

function canOpenLevel(index) {
  return index <= state.completed.length;
}

function isCompleted(index) {
  return state.completed.includes(index);
}

function render() {
  pointsEl.textContent = getPoints();
  if (totalPointsEl) {
    totalPointsEl.textContent = `/ ${totalPoints}`;
  }
  progressFillEl.style.width = `${(getPoints() / totalPoints) * 100}%`;
  renderLevelList();

  if (getPoints() >= totalPoints) {
    renderGift();
    return;
  }

  renderLevel();
}

function renderLevelList() {
  levelListEl.innerHTML = "";

  levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.className = "level-pill";
    button.type = "button";
    button.textContent = `第 ${index + 1} 關`;

    if (index === currentLevel) {
      button.classList.add("active");
    }

    if (isCompleted(index)) {
      button.classList.add("done");
      button.textContent = `第 ${index + 1} 關 已完成`;
    }

    if (!canOpenLevel(index)) {
      button.classList.add("locked");
      button.disabled = true;
    }

    button.addEventListener("click", () => {
      currentLevel = index;
      answeredCorrectly = false;
      render();
    });

    levelListEl.appendChild(button);
  });
}

function renderLevel() {
  const level = levels[currentLevel];

  gamePanelEl.innerHTML = `
    <div class="level-meta">
      <span>關卡 ${currentLevel + 1} / ${levels.length}</span>
      <span class="badge">通關可得 ${POINTS_PER_LEVEL} 點</span>
    </div>
    ${renderMapGuide(level)}
    <section class="intro">
      <h2>${level.title}</h2>
      <p>${level.intro}</p>
      ${renderImage(level.image, level.imageAlt || level.title)}
    </section>
    <h3 class="question">${level.question}</h3>
    <div class="choices" id="choices"></div>
    <div class="feedback" id="feedback" aria-live="polite">請選擇一個答案。</div>
    <div class="actions" id="actions"></div>
  `;

  const choicesEl = document.querySelector("#choices");
  level.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `<strong>${String.fromCharCode(65 + index)}</strong>${choice}`;
    button.addEventListener("click", () => checkAnswer(index, button));
    choicesEl.appendChild(button);
  });
}

function renderMapGuide(level) {
  if (!level.mapUrl && !level.mapImage) {
    return "";
  }

  return `
    <section class="map-guide">
      <div>
        <span class="map-label">地圖指引</span>
        <h2>${level.locationName || "前往本關地點"}</h2>
        <p>${level.mapText || "請先依照地圖指引走到本關地點，再開始閱讀介紹與答題。"}</p>
      </div>
      ${renderImage(level.mapImage, level.mapImageAlt || "關卡地圖指引")}
      ${
        level.mapUrl
          ? `<a class="map-link" href="${level.mapUrl}" target="_blank" rel="noopener">開啟地圖</a>`
          : ""
      }
    </section>
  `;
}

function renderImage(src, alt) {
  if (!src) {
    return "";
  }

  return `<img class="level-image" src="${src}" alt="${alt || ""}" />`;
}

function checkAnswer(selectedIndex, selectedButton) {
  if (answeredCorrectly) {
    return;
  }

  const level = levels[currentLevel];
  const feedbackEl = document.querySelector("#feedback");
  const actionEl = document.querySelector("#actions");

  document.querySelectorAll(".choice").forEach((button) => {
    button.classList.remove("wrong");
  });

  if (selectedIndex !== level.answer) {
    selectedButton.classList.add("wrong");
    feedbackEl.className = "feedback error";
    feedbackEl.textContent = "還不是正確答案，再想一下，請重新選擇！";
    return;
  }

  answeredCorrectly = true;
  selectedButton.classList.add("correct");
  feedbackEl.className = "feedback success";
  feedbackEl.innerHTML = `
    <p>${level.explanation}</p>
    ${renderImage(level.explanationImage, level.explanationImageAlt || "答對後的補充圖片")}
  `;

  if (!isCompleted(currentLevel)) {
    state.completed.push(currentLevel);
    saveState();
  }

  pointsEl.textContent = getPoints();
  if (totalPointsEl) {
    totalPointsEl.textContent = `/ ${totalPoints}`;
  }
  progressFillEl.style.width = `${(getPoints() / totalPoints) * 100}%`;
  renderLevelList();

  actionEl.innerHTML = "";
  const nextButton = document.createElement("button");
  nextButton.className = "primary-btn";
  nextButton.type = "button";
  nextButton.textContent =
    getPoints() >= totalPoints ? "領取小禮物" : "前往下一關";
  nextButton.addEventListener("click", () => {
    if (getPoints() >= totalPoints) {
      render();
      return;
    }

    currentLevel = getFirstPlayableLevel();
    answeredCorrectly = false;
    render();
  });
  actionEl.appendChild(nextButton);
}

function renderGift() {
  gamePanelEl.innerHTML = `
    <section class="gift">
      <div class="gift-mark">${totalPoints}</div>
      <h2>恭喜集滿點數！</h2>
      <p>你已完成全部 ${levels.length} 個關卡，總共獲得 ${totalPoints} 點。現在可以向活動人員出示這個畫面，領取你的小禮物。</p>
      <div class="actions">
        <button class="secondary-btn" id="reviewButton" type="button">回顧關卡</button>
        <button class="secondary-btn" id="resetButton" type="button">重新開始</button>
      </div>
    </section>
  `;

  document.querySelector("#reviewButton").addEventListener("click", () => {
    currentLevel = 0;
    answeredCorrectly = false;
    renderLevel();
    renderLevelList();
  });

  document.querySelector("#resetButton").addEventListener("click", () => {
    state = { completed: [] };
    saveState();
    currentLevel = 0;
    answeredCorrectly = false;
    render();
  });
}
