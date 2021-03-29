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
              electronic device, named Don't Think Just Drink
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
        {/* resume here */}
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>Content Restrictions</Text>
          <Text style={legalStyles.text}>
            The Company is not responsible for the content of the Service's
            users. You expressly understand and agree that You are solely
            responsible for the Content and for all activity that occurs under
            your account, whether done so by You or any third person using Your
            account.
          </Text>
          <Text style={legalStyles.text}>
            You may not transmit any Content that is unlawful, offensive,
            upsetting, intended to disgust, threatening, libelous, defamatory,
            obscene or otherwise objectionable. Examples of such objectionable
            Content include, but are not limited to, the following:
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Unlawful or promoting unlawful activity.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Defamatory, discriminatory, or mean-spirited content, including
              references or commentary about religion, race, sexual orientation,
              gender, national/ethnic origin, or other targeted groups.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Spam, machine – or randomly – generated, constituting unauthorized
              or unsolicited advertising, chain letters, any other form of
              unauthorized solicitation, or any form of lottery or gambling.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Containing or installing any viruses, worms, malware, trojan
              horses, or other content that is designed or intended to disrupt,
              damage, or limit the functioning of any software, hardware or
              telecommunications equipment or to damage or obtain unauthorized
              access to any data or other information of a third person.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Infringing on any proprietary rights of any party, including
              patent, trademark, trade secret, copyright, right of publicity or
              other rights.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Impersonating any person or entity including the Company and its
              employees or representatives.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Violating the privacy of any third person.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              False information and features.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            The Company reserves the right, but not the obligation, to, in its
            sole discretion, determine whether or not any Content is appropriate
            and complies with this Terms, refuse or remove this Content. The
            Company further reserves the right to make formatting and edits and
            change the manner any Content. The Company can also limit or revoke
            the use of the Service if You post such objectionable Content. As
            the Company cannot control all content posted by users and/or third
            parties on the Service, you agree to use the Service at your own
            risk. You understand that by using the Service You may be exposed to
            content that You may find offensive, indecent, incorrect or
            objectionable, and You agree that under no circumstances will the
            Company be liable in any way for any content, including any errors
            or omissions in any content, or any loss or damage of any kind
            incurred as a result of your use of any content.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>Content Backups</Text>
          <Text style={legalStyles.text}>
            Although regular backups of Content are performed, the Company do
            not guarantee there will be no loss or corruption of data.
          </Text>
          <Text style={legalStyles.text}>
            Corrupt or invalid backup points may be caused by, without
            limitation, Content that is corrupted prior to being backed up or
            that changes during the time a backup is performed.
          </Text>
          <Text style={legalStyles.text}>
            The Company will provide support and attempt to troubleshoot any
            known or discovered issues that may affect the backups of Content.
            But You acknowledge that the Company has no liability related to the
            integrity of Content or the failure to successfully restore Content
            to a usable state.
          </Text>
          <Text style={legalStyles.text}>
            You agree to maintain a complete and accurate copy of any Content in
            a location independent of the Service.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Copyright Policy</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            Intellectual Property Infringement
          </Text>
          <Text style={legalStyles.text}>
            We respect the intellectual property rights of others. It is Our
            policy to respond to any claim that Content posted on the Service
            infringes a copyright or other intellectual property infringement of
            any person.
          </Text>
          <Text style={legalStyles.text}>
            If You are a copyright owner, or authorized on behalf of one, and
            You believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement that is taking place through the
            Service, You must submit Your notice in writing to the attention of
            our copyright agent via email at {CONTACT_EMAIL} and include in Your
            notice a detailed description of the alleged infringement.
          </Text>
          <Text style={legalStyles.text}>
            You may be held accountable for damages (including costs and
            attorneys' fees) for misrepresenting that any Content is infringing
            Your copyright.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>
            DMCA Notice and DMCA Procedure for Copyright Infringement Claims
          </Text>
          <Text style={legalStyles.text}>
            You may submit a notification pursuant to the Digital Millennium
            Copyright Act (DMCA) by providing our Copyright Agent with the
            following information in writing (see 17 U.S.C 512(c)(3) for further
            detail):
          </Text>
          <BulletListItem>
            <Text style={legalStyles.text}>
              An electronic or physical signature of the person authorized to
              act on behalf of the owner of the copyright's interest.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              A description of the copyrighted work that You claim has been
              infringed, including the URL (i.e., web page address) of the
              location where the copyrighted work exists or a copy of the
              copyrighted work.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Identification of the URL or other specific location on the
              Service where the material that You claim is infringing is
              located.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              Your address, telephone number, and email address.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              A statement by You that You have a good faith belief that the
              disputed use is not authorized by the copyright owner, its agent,
              or the law.
            </Text>
          </BulletListItem>
          <BulletListItem>
            <Text style={legalStyles.text}>
              A statement by You, made under penalty of perjury, that the above
              information in Your notice is accurate and that You are the
              copyright owner or authorized to act on the copyright owner's
              behalf.
            </Text>
          </BulletListItem>
          <Text style={legalStyles.text}>
            You can contact our copyright agent via email at {CONTACT_EMAIL}.
            Upon receipt of a notification, the Company will take whatever
            action, in its sole discretion, it deems appropriate, including
            removal of the challenged content from the Service.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Copyright Policy</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            The Service and its original content (excluding Content provided by
            You or other users), features and functionality are and will remain
            the exclusive property of the Company and its licensors.
          </Text>
          <Text style={legalStyles.text}>
            The Service is protected by copyright, trademark, and other laws of
            both the Country and foreign countries.
          </Text>
          <Text style={legalStyles.text}>
            Our trademarks and trade dress may not be used in connection with
            any product or service without the prior written consent of the
            Company.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Your Feedback to Us</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            You assign all rights, title and interest in any Feedback You
            provide the Company. If for any reason such assignment is
            ineffective, You agree to grant the Company a non-exclusive,
            perpetual, irrevocable, royalty free, worldwide right and license to
            use, reproduce, disclose, sub-license, distribute, modify and
            exploit such Feedback without restriction.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Links to Other Websites</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by the Company.
          </Text>
          <Text style={legalStyles.text}>
            The Company has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third party web
            sites or services. You further acknowledge and agree that the
            Company shall not be responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods or
            services available on or through any such web sites or services.
          </Text>
          <Text style={legalStyles.text}>
            We strongly advise You to read the terms and conditions and privacy
            policies of any third-party web sites or services that You visit.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Termination</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            We may terminate or suspend Your Account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if You breach these Terms and Conditions.
          </Text>
          <Text style={legalStyles.text}>
            Upon termination, Your right to use the Service will cease
            immediately. If You wish to terminate Your Account, You may simply
            discontinue using the Service.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Limitation of Liability</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers under any
            provision of this Terms and Your exclusive remedy for all of the
            foregoing shall be limited to the amount actually paid by You
            through the Service or 100 USD if You haven't purchased anything
            through the Service.
          </Text>
          <Text style={legalStyles.text}>
            To the maximum extent permitted by applicable law, in no event shall
            the Company or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, loss of data or other
            information, for business interruption, for personal injury, loss of
            privacy arising out of or in any way related to the use of or
            inability to use the Service, third-party software and/or
            third-party hardware used with the Service, or otherwise in
            connection with any provision of this Terms), even if the Company or
            any supplier has been advised of the possibility of such damages and
            even if the remedy fails of its essential purpose.
          </Text>
          <Text style={legalStyles.text}>
            Some states do not allow the exclusion of implied warranties or
            limitation of liability for incidental or consequential damages,
            which means that some of the above limitations may not apply. In
            these states, each party's liability will be limited to the greatest
            extent permitted by law.
          </Text>
        </View>
        <Text style={legalStyles.heading}>
          "AS IS" and "AS AVAILABLE" Disclaimer
        </Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind. To the maximum
            extent permitted under applicable law, the Company, on its own
            behalf and on behalf of its Affiliates and its and their respective
            licensors and service providers, expressly disclaims all warranties,
            whether express, implied, statutory or otherwise, with respect to
            the Service, including all implied warranties of merchantability,
            fitness for a particular purpose, title and non-infringement, and
            warranties that may arise out of course of dealing, course of
            performance, usage or trade practice. Without limitation to the
            foregoing, the Company provides no warranty or undertaking, and
            makes no representation of any kind that the Service will meet Your
            requirements, achieve any intended results, be compatible or work
            with any other software, applications, systems or services, operate
            without interruption, meet any performance or reliability standards
            or be error free or that any errors or defects can or will be
            corrected.
          </Text>
          <Text style={legalStyles.text}>
            Without limiting the foregoing, neither the Company nor any of the
            company's provider makes any representation or warranty of any kind,
            express or implied: (i) as to the operation or availability of the
            Service, or the information, content, and materials or products
            included thereon; (ii) that the Service will be uninterrupted or
            error-free; (iii) as to the accuracy, reliability, or currency of
            any information or content provided through the Service; or (iv)
            that the Service, its servers, the content, or e-mails sent from or
            on behalf of the Company are free of viruses, scripts, trojan
            horses, worms, malware, timebombs or other harmful components.
          </Text>
          <Text style={legalStyles.text}>
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on applicable statutory rights of a
            consumer, so some or all of the above exclusions and limitations may
            not apply to You. But in such a case the exclusions and limitations
            set forth in this section shall be applied to the greatest extent
            enforceable under applicable law.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Governing Law</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Terms and Your use of the Service. Your use of the
            Application may also be subject to other local, state, national, or
            international laws.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Disputes Resolution</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            If You have any concern or dispute about the Service, You agree to
            first try to resolve the dispute informally by contacting the
            Company.
          </Text>
        </View>
        <Text style={legalStyles.heading}>For European Union (EU) Users</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            If You are a European Union consumer, you will benefit from any
            mandatory provisions of the law of the country in which you are
            resident in.
          </Text>
        </View>
        <Text style={legalStyles.heading}>United States Legal Compliance</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            You represent and warrant that (i) You are not located in a country
            that is subject to the United States government embargo, or that has
            been designated by the United States government as a "terrorist
            supporting" country, and (ii) You are not listed on any United
            States government list of prohibited or restricted parties.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Severability and Waiver</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>Severability</Text>
          <Text style={legalStyles.text}>
            If any provision of these Terms is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect.
          </Text>
        </View>
        <View style={legalStyles.section}>
          <Text style={legalStyles.subHeading}>Waiver</Text>
          <Text style={legalStyles.text}>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under this Terms shall not
            effect a party's ability to exercise such right or require such
            performance at any time thereafter nor shall be the waiver of a
            breach constitute a waiver of any subsequent breach.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Translation Interpretation</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            These Terms and Conditions may have been translated if We have made
            them available to You on our Service. You agree that the original
            English text shall prevail in the case of a dispute.
          </Text>
        </View>
        <Text style={legalStyles.heading}>
          Changes to These Terms and Conditions
        </Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            We reserve the right, at Our sole discretion, to modify or replace
            these Terms at any time. If a revision is material We will make
            reasonable efforts to provide at least 30 days' notice prior to any
            new terms taking effect. Furthermore, or in the alternative, we will
            ask again for your agreement to the newly revised Terms. What
            constitutes a material change will be determined at Our sole
            discretion.
          </Text>
          <Text style={legalStyles.text}>
            By continuing to access or use Our Service after those revisions
            become effective, You agree to be bound by the revised terms. If You
            do not agree to the new terms, in whole or in part, please stop
            using the application and the Service.
          </Text>
        </View>
        <Text style={legalStyles.heading}>Contact Us</Text>
        <View style={legalStyles.section}>
          <Text style={legalStyles.text}>
            If you have any questions about these Terms and Conditions, You can
            contact us:
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
