import React from 'react'

class ErrorBoundary  extends React.Component{
    constructor() {
        super();
        this.state = {
            hasError : false,
            message : null,
        };
    }
    
   static getDerivedStateFromError(error) {
   //digunakan untuk menaruh fallback UI
    return {hasError :true, message : error.message};
   }

   componentDidCatch(error) {

    //mengeksekusi pengirirman error ke dashboard /handler seperti web service
    console.log(error);
   }
    

    render() {
    if (this.state.hasError){
    return <h1>Harga Terlalu rendah, {this.state.message}</h1>
     }
      return this.props.children;
     
      
    }
}

export default ErrorBoundary