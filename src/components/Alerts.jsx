import React from 'react'

function Alerts(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div class= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> { /* props.alert && props.alert.type  --> it used because if props.alert is null then it dose not checks next part else it checks next part and returns */}
        <strong>{capitalize(props.alert.type)} :</strong> {props.alert.msg} 
    </div>
  )
}

export default Alerts