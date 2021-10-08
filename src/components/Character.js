import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";



export default function Character() {

    const [character, setCharacter] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URL}`)
        .then(res => {
            setCharacter(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])


    const characterList = character.map(person => {
        return (person.name)
    })



    return (
        <div>
            <h2>Testing Characters {characterList}</h2>
        </div>
    )
}
