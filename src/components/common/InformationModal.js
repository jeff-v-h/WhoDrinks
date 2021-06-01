import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../styles/styles';
import IconButton from './IconButton';
import AppButton from './AppButton';
import PT from 'prop-types';
import Modal from '../common/Modal';

InformationModal.propTypes = {
  modalVisible: PT.bool.isRequired,
  dismiss: PT.func.isRequired,
  children: PT.oneOfType([PT.arrayOf(PT.node), PT.node]).isRequired
};

function InformationModal({ dismiss, modalVisible, children }) {
  return (
    <Modal visible={modalVisible} dismiss={dismiss}>
      <View style={styles.modalContent}>
        <View style={styles.rightButtonsView}>
          <IconButton
            onPress={dismiss}
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
              onPress={dismiss}
              style={styles.modalButton}
              textStyle={styles.modalButtonText}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

export default InformationModal;
