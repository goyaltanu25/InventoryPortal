import React , {Component}  from "react"
import {connect} from "react-redux";
import { Button, Form, Container } from "react-bootstrap"
import "./Login.css"
import { login } from "../redux/LoginAction"
import Navigation from "../navigation/Navigation"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log(props)
 }
 
 handleSubmit = (event) => {
    event.preventDefault();
    let {username, password} = this.state;
    this.props.login(username, password)
    this.props.history.push("/products");
}
render(){
  let {isLoginPending, isLoginSuccess, isLoginError} = this.props;
   return(
    <React.Fragment>
    <Navigation />
       <Container style={{ marginTop:'15px'}}>
        <Form onSubmit={this.handleSubmit}>
         <h4 className="wrapper hdg" >LOGIN</h4>
        <Form.Group controlId="formBasicuserName" className="inptWidth">
          <Form.Label>UserName:</Form.Label>
          <Form.Control type="text"  placeholder="Enter UserName" name='userName' onChange={e =>this.setState({username: e.target.value})} />
        </Form.Group>
          <Form.Group controlId="formBasicPassword" className="inptWidth">
          <Form.Label>Password</Form.Label>
          <Form.Control  type="password" placeholder="Password" name='password' onChange={e =>this.setState({password: e.target.value})}/>
        </Form.Group>
         <div className="wrapper"> 
          <Button className="buttonwidth"  variant="primary" type="submit">Submit</Button>
          {isLoginPending && <div className="aligncenter">Please wait ...</div>}
          {isLoginSuccess && <div className="aligncenter">Successfully Login</div>}
          {isLoginError && <div className="aligncenter">{isLoginError.message}</div>}
         </div>
      </Form>
      </Container>
      </React.Fragment>
    )}
}
const mapStateToProps = (state) =>{
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    isLoginError: state.isLoginError
  }
} 


const mapDispatchToProps = (dispatch) =>{
  return {
    login: (username, password)=>dispatch(login(username, password))
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Login);