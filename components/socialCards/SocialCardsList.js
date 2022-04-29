import { useEffect, useState } from 'react';
import SocialCardItem from './SocialCardItem';
import classes from './SocialCardsList.module.css';

// MONDAY: USE SET STATE!!!
// on load useEffect - set all to 'shownArray'
// then on button click, set state to each tag!! 


function SocialCardsList (items) {
    console.log("Items", items.items.items)
    const itemsArray = items.items.items;
    console.log("itemsArray: ", itemsArray);
    // function twitterArray (newTwitterArray) {
    //     itemsArray.filter()
    // }
    // const twitterArray = itemsArray.filter(function(item) {
    //     return item.service_name === 'Twitter'
    // })

    // console.log(twitterArray);

    const twitterArray = itemsArray.filter(items => items.service_name === 'Twitter');
    console.log("Twitter Array: ", twitterArray);
    const instaArray = itemsArray.filter(items => items.service_name === 'Instagram');
    console.log("insta Array: ", instaArray);
    const manualArray = itemsArray.filter(items => items.service_name === 'Manual');
    console.log("manual Array: ", manualArray);

    const [showing, setShowing] =  useState([]);


    // itemsArray.filter(service_name === 'Twiter');
    // if slug == twitter {return twitter social card}
    // if slug == instagram {return instagram social card}
    // if slug == manual {return manual social card}
    // define by service_name, NOT slug!!

    // function twitterArray (itemsArray) {
    //     console.log("Array:", itemsArray ); // this console logs the click info and location, why?!

    // }
    return (
        <div>
             <button onClick={()=>setShowing(instaArray)}>Instagram</button>             
             <button onClick={()=>setShowing(manualArray)}>Manual</button>
             <button onClick={()=>setShowing(twitterArray)}>Twitter</button>

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
        </div>
    )
}

export default SocialCardsList;