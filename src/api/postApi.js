export const getPost = async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const post = await response.json();
  return post;  
}


export const getPostDetails = async (id)=>{
  const response = await fetch( `https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();
  return post;  
}