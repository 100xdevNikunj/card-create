export default function ShowCard(props) {
    const { cardInfo } = props || {}; // Ensure props is defined
    const { name, description, social, Interests } = cardInfo || {};

    const isEmpty = !(name || description || (social && (social.linkedin || social.twitter)) || (Interests && Interests.length));

    return (
        <div>{isEmpty ? 
                <div>No card information available</div> 
                : 
            <>
                 <div>Name: {name || ''}</div>
                <div>Description: {description || ''}</div>
                <div>
                    LinkedIn: {social && social.linkedin ? social.linkedin : ''}, Twitter: {social && social.twitter ? social.twitter : ''}
                </div>
                <div>
                    Interests: {Interests && Interests.length ? Interests.map((interest, index) => (
                        <span key={index}>{interest}{index !== Interests.length - 1 ? ', ' : ''}</span>
                    )) : ''}
                </div>
            </>
        }
        </div>
    );
}
