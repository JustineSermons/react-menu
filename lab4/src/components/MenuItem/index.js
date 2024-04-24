export default function MenuItem({itemId, itemPrice, itemName, itemDescription}) {
    let menuId = `menu-item-${itemId}`
    return (
      <div className="menu-item" id={menuId}>
      <span>${itemPrice}</span>
      <h2>{itemName}</h2>
      <p>
       {itemDescription}
      </p>
      <button>Add to Cart</button>
    </div>
    )
}