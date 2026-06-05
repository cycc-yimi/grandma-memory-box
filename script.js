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
      "答對了！赤蘭溪的水會經由溝渠引入稻田灌溉。早期農民甚至會自力救濟，抱石頭堆砌小水壩引支流灌溉，並開鑿埤塘儲存水源，這就是最真實的農村日常。",
    explanationImage: "images/D3.jpg",
    explanationImageAlt: "洗衣示意圖"
  }
];

const STORAGE_KEY = "questQuizProgress";
const POINTS_PER_LEVEL = 2;
const totalPoints = levels.length * POINTS_PER_LEVEL;
const guardian = {
  name: "赤靈",
  image: "images/Chiling-transparent.png",
  welcomeImage: "images/Chiling-Welcome.png",
  rightImage: "images/Chiling-Right.png",
  tryAgainImage: "images/Chiling-Try Again.png",
  finishImage: "images/Chiling-Finish.png",
  message: "跟著我走進赤蘭溪的故事。先找到地圖上的地點，再完成這一關的小挑戰吧！"
};

let state = loadState();
let currentLevel = getFirstPlayableLevel();
let answeredCorrectly = false;
let hasStarted = false;
let arStream = null;

const pointsEl = document.querySelector("#points");
const totalPointsEl = document.querySelector("#totalPoints");
const progressPanelEl = document.querySelector("#progressPanel");
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

function getCompletedLevels() {
  return state.completed.filter((levelIndex) => levelIndex < levels.length);
}

function getPoints() {
  return getCompletedLevels().length * POINTS_PER_LEVEL;
}

function getFirstPlayableLevel() {
  return Math.min(getCompletedLevels().length, levels.length - 1);
}

function canOpenLevel(index) {
  return index <= getCompletedLevels().length;
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

  if (!hasStarted) {
    progressPanelEl.hidden = true;
    renderCover();
    return;
  }

  progressPanelEl.hidden = false;
  if (getPoints() >= totalPoints) {
    renderGift();
    return;
  }

  renderLevel();
}

function renderCover() {
  gamePanelEl.innerHTML = `
    <section class="cover">
      <div class="cover-copy">
        <p class="eyebrow">赤蘭溪走讀任務</p>
        <h2>跟著赤靈，走進溪流與聚落的記憶</h2>
        <p>這是一場需要實際走到地點的闖關遊戲。每一關會先給你地圖指引，抵達後閱讀故事、完成小測驗，就能獲得 2 點。</p>
        <div class="cover-stats">
          <span>${levels.length} 個關卡</span>
          <span>每關 ${POINTS_PER_LEVEL} 點</span>
          <span>集滿 ${totalPoints} 點領小禮物</span>
        </div>
        <div class="actions">
          <button class="primary-btn" id="startButton" type="button">${getPoints() > 0 ? "繼續走讀" : "開始走讀"}</button>
          ${
            getPoints() > 0
              ? `<button class="secondary-btn" id="coverResetButton" type="button">重新開始</button>`
              : ""
          }
        </div>
      </div>
      <div class="cover-guardian">
        <img src="${guardian.welcomeImage}" alt="${guardian.name} 歡迎圖" />
        <h3>${guardian.name}</h3>
        <p>${guardian.message}</p>
      </div>
    </section>
  `;

  document.querySelector("#startButton").addEventListener("click", () => {
    hasStarted = true;
    currentLevel = getFirstPlayableLevel();
    answeredCorrectly = false;
    render();
  });

  const resetButton = document.querySelector("#coverResetButton");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      state = { completed: [] };
      saveState();
      currentLevel = 0;
      answeredCorrectly = false;
      render();
    });
  }
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
    ${renderGuardian()}
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

function renderGuardian() {
  return `
    <section class="guardian-panel">
      <img class="guardian-image" src="${guardian.image}" alt="${guardian.name}" />
      <div>
        <span class="guardian-label">走讀守護靈</span>
        <h2>${guardian.name}</h2>
        <p>${guardian.message}</p>
        <button class="secondary-btn ar-button" type="button" onclick="openArExperience()">召喚赤靈</button>
      </div>
    </section>
  `;
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

function renderGuardianFeedback(type, imageSrc, message, detail = "", imageHtml = "") {
  return `
    <div class="guardian-feedback ${type}">
      <div class="guardian-feedback-avatar">
        <img src="${imageSrc}" alt="${guardian.name}" />
      </div>
      <div class="guardian-feedback-text">
        <strong>${guardian.name}</strong>
        <p>${message}</p>
        ${detail ? `<p class="feedback-detail">${detail}</p>` : ""}
      </div>
      <div class="guardian-feedback-media">
        ${imageHtml}
      </div>
    </div>
  `;
}

function ensureArOverlay() {
  if (document.querySelector("#arOverlay")) {
    return;
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <section class="ar-overlay" id="arOverlay" aria-hidden="true">
        <div class="ar-stage">
          <video class="ar-video" id="arVideo" autoplay playsinline muted></video>
          <img class="ar-guardian" src="${guardian.image}" alt="${guardian.name}" />
          <div class="ar-hud">
            <strong>${guardian.name} 已出現</strong>
            <span>移動手機，讓赤靈陪你一起走讀。</span>
          </div>
          <button class="ar-close" id="arCloseButton" type="button">關閉</button>
        </div>
      </section>
    `
  );

  document.querySelector("#arCloseButton").addEventListener("click", closeArExperience);
}

async function openArExperience() {
  ensureArOverlay();
  const overlay = document.querySelector("#arOverlay");
  const video = document.querySelector("#arVideo");
  const hint = document.querySelector(".ar-hud span");

  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  overlay.classList.remove("ar-error");

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    overlay.classList.add("ar-error");
    hint.textContent = "這個瀏覽器不支援直接開啟相機。請改用手機的 Safari 或 Chrome 開啟。";
    return;
  }

  if (!window.isSecureContext) {
    overlay.classList.add("ar-error");
    hint.textContent = "相機需要 HTTPS 網址才能開啟。請用 GitHub Pages 的 https:// 網址測試。";
    return;
  }

  try {
    arStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });
    video.srcObject = arStream;
  } catch {
    try {
      arStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });
      video.srcObject = arStream;
    } catch {
      overlay.classList.add("ar-error");
      hint.textContent =
        "相機沒有成功開啟。請確認已允許相機權限，並使用 HTTPS 網址。";
    }
  }
}

function closeArExperience() {
  const overlay = document.querySelector("#arOverlay");
  const video = document.querySelector("#arVideo");

  if (arStream) {
    arStream.getTracks().forEach((track) => track.stop());
    arStream = null;
  }

  if (video) {
    video.srcObject = null;
  }

  if (overlay) {
    overlay.classList.remove("active", "ar-error");
    overlay.setAttribute("aria-hidden", "true");
  }
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
    feedbackEl.innerHTML = renderGuardianFeedback(
      "wrong",
      guardian.tryAgainImage,
      "再試一次！",
      "這題還不是正確答案。赤靈陪你再想一下，重新選一個答案吧。"
    );
    return;
  }

  answeredCorrectly = true;
  selectedButton.classList.add("correct");
  feedbackEl.className = "feedback success";
  feedbackEl.innerHTML = renderGuardianFeedback(
    "correct",
    guardian.rightImage,
    "答對了！",
    level.explanation,
    renderImage(level.explanationImage, level.explanationImageAlt || "答對後的補充圖片")
  );

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
      <img class="gift-guardian" src="${guardian.finishImage}" alt="${guardian.name} 完成圖" />
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
