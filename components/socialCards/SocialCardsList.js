import SocialCardItem from './SocialCardItem';

function SocialCardsList (data) {
    console.log("Items", data)
    return (
        <div>
            <ul>
                {Object.keys(data).map((item) => {
                    <div>
 <h2>TESTING</h2>
                        <SocialCardItem 
                            key={item.item_id} 
                            id={item.item_id} 
                            name={item.item_name}
                        />   
                    </div>
                                
                })}
                
                </ul>
        </div>
    )
}

export default SocialCardsList;