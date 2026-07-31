/* ═══════════════════════════════════════════════════════════
 * AU Study Guide — i18n (한국어 ko / English en)
 * ═══════════════════════════════════════════════════════════
 * 설계 원칙
 *  1) 데이터(majorData·questionFlow·pathwayGuides)와 userProfile은 **한글 원문을 그대로 유지**한다.
 *     진단 로직이 한글 문자열을 식별자로 쓰고(`degree.includes("석사")`, `majorData["간호학과 (Nursing)"]`),
 *     결과 공유 링크(#r=)도 옵션 label 매칭에 의존하기 때문이다.
 *     따라서 번역은 **화면에 그리는 순간에만** 적용한다. → tr()
 *  2) 정적 HTML 문구는 data-i18n 속성 + I18N 사전으로 처리한다. → t()
 *
 * 영어 문구 톤: QS Top Universities 안내 페이지 기준.
 * 2인칭으로 담백하게, 과장·광고 표현 없이 사실 위주로 쓴다.
 *
 * 선택 언어는 localStorage("sgh-lang")에 저장되며 허브·영국·캐나다 사이트와 공유된다.
 * ═══════════════════════════════════════════════════════════ */

/* ───────── 1. 정적 UI 문구 ───────── */
const I18N = {
    ko: {
        langName: "한국어",
        docTitle: "호주 대학 진학 가이드 - 학부·석사 AI 진단 | AU Study Guide",
        docDesc: "수능 6등급에도 호주 명문대로 가는 길이 있습니다. 학부·석사 패스웨이를 AI가 진단하는 무료 호주 진학 가이드. 2026 대학 공식 학비 데이터 기반.",

        navHub: "국가 선택",
        themeDark: "다크", themeLight: "라이트",
        themeAria: "화면 모드 전환", themeTitle: "밝게 / 어둡게",
        langAria: "언어 선택",

        heroEyebrow: "Australia University Pathway Guide",
        heroTitle: "3분진단 호주,<br><span class=\"text-[#4da3ff]\">내 조건으로 호주 진학 체크!</span>",
        heroSub: "내신은 숫자일 뿐, 경로가 전부다.<br>성적과 목표를 분석해 학부·석사 두 트랙의 진학 경로를 설계합니다.",
        heroBachelorTitle: "학부 진학 (Bachelor)",
        heroBachelorDesc: "고교 졸업(예정) · 검정고시 · 대학 재학/휴학생. 디플로마·파운데이션으로 명문대 편입까지.",
        heroMasterTitle: "석사 진학 (Master)",
        heroMasterDesc: "대학 졸업(예정)자 · 직장인 커리어 전환. 비전공자 GE 과정으로 전문직 면허까지.",
        heroGo: "진단 시작",
        heroNote: "특정 유학원과 무관한 무료 정보 가이드입니다.<br>학비·입학요건은 2026년 각 대학 공식 발표 기준입니다.",
        heroPhotoAlt: "시드니 하버와 오페라하우스 전경",

        qBack: "이전 질문",
        qStep: "단계",

        resultDone: "분석이 완료되었습니다.",
        guideSectionTitle: "호주 진학 경로 가이드",
        guideNote: "※ 경로별 요구 성적·편입 인정 범위는 대학과 전공에 따라 다릅니다. 지원 전 각 대학 공식 입학처에서 최신 기준을 확인하세요.",
        univNote: "※ 표기된 금액은 2026년 국제 학생 홈페이지 기준 학비(각 대학 공식 사이트 발표 연간 학비)이며, 전공·과목 선택 및 연도별 인상에 따라 달라질 수 있습니다. 정확한 금액은 각 대학 공식 홈페이지에서 확인하세요.",
        boardSub: "진단 결과에 맞는 각 대학의 공식 코스 페이지입니다. 입학요건과 학비는 항상 공식 페이지 기준이 우선입니다.",
        studyAuBtn: "호주 정부 공식 유학 정보 (Study Australia)",
        visaTitle: "비자 · 공식 정보",
        visaItem1Head: "학생비자 (Subclass 500):",
        visaItem1Body: "신청 요건·수수료·처리 기간은 호주 내무부 공식 안내에서 확인하세요.",
        visaItem1Link: "호주 내무부 공식 안내",
        visaItem2Head: "유학생 건강보험 (OSHC):",
        visaItem2Body: "학생비자 기간 전체를 커버하는 보험 가입이 필수입니다.",
        visaItem3Head: "공식 유학 포털:",
        visaItem3Body: "호주 정부가 운영하는 Study Australia에서 장학금·생활비·도시 정보를 찾아보세요.",
        panoramaAlt: "시드니 하버브리지와 오페라하우스 파노라마",
        saveTitle: "이 결과, 저장해 두세요.",
        saveDesc: "진단 결과는 링크 하나에 담겨 있습니다. 복사해서 나에게 보내 두거나, 함께 고민하는 친구·가족과 공유하세요.",

        resultEyebrow: "진단 결과",
        resultCta: "이 결과로 무료 상담 받기",
        resultCopy: "결과 링크 복사",
        resultCopied: "복사 완료!",
        resultRestart: "다시 진단하기",
        shareHint: "무료 상담 신청 시 이 진단 결과가 자동으로 첨부됩니다. 링크를 복사해 카카오톡·문자로 전달하면 같은 결과 페이지가 열립니다.",

        sumTitle: "진단 요약",
        sumDegree: "과정", sumRegion: "선호 지역", sumEng: "영어", sumGpa: "성적", sumMajor: "전공",
        degreeBachelor: "학부 (Bachelor)", degreeMaster: "석사 (Master)",
        engNotYet: "준비 중",

        recMajorEyebrow: "추천 전공",
        suffixMaster: " · 석사 과정", suffixBachelor: " · 학부 과정",

        guideTitle: "진학 경로 비교",
        guideSubMaster: "같은 석사 진학이라도 학점과 전공 배경에 따라 최적의 경로는 다릅니다. 세 가지 경로를 비교해 보세요.",
        guideSubBachelor: "같은 목표라도 성적과 상황에 따라 최적의 경로는 다릅니다. 세 가지 진학 경로를 비교해 보세요.",
        guideMine: "내 추천 경로",
        guideFor: "이런 분께:",

        univTitle: "추천 대학 · 프로그램",
        regionMatch: "선호 지역 일치",
        reqAdmission: "입학 요건", reqEnglish: "영어 요건", reqTuition: "연간 학비",
        tuitionNote: "(2026 국제학생)",
        visitSite: "공식 홈페이지 방문",
        hubDetail: "학비 · 입학 요건 상세 보기",

        nextTitle: "다음 단계",
        stepsMaster: [
            ["서류 준비:", "영문 학사 졸업·성적 증명서, 이력서(CV), 여권 사본을 준비하십시오. 전공에 따라 학업계획서(SOP)가 요구됩니다."],
            ["영어 성적:", "조건부 입학(Conditional Offer)을 먼저 받고 영어 성적을 나중에 제출하는 전략도 가능합니다."],
            ["비자 및 정착:", "입학허가서(CoE) 수령 후 학생 비자(Subclass 500)를 신청하고, 졸업 후 졸업생 비자(485) 플랜까지 세워 보세요."]
        ],
        stepsBachelor: [
            ["어학 준비:", "지원 전, 또는 조건부 입학(Conditional Offer) 수령 후 필요한 영어 성적을 확보하십시오."],
            ["서류 준비:", "영문 고등학교/대학교 졸업 및 성적 증명서, 여권 사본을 준비하십시오."],
            ["비자 및 숙소:", "입학허가서(CoE) 수령 후 학생 비자(Subclass 500)를 신청하고 숙소를 준비하세요."]
        ],

        boardSuffixMaster: " 석사 공식 코스 페이지",
        boardSuffixBachelor: " 학부 공식 코스 페이지",

        noteOther: (major) => `※ 퍼스·애들레이드·캔버라 지역의 ${major} 프로그램은 이 가이드에 수록되어 있지 않습니다. 아래는 대표 추천 프로그램입니다.`,
        noteNoMatch: (region) => `※ 선호하신 지역(${region}) 내 프로그램은 이 가이드에 수록되어 있지 않습니다. 아래는 전공 기준 최상위 추천입니다.`,

        footerTagline: "호주 대학 진학 정보 가이드 — 학부·석사 AI 진단",
        footerDisclaimer: "본 사이트는 특정 유학원·기관과 무관한 무료 정보 페이지입니다. 수록된 학비·입학요건은 2026년 각 대학 공식 발표 기준이며, 지원 전 반드시 각 대학 공식 입학처에서 최신 정보를 확인하세요.",
        footerLinksTitle: "공식 정보 바로가기",
        footerLink1: "Study Australia (호주 정부 유학 포털)",
        footerLink2: "학생비자 Subclass 500 안내",
        footerLink3: "QS 세계 대학 순위",
        footerLink4: "CRICOS 공식 코스 등록부",
        footerCopy: "© AU Study Guide. 정보 제공 목적으로 제작된 페이지입니다."
    },

    en: {
        langName: "English",
        docTitle: "Study in Australia — undergraduate and master's pathway finder | AU Study Guide",
        docDesc: "Find the entry route to an Australian university that matches your grades and goals. Free guide covering foundation, diploma and direct entry, based on official 2026 tuition data.",

        navHub: "Change country",
        themeDark: "Dark", themeLight: "Light",
        themeAria: "Switch colour mode", themeTitle: "Light / dark",
        langAria: "Select language",

        heroEyebrow: "Australia University Pathway Guide",
        heroTitle: "Study in Australia:<br><span class=\"text-[#4da3ff]\">find the route that fits you</span>",
        heroSub: "Your grades are only the starting point — the route matters more.<br>Answer a few questions and see the undergraduate and master's pathways open to you.",
        heroBachelorTitle: "Undergraduate",
        heroBachelorDesc: "For school leavers, GED holders and current university students. Includes diploma and foundation routes into a leading university.",
        heroMasterTitle: "Master's",
        heroMasterDesc: "For graduates and working professionals changing career. Includes graduate entry routes into licensed professions.",
        heroGo: "Start",
        heroNote: "A free information guide, independent of any agency.<br>Tuition and entry requirements follow each university's official 2026 figures.",
        heroPhotoAlt: "Sydney Harbour and the Opera House",

        qBack: "Previous question",
        qStep: "Step",

        resultDone: "Here is your result.",
        guideSectionTitle: "Entry routes to an Australian university",
        guideNote: "Required grades and the amount of credit recognised differ by university and field. Check the current requirements with each university's admissions office before you apply.",
        univNote: "Figures shown are the annual international tuition published by each university for 2026. The amount can change with your choice of subjects and with annual increases, so confirm it on the university's own site.",
        boardSub: "Official course pages at each university, matched to your result. Entry requirements and tuition on the official page always take precedence.",
        studyAuBtn: "Study Australia — the Australian Government's official guide",
        visaTitle: "Visa and official information",
        visaItem1Head: "Student visa (subclass 500):",
        visaItem1Body: "Check the requirements, fees and processing times on the Department of Home Affairs website.",
        visaItem1Link: "Department of Home Affairs",
        visaItem2Head: "Overseas Student Health Cover (OSHC):",
        visaItem2Body: "Cover for the full length of your student visa is mandatory.",
        visaItem3Head: "Official study portal:",
        visaItem3Body: "Study Australia, run by the Australian Government, covers scholarships, living costs and city guides.",
        panoramaAlt: "Panorama of Sydney Harbour Bridge and the Opera House",
        saveTitle: "Keep this result",
        saveDesc: "Your result lives in a single link. Send it to yourself, or share it with family and friends who are helping you decide.",

        resultEyebrow: "Your result",
        resultCta: "Get free advice on this result",
        resultCopy: "Copy result link",
        resultCopied: "Copied",
        resultRestart: "Start again",
        shareHint: "Your result is attached automatically when you request advice. Copy the link to share it — anyone who opens it sees the same result page.",

        sumTitle: "Summary",
        sumDegree: "Level", sumRegion: "Preferred state", sumEng: "English", sumGpa: "Grades", sumMajor: "Field",
        degreeBachelor: "Undergraduate", degreeMaster: "Master's",
        engNotYet: "Not yet taken",

        recMajorEyebrow: "Recommended field",
        suffixMaster: " · master's", suffixBachelor: " · undergraduate",

        guideTitle: "Compare the routes",
        guideSubMaster: "Even for the same master's degree, the best route depends on your GPA and academic background. Compare the three below.",
        guideSubBachelor: "Even with the same goal, the best route depends on your grades and circumstances. Compare the three below.",
        guideMine: "Your recommended route",
        guideFor: "Suits you if:",

        univTitle: "Recommended universities and programmes",
        regionMatch: "Matches your preferred state",
        reqAdmission: "Entry requirement", reqEnglish: "English requirement", reqTuition: "Annual tuition",
        tuitionNote: "(2026, international)",
        visitSite: "Visit the official page",
        hubDetail: "Tuition and entry requirements",

        nextTitle: "What to do next",
        stepsMaster: [
            ["Documents:", "Prepare your degree certificate and transcript in English, a CV and a copy of your passport. Some fields also ask for a statement of purpose."],
            ["English score:", "You can accept a conditional offer first and submit your English score later."],
            ["Visa and settling in:", "Once you receive your Confirmation of Enrolment (CoE), apply for the Student visa (subclass 500), and plan ahead for the post-study work visa (subclass 485)."]
        ],
        stepsBachelor: [
            ["English:", "Reach the required score before you apply, or after you receive a conditional offer."],
            ["Documents:", "Prepare your school or university certificate and transcript in English, plus a copy of your passport."],
            ["Visa and housing:", "Once you receive your Confirmation of Enrolment (CoE), apply for the Student visa (subclass 500) and arrange accommodation."]
        ],

        boardSuffixMaster: " — official master's course pages",
        boardSuffixBachelor: " — official undergraduate course pages",

        noteOther: (major) => `Note: ${major} programmes in Perth, Adelaide and Canberra are not covered in this guide. The programmes below are our general recommendations.`,
        noteNoMatch: (region) => `Note: this guide does not currently cover programmes in your preferred state (${region}). The programmes below are the strongest options for your field.`,

        footerTagline: "A pathway guide to Australian universities — undergraduate and master's",
        footerDisclaimer: "This site is a free information resource and is not affiliated with any agency or institution. Tuition and entry requirements follow each university's official 2026 figures; always confirm the current details with the university's admissions office before you apply.",
        footerLinksTitle: "Official sources",
        footerLink1: "Study Australia (Australian Government)",
        footerLink2: "Student visa (subclass 500)",
        footerLink3: "QS World University Rankings",
        footerLink4: "CRICOS course register",
        footerCopy: "© AU Study Guide. Published for information purposes."
    }
};

