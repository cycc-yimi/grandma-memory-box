import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(new URL("../script.js", import.meta.url), "utf8");
const dataSource = source.slice(0, source.indexOf("let state ="));
const context = {};

vm.runInNewContext(dataSource.replace("const levels =", "var levels ="), context);

const levels = context.levels;
const expectedStops = [
  ["DW-WT-001", "WT-01"],
  ["DW-WT-001", "WT-02"],
  ["DW-YG-001", "YG-07"],
  ["DW-YG-001", "YG-05"],
];

test("四關順序、站點關聯與既有計分規則維持不變", () => {
  assert.equal(levels.length, 4);
  assert.deepEqual(
    Array.from(levels, (level) => [level.routeId, level.stopId]),
    expectedStops,
  );
  assert.deepEqual(Array.from(levels[3].relatedStopIds), ["YG-06"]);
  assert.match(source, /const STORAGE_KEY = "questQuizProgress"/);
  assert.match(source, /const POINTS_PER_LEVEL = 2/);
  assert.match(source, /const totalPoints = levels\.length \* POINTS_PER_LEVEL/);
});

test("YG-07 使用晉南宮附近的 public-safe 導航與外部觀看提醒", () => {
  const yanguanTobaccoBuilding = levels[2];
  assert.equal(yanguanTobaccoBuilding.mapUrl, "https://maps.app.goo.gl/psfGZZFDLCFf7Rkb6");
  assert.equal(yanguanTobaccoBuilding.mapButtonText, "導航至晉南宮附近");
  assert.match(yanguanTobaccoBuilding.mapText, /鄰近定位/);
  assert.match(yanguanTobaccoBuilding.mapText, /公共巷道外部觀看/);
  assert.match(yanguanTobaccoBuilding.mapText, /不可進入建物/);
  assert.match(yanguanTobaccoBuilding.mapText, /不會直接帶到菸樓入口/);
  assert.doesNotMatch(source, /MexWBeuYZTd1zUcN9/);
});

test("YG-05 名稱與延伸站點維持已確認的公開內容", () => {
  const jinNanTemple = levels[3];
  assert.equal(jinNanTemple.locationName, "第四關地點：鹽館晉南宮");
  assert.equal(jinNanTemple.stopId, "YG-05");
  assert.deepEqual(Array.from(jinNanTemple.relatedStopIds), ["YG-06"]);
  assert.doesNotMatch(source, /王爺廟/);
});

test("四關數位走讀 CTA 由 routeId 與 stopId 安全組合", () => {
  assert.deepEqual(
    Array.from(levels, (level) => context.getDigitalWalkUrl(level)),
    expectedStops.map(
      ([routeId, stopId]) =>
        `https://yimi-tian.github.io/yimi-story/index.html#/digital/${routeId}/${stopId}`,
    ),
  );
  assert.match(source, /查看這一站的完整數位走讀/);
  assert.match(source, /target="_blank" rel="noopener noreferrer"/);
});

test("完成頁保留八點流程並新增現場核對提醒", () => {
  assert.match(source, /恭喜集滿點數/);
  assert.match(source, /此畫面為闖關完成紀錄，實際領取方式依現場工作人員核對為準。/);
  assert.match(source, /getPoints\(\) >= totalPoints/);
});

test("production source 不含禁止字樣且圖片路徑維持 A1 至 D3", () => {
  for (const forbidden of [
    "MexWBeuYZTd1zUcN9",
    "王爺廟",
    "localhost",
    "待確認",
    "待補",
    "secret",
    "token",
  ]) {
    assert.equal(source.toLowerCase().includes(forbidden.toLowerCase()), false, forbidden);
  }

  assert.deepEqual(
    Array.from(levels).flatMap((level) => [level.mapImage, level.image, level.explanationImage]),
    [
      "images/A1.jpg",
      "images/A2.jpg",
      "images/A3.jpg",
      "images/B1.jpg",
      "images/B2.jpg",
      "images/B3.jpg",
      "images/C1.jpg",
      "images/C2.jpg",
      "images/C3.jpg",
      "images/D1.jpg",
      "images/D2.jpg",
      "images/D3.jpg",
    ],
  );
});
