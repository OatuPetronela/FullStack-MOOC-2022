
  
  let _ = require('lodash');

  const  dummy = () => {
      return 1
  }

  const totalLikes =(blogs)=>{
    return blogs.reduce((sum, item) => sum + item.likes, 0);
  }

  const favoriteBlog =(blogs)=>{

    const max = blogs.reduce((prev, current)=>
    prev.likes >current.likes ? prev : current
    )
    const favorite = {
      title : max.title,
      author: max.author,
      likes: max.likes 
    } 
    return favorite;
  }

  const mostBlogs =(blogs)=>{
    let authorBlogs= _.countBy(blogs, "author");

    let maxBlogs =_.max(_.values(authorBlogs));

    let authors= _.findKey(authorBlogs, (author)=>{
      return author===maxBlogs;
    })
    return {author: authors, blogs: maxBlogs}
 
  }

  const mostLikes= (blogs)=>{
    let maxLikes= _.maxBy(blogs, "likes")

    return{author: maxLikes.author, likes: maxLikes.likes}
  }
  
  module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
  }

