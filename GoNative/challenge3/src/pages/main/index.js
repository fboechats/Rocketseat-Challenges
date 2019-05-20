import React from 'react';

import { StatusBar } from 'react-native';

import Modal from '~/components/Modal';
import Map from '~/components/Map';

const Main = () => (
  <>
    <StatusBar barStyle="light-content" />
    <Map />
    <Modal />
  </>
);

export default Main;
