export default function Privacy() {
  return (
    <div className="content" style={{ padding: '80px 0' }}>
      <div className="container" >
        <h1 style={{ marginBottom: '32px' }}>Privacy Policy</h1>

        <p>Last Updated: May 15, 2025</p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>1. Introduction</h2>
        <p>
          Welcome to Tellper ("we," "our," or "us"). Your privacy is critically important to us. This Privacy Policy explains how we collect, use, store, process, and share your information when you use our conversation assistant application (the "App").
        </p>
        <p>This policy is designed to help you understand:</p>
        <ul>
          <li>What information we collect and why</li>
          <li>How your information is used and protected</li>
          <li>Your rights regarding your information</li>
          <li>How to contact us with questions or concerns</li>
        </ul>
        <p>
          By downloading, installing, or using our App, you agree to the collection and use of information as described in this policy. If you do not agree with our policies and practices, please do not use our App.
        </p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>2. Information We Collect</h2>
        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>2.1 Personal Information You Provide</h3>
        <ul>
          <li>Audio Recordings: When you use our microphone feature, we temporarily record your voice to process and transcribe it.</li>
          <li>Transcribed Text: Text converted from your voice recordings by our voice recognition technology.</li>
          <li>Device Information: Information about your device, including device type, operating system version, and unique device identifiers.</li>
          <li>Usage Information: How you interact with our App, including features used and interactions performed.</li>
        </ul>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>2.2 Sensitive Personal Information</h3>
        <p>Our App processes the following sensitive information with special protections:</p>
        <ul>
          <li>Voice Data: Audio recordings of your voice when using the microphone feature.</li>
          <li>Accessibility Service Data: Information about text fields and interface elements across your device to provide our core functionality.</li>
        </ul>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>2.3 Information Collected Automatically</h3>
        <ul>
          <li>Device and Network Information: Your IP address, device identifiers, mobile network information, and operating system.</li>
          <li>Performance Data: App performance metrics to help us improve service quality.</li>
          <li>Usage Statistics: Anonymous usage statistics to identify trends and improve functionality.</li>
        </ul>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>3. How We Collect Information</h2>
        <p>We collect information through the following methods:</p>
        <ul>
          <li>Directly from you: When you provide voice input through our microphone feature.</li>
          <li>Automatically: When you use our App, we automatically collect certain technical information.</li>
          <li>Through system permissions: Our App requires certain permissions to function properly, including:</li>
          <ul>
            <li>Accessibility Service permission (to detect text fields and insert text)</li>
            <li>Overlay permission (to display the floating microphone button)</li>
            <li>Microphone permission (to record your voice)</li>
            <li>Internet permission (to process voice and text)</li>
          </ul>
        </ul>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>4. How We Use Your Information</h2>
        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>4.1 Core Services</h3>
        <ul>
          <li>To transcribe your voice recordings into text</li>
          <li>To process your text through AI to generate improved responses</li>
          <li>To insert the enhanced text into your active text field</li>
          <li>To display the floating microphone button when relevant</li>
        </ul>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>4.2 Service Improvement</h3>
        <ul>
          <li>To analyze App usage patterns to enhance functionality</li>
          <li>To diagnose technical issues and optimize performance</li>
          <li>To improve voice recognition accuracy and AI response quality</li>
        </ul>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>4.3 Legal Requirements</h3>
        <ul>
          <li>To comply with applicable laws and regulations</li>
          <li>To respond to legal requests and prevent harm</li>
        </ul>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>5. Data Processing and AI</h2>
        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>5.1 Voice Processing</h3>
        <p>Voice recordings are sent to OpenAI's Whisper API for transcription. These recordings are:</p>
        <ul>
          <li>Temporarily processed to convert speech to text</li>
          <li>Not stored permanently by OpenAI</li>
          <li>Transmitted securely using encryption</li>
        </ul>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>5.2 Text Processing</h3>
        <p>Transcribed text is processed by DeepSeek to generate enhanced responses. This processing:</p>
        <ul>
          <li>Occurs on secure, encrypted servers</li>
          <li>Follows strict data privacy protocols</li>
          <li>Does not retain your conversation data beyond the immediate processing needs</li>
        </ul>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>5.3 AI Learning</h3>
        <p>
          Our AI systems may learn from aggregated, anonymized patterns to improve service quality. We do not use your specific conversations to train AI models without explicit consent.
        </p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>6. Data Sharing and Disclosure</h2>
        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>6.1 Third-Party Service Providers</h3>
        <p>We share information with the following service providers to deliver our services:</p>
        <ul>
          <li>OpenAI (Whisper API): For speech-to-text transcription</li>
          <li>DeepSeek: For AI text processing and response generation</li>
          <li>Firebase Analytics: For anonymous usage statistics collection</li>
        </ul>
        <p>
          All service providers are bound by strict data protection agreements and are prohibited from using your data for any purpose other than providing the specific services to us.
        </p>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>6.2 Legal Requirements</h3>
        <p>
          We may disclose your information if required by law, regulation, legal process, or governmental request.
        </p>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>6.3 Business Transfers</h3>
        <p>
          In the event of a merger, acquisition, or sale of all or part of our assets, user information may be transferred as part of the transaction. We will notify you via email and/or prominent notice on our website of any such change in ownership.
        </p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>7. Data Retention</h2>
        <p>We retain your information for the following periods:</p>
        <ul>
          <li>Audio Recordings: Temporarily stored only for the duration needed to transcribe (typically less than 1 minute) and then immediately deleted.</li>
          <li>Transcribed Text: Temporarily stored only during the session to process and generate responses, then deleted once processing is complete.</li>
          <li>Usage Data: Retained for up to 90 days to analyze trends and improve our services.</li>
        </ul>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>8. Data Security</h2>
        <p>We implement industry-standard security measures to protect your information:</p>
        <ul>
          <li>Encryption: All data transmitted between your device and our servers is encrypted using SSL/TLS.</li>
          <li>Secure Storage: We use encrypted storage for any temporarily stored data.</li>
          <li>Access Controls: Only authorized personnel have access to systems that process your data.</li>
          <li>Regular Audits: We conduct regular security assessments to ensure data protection.</li>
        </ul>
        <p>
          While we take reasonable precautions, no method of transmission or storage is 100% secure. We cannot guarantee absolute security of your information.
        </p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>9. Your Privacy Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul>
          <li>Right to Access: Request access to the personal information we hold about you.</li>
          <li>Right to Correction: Request correction of inaccurate or incomplete information.</li>
          <li>Right to Deletion: Request deletion of your personal information under certain circumstances.</li>
          <li>Right to Restriction: Request that we restrict the processing of your information.</li>
          <li>Right to Data Portability: Request a copy of your information in a structured, machine-readable format.</li>
          <li>Right to Object: Object to our processing of your personal information.</li>
        </ul>
        <p>To exercise these rights, please contact us at info@tellper.app</p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>10. Children's Privacy</h2>
        <p>
          Our App is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information.
        </p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>11. International Data Transfers</h2>
        <p>
          Your information may be transferred to, stored, and processed in countries other than the one in which you reside. By using our App, you consent to the transfer of information to countries that may have different data protection rules than your country. When we transfer personal information outside of your country, we ensure appropriate safeguards are in place to protect your data and comply with applicable laws.
        </p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>12. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>13. California Privacy Rights</h2>
        <p>
          Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents have specific rights regarding their personal information:
        </p>
        <ul>
          <li>The right to know what personal information we collect and disclose</li>
          <li>The right to delete personal information</li>
          <li>The right to correct inaccurate personal information</li>
          <li>The right to limit the use of sensitive personal information</li>
          <li>The right to opt out of the sale or sharing of personal information</li>
        </ul>
        <p>We do not sell your personal information as defined under the CCPA/CPRA.</p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>14. European Privacy Rights</h2>
        <p>
          If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (GDPR). The legal basis for processing your information is:
        </p>
        <ul>
          <li>Contractual Necessity: Processing necessary to provide you with our services.</li>
          <li>Legitimate Interests: Processing that serves our legitimate business interests, such as improving and securing our services.</li>
          <li>Consent: Where you have explicitly consented to the processing.</li>
          <li>Legal Obligation: Processing necessary to comply with applicable laws.</li>
        </ul>
        <p>
          You have the right to lodge a complaint with a supervisory authority if you believe our processing violates applicable law.
        </p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>15. Your Choices</h2>
        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>15.1 Permission Controls</h3>
        <p>You can control permissions granted to our App through your device settings:</p>
        <ul>
          <li>Accessibility Service: Required to detect text fields and insert enhanced text.</li>
          <li>Overlay Permission: Required to display the floating microphone button.</li>
          <li>Microphone: Required to capture your voice input.</li>
          <li>Internet: Required to process data on our servers.</li>
        </ul>
        <p>
          You can revoke these permissions at any time, though this may affect the functionality of the App.
        </p>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>15.2 Analytics Opt-Out</h3>
        <p>
          You can opt out of anonymous analytics collection by contacting us at info@tellper.app
        </p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>16. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <p>Email: info@tellper.app</p>
        <p>
          We will respond to your inquiry as soon as possible and within the timeframe required by applicable law.
        </p>

        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>17. Consent</h2>
        <p>
          By using our App, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. If you do not agree with this Policy, please do not use our App.
        </p>
      </div>
    </div>
  );
}