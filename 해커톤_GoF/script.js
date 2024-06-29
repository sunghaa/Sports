function showHistory(sport) {
  var historyDiv = document.getElementById('history');
  var rulesDiv = document.getElementById('rules');
  var effectDiv = document.getElementById('effect');
  var sportImage = document.getElementById('sportImage');
  

  // PNG 이미지 파일 경로 설정
  var imagePath = 'images/' + sport + '.png';

  // 이미지 표시
  sportImage.src = imagePath;
  sportImage.style.display = 'block';

  switch (sport) {
      case '축구':
          historyDiv.innerHTML = `
              <h2>축구의 역사</h2>
              <p>축구는 고대 중국, 그리스, 로마에서 기원한 공놀이를 현대적으로 재구성한 스포츠입니다. 
              <br>오늘날의 축구는 19세기 중반 영국에서 시작되었습니다.<br> 1863년 영국에서 최초의 축구 협회가 창설되었고, 
              현대 축구의 규칙이 제정되었습니다. <br>이후 축구는 전 세계적으로 인기 있는 스포츠로 성장했습니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>축구의 규칙</h2>
                <p>축구는 두 팀이 각 11명의 선수로 구성되며, 주요 목표는 공을 상대팀의 골대에 넣는 것입니다. 
                <br>경기 시간은 전후반 각 45분씩 총 90분이며, 심판의 재량에 따라 추가 시간이 주어질 수 있습니다.</p>
            `;
            effectDiv.innerHTML = `
                <h2>축구의 효능</h3>
                <p>축구는 전신을 사용하는 가장 기본적인 스포츠로 심폐지구력과 하체근력을 강화할 수 있습니다.
                <br>또한 인지도가 높아 공만있다면 진행할 수 있어 접근성이 좋습니다.</p>
            `;
        }
          break;
      case '테니스':
          historyDiv.innerHTML = `
              <h2>테니스의 역사</h2>
              <p>테니스는 프랑스에서 기원한 스포츠로, 12세기에 시작된 것으로 알려져 있습니다. 현대 테니스는 19세기 후반 영국에서 발전하였고, 
              현재는 전 세계적으로 인기 있는 스포츠 중 하나입니다. <br>주요 대회로는 윔블던, US 오픈, 프랑스 오픈, 호주 오픈이 있습니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>테니스의 규칙</h2>
                <p>테니스 경기는 단식과 복식으로 나뉘며, 각 선수는 라켓을 사용하여 공을 쳐서 상대방 코트로 넘깁니다.
                <br>주요 목표는 공이 두 번 바운드되기 전에 반대편으로 넘기는 것입니다.</p>
            `;
            effectDiv.innerHTML = `
                <h2>테니스의 효능</h3>
                <p>테니스는 빠른 반사신경과 이동 방향전환으로 인한 코어근육 강화 팔,다리근육이 강화됩니다.
                <br>상대방과 승부를 내는 과정에서 집중력과 승부욕 열정을 키울 수 있습니다.</p>
            `;
        }
          break;
      case '수영':
          historyDiv.innerHTML = `
              <h2>수영의 역사</h2>
              <p>수영은 고대부터 존재한 스포츠로, 최초의 수영 대회는 1837년 런던에서 개최되었습니다. <br>수영은 다양한 종목과 스타일로 나뉘며, 
              올림픽에서도 중요한 종목으로 자리잡고 있습니다. <br>현대 수영은 19세기 후반에 체계화되었습니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>수영의 규칙</h2>
                <p>수영은 여러 가지 스타일로 나뉘며, 주로 자유형, 배영, 평영, 접영이 있습니다.
                <br>각 경기에서 선수는 정해진 거리만큼 수영하여 가장 빨리 도착하는 것을 목표로 합니다.
</p>
            `;
            effectDiv.innerHTML = `
                <h2>수영의 효능</h3>
                <p>수영은 시간당 8~11칼로리를 소모하는 운동으로 전신을 사용함으로써 근력강화 심혈관건강 유연성향상등의 효과를 얻을 수 있습니다.
                수영복과 모자 고글등 기본장비만을 요구하기에 초기비용이 적습니다.</p>
            `;
        }
          break;
      case '배드민턴':
          historyDiv.innerHTML = `
              <h2>배드민턴의 역사</h2>
              <p>배드민턴은 19세기 중반 인도에서 기원하여 영국으로 전파된 스포츠입니다. <br>초기에는 '푸나'라는 이름으로 불렸으며, 
              현재의 이름은 영국의 배드민턴 하우스에서 유래되었습니다. <br>배드민턴은 빠른 속도와 민첩성을 요구하는 스포츠로 알려져 있습니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>배드민턴의 규칙</h2>
                <p>배드민턴 경기는 단식과 복식으로 나뉘며, 각 선수는 셔틀콕을 라켓으로 쳐서 상대방 코트에 넘깁니다.
                <br>셔틀콕이 바닥에 떨어지기 전에 다시 넘겨야 하며, 21점을 먼저 얻는 선수가 승리합니다.</p>
            `;
            effectDiv.innerHTML = `
                <h2>배드민턴의 효능</h3>
                <p>배드민턴은 빠른 움직임과 전환동작을 통해 전신,코어근육, 심폐지구력을 향상시킬 수 있습니다.
                <br>또한 저렴한 장비를 통해 높은 효율성을 보이고, 클럽이나 동호회도 많이 활성화되어있어 사교성을 기르는데도 도움이 됩니다.</p>
            `;
        }
          break;
      case '요가':
          historyDiv.innerHTML = `
              <h2>요가의 역사</h2>
              <p>요가는 인도에서 기원한 심신 수련법으로, 5천 년 이상의 역사를 가지고 있습니다. <br>현대 요가는 신체적, 정신적 건강을 증진시키기 위한 다양한 자세와 호흡법을 포함합니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>요가의 방법</h2>
                <p>요가는 다양한 자세와 호흡법을 통해 신체적, 정신적 건강을 증진시키는 수련법입니다.
                <br>규칙보다는 각자의 신체 상태에 맞게 유연하게 수련하는 것이 중요합니다.</p>
            `;
            effectDiv.innerHTML = `
                <h2>요가의 효능</h3>
                <p>요가는 다양한 동작을 통해 전신근육을 강화하고 특히 유연성을 향상시키는데 최적화되어있습니다.
                <br>명상과 호흡을 통해 스트레스를 줄이고 마음의 평온을 유지하는데 도움이 됩니다.</p>
            `;
        }
          break;
      case '사이클':
          historyDiv.innerHTML = `
              <h2>사이클의 역사</h2>
              <p>사이클링은 19세기 초반 프랑스에서 시작된 스포츠입니다. 초기에는 자전거가 고급 장비로 여겨졌으나, 
              <br>현재는 대중적인 운동 수단이자 스포츠로 발전하였습니다. 투르 드 프랑스와 같은 대회가 유명합니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>사이클의 규칙</h2>
                <p>사이클링 경기는 다양한 거리와 코스에서 이루어지며, 선수들은 자전거를 타고 정해진 코스를 가장 빨리 완주하는 것을 목표로 합니다.
                팀 경기와 개인 경기가 있으며, 주요 대회로는 투르 드 프랑스가 있습니다.</p>
            `;
            effectDiv.innerHTML = `
                <h2>사이클의 효능</h3>
                <p>사이클은 하체근력을 향상시키기 좋은 스포츠입니다.
                또한 동호회나 그룹을 통해 사교성과 인연을 만들기에도 좋습니다.
                <br>또한 자전거만 있으면 되기때문에 초기비용이 적고 장소와 시간의 제약이 적습니다.</p>
            `;
        }
          break;
      case '클라이밍':
          historyDiv.innerHTML = `
              <h2>클라이밍의 역사</h2>
              <p>클라이밍은 자연의 암벽을 오르는 스포츠로, 19세기 후반부터 본격적으로 발전하기 시작했습니다. 
              <br>현재는 실내 암벽 등반도 인기를 끌고 있습니다. 기술적 능력과 체력을 요구하는 스포츠입니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>클라이밍의 규칙</h2>
                <p>클라이밍은 자연 암벽이나 인공 암벽을 오르는 스포츠입니다.
                기술적 능력과 체력을 요구하며, <br>루트의 난이도와 완등 시간에 따라 점수가 매겨집니다.</p>
            `;
            effectDiv.innerHTML = `
                <h2>클라이밍의 효능</h3>
                <p>클라이밍은 시간당 9~15칼로리를 소모하는 고강도운동입니다.
                전신의 근육을 모두 사용하며 특히 손가락과 전완근이 발달됩니다.
                <br>경로를 계산하고 해결하는 과정에서 문제 해결 능력과 창의적 사고 향상을 기대할 수 있습니다.</p>
            `;
        }
          break;
      case '골프':
          historyDiv.innerHTML = `
              <h2>골프의 역사</h2>
              <p>골프는 15세기 스코틀랜드에서 기원한 스포츠입니다. 초기에는 막대기와 공으로 간단히 즐겼으나, 
              <br>현대 골프는 정교한 규칙과 장비를 갖춘 스포츠로 발전했습니다. <br>유명한 대회로는 마스터스, US 오픈 등이 있습니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>골프의 규칙</h2>
                <p>골프는 여러 개의 홀이 있는 코스에서 진행되며, 각 홀마다 정해진 타수 내에 공을 홀에 넣는 것이 목표입니다.
                <br>각 홀의 타수는 코스의 길이와 난이도에 따라 다릅니다.
</p>
            `;
            effectDiv.innerHTML = `
                <h2>골프의 효능</h3>
                <p>골프는 반복적인 스윙 동작을 통해 코어근육과 유연성을 향상시킬 수 있습니다.
                <br>골프는 자연과 맞닿아 있는 경우가 많기에 신선한 공기와 아름다운 경치를 감상할 수 있습니다.
                <br>전략적인 사고와 집중력을 필요하기에 두뇌활동의 향상도 기대할 수 있습니다.</p>
            `;
        }
          break;
      case '농구':
          historyDiv.innerHTML = `
              <h2>농구의 역사</h2>
              <p>농구는 1891년 미국에서 제임스 네이스미스에 의해 발명된 스포츠입니다.<br> 농구는 빠른 속도와 팀워크를 요구하며, 
              현재는 전 세계적으로 인기 있는 스포츠 중 하나입니다. <br>NBA는 가장 유명한 프로 농구 리그입니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>농구의 규칙</h2>
                <p>농구는 두 팀이 각 5명의 선수로 구성되며, 주요 목표는 공을 상대팀의 골대에 넣는 것입니다.
                <br>경기는 4쿼터로 나누어지며, 각 쿼터는 12분씩 진행됩니다. 점수가 높은 팀이 승리합니다.</p>
            `;
            effectDiv.innerHTML = `
                <h2>농구의 효능</h3>
                <p>농구는 분당  6~12칼로리를 소모하는 운동으로 점프, 슛, 드리블 등을 통해 전반적인 근력을 강화할 수 있습니다.
                <br>또한 팀워크를 요하는 스포츠로써 팀워크를 통해 협동심과 사교성 발달에 도움이됩니다.
                <br>코트를 주변에서 쉽게 접할 수 있기때문에 접근성이 용이합니다.</p>
            `;
        }
          break;
      case '탁구':
          historyDiv.innerHTML = `
              <h2>탁구의 역사</h2>
              <p>탁구는 19세기 영국에서 기원한 스포츠로, 초기에는 실내에서 즐기는 테니스 형태로 시작되었습니다. 
              <br>현재는 빠른 속도와 반사 신경을 요구하는 스포츠로 발전하였습니다. 올림픽 종목 중 하나입니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>탁구의 규칙</h2>
                <p>탁구는 단식과 복식으로 나뉘며, 각 선수는 작은 공을 라켓으로 쳐서 상대방 코트에 넘깁니다.
                <br>공이 바닥에 두 번 바운드되기 전에 다시 넘겨야 하며, 11점을 먼저 얻는 선수가 승리합니다.</p>
            `;
            effectDiv.innerHTML = `
                <h2>탁구의 효능</h3>
                <p>탁구는 짧은 시간안에 상대방과 공을 주고받는 과정을 통해 반사신경과 손-눈 협응력의 향상효과를 볼 수 있습니다.
                <br>그 과정에서 많은 움직임을 요구하기에 심혈관 건강과 민첩성 향상에도 도움이됩니다.
                <br>많은 집중력을 요구하기에 두뇌활동의 활성화 효과도 기대할 수 있습니다.
</p>
            `;
        }
          break;
      case '배구':
          historyDiv.innerHTML = `
              <h2>배구의 역사</h2>
              <p>배구는 1895년 미국에서 윌리엄 모건에 의해 발명된 스포츠입니다. 초기에는 미노넷으로 불렸으며, 
              <br>현재는 전 세계적으로 인기 있는 팀 스포츠로 자리잡고 있습니다. 실내와 비치 배구로 나뉩니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>배구의 규칙</h2>
                <p>배구는 두 팀이 각 6명의 선수로 구성되며, 네트를 사이에 두고 공을 쳐서 상대방 코트에 넘깁니다.
                <br>공이 바닥에 닿기 전에 다시 넘겨야 하며, 25점을 먼저 얻는 팀이 승리합니다.</p>
            `;
            effectDiv.innerHTML = `
                <h2>배구의 효능</h3>
                <p>배구는 1시간에 약 2~500칼로리가 소모되는 운동입니다.
                <br>배구는 끊임없는 움직임과 점프가 동반되기에 코어근육과 심혈관 건강이 향상되는 효과를 볼 수 있습니다.
                <br>또한 코트와 공만 있으면 되기에 장소와 장비의 제약이 적습니다.</p>
            `;
        }
          break;
      case '서핑':
          historyDiv.innerHTML = `
              <h2>서핑의 역사</h2>
              <p>서핑은 고대 폴리네시아에서 기원한 스포츠로, 파도를 타는 기술을 포함합니다. 
              <br>현대 서핑은 20세기 초반 하와이에서 발전하였으며, 현재는 전 세계적으로 인기 있는 수상 스포츠입니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = `
                <h2>서핑의 규칙</h2>
                <p>서핑은 파도를 타고 서핑보드를 이용해 이동하는 스포츠입니다.
                <br>서퍼는 파도의 크기와 파도 위에서의 기술에 따라 점수를 받으며, 가장 높은 점수를 받은 선수가 승리합니다.</p>
            `;
            effectDiv.innerHTML = `
                <h2>서핑의 효능</h3>
                <p>서핑은 평균적으로 분당 7~11칼로리를 소모하는 고강도 운동에 속합니다.
                <br>서핑으로 얻을 수 있는 이점으로는 보드에서 균형을 잡는 과정에서 발생하는 근력 강화, 심혈관 건강, 유연성 향상 등이 있습니다.
                <br>또한 자연에서 즐기는 스포츠이기에 스트레스를 해소하고 마음을 안정시키는 효과를 볼 수 있습니다.</p>
            `;
        }
          break;
      default:
          historyDiv.innerHTML = `
              <h2>알 수 없는 스포츠</h2>
              <p>해당 스포츠에 대한 정보가 없습니다.</p>
          `;
          if (isOnSelectedExercisesPage()) {
            rulesDiv.innerHTML = '';
            effectDiv.innerHTML = '';
        }
  }

  historyDiv.style.display = 'block';
  if (isOnSelectedExercisesPage()) {
    rulesDiv.style.display = 'block';
    effectDiv.style.display = 'block';
}
}

function hideHistory() {
  var sportImage = document.getElementById('sportImage');
  var historyDiv = document.getElementById('history');
  var rulesDiv = document.getElementById('rules');
  var effectDiv = document.getElementById('effect');

  sportImage.style.display = 'none';
  historyDiv.style.display = 'none';
  if (isOnSelectedExercisesPage()) {
    rulesDiv.style.display = 'none';
    effectDiv.style.display = 'none';
}
}

function addToList(sport) {
    // 선택된 운동 목록을 localStorage에서 가져옴
    var selectedExercises = JSON.parse(localStorage.getItem('selectedExercises')) || [];

    if (selectedExercises.includes(sport)) {
        // 이미 선택된 운동을 다시 클릭하면 목록에서 제거
        selectedExercises = selectedExercises.filter(function(item) {
            return item !== sport;
        });

    } else {
        // 현재 선택된 운동을 목록에 추가
        selectedExercises.push(sport);

    }

    // 업데이트된 목록을 다시 localStorage에 저장
    localStorage.setItem('selectedExercises', JSON.stringify(selectedExercises));

    // 전체 스포츠 페이지에서 버튼에 체크 표시 추가/제거
    var sportButton = document.querySelector(`.button[data-sport="${sport}"]`);
    if (sportButton) {
        if (selectedExercises.includes(sport)) {
            sportButton.classList.add('checked');
        } else {
            sportButton.classList.remove('checked');
        }
    }

    // 선택된 운동 목록 표시를 새로고침
    if (isOnSelectedExercisesPage()) {
        displaySelectedExercises();
    }
}

function displaySelectedExercises() {
    var selectedExercises = JSON.parse(localStorage.getItem('selectedExercises')) || [];
    var selectedList = document.getElementById('selectedList');
    selectedList.innerHTML = '';

    selectedExercises.forEach(function(sport) {
        var sportButton = document.createElement('div');
        sportButton.className = 'button';
        sportButton.dataset.sport = sport;
        sportButton.innerText = sport;

        var removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '&times;';
        removeBtn.onclick = function(event) {
            event.stopPropagation(); // Prevent triggering the parent button's click event
            removeFromList(sport);
        };

        sportButton.appendChild(removeBtn);
        sportButton.onclick = function() {
            showHistory(sport);
        };
        selectedList.appendChild(sportButton);
    });
}

function isOnSelectedExercisesPage() {
    return window.location.pathname.includes('selected_exercises.html');
}

function removeFromList(sport) {
    // 선택된 운동 목록을 localStorage에서 가져옴
    var selectedExercises = JSON.parse(localStorage.getItem('selectedExercises')) || [];

    // 목록에서 해당 운동 제거
    selectedExercises = selectedExercises.filter(function(item) {
        return item !== sport;
    });

    // 업데이트된 목록을 다시 localStorage에 저장
    localStorage.setItem('selectedExercises', JSON.stringify(selectedExercises));

    // 표시된 목록을 새로고침
    displaySelectedExercises();

    // 전체 스포츠 페이지에서 버튼에서 체크 표시 제거
    var sportButton = document.querySelector(`.button[data-sport="${sport}"]`);
    if (sportButton) {
        sportButton.classList.remove('checked');
    }

    // 선택한 스포츠 페이지에서 규칙 정보 숨기기
    if (isOnSelectedExercisesPage()) {
        var historyDiv = document.getElementById('history');
        var rulesDiv = document.getElementById('rules');
        var effectDiv = document.getElementById('effect');
        var sportImage = document.getElementById('sportImage');

        historyDiv.style.display = 'none';
        rulesDiv.style.display = 'none';
        effectDiv.style.display = 'none';
        sportImage.style.display = 'none';
    }
}




document.addEventListener('DOMContentLoaded', function() {
    if (isOnSelectedExercisesPage()) {
        displaySelectedExercises();
    } else {
        var selectedExercises = JSON.parse(localStorage.getItem('selectedExercises')) || [];
        var allButtons = document.querySelectorAll('.button');
        allButtons.forEach(function(button) {
            var sport = button.dataset.sport;
            if (selectedExercises.includes(sport)) {
                button.classList.add('checked');
            }
        });
    }
});