import React from 'react';
import { View, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../styles/styles';
import IconButton from '../common/IconButton';
import AppButton from '../common/AppButton';
import PropTypes from 'prop-types';
import TermsAndConditions from './TermsAndConditions';

TermsAndConditionsModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

function TermsAndConditionsModal({ close, modalVisible }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={close}
    >
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.rightButtonsView}>
            <IconButton
              onPress={close}
              iconName="times"
              size={18}
              opacity={0.5}
            />
          </View>
          <ScrollView>
            <TermsAndConditions />
            <View style={styles.rightButtonsView}>
              <AppButton
                title="OK"
                onPress={close}
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
