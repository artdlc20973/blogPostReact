import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Art" timeAgo="Today at 4:45PM" content="Nice blog post" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Al" timeAgo="Yesterday at 10:00AM" content="I like the subject" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Ray" timeAgo="Today at 3:00AM" content="I like the writing" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))



// <img alt="avatar" src={faker.image.image()} />
// import faker from '@faker-js/faker';
// npm install @faker-js/faker



