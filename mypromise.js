const getData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const resultObj = await result.json()
    console.log(resultObj[2].name)
  }
  
  getData()