import { RiDeleteBin6Line } from 'react-icons/ri'

const CartContent = () => {
  const cartProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      size: "M",
      color: "Red",
      quantity: 2,
      image: "https://picsum.photos/200?random=1"
    },
    {
      id: 2,
      name: "Product 2",
      price: 150,
      size: "L",
      color: "Blue",
      quantity: 1,
      image: "https://picsum.photos/200?random=2"
    },
    {
      id: 3,
      name: "Product 3",
      price: 75,
      size: "S",
      color: "Green",
      quantity: 3,
      image: "https://picsum.photos/200?random=3"
    },
    {
      id: 4,
      name: "Product 4",
      price: 200,
      size: "XL",
      color: "Yellow",
      quantity: 1,
      image: "https://picsum.photos/200?random=4"
    }

  ]
  return (
    <div className='px-4'>
      {cartProducts.map((product) => (

        <div key={product.id} className='flex items-start justify-between border-b py-4 gap-4'>
          {/* Left side - Image and Product Details */}
          <div className='flex gap-3 flex-1'>
            <img src={product.image} alt={product.name} className='w-20 h-24 object-cover rounded-md' />

            <div className='flex flex-col justify-between'>
              <div>
                <h3 className='font-medium text-gray-800'>{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Size: {product.size} | Color: {product.color}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button className="border border-gray-300 rounded px-2 py-0.5 text-lg font-medium hover:bg-gray-100">-</button>
                <span className="text-sm font-medium min-w-[20px] text-center">{product.quantity}</span>
                <button className="border border-gray-300 rounded px-2 py-0.5 text-lg font-medium hover:bg-gray-100">+</button>
              </div>
            </div>
          </div>

          {/* Right side - Price and Delete */}
          <div className='flex flex-col items-end justify-between h-24'>
            <p className='font-semibold text-gray-800'>${product.price}</p>
            <button className='hover:bg-red-50 p-1 rounded transition-colors'>
              <RiDeleteBin6Line className='h-5 w-5 text-red-600 cursor-pointer' />
            </button>
          </div>
        </div>
        
      ))}
    </div>
  )
}

export default CartContent