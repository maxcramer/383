import classes from './SocialCardItem.module.css';

function SocialCardItem (item) {
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
                <a href={item.link} className={classes.link} target="_blank" rel="noreferrer">{item.linkText}</a>

            </div>
        </li>
    )
    
}

export default SocialCardItem;