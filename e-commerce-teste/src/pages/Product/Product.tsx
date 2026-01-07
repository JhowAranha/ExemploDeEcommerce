import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../Products'
import type { Product } from '../../interfaces'
import Navbar from '../../components/Navbar'
import { Star } from 'lucide-react'
import { convertValue } from '../../utils'

export default function ProductPage() {
    const [product, setProduct] = useState<Product | null>(null)
    const { id } = useParams()
    
    useEffect(() => {
        const found = products.find((p) => p.id == id)
        if (found) {
            setProduct(found)
        }
    }, [id])

    return (
        <div className='py-20'>
            <Navbar/>
            {product && (
            <div className='mx-20 flex gap-4 bg-brand-surface rounded-2xl p-4 shadow-2xl shadow-black/60'>
                <div className="relative w-100 h-100 bg-gray-100 overflow-hidden rounded-2xl">
                    <img 
                        src={product.img_url}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-brand-muted text-brand-text text-xs font-bold px-2 py-1 rounded-full uppercase">
                        Oferta
                    </span>
                </div>

                <div className='flex flex-col'>
                    <div>
                        <h1 className='text-brand-text text-2xl'>{product.name}</h1>
                        <span className='text-brand-text'>{product.collection}</span>
                        
                        <h2 className='text-brand-text mt-2'>{product.description}</h2>
                    </div>
                    <div className='mt-auto p-2 flex flex-col'>
                        <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={`${i <= product.stars_average - 1 ? 'fill-brand-accent' : 'fill-brand-bg'} text-brand-accent`} />
                            ))}
                            <span className="text-brand-muted text-xs ml-1">({product.reviews})</span>
                        </div>

                        <div>
                            <span className="text-brand-muted text-xs line-through block">{convertValue(product.old_price)}</span>
                            <span className="text-brand-primary font-bold text-xl">{convertValue(product.current_price)}</span>
                        </div>

                        <button className='p-2 bg-brand-primary text-brand-text rounded hover:cursor-pointer hover:bg-brand-primary/60 mt-2 w-30'>Comprar</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
    
}