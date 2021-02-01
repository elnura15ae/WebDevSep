import React, { Component } from 'react'

const Form = props =>(
            <form onSubmit={props.weatherMethod}>
                <input type="text" name="city" placeholder="enter city"></input>
                <button>show the weather</button>
            </form>
)

export default Form;
