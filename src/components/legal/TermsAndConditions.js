import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';
import legalStyles from '../../styles/legalStyles';
import { TERMS_AND_CONDITIONS, INTERPRETATION } from '../../utils/constants';
import BulletListItem from '../common/BulletListItem';

function TermsAndConditions() {
  return (
    <>
      <View>
        <Text style={legalStyles.subHeading}>Terms and Conditions</Text>
        <Text style={legalStyles.text}>{TERMS_AND_CONDITIONS}</Text>
        <Text style={legalStyles.subHeading}>
          Interpretations and Definitions
        </Text>
        <Text style={legalStyles.subHeading}>Interpretation</Text>
        <Text style={legalStyles.text}>{INTERPRETATION}</Text>
        <Text style={legalStyles.subHeading}>Definitions</Text>
        <Text style={legalStyles.text}>
          For the purposes of these Terms and Conditions:
        </Text>
        <BulletListItem>
          <Text style={styles.bold}>Application</Text> means the software
          program provided by the Company downloaded by You on any electronic
          device, named Don't Think Just Drink
        </BulletListItem>
      </View>
    </>
  );
}

export default TermsAndConditions;
