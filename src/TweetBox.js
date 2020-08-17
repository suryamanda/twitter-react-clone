import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName : 'Surya Manda',
            userName : 'suryamss09',
            text : tweetMessage,
            image : tweetImage,
            avatar : "https://media-exp1.licdn.com/dms/image/C5103AQEvHcXOTxOZNw/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=oMrWuOYWxywieiScSTMQydASbXl0KJrs2QiyKdvUlZQ",
            verified : true
        });
    }

    return (
        <div className = "tweetBox">
        <form>
        <div className = "tweetBox__input">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQEvHcXOTxOZNw/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=oMrWuOYWxywieiScSTMQydASbXl0KJrs2QiyKdvUlZQ"/>
       <input 
       onChange = {e => setTweetMessage(e.target.value)}
       value = {tweetMessage} placeholder = "what's happening?" type="text" />
        </div>
        <input 
         onChange = {e => setTweetImage(e.target.value)}
         value = {tweetImage}
        className="tweetBox__inputImage" placeholder = "Optional : Enter image URL" type = "text" />

        <Button type = "submit" onClick = {sendTweet} className = "tweetBox__tweetButton">Tweet</Button>
        </form>
        </div>
    )
}

export default TweetBox
