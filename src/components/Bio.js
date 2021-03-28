import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Guilherme Rodrigues`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 620 }}>
          Blog do{' '}
          <a href="https://mobile.twitter.com/guirodriguesrio">
            Guilherme Rodrigues
          </a>
          . <br />
          <small>
            Eu tive acesso a um computador com 4 anos de idade e isso mudou
            minha vida. Comecei a programar adolescente, entrei na VTEX com 21
            anos. Eu não sou um grande desenvolvedor, nem um grande
            comunicador... Mas eu tenho um compromisso extraordinário com o
            futuro do Rio de Janeiro.
          </small>
        </p>
      </div>
    );
  }
}

export default Bio;
