function showHistory(sport) {
  var historyDiv = document.getElementById('history');
  var removeFromListBtn = document.getElementById('removeFromListBtn');
  var addToListBtn = document.getElementById('addToListBtn');

  switch (sport) {
      case '축구':
          historyDiv.innerHTML = `
              <h2>축구의 역사</h2>
              <p>축구는 고대 중국, 그리스, 로마에서 기원한 공놀이를 현대적으로 재구성한 스포츠입니다. 
              오늘날의 축구는 19세기 중반 영국에서 시작되었습니다. 1863년 영국에서 최초의 축구 협회가 창설되었고, 
              현대 축구의 규칙이 제정되었습니다. 이후 축구는 전 세계적으로 인기 있는 스포츠로 성장했습니다.</p>
          `;
          break;
      case '테니스':
          historyDiv.innerHTML = `
              <h2>테니스의 역사</h2>
              <p>테니스는 프랑스에서 기원한 스포츠로, 12세기에 시작된 것으로 알려져 있습니다. 현대 테니스는 19세기 후반 영국에서 발전하였고, 
              현재는 전 세계적으로 인기 있는 스포츠 중 하나입니다. 주요 대회로는 윔블던, US 오픈, 프랑스 오픈, 호주 오픈이 있습니다.</p>
          `;
          break;
      case '수영':
          historyDiv.innerHTML = `
              <h2>수영의 역사</h2>
              <p>수영은 고대부터 존재한 스포츠로, 최초의 수영 대회는 1837년 런던에서 개최되었습니다. 수영은 다양한 종목과 스타일로 나뉘며, 
              올림픽에서도 중요한 종목으로 자리잡고 있습니다. 현대 수영은 19세기 후반에 체계화되었습니다.</p>
          `;
          break;
      case '배드민턴':
          historyDiv.innerHTML = `
              <h2>배드민턴의 역사</h2>
              <p>배드민턴은 19세기 중반 인도에서 기원하여 영국으로 전파된 스포츠입니다. 초기에는 '푸나'라는 이름으로 불렸으며, 
              현재의 이름은 영국의 배드민턴 하우스에서 유래되었습니다. 배드민턴은 빠른 속도와 민첩성을 요구하는 스포츠로 알려져 있습니다.</p>
          `;
          break;
      case '요가':
          historyDiv.innerHTML = `
              <h2>요가의 역사</h2>
              <p>요가는 인도에서 기원한 심신 수련법으로, 5천 년 이상의 역사를 가지고 있습니다. 현대 요가는 신체적, 정신적 건강을 증진시키기 위한 다양한 자세와 호흡법을 포함합니다.</p>
          `;
          break;
      case '사이클':
          historyDiv.innerHTML = `
              <h2>사이클의 역사</h2>
              <p>사이클링은 19세기 초반 프랑스에서 시작된 스포츠입니다. 초기에는 자전거가 고급 장비로 여겨졌으나, 
              현재는 대중적인 운동 수단이자 스포츠로 발전하였습니다. 투르 드 프랑스와 같은 대회가 유명합니다.</p>
          `;
          break;
      case '클라이밍':
          historyDiv.innerHTML = `
              <h2>클라이밍의 역사</h2>
              <p>클라이밍은 자연의 암벽을 오르는 스포츠로, 19세기 후반부터 본격적으로 발전하기 시작했습니다. 
              현재는 실내 암벽 등반도 인기를 끌고 있습니다. 기술적 능력과 체력을 요구하는 스포츠입니다.</p>
          `;
          break;
      case '골프':
          historyDiv.innerHTML = `
              <h2>골프의 역사</h2>
              <p>골프는 15세기 스코틀랜드에서 기원한 스포츠입니다. 초기에는 막대기와 공으로 간단히 즐겼으나, 
              현대 골프는 정교한 규칙과 장비를 갖춘 스포츠로 발전했습니다. 유명한 대회로는 마스터스, US 오픈 등이 있습니다.</p>
          `;
          break;
      case '농구':
          historyDiv.innerHTML = `
              <h2>농구의 역사</h2>
              <p>농구는 1891년 미국에서 제임스 네이스미스에 의해 발명된 스포츠입니다. 농구는 빠른 속도와 팀워크를 요구하며, 
              현재는 전 세계적으로 인기 있는 스포츠 중 하나입니다. NBA는 가장 유명한 프로 농구 리그입니다.</p>
          `;
          break;
      case '탁구':
          historyDiv.innerHTML = `
              <h2>탁구의 역사</h2>
              <p>탁구는 19세기 영국에서 기원한 스포츠로, 초기에는 실내에서 즐기는 테니스 형태로 시작되었습니다. 
              현재는 빠른 속도와 반사 신경을 요구하는 스포츠로 발전하였습니다. 올림픽 종목 중 하나입니다.</p>
          `;
          break;
      case '배구':
          historyDiv.innerHTML = `
              <h2>배구의 역사</h2>
              <p>배구는 1895년 미국에서 윌리엄 모건에 의해 발명된 스포츠입니다. 초기에는 미노넷으로 불렸으며, 
              현재는 전 세계적으로 인기 있는 팀 스포츠로 자리잡고 있습니다. 실내와 비치 배구로 나뉩니다.</p>
          `;
          break;
      case '서핑':
          historyDiv.innerHTML = `
              <h2>서핑의 역사</h2>
              <p>서핑은 고대 폴리네시아에서 기원한 스포츠로, 파도를 타는 기술을 포함합니다. 
              현대 서핑은 20세기 초반 하와이에서 발전하였으며, 현재는 전 세계적으로 인기 있는 수상 스포츠입니다.</p>
          `;
          break;
      default:
          historyDiv.innerHTML = `
              <h2>알 수 없는 스포츠</h2>
              <p>해당 스포츠에 대한 정보가 없습니다.</p>
          `;
  }

  if (isOnSelectedExercisesPage()) {
      if (removeFromListBtn) {
          removeFromListBtn.dataset.sport = sport;
          removeFromListBtn.style.display = 'block';
      }
  } else {
      if (addToListBtn) {
          addToListBtn.dataset.sport = sport;
          addToListBtn.style.display = 'block';
      }
  }

  historyDiv.style.display = 'block';
}

