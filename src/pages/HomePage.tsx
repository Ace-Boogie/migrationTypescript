import Footer from '../components/layout/Footer'
import ShoppingList from '../components/ShoppingList'
import '../styles/Layout.css'
import type {CartItem, Plant} from '../types'

type HomePageProps = {
	cart:CartItem[]
	addToCart: (item: Pick<Plant, 'name' | 'price'>) => void

}

function HomePage({ cart, addToCart }:HomePageProps) {
	return (
		<div>
			<div className='lmj-layout-inner'>
				<ShoppingList cart={cart} addToCart={addToCart} />
			</div>
			<Footer />
		</div>
	)
}

export default HomePage 