import SocialCardItem from './SocialCardItem';
import classes from './SocialCardsList.module.css';

function SocialCardsList (items) {
    console.log("Items", items.items.items)
    // if slug == twitter {return twitter social card}
    // if slug == instagram {return instagram social card}
    // if slug == manual {return manual social card}
    // define by service_name, NOT slug!!
    return (
        <div>
             <h2>TESTING Outside of .map</h2>
             <ul className={classes.container}>
                {items.items.items.map((item) => (
                        <SocialCardItem 
                            key={item.item_id} 
                            id={item.item_id} 
                            serviceSlug={item.service_slug}

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