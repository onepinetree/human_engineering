import { MENU_DATA } from './menu_data.js';

let selectedMain = null;
let selectedSub = null;

function renderMainCategories() {
  const main = document.querySelector('.main-categories');
  main.innerHTML = MENU_DATA.map((cat, idx) =>
    `<div class="category-card${selectedMain === idx ? ' active' : ''}" data-section="${idx}"><span class="icon-main">${cat.icon}</span> ${cat.title}</div>`
  ).join('');
}

function renderSubCategories(idx) {
  const sub = document.getElementById('sub-sections-container');
  if (idx === null || idx === undefined) {
    sub.innerHTML = '';
    return;
  }
  const cat = MENU_DATA[idx];
  sub.innerHTML = `
    <div class="sub-category-list">
      ${cat.sections.map((section, sidx) => `
        <button class="sub-category-btn${selectedSub === sidx ? ' active' : ''}" data-sub="${sidx}">
          <span class="icon-second">${section.icon}</span> ${section.title}
        </button>
      `).join('')}
    </div>
    <div id="menu-list-container"></div>
  `;
  if (selectedSub !== null) renderMenuList(idx, selectedSub);
}

function renderMenuList(mainIdx, subIdx) {
  const container = document.getElementById('menu-list-container');
  if (!container) return;
  const section = MENU_DATA[mainIdx].sections[subIdx];
  container.innerHTML = `
    <ul class="menu-list">
      ${section.menus.map(menu => `
        <li${menu.highlight ? ' class="highlight-third"' : ''}><a href="#"><span class="icon-third">${menu.icon}</span><span class="link-text">${menu.text}</span><span class="link-arrow">›</span></a></li>
      `).join('')}
    </ul>
  `;
}

function handleMainCategoryClick(e) {
  const card = e.target.closest('.category-card');
  if (!card) return;
  const idx = Number(card.dataset.section);
  selectedMain = idx;
  selectedSub = null;
  renderMainCategories();
  renderSubCategories(idx);
}

function handleSubCategoryClick(e) {
  const btn = e.target.closest('.sub-category-btn');
  if (!btn) return;
  const sidx = Number(btn.dataset.sub);
  if (selectedSub === sidx) {
    // 토글: 이미 선택된 경우 닫기
    selectedSub = null;
    renderSubCategories(selectedMain);
    return;
  }
  selectedSub = sidx;
  renderSubCategories(selectedMain);
}

function init() {
  renderMainCategories();
  document.querySelector('.main-categories').addEventListener('click', handleMainCategoryClick);
  document.getElementById('sub-sections-container').addEventListener('click', handleSubCategoryClick);
}
document.addEventListener('DOMContentLoaded', init); 