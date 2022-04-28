import Image from "next/image";
import classes from './SocialCardItem.module.css';

function SocialCardItem (item) {
    console.log("item in SocialCard: ", item);
    function hasImage () {

        // new thought!!! 
        // COULD YOU have a different return and a different card returning depending
        // on which serviceSlug it has?! rather than trying to render all together!!



        console.log("Item inside hasImage: ", item)
        if(item.serviceSlug === "Twitter") {
            img.src = null
        } else {
            item.image ? item.image : `https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80`
        }
    }
    return (
        <li className={classes.item}>
            <div>
                <h2>{item.title}</h2>
                <img src={hasImage()} width={500} height={500} />
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