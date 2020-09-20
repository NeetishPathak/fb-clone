import React from 'react';
import './Widgets.css';
function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title="Facebook Page"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&show_text=true&width=340&appId=224543497620370&height=400"
        width="350px"
        height="310px"
        style={{border: 'none', overflow: 'scroll'}}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
      <iframe
        title="Super Video"
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=false&width=734&appId=224543497620370&height=500"
        width="350px"
        height="200px"
        style={{border: 'none', overflow: 'hidden'}}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen="true"
      ></iframe>
      <iframe
        title="Keanu Reaves"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fneetish.pathak%2Fposts%2F2246561962034868&show_text=true&width=552&appId=224543497620370&height=400"
        // src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fneetish.pathak%2Fposts%2F2188010547890010&show_text=true&width=340&appId=224543497620370&height=200"
        width="350px"
        height="500px"
        style={{border: 'none', overflow: 'hidden'}}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
