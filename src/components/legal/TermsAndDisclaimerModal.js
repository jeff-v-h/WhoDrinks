import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';
import deckStyles from '../../styles/deckStyles';
import AppButton from '../common/AppButton';
import InformationModal from '../common/InformationModal';
import { useSelector, useDispatch } from 'react-redux';
import { DISCLAIMER } from '../../utils/constants';
import { confirmTermsAndConditions } from '../../redux/userSlice';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import Modal from '../common/Modal';

function TermsAndDisclaimerModal() {
  const [termsModalVisible, setTermsModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);
  const confirmedTermsAndConditions = useSelector(
    (state) => state.user.confirmedTermsAndConditions
  );
  const dispatch = useDispatch();

  return (
    <Modal visible={!confirmedTermsAndConditions} isBottomContent>
      <View style={styles.bottomModalContent}>
        <Text style={[styles.bold, deckStyles.disclaimerTitle]}>
          Disclaimer
        </Text>
        <Text style={[styles.textBlock, deckStyles.disclaimerText]}>
          {DISCLAIMER}
        </Text>
        <Text style={[styles.textBlock, deckStyles.disclaimerText]}>
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
            onPress={() => dispatch(confirmTermsAndConditions())}
            style={styles.modalButton}
            textStyle={styles.modalButtonText}
          />
        </View>
      </View>
      <InformationModal
        dismiss={() => setTermsModalVisible(false)}
        modalVisible={termsModalVisible}
      >
        <TermsAndConditions />
      </InformationModal>
      <InformationModal
        dismiss={() => setPrivacyModalVisible(false)}
        modalVisible={privacyModalVisible}
      >
        <PrivacyPolicy />
      </InformationModal>
    </Modal>
  );
}

export default TermsAndDisclaimerModal;
