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
            userName : 'suryamanda',
            text : tweetMessage,
            image : tweetImage,
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTXewH0RzKjdCxvogjdCN5hPLko2WR7jErSg&usqp=CAU",
            verified : true
        });
    }

    return (
        <div className = "tweetBox">
        <form>
        <div className = "tweetBox__input">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTXewH0RzKjdCxvogjdCN5hPLko2WR7jErSg&usqp=CAU"/>
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
