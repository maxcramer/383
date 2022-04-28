import Image from "next/image";
import classes from './SocialCardItem.module.css';

function SocialCardItem (item) {
    console.log("item in SocialCard: ", item);
    return (
        <li className={classes.item}>
            <div>
                <h2>{item.title}</h2>
                {/* <Image src={item.image} alt={item.linkText} width={500} height={500} /> */}
                <p>{item.name}</p>
                <p>{item.link}</p>
                <p>{item.linkText}</p>
                <p>{item.text}</p>



            </div>
        </li>
    )
    
}

export default SocialCardItem;