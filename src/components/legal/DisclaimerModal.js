import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import AppButton from '../common/AppButton';
import InformationModal from '../common/InformationModal';
import { useSelector, useDispatch } from 'react-redux';
import { DISCLAIMER } from '../../utils/constants';
import { confirmDisclaimer } from '../../redux/userSlice';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';

function DisclaimerModal() {
  const [termsModalVisible, setTermsModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);
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
              onPress={() => setTermsModalVisible(true)}
            >{`Terms & Conditions`}</Text>
            {' and '}
            <Text
              style={styles.linkText}
              onPress={() => setPrivacyModalVisible(true)}
            >{`Privacy Policy`}</Text>
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
      <InformationModal
        close={() => setTermsModalVisible(false)}
        modalVisible={termsModalVisible}
      >
        <TermsAndConditions />
      </InformationModal>
      <InformationModal
        close={() => setPrivacyModalVisible(false)}
        modalVisible={privacyModalVisible}
      >
        <PrivacyPolicy />
      </InformationModal>
    </Modal>
  );
}

export default DisclaimerModal;
