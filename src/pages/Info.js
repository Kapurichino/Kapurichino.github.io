import styled from 'styled-components';
import app from '../App.module.css';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# 소개
## 블로그에 대하여
이 블로그는 여러 블로그와 달리 jekyll이 아닌 순수 React로 만들어진 블로그입니다.   
진행하고 있는 프로젝트들을 모아놓은 곳으로,   
프로젝트를 들어가셔서 구경해보시는 것도 좋을 것 같습니다.   
추가적으로는, 본인이 주력으로 사용하고 있는 프로그래밍 언어라든지 프레임 워크등에 대한 정보와   
이 사람이 웹 개발을 할 때,   
어느부분을 가장 신경을 쓰면서 개발을 하는지에 대한 정보도 있으니, 참고해주세요.
`

function Info(){
    return(
        <div className={app.whiteBox}>
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
    )
}

export default Info