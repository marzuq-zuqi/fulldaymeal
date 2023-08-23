export default defineEventHandler(async(event) => {
  
  const {name} = useQuery(event)

  const{age} = await useBody(event)

  return{
    message: `hello, ${name}, you must be ${age} years old`  
  }
})