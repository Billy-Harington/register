const BASEURL = "http://localhost:8080"

export async function GetData(resource) {
    try{
        const res = await fetch(BASEURL + resource)
  
        if (!res.ok) {
            alert("Something went wrong pall")
            return []
        }

        const users = await res.json()
        return users

    }catch (e){
        alert("Network error")
    }

   
}


export async function PostData(resource,body) {
    try{
        const res = await fetch(BASEURL + resource,{
            method:"POST",
            body:JSON.stringify(body),
            headers: {
                "Content-Type": "applications/json"
            }
        })
  
        if (!res.ok) {
            alert("Something went wrong pall")
            return []
        }

        const user = await res.json()

        return user

    }catch (e){
        alert("Network error")
    }
    

}