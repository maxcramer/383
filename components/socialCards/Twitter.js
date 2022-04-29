import { Fragment } from "react";

function Twitter() {
    return (
        <Fragment>
            key={item.item_id} 
            id={item.item_id} 
            title={item.item_name}
            name={item.account_name}
            image={item.item_data.image}
            imageIG={item.item_data.image}
            link={item.item_data.link}
            linkText={item.item_data.link_text}
            text={item.item_data.text}
            username={item.account_data.user_name}
            tweet={item.item_data.tweet}
            serviceSlug={item.service_slug}  
        </Fragment>
    )
}

export default Twitter;