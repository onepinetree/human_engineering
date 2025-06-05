import { MENU_DATA } from './menu_data.js';

// 두 번째 사진 기준 메뉴 섹션 표시 순서
const B_MENU_VISUAL_ORDER = [
  "나의신청현황조회", "외국인유학생 입출국신고", "금학기졸업자신청", "휴/복학신청", "전공신청", "복수전공포기신청",
  "융합트랙신청", "마이크로디그리", "교직신청", "시험신청", "장학금신청", "등록관련신청",
  "유급신청", "예비군신청", "경영학과융합교육인증신청", "조기졸업신청", "학사연계과정생신청", "건강센터",
  "교환/해외수학생 신청", "학생생활관련신청", "기숙사", "학습컨설팅", "성균어학원강좌신청", "인턴십신청",
  "표준입학허가서", "응용AI융합학부재직증명서"
];

function getAllSectionsMap() {
  const sectionsMap = new Map();
  MENU_DATA.forEach(category => {
    category.sections.forEach(section => {
      sectionsMap.set(section.title, section);
    });
  });
  return sectionsMap;
}

function renderBVersionMenu() {
  const container = document.getElementById('b-menu-container');
  if (!container) {
    console.error('B안 메뉴 컨테이너를 찾을 수 없습니다.');
    return;
  }

  const sectionsMap = getAllSectionsMap();
  let menuHtml = '<div class="b-menu-table">'; // 첫 번째 테이블 (최대 12개 항목)
  let subMenuHtml = '<div class="b-menu-table" style="margin-top: 16px;">'; // 두 번째 테이블 (나머지 항목)
  let itemsInMainTableCount = 0;
  const maxItemsInMainTable = 12; // 첫 번째 테이블에 들어갈 최대 항목 수
  let totalRenderedCount = 0;

  B_MENU_VISUAL_ORDER.forEach(sectionTitle => {
    const section = sectionsMap.get(sectionTitle);
    if (section) {
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

      if (itemsInMainTableCount < maxItemsInMainTable) {
        menuHtml += currentItemHtml;
        itemsInMainTableCount++;
      } else {
        subMenuHtml += currentItemHtml;
      }
      totalRenderedCount++;
    }
  });

  menuHtml += '</div>';
  subMenuHtml += '</div>';

  if (totalRenderedCount <= maxItemsInMainTable) {
    container.innerHTML = menuHtml;
  } else {
    container.innerHTML = menuHtml + subMenuHtml;
  }
}

document.addEventListener('DOMContentLoaded', renderBVersionMenu); 