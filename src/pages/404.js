import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>Não encontrado</h1>
          <p>Esse post não existe :(</p>
        </main>
      </Layout>
    );
  }
}

export default NotFoundPage;
