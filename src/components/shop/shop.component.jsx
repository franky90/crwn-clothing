import React from 'react'
import SHOP_DATA from './shop.data';
import CollectionPreview from "../../components/preview-collection/collection-preview"


class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
       collections: SHOP_DATA
    }
    }
    render(){
        const {collections} = this.state;
        return(
        <div className="shop-page">
            {collections.map(({id, ...otherCollectionprops}) => (
                <CollectionPreview key={id} {...otherCollectionprops} />
            ))}
             
        </div>
        )
    }
}

export default ShopPage;