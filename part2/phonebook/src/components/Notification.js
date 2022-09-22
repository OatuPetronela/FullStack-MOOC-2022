const Notification = ({message, errorMessage}) =>{
    if(message === null){
        return null
    }
    const StyleSuccess = {
        color: 'green',
        fontSize: 24,
        borderStyle: 'solid',
        padding:7,
        borderRadius: 5,
        textAlign: 'center'
      }
    
      const ErrorStyle = {...StyleSuccess, color: 'red'}
    
      if (errorMessage === true) {
        return (
          <div style={ErrorStyle}>
            {message}
          </div>
        )
      }
    
      return (
        <div style={StyleSuccess}>
          {message}
        </div>
      )
    }
  
export default Notification;