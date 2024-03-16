import Shop from "./components/shop"
import Inventory from "./components/inventory"


function App() {

  return (
    <div className="main-page">
      <div className="head">
        <h1>BOSS BAKERS</h1>
        <h5>Freshly baked all day. Every day!</h5>
      </div>
      <div className="mid">
        <Shop />
        <Inventory />
      </div>
    </div>
  )
}

export default App
