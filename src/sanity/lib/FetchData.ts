import { client } from './client'

export default  async function FetchData() {
    const Data =  await client.fetch(`*[_type== "blogposts"]{
  "image":image.asset->url,
    title,
    description,
    category,
    Publisheddate
}`)
  return Data
}

