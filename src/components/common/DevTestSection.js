import React, { useState } from 'react';
import AppButton from './AppButton';
import SpinnerOverlay from './SpinnerOverlay';
import { View, TextInput, Text, Alert } from 'react-native';
import styles from '../../styles/styles';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCommunityDecksDiffHost } from '../community/communitySlice';
import client from '../../services/client';
import { API_HOST, API_TOKEN } from '../../utils/env';

DevTestSection.propTypes = {
  show: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool
};

const config = {
  headers: { Authorization: `Basic ${API_TOKEN}` },
  timeout: 7000
};

function DevTestSection({ show, isLoading }) {
  if (!show) {
    return null;
  }

  const [hostText, setHostText] = useState('https://');
  const [pwText, setPwText] = useState('');
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.network.isConnected);
  const apiHostHttp = API_HOST.replace('https', 'http');
  let isClientRequestLoading = false;

  const testRequest = async (host) => {
    try {
      isClientRequestLoading = true;
      const resp = await client.get(host, config);
      Alert.alert(`data received`, resp.data[0]?.id ?? 'empty');
    } catch (err) {
      Alert.alert(`API request error`, err.message);
    } finally {
      isClientRequestLoading = false;
    }
  };

  return (
    <View style={styles.section}>
      <View style={styles.buttonsRow}>
        <Text>Is Network connected: {isConnected.toString()}</Text>
      </View>
      <View style={styles.buttonsRow}>
        <AppButton
          title="Bored API"
          onPress={() => testRequest('https://www.boredapi.com/api/activity')}
          disabled={isLoading}
        />
      </View>
      <View style={styles.buttonsRow}>
        <AppButton
          title="http"
          onPress={() => testRequest(apiHostHttp)}
          disabled={isLoading}
        />
        <AppButton
          title="https"
          onPress={() => testRequest(API_HOST)}
          disabled={isLoading}
        />
      </View>
      <TextInput
        defaultValue={hostText}
        onChangeText={(hostText) => setHostText(hostText)}
      />
      <TextInput
        defaultValue={pwText}
        onChangeText={(pwText) => setPwText(pwText)}
      />
      <AppButton
        title="custom"
        onPress={() =>
          dispatch(getCommunityDecksDiffHost({ host: hostText, pw: pwText }))
        }
        disabled={isLoading}
      />
      <SpinnerOverlay show={isLoading || isClientRequestLoading} />
    </View>
  );
}

export default DevTestSection;
