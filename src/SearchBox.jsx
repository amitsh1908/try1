import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox(){
    let[city,setCity]=useState("");

    let handleChange = (evnt)=>{
        setCity(evnt.target.value);
    }
    let handleSubmit = (evnt)=>{
        evnt.preventDefault();
        console.log(city);
        setCity("");
    };

    return(
        <div className="SearchBox ">
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}> 
                <TextField id="city" label="City-name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}