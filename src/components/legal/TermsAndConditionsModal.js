import React from 'react';
import { View, Text, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../styles/styles';
import legalStyles from '../../styles/legalStyles';
import { TERMS_AND_CONDITIONS } from '../../utils/constants';
import IconButton from '../common/IconButton';
import AppButton from '../common/AppButton';
import PropTypes from 'prop-types';

TermsAndConditionsModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

function TermsAndConditionsModal({ onClose }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <View>
            <IconButton
              onPress={onPress}
              iconName="times"
              size={24}
              opacity={0.5}
            />
          </View>
          <ScrollView>
            <Text style={legalStyles.subHeading}>TERMS AND CONDITIONS:</Text>
            <Text style={legalStyles.text}>{TERMS_AND_CONDITIONS}</Text>
            <View style={styles.rightButtonsView}>
              <AppButton
                title="OK"
                onPress={onClose}
                style={styles.modalButton}
                textStyle={styles.modalButtonText}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

export default TermsAndConditionsModal;
