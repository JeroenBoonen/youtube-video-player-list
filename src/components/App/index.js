import { useEffect } from 'react';
import { Layout } from 'antd'
import SearchBox from '../SearchBox';
import VideoPlayer from '../VideoPlayer';
import 'antd/dist/antd.css';
import style from './style.scss'
import { serviceGetVideoList } from '../../services/serviceGetVideoList'

const { Content } = Layout;

function App() {
  useEffect(() => {
    serviceGetVideoList().then(res => {
      console.log(res);
    });
  }, [])

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
