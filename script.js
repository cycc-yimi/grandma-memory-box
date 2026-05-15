const levels = [
  {
    title: "第一關：重建的巧手",
    locationName: "第一關地點：灣潭泗洲佛祖寺",
    mapText: "請依照地圖走到灣潭泗洲佛祖寺位置，抵達後再開始答題。",
    mapUrl: "https://maps.app.goo.gl/rvBHWmd5RJvpvcwA7",
    mapImage: "images/灣潭泗洲佛祖寺.jpg",
    mapImageAlt: "第一關地圖指引",
    image: "images/挑夫.jpg",
    imageAlt: "",
    intro:
      "以前這條汗路只能靠雙腳走，大家挑著東西一走就是好幾公里。那時候，大家還要防土匪，所以在村子外種滿刺竹，像替家園穿上一層盔甲。",
    question:
      "問題1：在民國53年白河大地震導致許多土塊厝倒塌後，堅韌的村民們利用了哪些天然材料，重新搭建起「竹管厝」來重建家園？",
    choices: ["木材與竹子", "大理石與花崗岩", "鋼筋與預拌混凝土", "強化玻璃與塑膠皮"],
    answer: 0,
    explanation:
      "答對了！竹管厝是早年山區聚落常見的建築樣貌，通常就地取材，以竹子作為主要支撐，外覆泥土與稻草混合的牆體。",
    explanationImage: "images/竹管厝.jpg",
    explanationImageAlt: "竹管厝示意圖"
  },
  {
    title: "第二關：專注觀察",
    intro:
      "有些答案藏在細節裡。遇到選項很像的題目時，慢下來觀察關鍵字，通常會比憑直覺更穩。",
    question: "如果四個選項看起來都很像，最好怎麼做？",
    choices: ["找題目中的關鍵字", "隨便點最快", "永遠選 A", "直接放棄"],
    answer: 0,
    explanation:
      "答對了！關鍵字能幫你抓到題目的真正重點，尤其適合用在容易混淆的選項中。"
  },
  {
    title: "第三關：錯了再試",
    intro:
      "答錯不是失敗，而是重新判斷的機會。這個遊戲會讓你再選一次，直到找出正確答案。",
    question: "答錯時，這個遊戲會怎麼做？",
    choices: ["直接結束遊戲", "扣掉所有點數", "請作答者重新選擇", "跳到禮物畫面"],
    answer: 2,
    explanation:
      "答對了！答錯時會提醒重新選擇，讓作答者能從錯誤中修正，而不是立刻被淘汰。"
  },
  {
    title: "第四關：公平集點",
    intro:
      "每一關通過後可以得到 2 點，但同一關只會給一次。這樣能避免重複刷點，也讓進度更公平。",
    question: "為什麼同一關不能重複獲得點數？",
    choices: ["讓遊戲更公平", "讓題目變少", "讓畫面變暗", "讓選項消失"],
    answer: 0,
    explanation:
      "答對了！同一關只計分一次，可以確保點數代表真正完成的關卡進度。"
  },
  {
    title: "第五關：完成挑戰",
    intro:
      "完成所有關卡後，總共可以集滿 10 點。集滿點數就代表你通過全部挑戰，可以領取小禮物。",
    question: "5 個關卡全部完成後，總共會有幾點？",
    choices: ["4 點", "6 點", "8 點", "10 點"],
    answer: 3,
    explanation:
      "答對了！每關 2 點，5 關剛好是 10 點。恭喜你完成全部挑戰。"
  }
];

const STORAGE_KEY = "questQuizProgress";
const POINTS_PER_LEVEL = 2;
const totalPoints = levels.length * POINTS_PER_LEVEL;

let state = loadState();
let currentLevel = getFirstPlayableLevel();
let answeredCorrectly = false;

const pointsEl = document.querySelector("#points");
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
  return state.completed.length * POINTS_PER_LEVEL;
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
      <div class="gift-mark">10</div>
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
