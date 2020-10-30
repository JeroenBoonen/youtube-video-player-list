import { Layout } from 'antd'
import SearchBox from '../SearchBox';
import VideoPlayer from '../VideoPlayer';
import 'antd/dist/antd.css';
import style from './style.scss'
const { Content } = Layout;

function App() {
  return (
    <div >
      <Layout className={style.container}>
        <Content>
          <SearchBox />
          <VideoPlayer />
        </Content>
      </Layout>    
    </div>
  );
}

export default App;
