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
        <Text style={legalStyles.heading}>Terms and Conditions</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>Last Updated: March 28, 2021.</Text>
          <Text style={legalStyles.text}>
            Please read these terms and conditions carefully before using Our
            Service.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Interpretations and Definitions</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>Interpretation</Text>
          <Text style={legalStyles.text}>{INTERPRETATION}</Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>Definitions</Text>
          <Text style={legalStyles.text}>
            For the purposes of these Terms and Conditions:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Application</Text> means the software
              program provided by the Company downloaded by You on any
              electronic device, named Don't Think Just Drink
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Application Store</Text> means the
              digital distribution service operated and developed by Apple Inc.
              (Apple App Store) or Google Inc. (Google Play Store) in which the
              Application has been downloaded.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Affiliate</Text> means an entity that
              controls, is controlled by or is under common control with a
              party, where "control" means ownership of 50% or more of the
              shares, equity interest or other securities entitled to vote for
              election of directors or other managing authority.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Account</Text> means a unique account
              created for You to access our Service or parts of our Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Country</Text> refers to: Australia.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Company</Text> (referred to as either
              "the Company", "We", "Us" or "Our" in this Agreement) refers to
              Recaura, 6307/95 Liverpool Street, Sydney NSW 2000.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Content</Text> refers to content such as
              text, images, or other information that can be posted, uploaded,
              linked to or otherwise made available by You, regardless of the
              form of that content.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Device</Text> means any device that can
              access the Service such as a computer, a cellphone or a digital
              tablet.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Feedback</Text> means feedback,
              innovations or suggestions sent by You regarding the attributes,
              performance or features of our Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Service</Text> refers to the
              Application.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Terms and Conditions</Text> (also
              referred as "Terms") mean these Terms and Conditions that form the
              entire agreement between You and the Company regarding the use of
              the Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Third-party Social Media Service</Text>{' '}
              means any services or content (including data, information,
              products or services) provided by a third-party that may be
              displayed, included or made available by the Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>You</Text> means the individual
              accessing or using the Service, or the company, or other legal
              entity on behalf of which such individual is accessing or using
              the Service, as applicable.
            </Text>
          </BulletListItem>
        </View>
        <Text style={legalStyles.heading}>Acknowledgement</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service.
          </Text>
          <Text style={legalStyles.text}>
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users and others who
            access or use the Service.
          </Text>
          <Text style={legalStyles.text}>
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service.
          </Text>
          <Text style={legalStyles.text}>
            You represent that you are over the age of 18. The Company does not
            permit those under 18 to use the Service.
          </Text>
          <Text style={legalStyles.text}>
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the Company.
            Our Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your personal information when You
            use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy
            carefully before using Our Service.
          </Text>
        </View>
      </View>
    </>
  );
}

export default TermsAndConditions;
