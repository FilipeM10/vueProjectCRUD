export const getTable = async () => { //concluido
    try {

        const req = await fetch(import.meta.env.VITE_API_URL+'/usuarios', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        if(!req.ok) {
            throw new Error('Erro ao buscar usuário')
        }

        const dataTable = await req.json()
        return dataTable

    } catch(err){
        console.error(err)
    }   
}

export const cadastrarUser = async (data) => {
    try {
        const req = await fetch(import.meta.env.VITE_API_URL+'/usuarios', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        
        const res = await req.json();
        return res
    } catch(err) {
        console.error(err)
    }
}

export const deletar = async (val) => {
    try {
        const req = await fetch(import.meta.env.VITE_API_URL+`/usuarios/${val}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })

        await req.json()
        console.log({message: "concluido", valoriD: val})
        return {message: "concluido", valoriD: val}
        
    } catch(err) {
        console.error(err)
    }
}