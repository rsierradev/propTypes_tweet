import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";

function Tweet(props) {
  const tweet = props.tweet;
  return (
    <div className="tweet">
      <Avatar imgURL={tweet.imgURL} />
      <div className="content">
        <Author author={tweet.author} />
        <Time tweetTime={tweet.tweetTime} />
        <Message msg={tweet.msg} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton retweets={tweet.retweets} />
          <LikeButton likes={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};

function Message(props) {
  return <div className="message">{props.msg}</div>;
}

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

function Author(props) {
  return (
    <span className="author">
      <span className="name">{props.author.name}</span>
      <span className="handle">{props.author.handler}</span>
    </span>
  );
}
Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handler: PropTypes.string.isRequired,
  }).isRequired,
};

function Avatar(props) {
  return <img src={props.imgURL} className="avatar" alt="avatar" />;
}
Avatar.propTypes = {
  imgURL: PropTypes.string.isRequired,
};

const Time = (props) => <span className="time">{props.tweetTime}</span>;
Time.propTypes = {
  tweetTime: PropTypes.string.isRequired,
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = (props) => (
  <span>
    <i className="fa fa-retweet retweet-button" /> {props.retweets}
  </span>
);
RetweetButton.propTypes = {
  retweets: PropTypes.number.isRequired,
};

const LikeButton = (props) => (
  <span>
    <i className="fa fa-heart like-button" /> {props.likes}
  </span>
);
LikeButton.propTypes = {
  likes: PropTypes.number.isRequired,
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);
const tweet = {
  msg: "This is less than 140 characters.",
  author: { name: "Abdulla", handler: "@abdullajs" },
  imgURL: "https://www.gravatar.com/avatar/nothing",
  tweetTime: "3h ago",
  likes: 32121,
  retweets: 411,
};
ReactDOM.render(<Tweet tweet={tweet} />, document.querySelector("#root"));
