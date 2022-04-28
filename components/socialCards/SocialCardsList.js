import SocialCardItem from './SocialCardItem';

function SocialCardsList (items) {
    console.log("Items", items)
    return (
        <div>
             <h2>TESTING Outside of .map</h2>
                {Object.values(items).map((item) => {
                    <ul>
                        <h2>TESTING INside of .map</h2>
                        <SocialCardItem 
                            key={item.item_id} 
                            id={item.item_id} 
                            name={item.item_name}
                        />   
                    </ul>
                                
                })}                
        </div>
    )
}

export default SocialCardsList;