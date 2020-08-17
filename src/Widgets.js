import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon className = "widgets__searchIcon" />
                <input placeholder = "Search Twitter" type = "text" />
            </div>

            <div className = "widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1294951818267525122"} />
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="imVkohli"
                options={{ height: 400}}
                />

                <TwitterShareButton 
                url = {"https://facebook.com/cleverprogrammer"}
                options = {{ text : "#reactjs is aswsome", via: "cleverqazi"}}
                />
            </div>

        </div>
    )
}

export default Widgets
