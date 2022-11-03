
import {useQuery} from '@apollo/client'
import {TEST_GET_PUB} from './graphql/query/getPost'
import ReactAudioPlayer from 'react-audio-player'
function App() {
  
  const {data, loading, error} = useQuery(TEST_GET_PUB)
  console.log("data", data)
  return (
    <div className="App">
             <div>
              <p>Album name : {data?.publication?.metadata?.name}</p>
            <ReactAudioPlayer  
              src={data?.publication?.metadata?.media[0]?.original?.url}
              controls
             />
            </div>
    </div>
  );
}

export default App;
