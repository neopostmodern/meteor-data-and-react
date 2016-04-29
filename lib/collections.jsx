Posts = new Meteor.Collection('posts', {
  transform: (post) => {
    post.fieldAddedByTransform = "Transform works!";
    return post;
  }
});
if(Meteor.isServer) {
  Posts.remove({});
  Posts.insert({
    _id: 'one', title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!'
  });
  Posts.insert({_id: 'two', title: 'MeteorHacks + Kadira => Kadira++', content: 'Something new soon.'});
  Posts.insert({_id: 'three', title: 'My Secret Post', category: 'private'});
}