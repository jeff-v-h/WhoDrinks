import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';
import legalStyles from '../../styles/legalStyles';
import { DISCLAIMER, LEGAL_RECOMMENDATION } from '../../utils/constants';
import InformationModal from '../common/InformationModal';
import TermsAndConditions from './TermsAndConditions';

function DisclaimerScreen() {
  const [modalVisible, setModalVisible] = useState(false);

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
        style={[legalStyles.text, styles.linkText]}
        onPress={() => setModalVisible(true)}
      >
        {`Terms & Conditions`}
      </Text>
      <InformationModal
        close={() => setModalVisible(false)}
        modalVisible={modalVisible}
      >
        <TermsAndConditions />
      </InformationModal>
      {/* <InformationModal
        close={() => setModalVisible(false)}
        modalVisible={modalVisible}
      >
        <TermsAndConditions />
      </InformationModal> */}
    </View>
  );
}

export default DisclaimerScreen;
