/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import React from 'react';
import {urlRoot} from 'site-constants';
import {sharedStyles} from 'theme';

//import names from '../../content/acknowledgements.yml';

const PageExample = ({data, location}) => (
  <Container>
    <div css={sharedStyles.articleLayout.container}>
      <div css={sharedStyles.articleLayout.content}>
        <Header>Page Example</Header>
        <TitleAndMetaTags
          ogUrl={`${urlRoot}/page-example.html`}
          title="MAA - Page Example"
        />

        <div css={sharedStyles.markdown}>
          <p>We'd like to thank all of our contributors:</p>

          <ul
            css={{
              display: 'flex',
              flexWrap: 'wrap',
            }}>
            {/*{names.map((name, index) => (
              <li
                css={{
                  flex: '1 0 200px',
                }}
                key={index}>
                {name}
              </li>
            ))}*/}
          </ul>

          <p>In addition, we're grateful to</p>
          
        </div>
      </div>
    </div>
  </Container>
);

export default PageExample;