/* ───────── 2. 데이터 문자열 번역 (한글 원문 → 영어) ─────────
 * 여기에 없는 문자열은 한글 원문 그대로 표시된다(안전한 폴백). */
const DATA_EN = {
    /* --- 전공명 --- */
    "간호학과 (Nursing)": "Nursing",
    "약학/약대 (Pharmacy)": "Pharmacy",
    "IT 및 사이버보안 (IT/Cyber Security)": "IT and Cyber Security",
    "공학/엔지니어링 (Engineering)": "Engineering",
    "의대/의전원 (Medicine)": "Medicine",
    "호텔경영학 (Hospitality)": "Hospitality Management",

    /* --- 전공 소개 (학부) --- */
    "호주 영주권 발급 1위 직업군. 수능 6등급이나 검정고시로도 디플로마를 통해 명문대 진학이 가능하며, 높은 임금과 쾌적한 근무환경을 자랑합니다.":
        "Nursing leads the professions for permanent residency grants in Australia. A diploma route makes a leading university reachable even from lower school grades or a GED, and the field offers strong pay and good working conditions.",
    "호주 약대 졸업 후 한국 약사 면허로 전환이 가능합니다. 수능 3~4등급으로 세계적인 명문대에 입학하여 높은 연봉을 기대할 수 있습니다.":
        "An Australian pharmacy degree can be converted to a Korean pharmacist licence. Mid-range CSAT results can be enough for a globally ranked university, and salaries in the field are high.",
    "3년 만에 IT 학사 학위 취득이 가능합니다. 실무 중심 교육과 인턴십을 통해 글로벌 IT 기업 취업 및 호주 기술이민에 유리합니다.":
        "An IT bachelor's degree takes three years. Practical teaching and internships lead well into roles at global technology firms and into Australia's skilled migration routes.",
    "토목, 기계, 전기 등 기술 직군으로 졸업 후 졸업생 비자(2년)를 통해 경력을 쌓고 기술이민을 신청하기 매우 좋은 분야입니다.":
        "Civil, mechanical and electrical engineering all lead to occupations where you can build experience on a two-year post-study work visa and then apply through skilled migration.",
    "한국 수능 점수로 지원이 가능합니다. ISAT/UCAT 등 적성검사와 인터뷰가 요구되며 철저한 사전 준비가 필수적입니다.":
        "You can apply with your Korean CSAT score. Admission also requires an aptitude test such as ISAT or UCAT and an interview, so thorough preparation is essential.",
    "세계적인 관광 대국 호주. 학위 과정 중 포함된 유급 인턴십을 통해 글로벌 경력과 높은 연봉을 기대할 수 있습니다.":
        "Australia is a major tourism destination. Paid internships built into these degrees give you international experience and lead to well-paid roles.",

    /* --- 전공 소개 (석사) --- */
    "비전공 학사 소지자도 2년 GE(Graduate Entry) 과정으로 간호사 면허(RN) 취득이 가능합니다. 졸업 후 취업과 영주권 신청까지 이어지는 가장 확실한 커리어 전환 경로입니다.":
        "A two-year graduate entry programme leads to registration as a nurse (RN) even if your first degree was in another field. It is one of the most reliable career-change routes, continuing into employment and a permanent residency application.",
    "화학·생물 등 관련 학사 이수자는 2년 Master of Pharmacy 과정으로 약사 등록 자격을 취득할 수 있습니다. 학부보다 짧은 기간에 전문직 면허에 도달하는 경로입니다.":
        "With a related bachelor's degree in chemistry or biology, a two-year Master of Pharmacy leads to registration as a pharmacist — a faster route to the licence than starting again at undergraduate level.",
    "비전공자도 지원 가능한 2년 Master of IT 과정이 다수 개설되어 있습니다. 문과 출신 직장인의 커리어 전환과 기술이민(ICT 직군)에 가장 인기 있는 경로입니다.":
        "Many universities run two-year Master of IT programmes open to graduates of any discipline. It is the most popular route for professionals moving into technology and for ICT skilled migration.",
    "공학 학사 이수자는 2년 Master of Engineering(EA 인증) 과정으로 전문 엔지니어 자격을 강화할 수 있습니다. 졸업생 비자 및 기술이민 점수에서 가장 유리한 분야 중 하나입니다.":
        "With an engineering bachelor's degree, a two-year Master of Engineering accredited by Engineers Australia strengthens your professional standing. It is among the strongest fields for the post-study work visa and skilled migration points.",
    "학사 학위 소지자는 GAMSAT/MCAT 응시 후 4년 의학전문(MD) 과정에 지원할 수 있습니다. 학부 성적(GPA)과 적성시험, 인터뷰를 종합 평가하므로 전략적 준비가 필수입니다.":
        "Graduates can sit the GAMSAT or MCAT and apply for a four-year Doctor of Medicine. Admission weighs your GPA, aptitude test and interview together, so plan well in advance.",
    "전공 무관 학사 소지자가 지원 가능한 관광·호텔경영 석사 과정입니다. 유급 인턴십과 글로벌 호텔 체인 네트워크로 실무 경력을 쌓아 관리자(Manager) 커리어로 직행합니다.":
        "These tourism and hotel management master's programmes are open to graduates of any discipline. Paid internships and links to global hotel groups build the experience needed to move into management.",

    /* --- 과정명 (괄호 안 한글 설명 제거) --- */
    "Bachelor of Nursing (간호학 학사)": "Bachelor of Nursing",
    "Master of Nursing / Graduate Entry (간호학 석사)": "Master of Nursing (Graduate Entry)",
    "Master of Nursing Practice (간호실무 석사)": "Master of Nursing Practice",
    "Master of Nursing - Entry to Practice (간호학 석사)": "Master of Nursing (Entry to Practice)",
    "Bachelor of Pharmacy (Honours) / Master of Pharmacy Practice (약학 학·석사 통합)": "Bachelor of Pharmacy (Hons) / Master of Pharmacy Practice",
    "Bachelor of Pharmacy (Honours) / Master of Pharmacy (약학 학·석사 통합)": "Bachelor of Pharmacy (Hons) / Master of Pharmacy",
    "Bachelor of Pharmacy (Honours) (약학 우수학사)": "Bachelor of Pharmacy (Honours)",
    "Master of Pharmacy (약학 석사 2년)": "Master of Pharmacy (2 years)",
    "Bachelor of Pharmacy (Hons) / Master of Pharmacy - Graduate Entry (약대 GE 3년 단축)": "Bachelor of Pharmacy (Hons) / Master of Pharmacy — graduate entry, 3 years",
    "Master of Pharmacy (약학 석사)": "Master of Pharmacy",
    "Bachelor of Information Technology (정보기술학 학사)": "Bachelor of Information Technology",
    "Master of Information Technology (정보기술 석사)": "Master of Information Technology",
    "Bachelor of Engineering (Honours) (공학 우수학사)": "Bachelor of Engineering (Honours)",
    "Bachelor of Engineering Honours (공학 우수학사)": "Bachelor of Engineering (Honours)",
    "Master of Engineering (공학 석사, EA 인증)": "Master of Engineering (accredited by Engineers Australia)",
    "Master of Engineering - Civil 등 전공별 (공학 석사)": "Master of Engineering — civil and other specialisations",
    "Master of Engineering Science (공학과학 석사)": "Master of Engineering Science",
    "Bachelor of Science and Doctor of Medicine (의학 통합 학·석사 7년)": "Bachelor of Science and Doctor of Medicine (7 years)",
    "Bachelor of Clinical Science (Medicine) / Doctor of Medicine (의학 통합 5년)": "Bachelor of Clinical Science (Medicine) / Doctor of Medicine (5 years)",
    "Bachelor of Medical Science and Doctor of Medicine (의학 통합 학·석사 5년)": "Bachelor of Medical Science and Doctor of Medicine (5 years)",
    "Doctor of Medicine (MD, 의학전문 4년)": "Doctor of Medicine (MD, 4 years)",
    "Doctor of Medicine (MD, 4년)": "Doctor of Medicine (MD, 4 years)",
    "Bachelor of International Tourism and Hotel Management (국제관광호텔경영학 학사)": "Bachelor of International Tourism and Hotel Management",
    "Bachelor of Business in Hotel Management (호텔경영 상학학사)": "Bachelor of Business in Hotel Management",
    "Master of International Tourism and Hospitality Management (국제관광호스피탈리티 석사)": "Master of International Tourism and Hospitality Management",
    "Master of International Hotel Management (국제호텔경영 석사)": "Master of International Hotel Management",
    "Master of Business in Global Hotel Leadership (글로벌호텔리더십 석사)": "Master of Business in Global Hotel Leadership",

    /* --- 순위·평판 --- */
    "호주 내 최상위권": "Among Australia's highest ranked",
    "호주 간호학 1위 수준": "Top of Australia for nursing",
    "퀸즐랜드 최대 규모": "Queensland's largest programme",
    "QS 간호학 세계 최상위권": "World top tier for nursing (QS)",
    "Go8 명문 · 멜버른": "Group of Eight · Melbourne",
    "퀸즐랜드 간호 명문": "Leading nursing school in Queensland",
    "QS 세계 20위권": "Around 20th worldwide (QS)",
    "QS 세계 2위 (약학)": "2nd worldwide for pharmacy (QS)",
    "QS 151-200위": "151–200 worldwide (QS)",
    "세계 88위 / 성장률 1위": "88th worldwide · fastest rising in Australia",
    "Go8 명문대": "Group of Eight",
    "상위 2% 명문": "Top 2% worldwide",
    "Go8 · 호주 공학/IT 명문": "Group of Eight · leading for engineering and IT",
    "실무 중심 · 브리즈번": "Practice focused · Brisbane",
    "호주 공대 1위 수준": "Top of Australia for engineering",
    "실무/취업 우수": "Strong for practical skills and employment",
    "Go8 최상위 명문": "Group of Eight, upper tier",
    "QS 세계 10위권": "Around 10th worldwide (QS)",
    "Go8 · 브리즈번": "Group of Eight · Brisbane",
    "의대 7년 과정": "7-year medical programme",
    "의대 5년 과정": "5-year medical programme",
    "QS 의학 세계 10위권": "Around 10th worldwide for medicine (QS)",
    "Go8 의학 명문": "Group of Eight · leading medical school",
    "호주 호텔경영 1위": "Top of Australia for hotel management",
    "유급 인턴십 최강": "Strongest paid internship programme",
    "호주 호텔스쿨 명성 1위": "Australia's best known hotel school",

    /* --- 입학 요건 --- */
    "수능 317점 또는 디플로마": "CSAT 317, or a diploma",
    "수능 310점 또는 디플로마": "CSAT 310, or a diploma",
    "수능 330점 또는 디플로마 편입": "CSAT 330, or transfer from a diploma",
    "학사 학위 (비전공 지원 가능)": "A bachelor's degree in any discipline",
    "학사 학위 + 선수과목": "A bachelor's degree plus prerequisite subjects",
    "수능 346점 이상": "CSAT 346 or above",
    "수능 350점 이상 (선수과목 必)": "CSAT 350 or above, prerequisites required",
    "수능 331점 (교차지원 가능)": "CSAT 331; humanities applicants accepted",
    "관련 학사 (화학·생물 이수)": "A related bachelor's degree with chemistry and biology",
    "관련 학사 (GE 단축과정)": "A related bachelor's degree (shortened graduate entry)",
    "관련 학사 + GPA 요건": "A related bachelor's degree meeting the GPA requirement",
    "수능점수 또는 디플로마": "A CSAT score, or a diploma",
    "수능 또는 디플로마": "A CSAT score, or a diploma",
    "학사 학위 (비전공 트랙 有)": "A bachelor's degree; a track for non-specialists is available",
    "학사 학위 (전공 무관)": "A bachelor's degree in any discipline",
    "수능 우수 또는 파운데이션": "A strong CSAT score, or a foundation programme",
    "공학 계열 학사": "A bachelor's degree in engineering",
    "이공계 학사 (비전공 트랙 有)": "A science or engineering degree; a track for non-specialists is available",
    "공학 계열 학사 + GPA": "An engineering degree meeting the GPA requirement",
    "CSAT 393, 인터뷰": "CSAT 393 and an interview",
    "CSAT 370, ISAT 요구": "CSAT 370 and ISAT",
    "CSAT 380, ISAT, 인터뷰": "CSAT 380, ISAT and an interview",
    "학사 + GAMSAT/MCAT + 인터뷰": "A bachelor's degree, GAMSAT or MCAT, and an interview",
    "학사 + GAMSAT/MCAT": "A bachelor's degree and GAMSAT or MCAT",
    "학사 + GAMSAT + 인터뷰": "A bachelor's degree, GAMSAT and an interview",
    "고교 졸업 이상 (내신 무관)": "Completion of secondary school; grades not considered",
    "학사 또는 관련 경력": "A bachelor's degree, or relevant work experience",

    /* --- 지역 --- */
    "뉴사우스웨일즈 (시드니)": "New South Wales (Sydney)",
    "빅토리아 (멜버른)": "Victoria (Melbourne)",
    "퀸즐랜드 (브리즈번·골드코스트)": "Queensland (Brisbane, Gold Coast)",
    "퀸즐랜드 (브리즈번, 골드코스트)": "Queensland (Brisbane, Gold Coast)",
    "기타 지역 (퍼스·애들레이드·캔버라)": "Elsewhere (Perth, Adelaide, Canberra)",
    "기타 지역 (퍼스, 애들레이드, 캔버라)": "Elsewhere (Perth, Adelaide, Canberra)",
    "상관없음": "No preference",
    "상관없음 (최적의 학교 위주로 추천)": "No preference — recommend the best fit",

    /* --- 질문 --- */
    "선호하는 호주 지역을 선택해 주세요.": "Which part of Australia would you prefer?",
    "현재 보유하고 계신 공인 영어 시험 종류를 선택해 주세요.": "Which English test have you taken?",
    "IELTS(Academic) 점수대를 선택해 주세요.": "What is your IELTS (Academic) score?",
    "PTE(Academic) 점수대를 선택해 주세요.": "What is your PTE (Academic) score?",
    "TOEFL iBT 점수대를 선택해 주세요.": "What is your TOEFL iBT score?",
    "최종 학력 및 성적(고교 내신 또는 수능)은 어느 정도이신가요?": "What are your most recent qualifications and grades?",
    "학부(학사) 성적은 어느 정도이신가요?": "What was your undergraduate GPA?",
    "호주 유학 시 가장 희망하는 전공 분야를 선택해 주십시오.": "Which field would you like to study?",
    "호주 유학의 가장 핵심적인 목표는 무엇입니까?": "What matters most to you about studying in Australia?",

    /* --- 선택지 --- */
    "IELTS (아이엘츠)": "IELTS",
    "TOEFL iBT (토플)": "TOEFL iBT",
    "아직 준비 전입니다": "I haven't taken one yet",
    "준비 전 (성적 없음)": "Not taken yet",
    "IELTS 7.0 이상": "IELTS 7.0 or above",
    "IELTS 5.5 이하": "IELTS 5.5 or below",
    "PTE 65점 이상": "PTE 65 or above",
    "PTE 58~64점": "PTE 58–64",
    "PTE 50~57점": "PTE 50–57",
    "PTE 49점 이하": "PTE 49 or below",
    "TOEFL 94점 이상": "TOEFL 94 or above",
    "TOEFL 79~93점": "TOEFL 79–93",
    "TOEFL 60~78점": "TOEFL 60–78",
    "TOEFL 59점 이하": "TOEFL 59 or below",
    "고교 1~3등급 / 수능 330점 이상": "School grades 1–3, or CSAT 330 and above",
    "고교 4~5등급 / 수능 보통 수준": "School grades 4–5, or a mid-range CSAT score",
    "고교 6등급 이하 / 검정고시 졸업": "School grade 6 or below, or a GED",
    "대학교 재학/휴학/졸업자": "Currently at university, on leave, or graduated",
    "학점 3.5 / 4.5 이상 (상위권)": "GPA 3.5 / 4.5 or above",
    "학점 3.0 ~ 3.5": "GPA 3.0–3.5",
    "학점 3.0 미만": "GPA below 3.0",
    "졸업예정자 / 전공 변경 희망": "Graduating soon, or changing field",
    "Go8(호주 명문대) 위주 진학": "Getting into a Group of Eight university",
    "현지 취업 및 영주권 취득": "Working in Australia and applying for residency",
    "가성비 및 실무 중심 학위": "Value for money and practical skills",
    "귀국 후 전문직 면허 취득": "Qualifying for a licensed profession back home",

    /* --- 진학 경로 카드 --- */
    "파운데이션": "Foundation",
    "Foundation (대학예비과정)": "University preparation year",
    "내신·영어가 부족하지만 명문대 1학년 진학을 원하는 고교 졸업(예정)자. 내신 4~6등급, 낮은 IELTS도 지원 가능합니다.":
        "you are leaving school with grades or English below direct-entry level but want to start year 1 at a leading university. Grades of 4–6 and a lower IELTS score are accepted.",
    "고교 졸업 후 파운데이션 지원": "Apply for a foundation programme after finishing school",
    "대학 부설 기관에서 8개월~1년, 영어+전공 기초 이수": "Study English and subject fundamentals for 8–12 months at the university's own college",
    "조건 충족 시 본교 정규 1학년 진학": "Progress into year 1 of the degree once you meet the conditions",
    "국내 성적이 아쉬워도 과정 성적으로 재도전할 수 있고, G8 포함 상위권 대학 진학 사례가 많습니다. 전공 제한이 있는 학과도 우회 진입이 가능합니다.":
        "Your foundation results, rather than your school grades, decide where you go — including Group of Eight universities. It also opens fields that restrict direct entry.",
    "모든 과정이 '보장 입학'을 제공하지는 않으며, 대학·전공별 요구 성적이 다릅니다.":
        "Not every programme guarantees progression, and the grade required differs by university and field.",
    "디플로마 편입": "Diploma transfer",
    "Diploma Transfer": "Year 1 equivalent, entry to year 2",
    "파운데이션보다 빠른 진학을 원하거나, 내신·영어(IELTS 5.5 이상)가 일정 수준 이상인 학생.":
        "you want a faster route than a foundation year, and your grades and English (IELTS 5.5 or above) already meet a reasonable level.",
    "고교 졸업 후 디플로마 지원": "Apply for a diploma after finishing school",
    "학부 1학년 과목 중심으로 8개월~1년 이수 (본교와 동일 커리큘럼)": "Study for 8–12 months on the same curriculum as year 1 of the degree",
    "성적 기준 충족 시 본교 2학년으로 편입": "Transfer into year 2 of the degree once you meet the grade requirement",
    "1학년 과정을 대체해 최대 1년을 단축하고 학비도 절감됩니다. 본교와 같은 방식의 수업이라 대학 생활 적응이 쉽습니다.":
        "It replaces year 1, saving up to a year of time and tuition. Because the teaching mirrors the university's own, settling in is straightforward.",
    "학교·전공별 편입 인정 범위가 다르고, 기준 학점(GPA 60~70%) 미달 시 2학년 진학이 불가합니다.":
        "How much credit transfers varies by university and field, and falling below the required average (usually 60–70%) blocks entry to year 2.",
    "다이렉트 입학": "Direct entry",
    "Direct Entry": "Straight into year 1",
    "고교 내신·수능·영어 성적이 대학 입학 기준을 충족하는 학생. 수능 점수로 바로 지원할 수 있습니다.":
        "your school grades, CSAT score and English already meet the university's entry requirements. You can apply on your CSAT score alone.",
    "내신·수능·영어 성적으로 대학에 직접 지원": "Apply directly with your school grades, CSAT score and English result",
    "조건부(Conditional) 또는 무조건부(Unconditional) 입학 허가 수령": "Receive a conditional or unconditional offer",
    "CoE 발급 → 학생비자 신청 → 학부 1학년 진학": "Receive your CoE, apply for the student visa, and start year 1",
    "별도 준비 과정 없이 시간과 비용을 아낄 수 있고, 수능·내신·검정고시 등 국내 성적 활용 폭이 넓습니다.":
        "No preparatory year means less time and cost, and a wide range of Korean qualifications is accepted — CSAT, school grades or a GED.",
    "대학별 필수 과목·최소 성적 기준이 다르며, 영어 미달 시 조건부 오퍼로 진행됩니다.":
        "Required subjects and minimum grades differ by university; if your English falls short you proceed on a conditional offer.",
    "석사 직행": "Direct master's entry",
    "Master Direct Entry": "Straight into a master's",
    "학사 학위와 학점·영어 요건을 충족하는 지원자. 관련 전공 학사면 바로 지원 가능합니다.":
        "you hold a bachelor's degree that meets the GPA and English requirements. A degree in a related field lets you apply straight away.",
    "영문 성적표·SOP·이력서 등 서류 준비 후 지원": "Prepare your transcript, statement of purpose and CV in English, then apply",
    "조건부/무조건부 입학 허가 수령": "Receive a conditional or unconditional offer",
    "CoE 발급 → 학생비자 신청 → 석사 과정 입학": "Receive your CoE, apply for the student visa, and begin the master's",
    "1~2년 만에 글로벌 인지도 높은 학위를 취득하는 최단 경로입니다. 졸업생 비자(485)와 영주권 점수 확보로 이어집니다.":
        "The shortest route to an internationally recognised degree, in one to two years, leading on to the post-study work visa (485) and residency points.",
    "대학·전공별 GPA와 선수과목 요건이 다르며, 일부 과정은 연구계획서가 필요합니다.":
        "GPA and prerequisite requirements differ by university and field, and some programmes ask for a research proposal.",
    "GC 패스웨이": "Graduate certificate pathway",
    "Graduate Certificate → Master": "Six months first, then the master's",
    "학부 성적(GPA)이 석사 직행 기준에 다소 부족한 지원자를 위한 안전한 우회 경로입니다.":
        "your GPA falls a little short of direct master's entry. This is the safe way around it.",
    "Graduate Certificate(6개월) 과정으로 입학": "Enrol on a six-month graduate certificate",
    "GC 과정을 우수한 성적으로 이수": "Complete it with strong results",
    "석사 본과정 진입 (이수 학점 인정)": "Move into the master's, carrying your credit across",
    "입학 문턱이 낮고, GC에서 이수한 학점이 석사 과정에 그대로 인정되어 총 기간 손해가 거의 없습니다.":
        "Entry requirements are lower, and because the credit carries across you lose almost no time overall.",
    "GC 과정 성적이 기준에 미달하면 석사 본과정 진입이 제한될 수 있습니다.":
        "If your graduate certificate results fall below the threshold, progression to the master's may be refused.",
    "GE 커리어 전환": "Graduate entry",
    "Graduate Entry": "Changing career into a new field",
    "전공과 무관한 학사 소지자, 커리어 전환을 원하는 직장인. 간호·IT 등 전문직 분야에서 특히 활발합니다.":
        "you hold a degree in an unrelated field, or you are working and want to change direction. It is well established in nursing, IT and other licensed professions.",
    "비전공 학사 학위로 GE/전환형 석사 지원": "Apply for a graduate entry or conversion master's with your existing degree",
    "2년 전환형 과정 이수 (실습 포함)": "Complete the two-year conversion programme, including placements",
    "전문 자격·면허 취득 → 현지 취업·영주권 연계": "Gain the professional qualification, then move into work and a residency application",
    "전공 배경 없이도 2년 만에 새로운 전문 분야의 학위와 자격을 취득해 영주권 신청까지 연결됩니다.":
        "Two years is enough to gain a degree and professional qualification in a new field, with no prior background, and it leads into a residency application.",
    "일부 과정은 해부생리 등 선수과목이나 실습 요건이 있어 사전 확인이 필요합니다.":
        "Some programmes require prerequisites such as anatomy and physiology, or set placement conditions — check before you apply.",

    /* --- 진단 결과: 경로명 --- */
    "Graduate Entry (GE) 커리어 전환": "Graduate Entry (GE) — career change",
    "Graduate Certificate → Master 패스웨이": "Graduate Certificate → Master pathway",
    "Master Direct Entry (석사 직행)": "Master Direct Entry",
    "Direct Entry (의대 직행)": "Direct Entry (Medicine)",
    "Diploma Transfer (디플로마 편입)": "Diploma Transfer",
    "Foundation Pathway (파운데이션)": "Foundation Pathway",
    "Graduate Entry (GE) 과정": "Graduate Entry (GE)",
    "Direct Entry / 학점 인정 편입": "Direct Entry / credit transfer",
    "Direct Entry (1학년 직행)": "Direct Entry (year 1)",

    /* --- 진단 결과: 사유 --- */
    "학사 학위를 기반으로 GAMSAT/MCAT 응시 후 4년 의학전문(MD) 과정에 지원하는 경로입니다. GPA·적성시험·인터뷰를 종합 평가하므로 1년 이상의 전략적 준비를 권장합니다.":
        "With your bachelor's degree you can sit the GAMSAT or MCAT and apply for a four-year Doctor of Medicine. GPA, aptitude test and interview are assessed together, so allow at least a year to prepare.",
    "비전공 학사 소지자도 지원 가능한 GE/전환형 석사 과정입니다. 2년 만에 새로운 전문 분야의 학위와 자격을 취득하여 호주 현지 취업 및 영주권 신청으로 연결할 수 있습니다.":
        "This graduate entry route is open to graduates of any discipline. Two years gives you a degree and professional qualification in a new field, leading into work in Australia and a residency application.",
    "학부 성적이 석사 직행 요건에 다소 부족한 경우, Graduate Certificate(6개월) 과정을 우수하게 이수한 뒤 석사 본과정으로 진입하는 안전한 우회 경로를 권장합니다.":
        "Where your undergraduate results fall a little short of direct entry, a six-month graduate certificate completed with strong marks is the safe way into the master's.",
    "보유하신 학사 학위와 성적으로 호주 명문대 석사 과정에 직접 지원할 수 있습니다. 영어 성적 확보 시 바로 지원 가능하며, 조건부 입학(Conditional Offer)도 활용할 수 있습니다.":
        "Your degree and grades are enough to apply directly to a leading Australian university's master's programme. Once your English score is in place you can apply, and a conditional offer is also an option.",
    "최상위권 성적으로 호주 의대 1학년 직행이 가능합니다. ISAT/UCAT 및 인터뷰를 철저히 대비하십시오.":
        "Your results are strong enough to enter year 1 of an Australian medical programme directly. Prepare thoroughly for the ISAT or UCAT and the interview.",
    "의대 다이렉트 입학 요건이 부족할 경우, Biomedical(의생명과학) 학사 이수 후 의전원(Doctor of Medicine)으로 진학하는 우회 경로가 가장 안전합니다.":
        "Where direct medical entry is out of reach, a biomedical science bachelor's degree followed by a Doctor of Medicine is the most reliable alternative.",
    "고교 성적이 부족해도 호주 명문대 산하 디플로마(1년) 과정을 이수하면 본교 2학년으로 편입이 보장됩니다. 시간과 비용을 절약하는 최적의 방법입니다.":
        "Even with lower school grades, completing a one-year diploma at a leading university's college secures entry to year 2. It is the most efficient route in both time and cost.",
    "해당 전공 및 명문대 진학을 위해 학력 조건과 영어 기초를 탄탄히 다지는 파운데이션(대학예비과정) 이수 후 1학년으로 진학하는 경로를 권장합니다.":
        "A foundation year builds both the academic requirements and the English base you need, then takes you into year 1 of your chosen field.",
    "비전공 학사 소지자도 간호학 학사를 2년 만에 취득할 수 있는 GE 과정을 통해 빠른 면허 취득 및 영주권 신청이 가능합니다.":
        "A graduate entry programme leads to a nursing degree in two years even without a related background, giving you a fast route to registration and a residency application.",
    "보유하신 대학 학점을 인정받아 호주 대학교 1학년 입학 또는 편입을 통해 유학 기간을 단축할 수 있습니다.":
        "Credit for your existing university study can shorten your degree, either by entering year 1 or by transferring into a later year.",
    "우수한 성적을 바탕으로 호주 대학교 1학년에 직접 지원할 수 있는 완벽한 조건을 갖추고 있습니다.":
        "Your results meet the requirements to apply directly for year 1 at an Australian university."
};

