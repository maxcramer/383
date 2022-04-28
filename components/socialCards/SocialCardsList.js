import SocialCardItem from './SocialCardItem';
import classes from './SocialCardsList.module.css';

function SocialCardsList (items) {
    console.log("Items", items.items.items)
    return (
        <div>
             <h2>TESTING Outside of .map</h2>
             <ul className={classes.container}>
                {items.items.items.map((item) => (
                        <SocialCardItem 
                            key={item.item_id} 
                            id={item.item_id} 
                            title={item.item_name}
                            name={item.account_name}
                            image={item.item_data.image}
                            imageIG={item.item_data.image}
                            link={item.item_data.link}
                            linkText={item.item_data.link_text}
                            text={item.item_data.text}
                            username={item.account_data.user_name}
                            tweet={item.item_data.tweet}
                            serviceSlug={item.service_slug}


                        />   
                                
                    ))}         
            </ul>       
        </div>
    )
}

export default SocialCardsList;