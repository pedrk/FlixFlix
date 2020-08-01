/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/ButtonLink';

function CadastroCategoria() {
  const [categorias, setCategoria] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setValor(campo, valor) {
    setValues({
      ...values,
      [campo]: valor,
    });
  }

  function inputHandler(e) {
    setValor(
      e.target.getAttribute('name'),
      e.target.value);
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:3030/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setValues(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function submitHandler(e) {
        e.preventDefault();
        setCategoria([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          tag="false"
          type="text"
          name="nome"
          value={values.nome}
          onChange={inputHandler}
        />

        <FormField
          type="textarea"
          label="Descrição"
          name="descricao"
          value={values.descricao}
          onChange={inputHandler}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={inputHandler}
        />

        <Button>
          Cadastrar
        </Button>

      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria}${index} `}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
