import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
import { products } from '../../Products'

export default function Home() {
    return (
        <div className='py-20'>
            <Navbar/>
            <div className='flex flex-wrap gap-4 mx-20 justify-center'>
                {
                    products.map((product) => (
                        <ProductCard key={product.name} {...product}/>
                    ))
                }
            </div>
        </div>
    )
}