/* ───────── 3. 언어 상태 · 조회 ───────── */
/* 기본값은 한국어(브라우저 언어와 무관하게 항상 동일).
 * 저장된 선택이 없으면 "ko"를 저장까지 해서 다른 사이트에도 그대로 이어지게 한다. */
let LANG = (function () {
    try {
        var saved = localStorage.getItem("sgh-lang");
        if (saved === "ko" || saved === "en") return saved;
        localStorage.setItem("sgh-lang", "ko");
    } catch (e) {}
    return "ko";
})();

/* UI 문구 */
function t(key) {
    var dict = I18N[LANG] || I18N.ko;
    return dict[key] !== undefined ? dict[key] : I18N.ko[key];
}

/* 데이터 문자열. 번역이 없으면 원문을 그대로 돌려준다. */
function tr(s) {
    if (LANG !== "en" || typeof s !== "string") return s;
    return DATA_EN[s] !== undefined ? DATA_EN[s] : s;
}

/* ───────── 4. 화면 반영 ───────── */
function applyLang() {
    document.documentElement.lang = LANG;
    document.title = t("docTitle");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("docDesc"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var v = t(el.dataset.i18n);
        if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
        var v = t(el.dataset.i18nHtml);
        if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
        var v = t(el.dataset.i18nAria);
        if (v !== undefined) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
        var v = t(el.dataset.i18nTitle);
        if (v !== undefined) el.setAttribute("title", v);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
        var v = t(el.dataset.i18nAlt);
        if (v !== undefined) el.setAttribute("alt", v);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
        var on = b.dataset.lang === LANG;
        b.classList.toggle("on", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    if (typeof syncThemeLabel === "function") syncThemeLabel();

    /* 진행 중인 질문 화면·결과 화면은 JS로 그려지므로 다시 렌더링한다. */
    if (typeof refreshDynamicView === "function") refreshDynamicView();
}

function setLang(l) {
    if (l !== "ko" && l !== "en") return;
    LANG = l;
    try { localStorage.setItem("sgh-lang", l); } catch (e) {}
    applyLang();
}

document.addEventListener("DOMContentLoaded", applyLang);
