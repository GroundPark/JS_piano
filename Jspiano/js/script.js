 function playNote(e){
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	// 지정해준 data-key와 입력한 키의 코드값 같다면 넣어줌
		audio.play();
		// 키보드를 입력했으므로 오디오 재생
 }
 
function removeNote(e){
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	// 지정해준 data-key와 입력한 키의 코드값 같다면 넣어줌
		audio.pause();
        audio.load();
		// 키보드를 뗏으므로 오디오는 정지되고, 초기화가 되야함		
 }
 
function paintColor(e) {  
	const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
	// 지정해준 data-key와 입력한 키의 코드값 같다면 넣어줌
	key.classList.add('playing');
	// 해당 키에 playing 클래스(건반 누를때 색 설정) 넣음 	 
  }
 
function removeColor(e) {
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	// 지정해준 data-key와 입력한 키의 코드값 같다면 넣어줌
	key.classList.remove('playing');
	// 해당 키에 playing 클래스(건반 누를때 색 설정) 삭제 
  }
 
document.addEventListener('keydown', playNote); 
document.addEventListener('keydown', paintColor); 
//키보드 누르는 이벤트 리스너: playNote, paintColor 함수 실행
	
document.addEventListener('keyup', removeColor); 
document.addEventListener('keyup', removeNote); 
//키보드 떼는 이벤트 리스너 : removeColor, removeNote 함수 실행




	// 건반 딜레이? X
	//setTimeout(function(){audio.pause();}, 200);
	//setTimeout(function(){audio.load();}, 200);