class JPlaceholderApiService{
    constructor(){
      this.apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    }
    
    async getAllPost(){
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const data = await response.json();
      return data;
    }
    
    async getPostById(id){
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      return data;
    }
  }
  
const _instance = new JPlaceholderApiService();
export default _instance;