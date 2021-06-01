import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';
import legalStyles from '../../styles/legalStyles';
import { DISCLAIMER, LEGAL_RECOMMENDATION } from '../../utils/constants';
import InformationModal from '../common/InformationModal';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';

function DisclaimerScreen() {
  const [termsModalVisible, setTermsModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);

  return (
    <View style={legalStyles.disclaimerContainer}>
      <View style={legalStyles.section}>
        <Text style={legalStyles.subHeading}>DRINK RESPONSIBLY</Text>
        <Text style={legalStyles.text}>{LEGAL_RECOMMENDATION}</Text>
      </View>
      <View style={legalStyles.section}>
        <Text style={legalStyles.subHeading}>DISCLAIMER</Text>
        <Text style={legalStyles.text}>{DISCLAIMER}</Text>
      </View>
      <Text
        style={[legalStyles.text, styles.linkText, legalStyles.section]}
        onPress={() => setTermsModalVisible(true)}
      >
        {`Terms & Conditions`}
      </Text>
      <Text
        style={[legalStyles.text, styles.linkText, legalStyles.section]}
        onPress={() => setPrivacyModalVisible(true)}
      >
        {`Privacy Policy`}
      </Text>
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
    </View>
  );
}

export default DisclaimerScreen;
