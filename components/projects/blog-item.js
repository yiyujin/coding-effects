import Image from "next/image"

export default function BlogItem({data3}){
    //name (title)

    const name = data3.properties.Name.title[0].plain_text
    const output = data3.properties.Output.rich_text[0].plain_text
    const original = data3.properties.Original.select.name
    const date = data3.properties.Date.created_time

    return (
        <>

            <div className="iframeComponent">
                <div className="iframeContainer">
                    <iframe src = {output}></iframe>
                </div>

                <div className = "caption">
                    <p className="notPoint">/projects/clone/</p>
                    <p className="point">{original}/{name}.js</p>
                </div>
            </div>

            {/* <div>{tags.map( (aTag) => (<p key = {aTag.id}>{aTag.name}</p>))}</div> */}

        </>
    );
}