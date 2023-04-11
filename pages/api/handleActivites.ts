
const handler = async(req,res) => {
    //  const url = 'https://web-dev.dev.kimo.ai/v1/activities/Surfing';

    //  try{
    //     const response = await(url)
    //     const data = await response.json();
   
    //     return res.end(JSON.stringify(data));
    //  }
    //  catch (error){
    //     return res.end(JSON.stringify({'error':error.message}));
    //  }

    fetch('https://web-dev.dev.kimo.ai/v1/activities/Surfing')
        .then(x => x.text())

}