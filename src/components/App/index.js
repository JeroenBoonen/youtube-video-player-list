import { useEffect } from 'react';
import { Layout } from 'antd'
import SearchBox from '../SearchBox';
import VideoPlayer from '../VideoPlayer';
import 'antd/dist/antd.css';
import style from './style.module.scss'
import { serviceGetVideoList } from '../../services/serviceGetVideoList'

const { Content } = Layout;

function App() {
  // useEffect(() => {
  //   serviceGetVideoList().then(res => {
  //     console.log(res);
  //   });
  // }, [])

  return (
    <div className={style.container}>
      <Layout>
        <Content>
          <SearchBox />
          <VideoPlayer />
        </Content>
      </Layout>    
    </div>
  );
}

export default App;
