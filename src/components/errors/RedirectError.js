import React from 'react';
import { Modal, View, Text } from 'react-native';
import styles from '../../styles/styles';

function RedirectError() {
  return (
    <Modal>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.bold}>Unable to redirect</Text>
          <Text>
            {
              "Please open the app store to update to the new version of Don't Think Just Drink!"
            }
          </Text>
        </View>
      </View>
    </Modal>
  );
}

export default RedirectError;
