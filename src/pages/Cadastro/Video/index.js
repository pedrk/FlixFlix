import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Página de Cadastro de Vídeo</h1>
            <form action="">
                Nome do video: <input type="text"/> <button>Cadastrar</button>
            </form>
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;