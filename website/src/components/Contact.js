import React from 'react';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
function Contact(props) {
    return (
        <div className="contactText">

            <div className="p-grid">
                <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                    <div className="p-fluid">
                        <div className="p-field">
                            <span style={{ textDecoration: "overline", fontSize: "xx-large" }}>Service Enquiry</span> <br /> <br />
                            <label htmlFor="username">Name</label>
                            <InputText id="username" type="text" tooltip="Please enter your name" validateOnly={true}
                             />
                        </div>
                        <div className="p-field">
                            <label >Company</label>
                            <InputText id="contactNumber" type="number" tooltip="Please your company name" />
                        </div>
                        <div className="p-field">
                            <label >Contact number</label>
                            <InputText id="contactNumber" type="number" tooltip="Please enter phone number" />
                        </div>

                        <div className="p-field">
                            <label >Query</label>
                            <InputTextarea autoResize id="query" rows={5} cols={30} tooltip="Enter you query" />
                        </div>
                        <Button label="Send" icon="pi pi-send" className="p-button-success"
                        tooltip="Send your queries"/>
                    </div>
                </div>
                <div className="p-col-2">
                    <Divider layout="vertical">
                        <strong>OR</strong>
                    </Divider>
                </div>
                <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                    <div className="p-field" >
                        <span style={{ textDecoration: "overline", fontSize: "xx-large" }} >For Support </span> <br/><br/>
                        <span style={{color:"red", fontSize: "large" }}><b><u> Call : </u></b>&nbsp;&nbsp;+91-7678334260</span><br/>
                        <span style={{color:"red", fontSize: "large" }}><b><u> Mail :</u></b>&nbsp; &nbsp; nrjsrivastav100@yahoo.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;