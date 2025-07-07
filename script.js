// 질문 데이터
const questions = [
    {
        question: "아침에 일어났을 때 가장 먼저 하고 싶은 일은?",
        optionA: "창문을 열고 신선한 공기를 마시기",
        optionB: "따뜻한 차 한 잔과 함께 조용한 시간 보내기"
    },
    {
        question: "친구들과 모임에서 당신의 역할은?",
        optionA: "분위기를 띄우는 에너지 메이커",
        optionB: "모두의 이야기를 들어주는 조용한 리스너"
    },
    {
        question: "스트레스를 받을 때 가장 효과적인 해소법은?",
        optionA: "신나는 음악을 들으며 춤추기",
        optionB: "자연 속에서 혼자만의 시간 갖기"
    },
    {
        question: "이상적인 휴가 계획은?",
        optionA: "새로운 도시를 탐험하며 모험하기",
        optionB: "조용한 해변에서 책 읽으며 휴식하기"
    },
    {
        question: "중요한 결정을 내릴 때 당신은?",
        optionA: "직감을 믿고 빠르게 결정",
        optionB: "신중하게 생각하고 계획 세우기"
    },
    {
        question: "가장 매력적으로 느끼는 색깔은?",
        optionA: "활기찬 오렌지나 빨간색",
        optionB: "차분한 파란색이나 보라색"
    },
    {
        question: "파티에서 당신이 선호하는 위치는?",
        optionA: "사람들이 많은 중앙에서 대화하기",
        optionB: "조용한 구석에서 소수와 깊은 대화하기"
    },
    {
        question: "새로운 취미를 시작한다면?",
        optionA: "댄스나 요가 같은 활동적인 것",
        optionB: "그림 그리기나 악기 연주 같은 창작 활동"
    },
    {
        question: "가장 좋아하는 시간대는?",
        optionA: "활기찬 오후나 저녁 시간",
        optionB: "고요한 새벽이나 밤 시간"
    },
    {
        question: "친구에게 조언을 할 때 당신의 스타일은?",
        optionA: "격려하며 용기를 북돋아주기",
        optionB: "차분하게 들어주며 현실적 조언하기"
    },
    {
        question: "가장 끌리는 여행 스타일은?",
        optionA: "즉흥적이고 자유로운 배낭여행",
        optionB: "계획적이고 여유로운 힐링 여행"
    },
    {
        question: "좋아하는 날씨는?",
        optionA: "화창하고 따뜻한 맑은 날",
        optionB: "촉촉한 비가 내리는 차분한 날"
    },
    {
        question: "새로운 사람들과 만날 때 당신은?",
        optionA: "먼저 다가가서 대화를 시작",
        optionB: "상대방이 다가올 때까지 기다리기"
    },
    {
        question: "가장 중요하게 생각하는 가치는?",
        optionA: "자유롭고 열정적인 삶",
        optionB: "평화롭고 안정적인 삶"
    },
    {
        question: "꿈을 이루기 위한 당신의 방식은?",
        optionA: "과감하게 도전하며 앞으로 나아가기",
        optionB: "차근차근 준비하며 단계적으로 접근하기"
    }
];

