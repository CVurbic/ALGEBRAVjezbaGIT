import React from 'react'



class B extends React.Component{
    constructor(props) {
        super(props);
        console.log(props.korisnici[1])
      }

    render(){
        return <div> {this.props.korisnici[1].name},{this.props.korisnici[1].godina} </div>
    }
}
export default B