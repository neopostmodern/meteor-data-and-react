import React from 'react';

const PostList = ({posts}) => (
  <div>
    This is the post list
    <ul>
      {posts.map(({_id, title, fieldAddedByTransform}) => (
        <li key={_id}>
          <a href={FlowRouter.path('post', {_id})}>{title}</a>
          {fieldAddedByTransform}
          {fieldAddedByTransform.length}
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