// 아우라 결과 데이터
const auraResults = {
    fire: {
        name: "🔥 열정의 아우라",
        description: "당신은 타고난 리더이자 에너지의 원천입니다. 주변 사람들에게 영감을 주고 도전을 두려워하지 않는 열정적인 성격을 가지고 있어요.",
        traits: [
            "강한 리더십과 추진력을 가지고 있어요",
            "새로운 도전을 즐기고 모험을 좋아해요",
            "주변 사람들에게 긍정적인 에너지를 전달해요",
            "목표 달성을 위해 끝까지 노력하는 의지력이 강해요",
            "활동적이고 역동적인 라이프스타일을 선호해요"
        ],
        theme: "fire-theme"
    },
    calm: {
        name: "🌊 평온의 아우라",
        description: "당신은 깊은 사고력과 안정감을 가진 현명한 사람입니다. 주변을 편안하게 만들고 신중한 판단력으로 많은 이들의 신뢰를 받아요.",
        traits: [
            "차분하고 안정적인 성격으로 신뢰받아요",
            "깊이 있는 사고와 통찰력을 가지고 있어요",
            "갈등 상황에서 중재자 역할을 잘해요",
            "신중한 계획과 준비를 통해 목표를 달성해요",
            "평화로운 환경에서 최고의 능력을 발휘해요"
        ],
        theme: "calm-theme"
    },
    balance: {
        name: "🌟 균형의 아우라",
        description: "당신은 상황에 따라 유연하게 적응하는 조화로운 성격을 가지고 있습니다. 다양한 면을 가진 매력적인 사람으로 많은 이들에게 사랑받아요.",
        traits: [
            "상황에 맞게 유연하게 대처하는 능력이 뛰어나요",
            "다양한 관점을 이해하고 수용할 수 있어요",
            "조화와 균형을 중시하는 성격이에요",
            "창의적이면서도 현실적인 사고를 해요",
            "다재다능한 능력으로 여러 분야에서 활약해요"
        ],
        theme: "balance-theme"
    },
    emotional: {
        name: "🌸 감성의 아우라",
        description: "당신은 풍부한 감수성과 예술적 감각을 가진 창의적인 사람입니다. 타인의 마음을 잘 이해하고 공감하는 따뜻한 성격을 가지고 있어요.",
        traits: [
            "뛰어난 공감 능력으로 타인의 마음을 이해해요",
            "예술적 감각과 창의성이 풍부해요",
            "감정 표현이 자연스럽고 진솔해요",
            "아름다운 것들에 대한 감상력이 뛰어나요",
            "따뜻한 마음으로 주변 사람들을 위로해요"
        ],
        theme: "emotional-theme"
    },
    dynamic: {
        name: "⚡ 역동의 아우라",
        description: "당신은 변화를 즐기고 새로운 것에 도전하는 역동적인 에너지를 가지고 있습니다. 활기찬 성격으로 어디서든 주목받는 매력적인 사람이에요.",
        traits: [
            "변화와 새로운 경험을 적극적으로 추구해요",
            "빠른 적응력과 학습 능력을 가지고 있어요",
            "활기찬 에너지로 분위기를 밝게 만들어요",
            "도전 정신이 강하고 포기를 모르는 성격이에요",
            "다양한 사람들과 쉽게 어울리는 사교성이 있어요"
        ],
        theme: "dynamic-theme"
    },
    nature: {
        name: "🌿 자연의 아우라",
        description: "당신은 자연을 사랑하고 평화로운 마음을 가진 순수한 사람입니다. 치유하는 능력이 있어 주변 사람들에게 안정감과 위로를 주어요.",
        traits: [
            "자연과 조화를 이루며 살아가는 것을 좋아해요",
            "순수하고 진실한 마음을 가지고 있어요",
            "타인을 치유하고 위로하는 능력이 있어요",
            "환경과 생명을 소중히 여기는 마음이 있어요",
            "단순하고 소박한 삶의 가치를 추구해요"
        ],
        theme: "nature-theme"
    },
    mystic: {
        name: "💎 신비의 아우라",
        description: "당신은 뛰어난 직감력과 깊은 통찰력을 가진 신비로운 매력의 소유자입니다. 남들이 보지 못하는 것을 보는 특별한 능력을 가지고 있어요.",
        traits: [
            "뛰어난 직감력으로 본질을 꿰뚫어 봐요",
            "깊은 철학적 사고와 지혜를 가지고 있어요",
            "신비롭고 독특한 매력으로 사람들을 끌어들여요",
            "영적인 것들에 대한 관심과 이해가 깊어요",
            "내면의 목소리에 귀 기울이며 살아가요"
        ],
        theme: "mystic-theme"
    },
    rainbow: {
        name: "🌈 무지개 아우라",
        description: "당신은 다채로운 매력과 무한한 가능성을 가진 특별한 사람입니다. 창의적이고 독특한 개성으로 세상을 더욱 아름답게 만드는 존재예요.",
        traits: [
            "무한한 창의력과 상상력을 가지고 있어요",
            "독특하고 개성 넘치는 매력이 있어요",
            "다양한 분야에서 재능을 발휘할 수 있어요",
            "긍정적이고 희망적인 에너지를 전달해요",
            "세상을 더 아름답고 다채롭게 만드는 능력이 있어요"
        ],
        theme: "rainbow-theme"
    }
};

// 게임 상태
let currentQuestion = 0;
let answers = [];

// DOM 요소들
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const currentQuestionEl = document.getElementById('current-question');
const questionText = document.getElementById('question-text');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const progressFill = document.querySelector('.progress-fill');

const auraIcon = document.getElementById('aura-icon');
const auraName = document.getElementById('aura-name');
const auraDescription = document.getElementById('aura-description');
const auraTraits = document.getElementById('aura-traits');

