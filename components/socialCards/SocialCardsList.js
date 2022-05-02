import { useEffect, useState } from 'react';
import SocialCardItem from './SocialCardItem';
import classes from './SocialCardsList.module.css';

// MONDAY: USE SET STATE!!!
// on load useEffect - set all to 'shownArray'
// then on button click, set state to each tag!! 


function SocialCardsList (items) {
    const itemsArray = items.items.items;

    const [showing, setShowing] =  useState(itemsArray);

    console.log("itemsArray: ", itemsArray);
 
    const twitterArray = itemsArray.filter(items => items.service_name === 'Twitter');
    const instaArray = itemsArray.filter(items => items.service_name === 'Instagram');
    const manualArray = itemsArray.filter(items => items.service_name === 'Manual');
    
    return (
        <div>
             <button className={classes.button} onClick={()=>setShowing(itemsArray)}>Show All</button>
             <button className={classes.button} onClick={()=>setShowing(instaArray)}>Instagram</button>             
             <button className={classes.button} onClick={()=>setShowing(manualArray)}>Manual</button>
             <button className={classes.button} onClick={()=>setShowing(twitterArray)}>Twitter</button>

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
            <div className={classes.load_more_container}>
                <button className={classes.load_more}>Load More</button>      
            </div>
        </div>
    )
}

export default SocialCardsList;