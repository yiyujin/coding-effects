import { TOKEN, DATABASE_ID } from "../config";
import Layout from "../components/layout";
import BlogItem from "../components/projects/blog-item.js";

export default function Blog({ data3, data4 }) {
  //columns of Database Sketches

  const original = data4.properties.Original.select.options

  return (
    <Layout>
      <p>Last Update: {data4.last_edited_time}</p>
      <p>//total categories: {original.length}</p>
          <div>{original.map( (aService) => (<p key = {aService.id}>----- {aService.name}</p>))}</div>
          <p>//total sketches: {data3.results.length}</p>

          {data3.results.map( (aProject) => (
            <BlogItem key = {aProject.id} data3 = {aProject}/>
          ))}
    
    </Layout>
  );
}

export async function getServerSideProps() {
  // Query a database > Fetch
  const options3 = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      filter: {
        and: [
          { property: "Status", select: { equals: "Live" } },
          { property: "Type", select: { equals: "Blog" } },
        ],
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res3 = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options3);
  const data3 = await res3.json();

  //Retrieve a database > Fetch
  const options4 = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const res4 = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}`, options4);
  const data4 = await res4.json();

  return {
    props: { data3, data4 }, // will be passed to the page component as props
  };
}