const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');

// 이벤트 리스너
startBtn.addEventListener('click', startTest);
optionA.addEventListener('click', () => selectAnswer('A'));
optionB.addEventListener('click', () => selectAnswer('B'));
restartBtn.addEventListener('click', restartTest);
shareBtn.addEventListener('click', shareResult);

// 테스트 시작
function startTest() {
    showScreen('question-screen');
    currentQuestion = 0;
    answers = [];
    showQuestion();
}

// 화면 전환
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// 질문 표시
function showQuestion() {
    const question = questions[currentQuestion];
    currentQuestionEl.textContent = currentQuestion + 1;
    questionText.textContent = question.question;
    optionA.textContent = question.optionA;
    optionB.textContent = question.optionB;
    
    // 진행률 업데이트
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
}

// 답변 선택
function selectAnswer(answer) {
    answers.push(answer);
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        setTimeout(() => {
            showQuestion();
        }, 200);
    } else {
        // 테스트 완료
        showScreen('loading-screen');
        setTimeout(() => {
            calculateResult();
        }, 2000);
    }
}

// 결과 계산
function calculateResult() {
    const aCount = answers.filter(answer => answer === 'A').length;
    const bCount = answers.filter(answer => answer === 'B').length;
    
    let resultType;
    
    // 결과 결정 로직
    if (aCount >= 12) {
        resultType = 'fire';
    } else if (bCount >= 12) {
        resultType = 'calm';
    } else if (Math.abs(aCount - bCount) <= 1) {
        resultType = 'balance';
    } else if (aCount > bCount) {
        // A가 많을 때의 세분화
        if (hasPattern(['A', 'A', 'A'], [0, 7, 12])) {
            resultType = 'dynamic';
        } else if (aCount >= 10) {
            resultType = 'fire';
        } else {
            resultType = 'dynamic';
        }
    } else {
        // B가 많을 때의 세분화
        if (hasPattern(['B', 'B', 'B'], [2, 5, 11])) {
            resultType = 'nature';
        } else if (hasPattern(['B', 'B'], [1, 6])) {
            resultType = 'emotional';
        } else if (bCount >= 10) {
            resultType = 'calm';
        } else {
            resultType = 'mystic';
        }
    }
    
    // 특별한 패턴 체크
    if (hasAlternatingPattern()) {
        resultType = 'rainbow';
    }
    
    showResult(resultType);
}

// 특정 패턴 체크
function hasPattern(pattern, indices) {
    return indices.every((index, i) => answers[index] === pattern[i]);
}

// 교대 패턴 체크 (무지개 아우라용)
function hasAlternatingPattern() {
    let alternating = true;
    for (let i = 1; i < answers.length; i++) {
        if (answers[i] === answers[i-1]) {
            alternating = false;
            break;
        }
    }
    return alternating;
}

// 결과 표시
function showResult(resultType) {
    const result = auraResults[resultType];
    
    // 배경 테마 변경
    document.body.className = result.theme;
    
    // 결과 내용 설정
    const iconImage = document.createElement('img');
    iconImage.src = `images/${resultType}-aura.png`;
    iconImage.alt = result.name;
    iconImage.style.width = '80px';
    iconImage.style.height = '80px';
    iconImage.style.objectFit = 'contain';
    auraIcon.innerHTML = '';
    auraIcon.appendChild(iconImage);
    
    auraName.textContent = result.name;
    auraDescription.textContent = result.description;
    
    // 특징 리스트 생성
    auraTraits.innerHTML = '';
    result.traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = trait;
        auraTraits.appendChild(li);
    });
    
    showScreen('result-screen');
}

// 테스트 재시작
function restartTest() {
    document.body.className = '';
    showScreen('start-screen');
    currentQuestion = 0;
    answers = [];
}

// 결과 공유
function shareResult() {
    const resultText = `나의 아우라 테스트 결과: ${auraName.textContent}\n\n${auraDescription.textContent}\n\n당신도 테스트해보세요!`;
    
    if (navigator.share) {
        navigator.share({
            title: '나의 아우라 찾기',
            text: resultText,
            url: window.location.href
        });
    } else {
        // 클립보드에 복사
        navigator.clipboard.writeText(resultText).then(() => {
            alert('결과가 클립보드에 복사되었습니다!');
        }).catch(() => {
            alert('공유 기능을 사용할 수 없습니다.');
        });
    }
}

