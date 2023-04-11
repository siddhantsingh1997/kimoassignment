import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const url = process.env.BASE_API +"highlights"
    const response = await fetch(url)
    let data;
     if (!response.ok) {
      const result = await response.json();
      if (result.errors == '404') { 
          throw Error('Could not fetch data!');
      } else {
         
         // return res.end(JSON.stringify({ dataErrors: data }));
      }
  }
    data = await response.text()
    return JSON.stringify(data)
}

