import SocialCard from './SocialCard';

function SocialCardsList (props) {
    return (
        <div>
            <ul>
                {props.socialCards.map((socialCard) => {
                    <SocialCard 
                        name={socialCard.name}
                    />
                })}
                
            </ul>
        </div>
    )
}

export default SocialCardsList;