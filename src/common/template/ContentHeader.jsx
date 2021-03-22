import React from 'react'

const ContentHeader = props => (
    <section className="content-header">
        <h1>{props.title} <small>{props.small}</small></h1>
    </section>
)

export default ContentHeader