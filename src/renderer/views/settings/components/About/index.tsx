/* Copyright (c) 2021-2022 SnailDOS */

import * as React from 'react';

import { Switch } from '~/renderer/components/Switch';
import { Title, Row, Control, Header, SecondaryText } from '../App/style';
import store from '../../store';
import { onSwitchChange } from '../../utils';
import { ipcRenderer } from 'electron';
import { observer } from 'mobx-react-lite';
import { NormalButton } from '../App';

const Location = observer(() => {
  return (
    <Row>
      <Title>
        TotoB12 is a privacy orientated browser with tons of features such as a
        built in Ad Blocker. The TotoB12 Browser is made with love by the TotoB12 team.
        <p></p>
        <Title><a href="https://github.com/totob12/TotoB12-Browser">TotoB12 Browser</a> - Github Repository</Title>
        <p></p>
        <Title><a href="https://totob12.com">link text</a> - Website</Title>
      </Title>
    </Row>
  );
});

export const About = () => {
  return (
    <>
      <Header>About TotoB12</Header>
      <Title>Your version of TotoB12 is v1.3.3</Title>
      <Location />
    </>
  );
};
