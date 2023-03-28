import Layout from "../components/layout";
import {TOKEN,DATABASE_ID} from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({data,data2}){

  //columns of Database Sketches
  const service = data2.properties.Service.select.options

    return(
        <Layout>
          <p>Last Update: {data2.last_edited_time}</p>
          <p>//total categories: {service.length}</p>
          <div>{service.map( (aService) => (<p key = {aService.id}>----- {aService.name}</p>))}</div>
          <p>//total sketches: {data.results.length}</p>

          {data.results.map( (aProject) => (
            <ProjectItem key = {aProject.id} data = {aProject}/>
          ))}


        </Layout>
    )
}


export async function getServerSideProps() {

    // Query a database > Fetch
    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          "filter": {
            and: [
              {property: "Status", select:{equals:"Live"}},
              {property: "Type", select:{equals:"Tutorial"}},
            ]
          },
          sorts:[
            {
              "property" : "Date",
              "direction" : "descending"
            }
          ],
          page_size: 100
        })
      };
      
      const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
      const data = await res.json()


        //Retrieve a database > Fetch
  const options2 = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  };
  
  const res2 = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}`, options2)
  const data2 = await res2.json()

    return {
      props: {data, data2}, // will be passed to the page component as props
    }
  }