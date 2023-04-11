const ServiceHandler = async (url) => {
  const type = url.split("/");
  const response = await fetch(url);
  console.log("response", response);
  if (response.status === 422) {
    return {
      title: "Choosen Value is wrong",
      description: "please choose Value again its not correct",
      error: true,
    };
  } else if (response.status === 404) {
    return {
      title: "No such data is found",
      description: "please try again",
      error: true,
    };
  } else {
    const data = await response.text();
    console.log("data", JSON.parse(data), type);
    if (type[type.length - 2] === "activities") {
      return { data: [JSON.parse(data)], error: false };
    }

    return { data: [...JSON.parse(data)], error: false };
  }

  //if(JSON.parse(data).has)
};

export default ServiceHandler;
