import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import AppButton from '../common/AppButton';
import TermsAndConditionsModal from './TermsAndConditionsModal';
import { useSelector, useDispatch } from 'react-redux';
import { DISCLAIMER } from '../../utils/constants';
import { confirmDisclaimer } from '../../redux/userSlice';

function DisclaimerModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const confirmedDisclaimer = useSelector(
    (state) => state.user.confirmedDisclaimer
  );
  const dispatch = useDispatch();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!confirmedDisclaimer}
      onRequestClose={() => confirmDisclaimer()}
    >
      <View style={styles.bottomPopupModal}>
        <View style={styles.modalContent}>
          <Text style={[styles.bold, deckStyles.disclaimerTitle]}>
            Disclaimer
          </Text>
          <Text>{DISCLAIMER}</Text>
          <Text style={styles.textBlock}>
            By using this application you also agree to the{' '}
            <Text
              style={styles.linkText}
              onPress={() => setModalVisible(true)}
            >{`Terms & Conditions`}</Text>
            .
          </Text>
          <View style={styles.rightButtonsView}>
            <AppButton
              title="OK"
              onPress={() => dispatch(confirmDisclaimer())}
              style={styles.modalButton}
              textStyle={styles.modalButtonText}
            />
          </View>
        </View>
      </View>
      <TermsAndConditionsModal
        close={() => setModalVisible(false)}
        modalVisible={modalVisible}
      />
    </Modal>
  );
}

export default DisclaimerModal;
