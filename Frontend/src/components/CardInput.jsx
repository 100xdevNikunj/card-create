import React, { useState } from 'react';
import ShowCard from './ShowCard';

export default function CardInput() {
    const [cardInfo, setCardInfo] = useState({
        name: '',
        description: '',
        social: { linkedin: '', twitter: '' },
        Interests: []
    });
    const [showCard, setShowCard] = useState(false); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'linkedin' || name === 'twitter') {
            setCardInfo((prevState) => ({
                ...prevState,
                social: {
                    ...prevState.social,
                    [name.toLowerCase()]: value
                }
            }));
        } else if (name === 'interest') {
            setCardInfo((prevState) => ({
                ...prevState,
                Interests: value.split(',').map((interest) => interest.trim())
            }));
        } else {
            setCardInfo((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const createCard = () => {
        console.log('Card Information:', cardInfo);
        setShowCard(true); 
    };

    return (
        <>
            <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={cardInfo.name}
                onChange={handleInputChange}
            />{' '}
            <br />
            <input
                type="text"
                placeholder="Description"
                name="description"
                id="description"
                value={cardInfo.description}
                onChange={handleInputChange}
            />{' '}
            <br />
            <input
                type="text"
                placeholder="LinkedIn"
                name="linkedin"
                id="linkedin"
                value={cardInfo.social.linkedin}
                onChange={handleInputChange}
            />
            <br />
            <input
                type="text"
                placeholder="Twitter"
                name="twitter"
                id="twitter"
                value={cardInfo.social.twitter}
                onChange={handleInputChange}
            />
            <br />
            <input
                type="text"
                placeholder="Interest (comma-separated)"
                name="interest"
                id="interest"
                value={cardInfo.Interests.join(', ')}
                onChange={handleInputChange}
            />
            <br />
            <button onClick={createCard}>CREATE CARD</button>
            {showCard && <ShowCard cardInfo={cardInfo} />}
        </>
    );
}
