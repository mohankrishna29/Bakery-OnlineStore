import { useSelector } from "react-redux"

function Inventory(){
    const items = useSelector((state) => state.cake.value)
    console.log(items)
    return(
        <div className="inventory">
            <h3>Inventory</h3>
            <p>Cakes: {items.cakes}</p>
            <p>Ice-Creams: {items.ice} </p>
            <p>Soft-drinks: {items.drinks}</p>
            <p>Croissants: {items.croissant}</p>
            <p>Puffs: {items.puffs}</p>
        </div>
    )
}

export default Inventory