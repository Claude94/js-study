//d일정 테이터가 듫어 있는 배열 선언
const todos = [
    {
        id: 1,//아이디
        text:'할일 1',//내용
        done: true//체크
    },
    {
        id: 2,//아이디
        text:'할일 2',//내용
        done: false//체크
    },
    {
        id: 3,//아이디
        text:'할일 3',//내용
        done: false//체크
    }
];
//화면에 렌더링 할 .todo-list-item 노드를 생성하는 함수 정의
function makeNewToDoNode(newToDo) {
    const $li = document.createElement('li');
    const $label = document.createElement('label');
    const $divMod = document.createElement('divMod');
    const $divRem = document.createElement('divRem');

    //label 태그 작업
    $label.classList.add('checkbox');
    $label.innerHTML = ` <input type="checkbox">
    <span class="text">${newToDo.text}</span>`;
    // console.log($label);
    //수정div 태그 작업
    $divMod.classList.add('modify');
    $divMod.innerHTML = `<span class="lnr lnr-undo"></span>`;
    //제거div 태그 작업
    $divRem.classList.add('remove');
    $divMod.innerHTML = `<span class="lnr lnr-cross-circle"></span>`;
    //li 태그 작업
    $li.dataset.id = newToDo.id;
    $li.classList.add = ('todo-list-item');
    for (let $element of [$label, $divMod, $divRem]) {
        $li.appendChild($element);
    }
    // console.log($li);

    document.querySelector('.todo-list').appendChild($li);
}
//추가될 할 일 객체의 id를 생성해주는 함수 정의
function makeNewId() {

    if(todos.length > 0) {
        // console.log((todos[lastIndex].id + 1));
        return (todos[todos.length - 1].id + 1);
    } else {
        return 1;
    }
}

//할 일 추가 처리 함수 정의
function insertToDoDate() {
    //1. todos 배열에 객체를 생성 한 후 push
    const $todoText = document.getElementById('todo-text');
    
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    todos.push(newToDo);
    // console.log(todos);

    //2. 추가된 데이터를 화면에 렌더링
    makeNewToDoNode(newToDo);

    //입력 완료 후 자존 문자열 제거
    $todoText.value = '';
}

//메인 즉시 실행 함수
(function() {

    //할일 추가 이벤트
    const $addbtn = document.getElementById('add');
    $addbtn.addEventListener('click', e => {
        // submit은 서버로 데이터를 전송하고 새로 고침을 하기때문에 
        // 기본 기능을 막아서 사용한다
        e.preventDefault();
        // console.log('추가버튼 클릭');
        insertToDoDate();
    });

} ());