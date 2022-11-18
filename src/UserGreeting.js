import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props);

        //want to conditionally render message based on logged in state
        this.state = {
            isLoggedIn: false
        }


    }


    //if/else statements don't work inside jsx
    render() {

        //APPROACHES TO CONDITIONAL RENDERING

        //#4: SHORT CIRCUIT OPERATOR - SOMETHING OR NOTHING
        //Return eitehr welcome person message or nothing
        // return this.state.isLoggedIn && <div> Welcome Broisah</div>

        //#3. TERNARY OPERATOR
        return (
            <div>
                {this.state.isLoggedIn ? <div> Welcome Brosiah</div> : <div> Welcome Guest</div>}
            </div>
        );


        ////#2.ELEMENT VARIABLE CONDITIONING
        //message stores element to be rendered
        /* let message;
        if (this.state.isLoggedIn) {
            message = <div> Welcome Brosiah</div>
        } else {
            message = <div> Welcome Guest</div>
        }

        return <div>{message}</div>
 */
        //#1.STANDARD IF/ELSE CONDITIONING
        /*  if (this.state.isLoggedIn) {
             return (
                 <div>
                     Welcome Brosiah
                 </div>
             );
         } else {
             return (
                 <div>
                     Welcome Guest
                 </div>)
         } */

        //NO CONDITIONING
        /*        return (
                   <div>
                       <div>
                           Welcome Brosiah
                       </div>
                       <br />
                       <br />
                       <div>
                           Welcome Guest
                       </div>
                   </div>
               ); */
    };
};

export default UserGreeting;