import React from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            text: ""
        }
        this.sendEmail = this.sendEmail.bind(this)
    }
    
    sendEmail() {
        axios.post(process.env.REACT_APP_SERVER + '/send-email', this.state)
        .then((response) => console.log("success"))
        .then((error) => console.log(error));
    }

    render() {
        return (
            <div id="contact" className='contact'>
                <h1 className='contact-header'>Contact Me</h1>
                <div className='contact-container'>
                    <TextField id="outlined-basic" onChange={(event) => this.setState({"name": event.target.value})} sx={{ marginTop: 5, marginBottom: 1, width: '80%'}} label="Name" variant="outlined" />
                    <TextField id="outlined-basic" onChange={(event) => this.setState({"email": event.target.value})} sx={{ marginBottom: 1, width: '80%' }} label="Email" variant="outlined" />
                    <TextField id="outlined-basic" onChange={(event) => this.setState({"subject": event.target.value})} sx={{ marginBottom: 1, width: '80%'}} label="Subject" variant="outlined" />
                    <TextField id="outlined-basic" onChange={(event) => this.setState({"text": event.target.value})} sx={{ marginBottom: 1, width: '80%'}} multiline rows={4} label="Body" variant="outlined" />
                    <Button variant="contained" onClick={this.sendEmail} sx={{ marginTop: 1, marginBottom: 5, width: "30%" }}>Send</Button>
                </div>
            </div>
        )
    }
}

export default Contact