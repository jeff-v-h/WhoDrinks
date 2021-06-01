import React from 'react';
import { TouchableWithoutFeedback, Modal, View } from 'react-native';
import PT from 'prop-types';

MyModal.propTypes = {
  children: PT.node.isRequired,
  visible: PT.bool.isRequired,
  dismiss: PT.func.isRequired
};

function MyModal({ children, visible, dismiss }) {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={dismiss}
      >
        <TouchableWithoutFeedback onPress={dismiss}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContentWrapper}>{children}</View>
      </Modal>
    </View>
  );
}

export default MyModal;
