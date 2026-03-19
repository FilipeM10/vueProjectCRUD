export const getTable = async () => { //concluido
    try {

        const req = await fetch('http://localhost:3000/usuarios', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        if(!req.ok) {
            throw new Error('Erro ao buscar usuário')
        }

        const dataTable = await req.json()
        console.log('Get Success', dataTable)
        return dataTable

    } catch(err){
        console.error(err)
    }   
}

export const cadastrarUser = async (data) => {
    try {
        const req = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        
        const res = await req.json();
        console.log(res)
        return res
    } catch(err) {
        console.error(err)
    }
}

export const deletar = async (val) => {
    try {
        const req = await fetch(`http://localhost:3000/usuarios/${val}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })

        const res = await req.json()
        return res
        
    } catch(err) {
        console.error(err)
    }
}