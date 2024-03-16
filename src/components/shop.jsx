import { useDispatch } from "react-redux"
import { cakes, ice, drinks, croissant, puffs } from "/src/features/quantity"
import { useState } from "react"
import { useSelector } from "react-redux"


function Shop(){
    const items1 = useSelector((state) => state.cake.value)
    const [items, setItems] = useState({cakes: 0, ice: 0, drinks: 0, croissant: 0, puffs: 0})
    const dispatch = useDispatch()
    function handleChange(event){
        setItems((old) =>{
            let n = {...old,
            [event.target.name]: parseInt(event.target.value)}
            return n
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        for (const [key, value] of Object.entries(items)) {
            console.log(items.value, items1.key)
            if (value > items1[key]){
                console.log(`Sorry, ${key} Limited stock available.`)
            }
        }
        
        dispatch(cakes(items.cakes))
        dispatch(ice(items.ice))
        dispatch(drinks(items.drinks))
        dispatch(croissant(items.croissant))
        dispatch(puffs(items.puffs))
    }
    //console.log(items)
    return(
        <form className="item-form">
            <h2>Items</h2>
            <label className="item-cakes">
                Cake : <input name="cakes" type="number" onChange={handleChange} />
            </label>
            <label className="item-ice">
                Ice-Creams : <input name="ice" type="number" onChange={handleChange} />
            </label>
            <label className="item-drinks">
                Soft-Drinks : <input name="drinks" type="number" onChange={handleChange} />
            </label>
            <label className="item-croissant">
                Croissants : <input name="croissant" type="number" onChange={handleChange} />
            </label>
            <label className="item-puffs">
                Puffs : <input name="puffs" type="number" onChange={handleChange} />
            </label>


            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Shop