import Image from "next/image";
import classes from './SocialCardItem.module.css';

function SocialCardItem (item) {
    console.log("item in SocialCard: ", item);
    function hasImage () {

        // new thought!!! 
        // COULD YOU have a different return and a different card returning depending
        // on which serviceSlug it has?! rather than trying to render all together!!
        // or should i set up loads of ternerarry statements? could be alot longer and harder to manage...



        console.log("Item inside hasImage: ", item)
        if(item.serviceSlug === "Twitter") {
            img.src = null
        } else {
            item.image ? item.image : `https://logovectordl.com/wp-content/uploads/2020/12/bullring-and-grand-central-logo-vector.png`
        }
    }
    return (
        <li className={classes.item}>
            <div>
                <h2>{item.title}</h2>
                <img className={item.serviceSlug === "twitter" ? classes.none : classes.image } src={item.serviceSlug === "twitter" ? '' : `https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80`} />
                <p>{item.name}</p>
                <p>{item.link}</p>
                <p>{item.linkText}</p>
                <p>{item.text}</p>
                <p>{item.id}</p>
                <p>{item.username}</p>
                <p>{item.tweet}</p>
            </div>
        </li>
    )
    
}

export default SocialCardItem;