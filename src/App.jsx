// import { useGetProductsQuery } from './services/fakeStoreApi'
// import { Link } from 'react-router-dom'

// function App() {
//   const { data, isLoading, isError } = useGetProductsQuery()

//   if (isLoading) return <h1 className="text-3xl font-bold text-center mt-20">Loading...</h1>
//   if (isError) return <h1 className="text-3xl text-red-600 text-center mt-20">Something went wrong.</h1>

//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-6">
//       <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Our Products</h1>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data?.map((product) => (
//           <Link to={`/id/${product.id}`} key={product.id} className="h-full">
//             <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col items-center text-center hover:shadow-md transition">
//               <img
//                 width={200}
//                 height={200}
//                 src={product.image}
//                 alt={product.title}
//                 className="h-52 w-52 object-contain mb-4"
//               />
//               <h2 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{product.title}</h2>
//               <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
//               <div className="text-green-700 font-bold text-lg mt-auto">${product.price}</div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App


import { useGetProductsQuery } from './services/fakeStoreApi'
import { Link } from 'react-router-dom'
import './styles.css'

function App() {
  const { data, isLoading, isError } = useGetProductsQuery()

  if (isLoading) return <h1 className="heading">Loading...</h1>
  if (isError) return <h1 className="heading error">Something went wrong.</h1>

  return (
    <div className="app-container ">
      <h1 className="page-title">MY ECOMMERCE</h1>
      <div className="product-grid">
        {data?.map((product) => (
          <Link to={`/id/${product.id}`} key={product.id} className="product-link">
            <div className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-desc">{product.description}</p>
              <div className="product-price">${product.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default App
  