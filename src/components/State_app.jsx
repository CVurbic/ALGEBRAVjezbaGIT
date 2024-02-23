import React from 'react'

const users = [
    { name: "Ivan", years: 30 },
    { name: "Marko", years: 35 },
    { name: "Ana", years: 35 },
]

export default class State_app extends React.Component {
    render() {
        return (
            <div>
                <h1>React Aplikacija</h1>
                <p>Ovo zbilja radi</p>
            </div>
        )
    }
}