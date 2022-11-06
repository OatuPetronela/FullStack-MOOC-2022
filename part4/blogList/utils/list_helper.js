
  
  const  dummy = (blogs) => {
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
  
  module.exports = {
    dummy, totalLikes, favoriteBlog
  }