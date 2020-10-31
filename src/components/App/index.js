import { Layout } from 'antd'
import VideoPlayer from '../VideoPlayer'
import 'antd/dist/antd.css';
import style from './style.module.scss'
import { ReactQueryCacheProvider, QueryCache } from 'react-query'

const { Content } = Layout
const queryCache = new QueryCache()

function App() {
  return (
    <div className={style.container}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Layout>
          <Content>
            <VideoPlayer />
          </Content>
        </Layout>    
      </ReactQueryCacheProvider>
    </div>
  );
}

export default App;
