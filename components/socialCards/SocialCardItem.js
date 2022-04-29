// import Image from "next/image";
// import Link from "next/link";
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
                <img className={item.serviceName === "Twitter" ? classes.none : classes.image } src={item.serviceName === item.image ? '' : `https://logovectordl.com/wp-content/uploads/2020/12/bullring-and-grand-central-logo-vector.png`} />
                
                {/* MANUAL */}
                <p className={classes.manualText}>{item.text}</p>
               
                {/* TWITTER */}
                <p className={item.serviceName === 'Twitter' ? classes.twitterUsername : classes.instaUsername}>{item.twitterUsername}</p>
                <p className={classes.twitterText}>{item.tweet}</p>

                {/* INSTAGRAM */}
                <p className={classes.instaText}>{item.igCaption}</p>

                {/* LINK */}
                <a href={item.link} className={classes.link} target="_blank">{item.linkText}</a>

                {/* FOR DEVELOPMENT */}
                {/* <p>{item.id}</p> */}
            </div>
        </li>
    )
    
}

export default SocialCardItem;