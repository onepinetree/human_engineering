import { MENU_DATA } from './menu_data.js';

// 각 상위 카테고리에 적용할 배경색 배열
const categoryColors = [
  '#e7f3e2', '#e2f0f3', '#f3e2e2', '#f3f1e2', '#e2e6f3', 
  '#e2f3ec', '#f3e2f0', '#f0f3e2', '#e2f3f3', '#f3e8e2' 
  // 필요에 따라 더 많은 색상 추가 가능
];

function renderCVersionMenu() {
  const container = document.getElementById('c-menu-container');
  if (!container) {
    console.error('C안 메뉴 컨테이너를 찾을 수 없습니다.');
    return;
  }

  let menuHtml = '<div class="c-menu-table">';

  MENU_DATA.forEach((category, index) => {
    menuHtml += '<div class="c-menu-col">';
    // category.name 대신 category.title 사용
    // 배경색을 동적으로 할당
    const bgColor = categoryColors[index % categoryColors.length]; 
    menuHtml += `<div class="c-menu-title" style="background-color: ${bgColor}; border-color: ${adjustColor(bgColor, -20)};">${category.title}</div>`; 

    if (category.sections && category.sections.length > 0) {
      category.sections.forEach(section => {
        menuHtml += '<div class="c-menu-section">';
        menuHtml += `<div class="c-menu-section-title">${section.title}</div>`;

        if (section.menus && section.menus.length > 0) {
          menuHtml += '<ul class="c-menu-section-list">';
          section.menus.forEach(menu => {
            menuHtml += `<li><a href="${menu.link || '#'}" class="c-menu-link">${menu.text}</a></li>`;
          });
          menuHtml += '</ul>';
        }
        menuHtml += '</div>';
      });
    }
    menuHtml += '</div>';
  });

  menuHtml += '</div>';
  container.innerHTML = menuHtml;
}

// Helper function to slightly darken a hex color for the border
function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, c => ('0' + Math.min(255, Math.max(0, parseInt(c, 16) + amount)).toString(16)).substr(-2));
}

document.addEventListener('DOMContentLoaded', renderCVersionMenu); 