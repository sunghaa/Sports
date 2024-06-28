<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box Layout with Navbar</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .navbar {
            width: 100%;
            background-color: #333;
            overflow: hidden;
            position: fixed;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;            
        }
        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            width: 600px;
            margin-top: 60px; /* Adjusted for navbar */
        }
        .button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30%;
            margin: 1%;
            height: 100px;
            background-color: #4CAF50;
            color: white;
            font-size: 20px;
            cursor: pointer; /* Added cursor for pointer effect */
        }
        .history {
            display: none;
            width: 80%;
            margin: 20px;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="navbar">
        <a href="#home">운동 장바구니</a>
        <a href="#about">전체 운동</a>
        <a href="#services">선택 운동</a>
        <a href="#contact">Contact</a>
    </div>
    <div class="container">
        <!-- Row 1 -->
        <div class="button" onclick="showHistory('축구')">축구</div>
        <div class="button">테니스</div>
        <div class="button">수영</div>
        <!-- Row 2 -->
        <div class="button">배드민턴</div>
        <div class="button">요가</div>
        <div class="button">사이클</div>
        <!-- Row 3 -->
        <div class="button">클라이밍</div>
        <div class="button">골프</div>
        <div class="button">농구</div>
        <!-- Row 4 -->
        <div class="button">탁구</div>
        <div class="button">배구</div>
        <div class="button">서핑</div>
    </div>

    <div id="history" class="history">
        <!-- History content will be injected here -->
    </div>

    <script>
        function showHistory(sport) {
            var historyDiv = document.getElementById('history');
            if (sport === '축구') {
                historyDiv.innerHTML = `
                    <h2>축구의 역사</h2>
                    <p>축구는 고대 중국, 그리스, 로마에서 기원한 공놀이를 현대적으로 재구성한 스포츠입니다. 
                    오늘날의 축구는 19세기 중반 영국에서 시작되었습니다. 1863년 영국에서 최초의 축구 협회가 창설되었고, 
                    현대 축구의 규칙이 제정되었습니다. 이후 축구는 전 세계적으로 인기 있는 스포츠로 성장했습니다.</p>
                `;
            }
            historyDiv.style.display = 'block';
        }
    </script>
</body>
</html>
