// import { useParams } from 'react-router-dom'
// import { useGetProductByIdQuery } from '../services/fakeStoreApi'

// function ProductDetail() {
//   const { id } = useParams()
//   const { data, isLoading, isError } = useGetProductByIdQuery(id)

//   if (isLoading) return <h1 className="text-3xl text-center mt-20">Loading...</h1>
//   if (isError) return <h1 className="text-3xl text-red-600 text-center mt-20">Product not found.</h1>

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0 p-8 flex items-center justify-center bg-gray-50">
//               <img
//               width={200}
//                 height={200}
//                 src={data.image}
//                 alt={data.title}
//                 className="h-80 w-80 object-contain"
//               />
//             </div>
//             <div className="p-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h2>
//               <p className="text-gray-600 mb-6">{data.description}</p>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <span className="text-xl font-bold text-green-700">${data.price}</span>
//                   <p className="text-sm text-gray-500 mt-1">
//                     Category: <span className="text-blue-600 capitalize">{data.category}</span>
//                   </p>
//                 </div>
//                 <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetail

import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../services/fakeStoreApi'
import '../styles.css'

function ProductDetail() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetProductByIdQuery(id)

  if (isLoading) return <h1 className="heading">Loading...</h1>
  if (isError) return <h1 className="heading error">Product not found.</h1>

  return (
    <div className="detail-container">
      <div className="detail-card">
        <img
          src={data.image}
          alt={data.title}
          className="detail-image"
        />
        <div className="detail-content">
          <h2 className="detail-title">{data.title}</h2>
          <p className="detail-description">{data.description}</p>
          <div className="detail-price">${data.price}</div>
          <p className="detail-category">
            Category: <span>{data.category}</span>
          </p>
          <button className="btn-add-to-cart" onClick={() => alert('Added to cart!')}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail