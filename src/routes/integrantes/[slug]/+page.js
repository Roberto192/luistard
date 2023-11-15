import { error } from '@sveltejs/kit';
import { integrantes } from '$lib';

export async function load({ params }) {

    let integrante = integrantes.map(integrante =>{
        if(integrante === params.slug){
            return integrante
        }
    })

    if(integrante){
        return {integrante}
    }

	throw error(404, 'Not found');
}