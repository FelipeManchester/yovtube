import React from 'react';
import { StyledRegisterVideo } from './styles';

function useForm(props) {
  const [values, setValues] = React.useState(props.initialValues);
  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: 'React', url: 'https://youtube.com...' },
  });
  const [visibleForm, setVisibleForm] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setVisibleForm(true)}>
        +
      </button>
      {visibleForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setVisibleForm(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setVisibleForm(false)}
            >
              X
            </button>
            <input
              placeholder="Titulo do video"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}

/* Desafios

    No momento do cadastro, pegar o ID do vídeo separadamente da URL com uma função e ter a URL da imagem de Thumbnail do YouTube, você pode:
        Procurar no NPM.
        Procurar no Google.
        Tentar você mesmo!
    Adicionar o preview dessa imagem do desafio anterior na tela.
    Adicionar validações de formulário.
        Campo está required?
        Campo tem ao menos X caracteres?
        Exibir mensagem com o erro que aconteceu.
    Se inspirar na API do Formik para adicionar validações no nosso Custom Hook.
    Formik.Doc: Overview. */

/* Desafios

    Depois de tudo o que vimos até agora, se baseie no Figma para tentar criar uma nova página e a personalize do seu jeito.
    Tutorial de como você pode criar páginas no NextJS.
    Grave um vídeo do seu projeto e poste no Twitter, LinkedIn, Instagram e Facebook marcando @aluraonline! */