import { Layout } from 'antd'
import VideoPlayer from '../VideoPlayer'
import 'antd/dist/antd.css';
import style from './style.module.scss'

const { Content } = Layout

function App() {
  return (
    <div className={style.container}>
      <Layout>
        <Content>
          <VideoPlayer />
        </Content>
      </Layout>    
    </div>
  );
}

export default App;
