import Image from "next/image";
import classes from './SocialCardItem.module.css';

function SocialCardItem (item) {
    console.log("item in SocialCard: ", item);

    // var twitterUsername = item.twitterUsername.split(' ');

    function hasImage () {

        // new thought!!! 
        // COULD YOU have a different return and a different card returning depending
        // on which serviceSlug it has?! rather than trying to render all together!!
        // or should i set up loads of ternerarry statements? could be alot longer and harder to manage...



        console.log("Item inside hasImage: ", item)
        // if(item.serviceSlug === "Twitter") {
        //     img.src = null
        // } else {
        //     item.image ? item.image : `https://logovectordl.com/wp-content/uploads/2020/12/bullring-and-grand-central-logo-vector.png`
        // }
        // USE service_name, not slug!!
    }
    return (
        <li className={classes.item}>
            <div>
                {/* MAIN IMAGE */}
                <img className={item.serviceSlug === "twitter" ? classes.none : classes.image } src={item.serviceSlug === "twitter" ? '' : `https://logovectordl.com/wp-content/uploads/2020/12/bullring-and-grand-central-logo-vector.png`} />
                
                {/* MANUAL */}
                <p>{item.text}</p>
               
                {/* INSTAGRAM */}
                <p>{item.igCaption}</p>

                {/* TWITTER */}
                <p>{item.twitterUsername}</p>
                <p>{item.tweet}</p>

                {/* LINK */}
                <p>{item.linkText}</p>
                <p>{item.link}</p>

                {/* FOR DEVELOPMENT */}
                <p>{item.id}</p>
            </div>
        </li>
    )
    
}

export default SocialCardItem;