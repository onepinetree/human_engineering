import { MENU_DATA } from './menu_data.js';

function renderBVersionMenu() {
  const container = document.getElementById('b-menu-container');
  if (!container) {
    console.error('B안 메뉴 컨테이너를 찾을 수 없습니다.');
    return;
  }

  let menuHtml = '<div class="b-menu-table">';
  let subMenuHtml = '<div class="b-menu-table" style="margin-top: 32px;">'; // 하단 메뉴용
  let itemCount = 0;
  const itemsPerMainTable = 12; // 첫 번째 b-menu-table에 들어갈 항목 수 (대략 이미지 기준)

  MENU_DATA.forEach(category => {
    category.sections.forEach(section => {
      let currentItemHtml = '<div class="b-menu-col">';
      currentItemHtml += `<div class="b-menu-title">${section.title}</div>`;
      if (section.menus && section.menus.length > 0) {
        currentItemHtml += '<ul class="b-menu-list">';
        section.menus.forEach(menu => {
          currentItemHtml += `<li><a href="#" class="b-menu-link">${menu.text}</a></li>`;
        });
        currentItemHtml += '</ul>';
      }
      currentItemHtml += '</div>';

      if (itemCount < itemsPerMainTable) {
        menuHtml += currentItemHtml;
      } else {
        subMenuHtml += currentItemHtml;
      }
      itemCount++;
    });
  });

  menuHtml += '</div>'; // b-menu-table 닫기
  subMenuHtml += '</div>'; // 하단 b-menu-table 닫기
  
  container.innerHTML = menuHtml + (itemCount > itemsPerMainTable ? subMenuHtml : '');
}

document.addEventListener('DOMContentLoaded', renderBVersionMenu); 