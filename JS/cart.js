document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
    const quizSection = document.getElementById('quiz-section');
    const startSection = document.getElementById('start-section');
    const resultSection = document.getElementById('result-section');
    const questionContainer = document.getElementById('question-container');
    const choicesContainer = document.getElementById('choices-container');
    const result = document.getElementById('result');
    const addToListBtn = document.getElementById('addToListBtn');
  
    let currentQuestionIndex = 0;
    let userChoices = [];
  
    const questions = [
        { question: '평소에 자주 하는 운동이나 활동이 있나요? 있다면 어떤 운동인가요?', choices: ['축구', '테니스', '수영', '배드민턴', '요가', '사이클', '클라이밍', '골프', '농구', '탁구', '배구', '서핑', '없음'] },
        { question: '팀 스포츠와 개인 스포츠 중 어느 쪽을 더 선호하시나요?', choices: ['팀', '개인'] },
        { question: '실내에서 하는 운동과 실외에서 하는 운동 중 어떤 것을 더 좋아하시나요?', choices: ['실내', '실외'] },
        { question: '운동을 할 때 주로 목표로 삼는 것이 무엇인가요? 예를 들어, 체중 감량, 근육 강화, 스트레스 해소 등.', choices: ['체중 감량', '근육 강화', '스트레스 해소', '기타'] },
        { question: '얼마나 자주 운동을 하시나요? 주 몇 회 정도가 적당하다고 생각하시나요?', choices: ['1-2회', '3-4회', '5회 이상'] },
        { question: '새로운 운동을 배울 때 배우기 쉽고 빠르게 익힐 수 있는 운동을 선호하시나요, 아니면 도전적인 운동을 더 좋아하시나요?', choices: ['쉬운 운동', '도전적인 운동'] },
        { question: '스포츠를 할 때 경쟁적인 요소가 있는 것을 좋아하시나요, 아니면 단순히 즐기기 위한 활동을 더 선호하시나요?', choices: ['경쟁', '즐김'] },
        { question: '주변에 같이 운동할 수 있는 친구나 가족이 있나요, 아니면 혼자 운동하는 것을 더 좋아하시나요?', choices: ['친구/가족', '혼자'] },
        { question: '평소에 좋아하는 스포츠나 선수, 팀이 있나요? 있다면 어떤 스포츠인지 말씀해 주세요.', choices: ['축구', '테니스', '수영', '배드민턴', '요가', '사이클', '클라이밍', '골프', '농구', '탁구', '배구', '서핑', '없음'] },
        { question: '운동을 할 때 사용하는 장비나 장소에 제한이 있나요? 예를 들어, 헬스장, 공원, 수영장 등.', choices: ['헬스장', '공원', '수영장', '제한 없음'] }
    ];
  
    const sports = {
        '축구': { 자주하는운동: '축구', 팀: '팀', 실내: '실외', 체중감량: '체중 감량', 운동빈도: '3-4회', 쉬운운동: '도전적인 운동', 경쟁: '경쟁', 친구가족: '친구/가족', 좋아하는스포츠: '축구', 장비장소제한: '공원' },
        '테니스': { 자주하는운동: '테니스', 팀: '개인', 실내: '실내', 체중감량: '체중 감량', 운동빈도: '3-4회', 쉬운운동: '도전적인 운동', 경쟁: '경쟁', 친구가족: '친구/가족', 좋아하는스포츠: '테니스', 장비장소제한: '제한 없음' },
        '수영': { 자주하는운동: '수영', 팀: '개인', 실내: '실내', 체중감량: '체중 감량', 운동빈도: '5회 이상', 쉬운운동: '도전적인 운동', 경쟁: '즐김', 친구가족: '친구/가족', 좋아하는스포츠: '수영', 장비장소제한: '수영장' },
        '배드민턴': { 자주하는운동: '배드민턴', 팀: '개인', 실내: '실내', 체중감량: '체중 감량', 운동빈도: '3-4회', 쉬운운동: '쉬운 운동', 경쟁: '경쟁', 친구가족: '친구/가족', 좋아하는스포츠: '배드민턴', 장비장소제한: '제한 없음' },
        '요가': { 자주하는운동: '요가', 팀: '개인', 실내: '실내', 체중감량: '스트레스 해소', 운동빈도: '1-2회', 쉬운운동: '쉬운 운동', 경쟁: '즐김', 친구가족: '혼자', 좋아하는스포츠: '요가', 장비장소제한: '헬스장' },
        '사이클': { 자주하는운동: '사이클', 팀: '개인', 실내: '실외', 체중감량: '체중 감량', 운동빈도: '5회 이상', 쉬운운동: '쉬운 운동', 경쟁: '경쟁', 친구가족: '혼자', 좋아하는스포츠: '사이클', 장비장소제한: '제한 없음' },
        '클라이밍': { 자주하는운동: '클라이밍', 팀: '개인', 실내: '실내', 체중감량: '체중 감량', 운동빈도: '3-4회', 쉬운운동: '도전적인 운동', 경쟁: '즐김', 친구가족: '혼자', 좋아하는스포츠: '클라이밍', 장비장소제한: '제한 없음' },
        '골프': { 자주하는운동: '골프', 팀: '개인', 실내: '실외', 체중감량: '기타', 운동빈도: '1-2회', 쉬운운동: '쉬운 운동', 경쟁: '경쟁', 친구가족: '친구/가족', 좋아하는스포츠: '골프', 장비장소제한: '제한 없음' },
        '농구': { 자주하는운동: '농구', 팀: '팀', 실내: '실내', 체중감량: '체중 감량', 운동빈도: '3-4회', 쉬운운동: '쉬운 운동', 경쟁: '경쟁', 친구가족: '친구/가족', 좋아하는스포츠: '농구', 장비장소제한: '제한 없음' },
        '탁구': { 자주하는운동: '탁구', 팀: '개인', 실내: '실내', 체중감량: '스트레스 해소', 운동빈도: '1-2회', 쉬운운동: '쉬운 운동', 경쟁: '경쟁', 친구가족: '친구/가족', 좋아하는스포츠: '탁구', 장비장소제한: '헬스장' },
        '배구': { 자주하는운동: '배구', 팀: '팀', 실내: '실내', 체중감량: '체중 감량', 운동빈도: '3-4회', 쉬운운동: '도전적인 운동', 경쟁: '경쟁', 친구가족: '친구/가족', 좋아하는스포츠: '배구', 장비장소제한: '제한 없음' },
        '서핑': { 자주하는운동: '서핑', 팀: '개인', 실내: '실외', 체중감량: '체중 감량', 운동빈도: '1-2회', 쉬운운동: '도전적인 운동', 경쟁: '즐김', 친구가족: '혼자', 좋아하는스포츠: '서핑', 장비장소제한: '수영장' }
    };
  
    startButton.addEventListener('click', () => {
        startSection.classList.add('hidden');
        quizSection.classList.remove('hidden');
        showQuestion();
    });
  
    nextButton.addEventListener('click', () => {
        const selectedChoice = document.querySelector('input[name="choice"]:checked');
        if (selectedChoice) {
            userChoices.push(selectedChoice.value);
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        } else {
            alert('답변을 선택해주세요.');
        }
    });
  
    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
        choicesContainer.innerHTML = '';
        currentQuestion.choices.forEach((choice, index) => {
            const choiceElement = document.createElement('div');
            choiceElement.classList.add('choice');
            choiceElement.innerHTML = `
                <input type="radio" id="choice${index}" name="choice" value="${choice}">
                <label for="choice${index}">${choice}</label>
            `;
            // Add event listener to the choice element
            choiceElement.addEventListener('click', () => {
                document.querySelectorAll('.choice').forEach(el => el.classList.remove('selected'));
                choiceElement.classList.add('selected');
                document.getElementById(`choice${index}`).checked = true;
            });
            choicesContainer.appendChild(choiceElement);
        });
        nextButton.classList.remove('hidden');
    }
  
    function showResult() {
        quizSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
    
        const recommendedSports = determineRecommendedSports(userChoices);
        result.innerHTML = `당신의 선택에 따른 추천 스포츠: <br> 1위: ${recommendedSports[0]} <br> 2위: ${recommendedSports[1]} <br> 3위: ${recommendedSports[2]}`;
        addToListBtn.style.display = 'block';
        addToListBtn.dataset.sport = recommendedSports[0];
    }
    
    function determineRecommendedSports(choices) {
        const scores = {};
    
        for (const sport in sports) {
            scores[sport] = 0;
    
            questions.forEach((question, index) => {
                const selectedChoice = choices[index];
                const sportTraits = sports[sport];
    
                // Match the choice with the sport's trait
                for (const key in sportTraits) {
                    if (sportTraits[key] === selectedChoice) {
                        scores[sport]++;
                    }
                }
            });
        }
    
        const sortedSports = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    
        return sortedSports.slice(0, 3);
    }
    
    addToListBtn.addEventListener('click', () => {
        var sport = addToListBtn.dataset.sport;
        addSportToList(sport);
    });
  
    function addSportToList(sport) {
        // Retrieve the list from localStorage
        var selectedExercises = JSON.parse(localStorage.getItem('selectedExercises')) || [];
    
        // Add the current sport to the list
        if (!selectedExercises.includes(sport)) {
            selectedExercises.push(sport);
        }
    
        // Save the updated list back to localStorage
        localStorage.setItem('selectedExercises', JSON.stringify(selectedExercises));
    
        // Provide feedback to the user
        alert(sport + '이(가) 선택 운동에 추가되었습니다.');
    }
});