function addToList() {
  var addToListBtn = document.getElementById('addToListBtn');
  var sport = addToListBtn.dataset.sport;

  // Retrieve the list from localStorage
  var selectedExercises = JSON.parse(localStorage.getItem('selectedExercises')) || [];

  // Add the current sport to the list
  if (!selectedExercises.includes(sport)) {
      selectedExercises.push(sport);
  }

  // Save the updated list back to localStorage
  localStorage.setItem('selectedExercises', JSON.stringify(selectedExercises));

  // Provide feedback to the user
  alert(sport + '이(가) 내 리스트에 추가되었습니다.');
}

function removeFromList() {
  var removeFromListBtn = document.getElementById('removeFromListBtn');
  var sport = removeFromListBtn.dataset.sport;

  // Retrieve the list from localStorage
  var selectedExercises = JSON.parse(localStorage.getItem('selectedExercises')) || [];

  // Remove the sport from the list
  selectedExercises = selectedExercises.filter(function(item) {
      return item !== sport;
  });

  // Save the updated list back to localStorage
  localStorage.setItem('selectedExercises', JSON.stringify(selectedExercises));

  // Refresh the displayed list
  displaySelectedExercises();

  // Provide feedback to the user
  alert(sport + '이(가) 내 리스트에서 제거되었습니다.');

  // Hide the remove button and history
  removeFromListBtn.style.display = 'none';
  document.getElementById('history').style.display = 'none';
}

function displaySelectedExercises() {
  var selectedExercises = JSON.parse(localStorage.getItem('selectedExercises')) || [];
  var selectedList = document.getElementById('selectedList');
  selectedList.innerHTML = '';

  selectedExercises.forEach(function(sport) {
      var sportButton = document.createElement('div');
      sportButton.className = 'button';
      sportButton.innerText = sport;
      sportButton.onclick = function() {
          showHistory(sport);
      };
      selectedList.appendChild(sportButton);
  });

  // Hide the remove button initially
  var removeFromListBtn = document.getElementById('removeFromListBtn');
  if (removeFromListBtn) {
      removeFromListBtn.style.display = 'none';
  }
}

function isOnSelectedExercisesPage() {
  return window.location.pathname.includes('selected_exercises.html');
}

document.addEventListener('DOMContentLoaded', function() {
  if (isOnSelectedExercisesPage()) {
      displaySelectedExercises();
  }
});
