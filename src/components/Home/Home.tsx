import { propData} from "../../utils/model"
import HeroPage from "./HeroPage"
import Newletter from "./Newletter"
import StockList from "./StockList"


const Home = ({data}:propData) => {
  return (
    <div>
      <HeroPage/>
      <StockList data={data}/>
      <Newletter/>
    </div>
  )
}

export default Home