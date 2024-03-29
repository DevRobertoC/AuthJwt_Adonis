import { test } from '@japa/runner'
import { obtenerTokenAutorizacion } from './TestAuths'

test('listar libros', async ({client, assert}) => { 
    const token = await obtenerTokenAutorizacion()   
    const response = await client.get('api/libros/listar')
        .header('Authorization', `Bearer ${token}`)
    response.assertStatus(200)
    assert.isArray(response.body())
})