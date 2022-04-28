import SocialCardItem from './SocialCardItem';

function SocialCardsList (items) {
    console.log("Items", items)
    return (
        <div>
            <ul>
                {items.map((item) => {
                    <SocialCardItem 
                        key={item.item_id}
                        name={item.account_name}
                    />
                })}
                
            </ul>
        </div>
    )
}

export default SocialCardsList;