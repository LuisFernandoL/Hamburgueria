import { ItensModalCss } from './ItensModal'
import {ImBin} from 'react-icons/im'

export const ItensModal = ({carts, removeItem, }) => {

    return(
        <>
            <ul>
            {carts.map((item) =>
            <ItensModalCss key={item.id}>
                <div className='CartBody'>
                    <img src={item.img} alt={` Imagem do ${item.name}`} />
                    <p className='nameItemList'>{item.name}</p>
                </div> 
                    <button onClick={() => removeItem(item.id)}><ImBin /></button>
            </ItensModalCss> )}
            </ul>
        </>
    )
}