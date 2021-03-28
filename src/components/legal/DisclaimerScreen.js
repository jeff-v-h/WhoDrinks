import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';
import legalStyles from '../../styles/legalStyles';
import { DISCLAIMER, LEGAL_RECOMMENDATION } from '../../utils/constants';
import TermsAndConditionsModal from './TermsAndConditionsModal';

function DisclaimerScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={legalStyles.disclaimerContainer}>
      <Text style={legalStyles.subHeading}>DRINK RESPONSIBLY:</Text>
      <Text style={legalStyles.text}>{LEGAL_RECOMMENDATION}</Text>
      <Text style={legalStyles.subHeading}>DISCLAIMER:</Text>
      <Text style={legalStyles.text}>{DISCLAIMER}</Text>
      <Text
        style={[legalStyles.text, styles.linkText]}
        onPress={() => setModalVisible(true)}
      >
        {`Terms & Conditions`}
      </Text>
      <TermsAndConditionsModal
        close={() => setModalVisible(false)}
        modalVisible={modalVisible}
      />
    </View>
  );
}

export default DisclaimerScreen;
