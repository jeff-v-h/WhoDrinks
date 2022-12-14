import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/styles';
import { useSelector } from 'react-redux';
import AppText from '../common/AppText';
import AppButton from '../common/AppButton';
import { useNavigation } from '@react-navigation/native';
import deckStyles from '../../styles/deckStyles';
import Modal from '../common/Modal';

function RedirectError() {
  const forceUpdate = useSelector((state) => state.user.appVersion.forceUpdate);
  const navigation = useNavigation();

  return (
    <Modal visible={true}>
      <View style={styles.modalContent}>
        <AppText style={styles.bold}>Unable to redirect</AppText>
        <AppText>
          {
            'Please open the app store to update to the new version of Who Drinks!'
          }
        </AppText>
        {!forceUpdate && (
          <>
            <AppText style={deckStyles.orText}>or</AppText>
            <AppButton
              title="Go back to home screen"
              onPress={() => navigation.goBack()}
            />
          </>
        )}
      </View>
    </Modal>
  );
}

export default RedirectError;
