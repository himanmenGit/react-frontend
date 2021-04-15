import React, { useCallback, useEffect, useState } from 'react';

class App1 extends React.Component {
    state = {
        value1: 0,
        value2: 0,
    };
    onClick = () => {
        this.setState({
            value1: this.state.value1 + 1,
        });
    };
    render() {
        const { value1 } = this.state;
        return (
            <div>
                Hello World<hr></hr>
                {value1}
                <button onClick={this.onClick} />
            </div>
        );
    }
}

function PostDetailComponent({ post }) {
    const { title, content } = post;
    return (
        <div>
            <h1>{title}</h1>
            {content}
        </div>
    );
}

function Clock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return <div>현재 시각은 {date.toISOString().slice(11, 19)} 입니다.</div>;
}

function PostDetail({ postId }) {
    const [post, setPost] = useState();

    useEffect(() => {
        console.log('changed postId : ', postId);
        setPost({
            title: '포스팅 내용',
            content: `포스팅 내용 ... :  ${postId}`,
        });
    }, [postId]);

    return (
        <div>
            <h1>post#{postId}</h1>
            {!post && '로딩 중...'}
            {post && <PostDetailComponent post={post}></PostDetailComponent>}
        </div>
    );
}

function App4() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value, setValue] = useState({ value1: 0, value2: 0 });
    const [postId, setpostId] = useState(0);

    useEffect(() => {
        console.log('mount1');
    }, []); // mount시에
    useEffect(() => {
        console.log('mount2');
    }, []); // mount시에
    useEffect(() => {
        console.log('mount3');
    }, []); // mount시에
    useEffect(() => {
        console.log('changed value : ', value);
    }, [value]); // value변경 시에

    const onClick = useCallback(() => {
        setValue({ ...value, value1: value.value1 + 1 });
        // setValue((prevState) => ({
        //     ...prevState,
        //     value1: prevState.value1 + 1,
        // }));
    }, [value]);

    return (
        <div>
            Hello World
            <Clock></Clock>
            <hr />
            {JSON.stringify(value)}
            <button onClick={onClick}>Click</button>
            <hr />
            <button onClick={() => setpostId(100)}>100번 글보기</button>
            <PostDetail postId={postId}></PostDetail>
            <hr />
        </div>
    );
}

export default App4;
