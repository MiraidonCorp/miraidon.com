import * as React from "react"

const Navigation = (data) => {
    return (
        <nav>
        <ul>
            {data.items.map((itm, i) => {
            return <li key={i}><a href="#">{itm.label}</a></li>
            })}
        </ul>
        </nav>
    )
}

export default Navigation

