import React, { useEffect } from "react";
import postList_DUMMY from "../utils/constant";



// class Post extends React.Component{
//     constructor() {
//         super() 
//         this.state = {
//             postData : [],
//         }
//     }

//     componentDidMount () {
        
//         this.setState({
//             postData : postList_DUMMY});
//     }

//     render() {
//         return this.state.postData.map(post => {
//             return <div key={post.id}>
//             <h4>{post.title}</h4>
//             <p>{post.description}</p>
//             </div>
//         })
//     }
// }

let content;

const Post = () => {
    const [postData, setPostData] = React.useState([]);

    // const [isLoading, setIsLoading] = React.useState(false);

    useEffect(() => {
        // setIsLoading(true);
        // setTimeout(() => {
            setPostData(postList_DUMMY);
            // setIsLoading(false);
        // },3000);
    }, []);

    // if(isLoading === true){
    //     content = <p>Loading...... </p>
    // }

    if(postData.length > 0){
        content = postData.map(post => {
            return (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                    </div> 
                    );
                });
    }
    

    return (
        <React.Fragment>{content} </React.Fragment>
    );
};


export default Post