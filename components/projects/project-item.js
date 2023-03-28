import Image from "next/image"

export default function ProjectItem({data}){
    //name (title)
    const name = data.properties.Name.title[0].plain_text
    //output (link to p5 editor)
    const output = data.properties.Output.rich_text[0].plain_text
    //tags
    const tags = data.properties.Tags.multi_select
    //service
    const service = data.properties.Service.select.name
    //number of steps (process sketches)
    const steps = data.properties.Steps.rich_text[0].plain_text
    //price
    const price = data.properties.Price.rich_text[0].plain_text
    //date
    const date = data.properties.Date.created_time

    return (
        <>

            <div className="iframeComponent">
                <div className="iframeContainer">
                    <iframe src = {output}></iframe>
                </div>

                <div className = "caption">
                    <p className="notPoint">/projects/clone/</p>
                    <p className="point">{service}/{name}.js</p>
                </div>
            </div>

            {/* <div>{tags.map( (aTag) => (<p key = {aTag.id}>{aTag.name}</p>))}</div> */}

        </>
    );
}