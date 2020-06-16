import React, { useState,useEffect} from 'react'
import {PageLayout,Input,PasswordInput,Button,Spinner} from 'components/common';
import styled from 'styled-components';

const Form = styled.form`
            width:100%;
            max-width:400px;
            background:white;
            border:1px solid #eee;
            padding:16px;
            box-sizing:border-box;
            color:black;
            border-radius:4px;

            .alt-text{
                margin:8px 0;
                text-align:center;
            }

            ${Button}:first-of-type{
                margin-top:40px;

            }
            >${Input}{
                margin-top:20px;
            }
            `
export default function Login(props){
    const [loading ,setLoading] = useState(false);
    const [formFields,setFormFields] = useState({username:'',password:''});
    let timeOut ="";

    function handleInputChange(e){
        e.persist();
        setFormFields(s=>({
            ...s,
            [e.target.name]:e.target.value
        }));
    };

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        timeOut = setTimeout(()=>{
            setLoading(false);
        },2000);

    }
    useEffect(()=>{
        return()=>{
            if(timeOut){
                clearTimeout(timeOut);
            }
        }
    },[])
        return (
            <PageLayout>
                <div>
                    <h1>
                        login
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        {loading ? <Spinner/>:
                            <>
                                <span>Login here if you have account</span>
                                <Input 
                                    value={formFields.username}
                                    onChange={handleInputChange}
                                    name="username" 
                                    type="text"
                                    placeholder="Username"/>
                                <PasswordInput
                                    value={formFields.password}
                                    onChange={handleInputChange}
                                    name="password" />
                            </>
                        }    
                        <Button large type="submit" disabled={loading}>
                            {loading ? 'Loading...':'Login'}
                        </Button>
                        {!loading && 
                        <>
                        <div className="alt-text">
                            OR
                        </div>
                        <Button secondry type="button">
                            Register
                        </Button>
                        </>}
                    </Form>
                    
                </div>
            </PageLayout>
        )
    
}
