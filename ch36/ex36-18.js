function printTodo(todo) {
    console.log(`할일 ${todo.content}은 ${todo.complete ? '완료' : '비완료'} 상태입니다. `)
}

printTodo({id: 1, content: 'HTML', complete: true});