import { GraphQLClient, gql } from 'graphql-request'

const client = new GraphQLClient('http://localhost:9000/graphql')

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        id
        date
        title
        company {
          id
          name
        }
      }
    }
  `
  const { jobs } = await client.request(query)

  return jobs
}
export async function getJob(id) {
  // console.log(`id in the query ${id}`)
  const query = gql`
    query JobById($id: ID!) {
      job(id: $id) {
        id
        date
        title
        company {
          id
          name
        }
        description
      }
    }
  `
  const { job } = await client.request(query, { id })
  //console.log(job)
  return job
}
