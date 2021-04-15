import React from 'react';
import { List, Input } from 'antd';
import { produce } from 'immer';

// class TodoItem extends React.Component {
//     render() {
//         const { todo } = this.props;
//         return <li>{todo}</li>;
//     }
// }

const TodoItem = ({ todo }) => <li>{todo}</li>;
// function TodoItem({ todo }) {
//     return <li>{todo}</li>;
// }

class TodoList extends React.Component {
    state = {
        todoList: ['파이썬 익히기', '장고 익히기'],
        current: '',
    };
    onChange = (e) => {
        const { value } = e.target;
        this.setState({
            current: value,
        });
    };
    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.setState(
                produce((draft) => {
                    const current = draft.current.trim();
                    if (current.length > 0) {
                        draft.current = '';
                        draft.todoList.push(current);
                    }
                }),
            );
            // const { todoList, current } = this.state;
            // if (current.trim().length > 0) {
            //     this.setState({
            //         current: '',
            //         todoList: [...todoList, current.trim()],
            //     });
            // }
        }
    };
    render() {
        return (
            <div style={{ width: '300px', margin: '30px auto' }}>
                <List
                    header={'Todo List'}
                    dataSource={this.state.todoList}
                    bordered={true}
                    renderItem={(todo) => <List.Item>{todo}</List.Item>}
                    style={{
                        marginBottom: '4px',
                    }}
                ></List>
                <Input
                    type="text"
                    value={this.state.current}
                    placeholder="할일을 입력 해 주세요"
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                ></Input>
                {/* <ul>
                    {this.state.todoList.map((todo, index) => (
                        <TodoItem key={index} todo={todo}></TodoItem>
                    ))}
                </ul>
                <input
                    type="text"
                    placeholder="할일을 입력해주세요"
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    value={this.state.current}
                ></input>
                <button>Submit</button>
                <hr />
                {JSON.stringify(this.state)} */}
            </div>
        );
    }
}

export default TodoList;
