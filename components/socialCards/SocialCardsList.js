import { useState } from 'react';
import SocialCardItem from './SocialCardItem';
import classes from './SocialCardsList.module.css';

function SocialCardsList (items) {
    const itemsArray = items.items.items;

    const [showing, setShowing] =  useState(itemsArray);

    console.log("itemsArray: ", itemsArray);
 
    const twitterArray = itemsArray.filter(items => items.service_name === 'Twitter');
    const instaArray = itemsArray.filter(items => items.service_name === 'Instagram');
    const manualArray = itemsArray.filter(items => items.service_name === 'Manual');
    
    return (
        <div>
            <div className={classes.button_container}>
                <button className={classes.button} onClick={()=>setShowing(itemsArray)}>Show All</button>
                <button className={classes.button} onClick={()=>setShowing(instaArray)}>Instagram</button>             
                <button className={classes.button} onClick={()=>setShowing(manualArray)}>Manual</button>
                <button className={classes.button} onClick={()=>setShowing(twitterArray)}>Twitter</button>
            </div>
             <ul className={classes.container}>
                {showing && showing.map((item) => (
                        <SocialCardItem 
                            key={item.item_id} 
                            id={item.item_id} 
                            serviceName={item.service_name}

                            // MAIN IMAGE 
                            image={item?.item_data?.image}

                            // LINKS 
                            link={item.item_data.link}
                            linkText={item.item_data.link_text}

                            // MANUAL 
                            text={item.item_data.text}

                            // TWITTER
                            // twitterUsername={item.account_data.user_name}
                            twitterUsername={item?.item_data?.user?.username}
                            tweet={item.item_data.tweet}

                            // INSTAGRAM
                            igCaption={item.item_data.caption}

                        />   
                                
                    ))}     
            </ul> 
            <div className={classes.button_container}>
                <butto className={classes.load_more}>Load More</butto>      
            </div>
        </div>
    )
}

export default SocialCardsList;