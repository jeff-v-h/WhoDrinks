import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';
import legalStyles from '../../styles/legalStyles';
import { CONTACT_EMAIL } from '../../utils/constants';
import BulletListItem from '../common/BulletListItem';

function PrivacyPolicy() {
  return (
    <>
      <View>
        <Text style={legalStyles.heading}>Privacy Policy</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>Last Updated: March 29, 2021.</Text>
          <Text style={legalStyles.text}>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </Text>
          <Text style={legalStyles.text}>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Interpretations and Definitions</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>Interpretation</Text>
          <Text style={legalStyles.text}>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>Definitions</Text>
          <Text style={legalStyles.text}>
            For the purposes of this Privacy Policy:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Account</Text> means a unique account
              created for You to access our Service or parts of our Service.
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
              <Text style={styles.bold}>Application</Text> means the software
              program provided by the Company downloaded by You on any
              electronic device, named Who Drinks
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Business</Text>, for the purpose of the
              CCPA (California Consumer Privacy Act), refers to the Company as
              the legal entity that collects Consumers' personal information and
              determines the purposes and means of the processing of Consumers'
              personal information, or on behalf of which such information is
              collected and that alone, or jointly with others, determines the
              purposes and means of the processing of consumers' personal
              information, that does business in the State of California.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Company</Text> (referred to as either
              "the Company", "We", "Us" or "Our" in this Agreement) refers to
              Recaura, 6307/95 Liverpool Street, Sydney NSW 2000. For the
              purpose of the GDPR, the Company is the Data Controller.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Consumer</Text> for the purpose of the
              CCPA (California Consumer Privacy Act), means a natural person who
              is a California resident. A resident, as defined in the law,
              includes (1) every individual who is in the USA for other than a
              temporary or transitory purpose, and (2) every individual who is
              domiciled in the USA who is outside the USA for a temporary or
              transitory purpose.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Country</Text> refers to: Australia
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Data Controller</Text>, for the purposes
              of the GDPR (General Data Protection Regulation), refers to the
              Company as the legal person which alone or jointly with others
              determines the purposes and means of the processing of Personal
              Data.
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
              <Text style={styles.bold}>Do Not Track</Text> (DNT) is a concept
              that has been promoted by US regulatory authorities, in particular
              the U.S. Federal Trade Commission (FTC), for the Internet industry
              to develop and implement a mechanism for allowing internet users
              to control the tracking of their online activities across
              websites.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Personal Data</Text> is any information
              that relates to an identified or identifiable individual.{'\n'}
              For the purposes for GDPR, Personal Data means any information
              relating to You such as a name, an identification number, location
              data, online identifier or to one or more factors specific to the
              physical, physiological, genetic, mental, economic, cultural or
              social identity.{'\n'}
              For the purposes of the CCPA, Personal Data means any information
              that identifies, relates to, describes or is capable of being
              associated with, or could reasonably be linked, directly or
              indirectly, with You.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Sale</Text>, for the purpose of the CCPA
              (California Consumer Privacy Act), means selling, renting,
              releasing, disclosing, disseminating, making available,
              transferring, or otherwise communicating orally, in writing, or by
              electronic or other means, a Consumer's personal information to
              another business or a third party for monetary or other valuable
              consideration.
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
              <Text style={styles.bold}>Service Provider</Text> means any
              natural or legal person who processes the data on behalf of the
              Company. It refers to third-party companies or individuals
              employed by the Company to facilitate the Service, to provide the
              Service on behalf of the Company, to perform services related to
              the Service or to assist the Company in analyzing how the Service
              is used. For the purpose of the GDPR, Service Providers are
              considered Data Processors.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Third-party Social Media Service</Text>{' '}
              refers to any website or any social network website through which
              a User can log in or create an account to use the Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Usage Data</Text> refers to data
              collected automatically, either generated by the use of the
              Service or from the Service infrastructure itself (for example,
              the duration of a page visit).
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>You</Text> means the individual
              accessing or using the Service, or the company, or other legal
              entity on behalf of which such individual is accessing or using
              the Service, as applicable.{'\n'}Under GDPR (General Data
              Protection Regulation), You can be referred to as the Data Subject
              or as the User as you are the individual using the Service.
            </Text>
          </BulletListItem>
        </View>
        <Text style={legalStyles.heading}>
          Collecting and Using Your Personal Data
        </Text>
        <Text style={legalStyles.subHeading}>Types of Data Collected</Text>
        <View style={legalStyles.section}>
          <Text style={[legalStyles.text, styles.bold]}>Personal Data</Text>
          <Text style={legalStyles.text}>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>Email address</Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>First name and last name</Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Address, State, Province, ZIP/Postal code, City
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>Usage Data</Text>
          </BulletListItem>
        </View>
        <View style={legalStyles.section}>
          <Text style={[legalStyles.text, styles.bold]}>Usage Data</Text>
          <Text style={legalStyles.text}>
            Usage Data is collected automatically when using the Service.
          </Text>
          <Text style={legalStyles.text}>
            Usage Data may include information such as Your Device's Internet
            Protocol address (e.g. IP address), browser type, browser version,
            the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers and
            other diagnostic data.
          </Text>
          <Text style={legalStyles.text}>
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
          </Text>
          <Text style={legalStyles.text}>
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={[legalStyles.text, styles.bold]}>
            Information from Third-Party Social Media Services
          </Text>
          <Text style={legalStyles.text}>
            The Company allows You to create an account and log in to use the
            Service through the following Third-party Social Media Services:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>Google</Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>Facebook</Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>Twitter</Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            If You decide to register through or otherwise grant us access to a
            Third-Party Social Media Service, We may collect Personal data that
            is already associated with Your Third-Party Social Media Service's
            account, such as Your name, Your email address, Your activities or
            Your contact list associated with that account.
          </Text>
          <Text style={legalStyles.text}>
            You may also have the option of sharing additional information with
            the Company through Your Third-Party Social Media Service's account.
            If You choose to provide such information and Personal Data, during
            registration or otherwise, You are giving the Company permission to
            use, share, and store it in a manner consistent with this Privacy
            Policy.
          </Text>
        </View>
        <Text style={legalStyles.subHeading}>Use of Your Personal Data</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            The Company may use Personal Data for the following purposes:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>
                To provide and maintain our Service
              </Text>
              , including to monitor the usage of our Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>To manage Your Account:</Text> to manage
              Your registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the
              Service that are available to You as a registered user.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>
                For the performance of a contract:
              </Text>{' '}
              the development, compliance and undertaking of the purchase
              contract for the products, items or services You have purchased or
              of any other contract with Us through the Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>To contact You:</Text> To contact You by
              email, telephone calls, SMS, or other equivalent forms of
              electronic communication, such as a mobile application's push
              notifications regarding updates or informative communications
              related to the functionalities, products or contracted services,
              including the security updates, when necessary or reasonable for
              their implementation.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>To provide You</Text> with news, special
              offers and general information about other goods, services and
              events which we offer that are similar to those that you have
              already purchased or enquired about unless You have opted not to
              receive such information.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>To manage Your requests:</Text> To
              attend and manage Your requests to Us.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>For business transfers:</Text> We may
              use Your information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or
              transfer of some or all of Our assets, whether as a going concern
              or as part of bankruptcy, liquidation, or similar proceeding, in
              which Personal Data held by Us about our Service users is among
              the assets transferred.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>For other purposes:</Text> We may use
              Your information for other purposes, such as data analysis,
              identifying usage trends, determining the effectiveness of our
              promotional campaigns and to evaluate and improve our Service,
              products, services, marketing and your experience.
            </Text>
          </BulletListItem>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            We may share Your personal information in the following situations:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>With Service Providers:</Text> We may
              share Your personal information with Service Providers to monitor
              and analyze the use of our Service, to contact You.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>For business transfers:</Text> We may
              share or transfer Your personal information in connection with, or
              during negotiations of, any merger, sale of Company assets,
              financing, or acquisition of all or a portion of Our business to
              another company.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>With Affiliates:</Text> We may share
              Your information with Our affiliates, in which case we will
              require those affiliates to honor this Privacy Policy. Affiliates
              include Our parent company and any other subsidiaries, joint
              venture partners or other companies that We control or that are
              under common control with Us.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>With business partners:</Text> We may
              share Your information with Our business partners to offer You
              certain products, services or promotions.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>With other users:</Text> when You share
              personal information or otherwise interact in the public areas
              with other users, such information may be viewed by all users and
              may be publicly distributed outside. If You interact with other
              users or register through a Third-Party Social Media Service, Your
              contacts on the Third-Party Social Media Service may see Your
              name, profile, pictures and description of Your activity.
              Similarly, other users will be able to view descriptions of Your
              activity, communicate with You and view Your profile.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>With Your consent:</Text> We may
              disclose Your personal information for any other purpose with Your
              consent.
            </Text>
          </BulletListItem>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Retention of Your Personal Data
          </Text>
          <Text style={legalStyles.text}>
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </Text>
          <Text style={legalStyles.text}>
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Transfer of Your Personal Data
          </Text>
          <Text style={legalStyles.text}>
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.
          </Text>
          <Text style={legalStyles.text}>
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </Text>
          <Text style={legalStyles.text}>
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </Text>
        </View>
        <Text style={legalStyles.subHeading}>
          Retention of Your Personal Data
        </Text>
        <View style={legalStyles.section}>
          <Text style={[legalStyles.text, styles.bold]}>
            Business Transactions
          </Text>
          <Text style={legalStyles.text}>
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={[legalStyles.text, styles.bold]}>Law enforcement</Text>
          <Text style={legalStyles.text}>
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={[legalStyles.text, styles.bold]}>
            Other legal requirements
          </Text>
          <Text style={legalStyles.text}>
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>Comply with a legal obligation</Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Protect and defend the rights or property of the Company
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Protect the personal safety of Users of the Service or the public
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Protect against legal liability
            </Text>
          </BulletListItem>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Security of Your Personal Data
          </Text>
          <Text style={legalStyles.text}>
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </Text>
        </View>
        <Text style={legalStyles.heading}>GDPR Privacy</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Legal Basis for Processing Personal Data under GDPR
          </Text>
          <Text style={legalStyles.text}>
            We may process Personal Data under the following conditions:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Consent:</Text> You have given Your
              consent for processing Personal Data for one or more specific
              purposes.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Performance of a contract:</Text>{' '}
              Provision of Personal Data is necessary for the performance of an
              agreement with You and/or for any pre-contractual obligations
              thereof.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Legal obligations:</Text> Processing
              Personal Data is necessary for compliance with a legal obligation
              to which the Company is subject.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Vital interests:</Text> Processing
              Personal Data is necessary in order to protect Your vital
              interests or of another natural person.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Public interests:</Text> Processing
              Personal Data is related to a task that is carried out in the
              public interest or in the exercise of official authority vested in
              the Company.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Legitimate interests:</Text> Processing
              Personal Data is necessary for the purposes of the legitimate
              interests pursued by the Company.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            In any case, the Company will gladly help to clarify the specific
            legal basis that applies to the processing, and in particular
            whether the provision of Personal Data is a statutory or contractual
            requirement, or a requirement necessary to enter into a contract.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>Your Rights under the GDPR</Text>
          <Text style={legalStyles.text}>
            The Company undertakes to respect the confidentiality of Your
            Personal Data and to guarantee You can exercise Your rights.
          </Text>
          <Text style={legalStyles.text}>
            You have the right under this Privacy Policy, and by law if You are
            within the EU, to:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>
                Request access to Your Personal Data.
              </Text>{' '}
              The right to access, update or delete the information We have on
              You. Whenever made possible, you can access, update or request
              deletion of Your Personal Data directly within Your account
              settings section. If you are unable to perform these actions
              yourself, please contact Us to assist You. This also enables You
              to receive a copy of the Personal Data We hold about You.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>
                Request correction of the Personal Data that We hold about You.
              </Text>{' '}
              You have the right to to have any incomplete or inaccurate
              information We hold about You corrected.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>
                Object to processing of Your Personal Data.
              </Text>{' '}
              This right exists where We are relying on a legitimate interest as
              the legal basis for Our processing and there is something about
              Your particular situation, which makes You want to object to our
              processing of Your Personal Data on this ground. You also have the
              right to object where We are processing Your Personal Data for
              direct marketing purposes.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>
                Request erasure of Your Personal Data.
              </Text>{' '}
              You have the right to ask Us to delete or remove Personal Data
              when there is no good reason for Us to continue processing it.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>
                Request the transfer of Your Personal Data.
              </Text>{' '}
              We will provide to You, or to a third-party You have chosen, Your
              Personal Data in a structured, commonly used, machine-readable
              format. Please note that this right only applies to automated
              information which You initially provided consent for Us to use or
              where We used the information to perform a contract with You.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Withdraw Your consent.</Text> You have
              the right to withdraw Your consent on using your Personal Data. If
              You withdraw Your consent, We may not be able to provide You with
              access to certain specific functionalities of the Service.
            </Text>
          </BulletListItem>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Exercising of Your GDPR Data Protection Rights
          </Text>
          <Text style={legalStyles.text}>
            You may exercise Your rights of access, rectification, cancellation
            and opposition by contacting Us. Please note that we may ask You to
            verify Your identity before responding to such requests. If You make
            a request, We will try our best to respond to You as soon as
            possible.
          </Text>
          <Text style={legalStyles.text}>
            You have the right to complain to a Data Protection Authority about
            Our collection and use of Your Personal Data. For more information,
            if You are in the European Economic Area (EEA), please contact Your
            local data protection authority in the EEA.
          </Text>
        </View>
        <Text style={legalStyles.heading}>CCPA Privacy</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            This privacy notice section for California residents supplements the
            information contained in Our Privacy Policy and it applies solely to
            all visitors, users, and others who reside in the State of
            California.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Categories of Personal Information Collected
          </Text>
          <Text style={legalStyles.text}>
            We collect information that identifies, relates to, describes,
            references, is capable of being associated with, or could reasonably
            be linked, directly or indirectly, with a particular Consumer or
            Device. The following is a list of categories of personal
            information which we may collect or may have been collected from
            California residents within the last twelve (12) months.
          </Text>
          <Text style={legalStyles.text}>
            Please note that the categories and examples provided in the list
            below are those defined in the CCPA. This does not mean that all
            examples of that category of personal information were in fact
            collected by Us, but reflects our good faith belief to the best of
            our knowledge that some of that information from the applicable
            category may be and may have been collected. For example, certain
            categories of personal information would only be collected if You
            provided such personal information directly to Us.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category A: Identifiers.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: A real name, alias, postal address, unique personal
            identifier, online identifier, Internet Protocol address, email
            address, account name, driver's license number, passport number, or
            other similar identifiers.
          </Text>
          <Text style={legalStyles.text}>Collected: Yes.</Text>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category B: Personal information categories listed in the
              California Customer Records statute (Cal. Civ. Code § 1798.80(e)).
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: A name, signature, Social Security number, physical
            characteristics or description, address, telephone number, passport
            number, driver's license or state identification card number,
            insurance policy number, education, employment, employment history,
            bank account number, credit card number, debit card number, or any
            other financial information, medical information, or health
            insurance information. Some personal information included in this
            category may overlap with other categories.
          </Text>
          <Text style={legalStyles.text}>Collected: Yes.</Text>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category C: Protected classification characteristics under
              California or federal law.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: Age (40 years or older), race, color, ancestry, national
            origin, citizenship, religion or creed, marital status, medical
            condition, physical or mental disability, sex (including gender,
            gender identity, gender expression, pregnancy or childbirth and
            related medical conditions), sexual orientation, veteran or military
            status, genetic information (including familial genetic
            information).
          </Text>
          <Text style={legalStyles.text}>Collected: No.</Text>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category D: Commercial information.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: Records and history of products or services purchased or
            considered.
          </Text>
          <Text style={legalStyles.text}>Collected: No.</Text>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category E: Biometric information.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: Genetic, physiological, behavioral, and biological
            characteristics, or activity patterns used to extract a template or
            other identifier or identifying information, such as, fingerprints,
            faceprints, and voiceprints, iris or retina scans, keystroke, gait,
            or other physical patterns, and sleep, health, or exercise data.
          </Text>
          <Text style={legalStyles.text}>Collected: No.</Text>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category F: Internet or other similar network activity.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: Interaction with our Service or advertisement.
          </Text>
          <Text style={legalStyles.text}>Collected: Yes.</Text>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category G: Geolocation data.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: Approximate physical location.
          </Text>
          <Text style={legalStyles.text}>Collected: No.</Text>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category H: Sensory data.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: Audio, electronic, visual, thermal, olfactory, or similar
            information.
          </Text>
          <Text style={legalStyles.text}>Collected: No.</Text>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category I: Professional or employment-related information.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: Current or past job history or performance evaluations.
          </Text>
          <Text style={legalStyles.text}>Collected: No.</Text>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category J: Non-public education information (per the Family
              Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34
              C.F.R. Part 99)).
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: Education records directly related to a student maintained
            by an educational institution or party acting on its behalf, such as
            grades, transcripts, class lists, student schedules, student
            identification codes, student financial information, or student
            disciplinary records.
          </Text>
          <Text style={legalStyles.text}>Collected: No.</Text>
          <BulletListItem>
            <Text style={[legalStyles.text, styles.bold]}>
              Category K: Inferences drawn from other personal information.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Examples: Profile reflecting a person's preferences,
            characteristics, psychological trends, predispositions, behavior,
            attitudes, intelligence, abilities, and aptitudes.
          </Text>
          <Text style={legalStyles.text}>Collected: No.</Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            Under CCPA, personal information does not include:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Publicly available information from government records
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Deidentified or aggregated consumer information
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Information excluded from the CCPA's scope, such as:
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Health or medical information covered by the Health Insurance
              Portability and Accountability Act of 1996 (HIPAA) and the
              California Confidentiality of Medical Information Act (CMIA) or
              clinical trial data
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Personal Information covered by certain sector-specific privacy
              laws, including the Fair Credit Reporting Act (FRCA), the
              Gramm-Leach-Bliley Act (GLBA) or California Financial Information
              Privacy Act (FIPA), and the Driver's Privacy Protection Act of
              1994
            </Text>
          </BulletListItem>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Sources of Personal Information
          </Text>
          <Text style={legalStyles.text}>
            We obtain the categories of personal information listed above from
            the following categories of sources:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Directly from You.</Text> For example,
              from the forms You complete on our Service, preferences You
              express or provide through our Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Indirectly from You.</Text> For example,
              from observing Your activity on our Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>Automatically from You.</Text> For
              example, through cookies We or our Service Providers set on Your
              Device as You navigate through our Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={styles.bold}>From Service Providers.</Text> For
              example, or other third-party vendors that We use to provide the
              Service to You.
            </Text>
          </BulletListItem>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Use of Personal Information for Business Purposes or Commercial
            Purposes
          </Text>
          <Text style={legalStyles.text}>
            We may use or disclose personal information We collect for "business
            purposes" or "commercial purposes" (as defined under the CCPA),
            which may include the following examples:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              To operate our Service and provide You with our Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              To provide You with support and to respond to Your inquiries,
              including to investigate and address Your concerns and monitor and
              improve our Service.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              To fulfill or meet the reason You provided the information. For
              example, if You share Your contact information to ask a question
              about our Service, We will use that personal information to
              respond to Your inquiry.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              To respond to law enforcement requests and as required by
              applicable law, court order, or governmental regulations.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              As described to You when collecting Your personal information or
              as otherwise set forth in the CCPA.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              For internal administrative and auditing purposes.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              To detect security incidents and protect against malicious,
              deceptive, fraudulent or illegal activity, including, when
              necessary, to prosecute those responsible for such activities.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Please note that the examples provided above are illustrative and
            not intended to be exhaustive. For more details on how we use this
            information, please refer to the "Use of Your Personal Data"
            section.
          </Text>
          <Text style={legalStyles.text}>
            If We decide to collect additional categories of personal
            information or use the personal information We collected for
            materially different, unrelated, or incompatible purposes We will
            update this Privacy Policy.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Disclosure of Personal Information for Business Purposes or
            Commercial Purposes
          </Text>
          <Text style={legalStyles.text}>
            We may use or disclose and may have used or disclosed in the last
            twelve (12) months the following categories of personal information
            for business or commercial purposes:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>Category A: Identifiers</Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Category B: Personal information categories listed in the
              California Customer Records statute (Cal. Civ. Code § 1798.80(e))
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Category F: Internet or other similar network activity
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Please note that the categories listed above are those defined in
            the CCPA. This does not mean that all examples of that category of
            personal information were in fact disclosed, but reflects our good
            faith belief to the best of our knowledge that some of that
            information from the applicable category may be and may have been
            disclosed.
          </Text>
          <Text style={legalStyles.text}>
            When We disclose personal information for a business purpose or a
            commercial purpose, We enter a contract that describes the purpose
            and requires the recipient to both keep that personal information
            confidential and not use it for any purpose except performing the
            contract.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Sale of Personal Information
          </Text>
          <Text style={legalStyles.text}>
            As defined in the CCPA, "sell" and "sale" mean selling, renting,
            releasing, disclosing, disseminating, making available,
            transferring, or otherwise communicating orally, in writing, or by
            electronic or other means, a consumer's personal information by the
            business to a third party for valuable consideration. This means
            that We may have received some kind of benefit in return for sharing
            personal information, but not necessarily a monetary benefit.
          </Text>
          <Text style={legalStyles.text}>
            Please note that the categories listed below are those defined in
            the CCPA. This does not mean that all examples of that category of
            personal information were in fact sold, but reflects our good faith
            belief to the best of our knowledge that some of that information
            from the applicable category may be and may have been shared for
            value in return.
          </Text>
          <Text style={legalStyles.text}>
            We may sell and may have sold in the last twelve (12) months the
            following categories of personal information:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>Category A: Identifiers</Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Category B: Personal information categories listed in the
              California Customer Records statute (Cal. Civ. Code § 1798.80(e))
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Category F: Internet or other similar network activity
            </Text>
          </BulletListItem>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Share of Personal Information
          </Text>
          <Text style={legalStyles.text}>
            We may share Your personal information identified in the above
            categories with the following categories of third parties:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>Service Providers</Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>Our affiliates</Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>Our business partners</Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Third party vendors to whom You or Your agents authorize Us to
              disclose Your personal information in connection with products or
              services We provide to You
            </Text>
          </BulletListItem>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Sale of Personal Information of Minors Under 16 Years of Age
          </Text>
          <Text style={legalStyles.text}>
            We do not knowingly collect personal information from minors under
            the age of 16 through our Service, although certain third party
            websites that we link to may do so. These third-party websites have
            their own terms of use and privacy policies and we encourage parents
            and legal guardians to monitor their children's Internet usage and
            instruct their children to never provide information on other
            websites without their permission.
          </Text>
          <Text style={legalStyles.text}>
            We do not sell the personal information of Consumers We actually
            know are less than 16 years of age, unless We receive affirmative
            authorization (the "right to opt-in") from either the Consumer who
            is between 13 and 16 years of age, or the parent or guardian of a
            Consumer less than 13 years of age. Consumers who opt-in to the sale
            of personal information may opt-out of future sales at any time. To
            exercise the right to opt-out, You (or Your authorized
            representative) may submit a request to Us by contacting Us.
          </Text>
          <Text style={legalStyles.text}>
            If You have reason to believe that a child under the age of 13 (or
            16) has provided Us with personal information, please contact Us
            with sufficient detail to enable Us to delete that information.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>Your Rights under the CCPA</Text>
          <Text style={legalStyles.text}>
            The CCPA provides California residents with specific rights
            regarding their personal information. If You are a resident of
            California, You have the following rights:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={legalStyles.bold}>The right to notice.</Text> You
              have the right to be notified which categories of Personal Data
              are being collected and the purposes for which the Personal Data
              is being used.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={legalStyles.bold}>The right to request.</Text> Under
              CCPA, You have the right to request that We disclose information
              to You about Our collection, use, sale, disclosure for business
              purposes and share of personal information. Once We receive and
              confirm Your request, We will disclose to You:
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              The categories of personal information We collected about You
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              The categories of sources for the personal information We
              collected about You
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Our business or commercial purpose for collecting or selling that
              personal information
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              The categories of third parties with whom We share that personal
              information
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              The specific pieces of personal information We collected about You
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              If we sold Your personal information or disclosed Your personal
              information for a business purpose, We will disclose to You:
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indentDouble}>
            <Text style={legalStyles.text}>
              The categories of personal information categories sold
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indentDouble}>
            <Text style={legalStyles.text}>
              The categories of personal information categories disclosed
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={legalStyles.bold}>
                The right to say no to the sale of Personal Data (opt-out).
              </Text>{' '}
              You have the right to direct Us to not sell Your personal
              information. To submit an opt-out request please contact Us.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={legalStyles.bold}>
                The right to delete Personal Data.
              </Text>{' '}
              You have the right to request the deletion of Your Personal Data,
              subject to certain exceptions. Once We receive and confirm Your
              request, We will delete (and direct Our Service Providers to
              delete) Your personal information from our records, unless an
              exception applies. We may deny Your deletion request if retaining
              the information is necessary for Us or Our Service Providers to:
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Complete the transaction for which We collected the personal
              information, provide a good or service that You requested, take
              actions reasonably anticipated within the context of our ongoing
              business relationship with You, or otherwise perform our contract
              with You.
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Detect security incidents, protect against malicious, deceptive,
              fraudulent, or illegal activity, or prosecute those responsible
              for such activities.
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Debug products to identify and repair errors that impair existing
              intended functionality.
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Exercise free speech, ensure the right of another consumer to
              exercise their free speech rights, or exercise another right
              provided for by law.
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Comply with the California Electronic Communications Privacy Act
              (Cal. Penal Code § 1546 et. seq.).
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Engage in public or peer-reviewed scientific, historical, or
              statistical research in the public interest that adheres to all
              other applicable ethics and privacy laws, when the information's
              deletion may likely render impossible or seriously impair the
              research's achievement, if You previously provided informed
              consent.
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Enable solely internal uses that are reasonably aligned with
              consumer expectations based on Your relationship with Us.
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Comply with a legal obligation.
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Make other internal and lawful uses of that information that are
              compatible with the context in which You provided it.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              <Text style={legalStyles.bold}>
                The right not to be discriminated against.
              </Text>{' '}
              You have the right not to be discriminated against for exercising
              any of Your consumer's rights, including by:
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Denying goods or services to You
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Charging different prices or rates for goods or services,
              including the use of discounts or other benefits or imposing
              penalties
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Providing a different level or quality of goods or services to You
            </Text>
          </BulletListItem>
          <BulletListItem viewStyles={legalStyles.indent} whiteBullet>
            <Text style={legalStyles.text}>
              Suggesting that You will receive a different price or rate for
              goods or services or a different level or quality of goods or
              services
            </Text>
          </BulletListItem>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            In order to exercise any of Your rights under the CCPA, and if You
            are a California resident, You can contact Us:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>By email: hello@recaura.com</Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            Only You, or a person registered with the California Secretary of
            State that You authorize to act on Your behalf, may make a
            verifiable request related to Your personal information.
          </Text>
          <Text style={legalStyles.text}>Your request to Us must:</Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Provide sufficient information that allows Us to reasonably verify
              You are the person about whom We collected personal information or
              an authorized representative
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Describe Your request with sufficient detail that allows Us to
              properly understand, evaluate, and respond to it
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            We cannot respond to Your request or provide You with the required
            information if we cannot:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Verify Your identity or authority to make the request
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              And confirm that the personal information relates to You
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            We will disclose and deliver the required information free of charge
            within 45 days of receiving Your verifiable request. The time period
            to provide the required information may be extended once by an
            additional 45 days when reasonable necessary and with prior notice.
          </Text>
          <Text style={legalStyles.text}>
            Any disclosures We provide will only cover the 12-month period
            preceding the verifiable request's receipt.
          </Text>
          <Text style={legalStyles.text}>
            For data portability requests, We will select a format to provide
            Your personal information that is readily useable and should allow
            You to transmit the information from one entity to another entity
            without hindrance.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Do Not Sell My Personal Information
          </Text>
          <Text style={legalStyles.text}>
            You have the right to opt-out of the sale of Your personal
            information. Once We receive and confirm a verifiable consumer
            request from You, we will stop selling Your personal information. To
            exercise Your right to opt-out, please contact Us.
          </Text>
        </View>
        <Text style={legalStyles.heading}>
          "Do Not Track" Policy as Required by California Online Privacy
          Protection Act (CalOPPA)
        </Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            Our Service does not respond to Do Not Track signals.
          </Text>
          <Text style={legalStyles.text}>
            However, some third party websites do keep track of Your browsing
            activities. If You are visiting such websites, You can set Your
            preferences in Your web browser to inform websites that You do not
            want to be tracked. You can enable or disable DNT by visiting the
            preferences or settings page of Your web browser.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Children's Privacy</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
          </Text>
          <Text style={legalStyles.text}>
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent's consent before We collect and use that
            information.
          </Text>
        </View>
        <Text style={legalStyles.heading}>
          Your California Privacy Rights (California's Shine the Light law)
        </Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            Under California Civil Code Section 1798 (California's Shine the
            Light law), California residents with an established business
            relationship with us can request information once a year about
            sharing their Personal Data with third parties for the third
            parties' direct marketing purposes.
          </Text>
          <Text style={legalStyles.text}>
            If you'd like to request more information under the California Shine
            the Light law, and if You are a California resident, You can contact
            Us using the contact information provided below.
          </Text>
        </View>
        <Text style={legalStyles.heading}>
          California Privacy Rights for Minor Users (California Business and
          Professions Code Section 22581)
        </Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            California Business and Professions Code section 22581 allow
            California residents under the age of 18 who are registered users of
            online sites, services or applications to request and obtain removal
            of content or information they have publicly posted.
          </Text>
          <Text style={legalStyles.text}>
            To request removal of such data, and if You are a California
            resident, You can contact Us using the contact information provided
            below, and include the email address associated with Your account.
          </Text>
          <Text style={legalStyles.text}>
            Be aware that Your request does not guarantee complete or
            comprehensive removal of content or information posted online and
            that the law may not permit or require removal in certain
            circumstances.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Links to Other Websites</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party's site. We strongly advise You to
            review the Privacy Policy of every site You visit.
          </Text>
          <Text style={legalStyles.text}>
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Changes to this Privacy Policy</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </Text>
          <Text style={legalStyles.text}>
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy.
          </Text>
          <Text style={legalStyles.text}>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Contact Us</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            If you have any questions about this Privacy Policy, You can contact
            us:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>By email: {CONTACT_EMAIL}</Text>
          </BulletListItem>
        </View>
      </View>
    </>
  );
}

export default PrivacyPolicy;
