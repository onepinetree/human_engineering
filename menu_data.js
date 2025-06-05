export const MENU_DATA = [
  {
    icon: "📁",
    title: "기타 영역",
    sections: [
      { title: "나의신청현황조회", icon: "📋", menus: [] },
      { title: "교환/해외수학생 신청", icon: "🌐", menus: [
        { icon: "🖥️", text: "온라인 원서 접수" },
        { icon: "✍️", text: "서약서 제출" },
        { icon: "📦", text: "도착 확인서 제출" },
        { icon: "📝", text: "수학보고서 작성" }
      ]},
      { title: "시험신청", icon: "📝", menus: [
        { icon: "📢", text: "특별시험안내사항" },
        { icon: "🖋️", text: "특별시험신청" }
      ]},
      { title: "예비군신청", icon: "🪖", menus: [
        { icon: "📢", text: "예비군전입신청안내사항" },
        { icon: "🪖", text: "예비군전입신청" }
      ]},
      { title: "학습컨설팅", icon: "🧑‍🏫", menus: [
        { icon: "📢", text: "안내사항" },
        { icon: "📝", text: "학습컨설팅신청및조회" },
        { icon: "🔍", text: "학습진단" }
      ]},
      { title: "학사연계과정생신청", icon: "🔗", menus: [
        { icon: "✍️", text: "학사연계과정생신청" },
        { icon: "❌", text: "학사연계과정생포기신청" }
      ]}
    ]
  },
  {
    icon: "💳",
    title: "등록 영역",
    sections: [
      { title: "등록관련신청", icon: "🗂️", menus: [
        { icon: "📄", text: "기타서류발급신청" },
        { icon: "📢", text: "안내사항(등록금분할납부)" },
        { icon: "💳", text: "등록금분할납부신청" },
        { icon: "💸", text: "초과등록금납부/환불신청" },
        { icon: "✅", text: "전액장학금대상자동등록신청" }
      ]},
      { title: "유급신청", icon: "⚠️", menus: [
        { icon: "📢", text: "안내사항" },
        { icon: "🚸", text: "유급신청" }
      ]},
      { title: "장학금신청", icon: "💵", menus: [
        { icon: "📢", text: "안내사항" },
        { icon: "💵", text: "장학금신청" },
        { icon: "🏦", text: "장학금 수령 계좌 등록" }
      ]},
      { title: "휴/복학신청", icon: "🔄", menus: [
        { icon: "📢", text: "안내사항" },
        { icon: "🔄", text: "일반복학신청" },
        { icon: "🛌", text: "일반휴학신청" },
        { icon: "🎖️", text: "재학중입대휴학신청" },
        { icon: "🚑", text: "입소신청후복학신청" },
        { icon: "📊", text: "복학/휴학상태조회" },
        { icon: "💰", text: "장학금반환계좌신청" }
      ]}
    ]
  },
  {
    icon: "🎓",
    title: "졸업 영역",
    sections: [
      { title: "금학기졸업자신청", icon: "🏅", menus: [
        { icon: "📍", text: "금학기졸업자학위증서수령주소입력" },
        { icon: "📍", text: "금학기졸업자학위복대여신청" }
      ]},
      { title: "조기졸업신청", icon: "⏩", menus: [
        { icon: "✍️", text: "조기졸업신청/신청조회" }
      ]}
    ]
  },
  {
    icon: "🌏",
    title: "외국인/유학생 영역",
    sections: [
      { title: "성균어학원강좌신청", icon: "🗣️", menus: [
        { icon: "📝", text: "강좌접수" },
        { icon: "📄", text: "어학특강접수내역조회" },
        { icon: "💸", text: "환불신청" },
        { icon: "✏️", text: "신상내역수정" }
      ]},
      { title: "외국인유학생 입출국신고", icon: "✈️", menus: [] },
      { title: "표준입학허가서", icon: "📑", menus: [
        { icon: "🖨️", text: "표준입학허가서발급신청" }
      ]}
    ]
  },
  {
    icon: "📚",
    title: "전공 영역",
    sections: [
      { title: "마이크로디그리", icon: "🎖️", menus: [
        { icon: "✅", text: "마이크로디그리 이수신청" },
        { icon: "❌", text: "마이크로디그리 포기신청" },
        { icon: "📊", text: "마이크로디그리 이수현황" }
      ]},
      { title: "복수전공포기신청", icon: "❌", menus: [
        { icon: "✂️", text: "복수전공포기신청(일반형)" },
        { icon: "✂️", text: "복수전공포기신청(심화형)" }
      ]},
      { title: "융합트랙신청", icon: "🔬", menus: [
        { icon: "✅", text: "융합트랙 이수신청" },
        { icon: "❌", text: "융합트랙 포기신청" },
        { icon: "📊", text: "융합트랙 이수현황" }
      ]},
      { title: "전공신청", icon: "📚", menus: [
        { icon: "📢", text: "안내사항(학과/전공신청)" },
        { icon: "📢", text: "안내사항(복수전공신청)" },
        { icon: "🏫", text: "학과신청(대계열)" },
        { icon: "📈", text: "학과진입 영역별수강학점조회" },
        { icon: "➕", text: "복수전공신청(일반형)" },
        { icon: "➕", text: "복수전공신청(심화형)" },
        { icon: "🔗", text: "융합전공인정신청" },
        { icon: "🔄", text: "학교지원변경/주류신청" }
      ]}
    ]
  },
  {
    icon: "🏢",
    title: "특정학과 영역",
    sections: [
      { title: "경영학과융합교육인증신청", icon: "🏢", menus: [
        { icon: "📊", text: "융합트랙 배정신청(경영학과)" },
        { icon: "✏️", text: "자기설계융합트랙 등록(경영학과)" },
        { icon: "📝", text: "자기설계융합트랙신청(경영학과)" }
      ]},
      { title: "교직신청", icon: "👨‍🏫", menus: [
        { icon: "📢", text: "교직과정지원 신청" },
        { icon: "➕", text: "교직복수전공 신청" },
        { icon: "🏫", text: "교육실습 신청" },
        { icon: "📝", text: "교직적성인성검사 신청" },
        { icon: "❤️", text: "응급처치및심폐소생술실습 신청" },
        { icon: "🎓", text: "평생교육사과정 지원" }
      ]},
      { title: "응용AI융합학부재직증명서", icon: "📜", menus: [
        { icon: "✍️", text: "재직증명서제출" }
      ]},
      { title: "인턴십신청", icon: "💼", menus: [
        { icon: "✍️", text: "인턴십신청및조회(소프트웨어학과)" }
      ]}
    ]
  },
  {
    icon: "🏠",
    title: "생활 영역",
    sections: [
      { title: "건강센터", icon: "🏥", menus: [
        { icon: "🔍", text: "건강검진조회" },
        { icon: "📅", text: "건강검진결과상담예약신청" },
        { icon: "🤒", text: "코로나-19의심자 자가진단" },
        { icon: "💸", text: "건강검진 환불 조회" },
        { icon: "📝", text: "건강검진신청" }
      ]},
      { title: "기숙사", icon: "🏡", menus: [
        { icon: "🔍", text: "기숙사정보조회" },
        { icon: "🛌", text: "기숙사신청(정규입사)" },
        { icon: "⏳", text: "공석대기신청" },
        { icon: "✅", text: "입사확인서" },
        { icon: "❌", text: "퇴사확인서" },
        { icon: "💸", text: "환불계좌수정" },
        { icon: "🏠", text: "장기외박신고" },
        { icon: "🔧", text: "시설사용신청" },
        { icon: "🍽️", text: "식수변경신청" },
        { icon: "🎨", text: "취미강좌신청" },
        { icon: "💳", text: "취미강좌수납정보" },
        { icon: "🏋️", text: "신관피트니스센터신청" },
        { icon: "📄", text: "거주증명서발급" }
      ]},
      { title: "학생생활관련신청", icon: "📌", menus: [
        { icon: "📌", text: "공간대여신청" },
        { icon: "🏋️‍♂️", text: "피트니스신청(기숙사 제외)" }
      ]}
    ]
  }
]; 