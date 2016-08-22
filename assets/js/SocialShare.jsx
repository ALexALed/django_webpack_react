import React, { Component, PropTypes } from 'react';

export default class SocialShare extends Component {

  render(){

    //<a href="https://twitter.com/intent/tweet?text={{name}}&url={{url}}&via={{ twitter_name }}&related=unisport&hashtags=UnisportLife" onclick="event.preventDefault(); return popupsocial(this.href)"><span class="icon-social-twitter-link icon-social-twitter-link-dims"></span> {% trans 'Tweet' %}</a>
    //<a href="https://www.facebook.com/sharer/sharer.php?u={{url}}" onclick="event.preventDefault(); return popupsocial(this.href)"><span class="icon-social-facebook-link icon-social-facebook-link-dims"></span> {% trans 'Share' %}</a>
    //<a href="https://plus.google.com/share?url={{url}}" onclick="event.preventDefault(); return popupsocial(this.href)"><span class="icon-social-googleplus-link icon-social-googleplus-link-dims"></span> {% trans 'Share' %}</a>


    return (<div className="social">
    <div class="socials-share">
        </div>

  </div>)
}

}
