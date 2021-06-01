import React from 'react';
import { View, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../styles/styles';
import IconButton from './IconButton';
import AppButton from './AppButton';
import PT from 'prop-types';
import TermsAndConditions from '../legal/TermsAndConditions';

InformationModal.propTypes = {
  modalVisible: PT.bool.isRequired,
  close: PT.func.isRequired,
  children: PT.oneOfType([PT.arrayOf(PT.node), PT.node]).isRequired
};

function InformationModal({ close, modalVisible, children }) {
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
            {children}
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

export default InformationModal;
