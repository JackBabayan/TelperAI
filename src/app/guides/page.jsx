import React from "react";
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import styles from "@/styles/pages/Guides.module.scss";

export default function Guides() {
  return (
    <>
      <Hero />

      <div className={styles.guidesRoot}>
        <div className={styles.ycBanner}>
          Submitted to <span className={styles.yc}>Y Combinator</span>’s Summer 2025 batch.
        </div>
        <div className={styles.guidesContainer}>
          <h1 className={styles.guidesTitle}>Get the most from Tellper</h1>
          <div className={styles.guidesSubtitle}>
            This is a quick guide for writing better instructions to help Tellper output your best results. Each feature is explained with tips and real-world usage.
          </div>

          {/* 01 Specify Your Audience */}
          <div className={styles.guidesSection}>
            <div className={styles.guidesNum}>01</div>
            <div>
              <div className={styles.guidesSectionTitle}>Specify Your Audience</div>
              <div className={styles.guidesSectionDesc}>Tellper tailors responses for your target reader. Specify who the message is for to get more relevant, effective output.</div>
              <ul className={styles.guidesList}>
                <li>Work example: <span>“My sales manager about X topic”</span></li>
                <li>Personal example: <span>“My friend who's feeling stressed”</span></li>
                <li>Family example: <span>“My younger brother about school”</span></li>
                <li>Wildcard template: <span>“Responding to my boss's email about [topic]”</span></li>
              </ul>
            </div>
          </div>

          {/* 02 Conversation Context */}
          <div className={styles.guidesSectionBg}>
            <div className={styles.guidesNum}>02</div>
            <div>
              <div className={styles.guidesSectionTitle}>Conversation Context</div>
              <div className={styles.guidesSectionDesc}>Include details about the situation, previous messages, or the goal of your reply. The more context you provide, the more accurate and helpful Tellper's response will be.</div>
              <ul className={styles.guidesList}>
                <li>New conversation: <span>“Having a conversation with a client about X deal”</span></li>
                <li>Follow-up: <span>“Replying to someone who just asked about [topic]”</span></li>
                <li>Problem: <span>“They're upset about a missed deadline”</span></li>
              </ul>
            </div>
          </div>

          {/* 03 Language Preferences */}
          <div className={styles.guidesSection}>
            <div className={styles.guidesNum}>03</div>
            <div>
              <div className={styles.guidesSectionTitle}>Language Preferences</div>
              <div className={styles.guidesSectionDesc}>Tellper can write in any language. Specify your preferred language or ask for translation.</div>
              <ul className={styles.guidesList}>
                <li>Spanish language: <span>“Respond in Spanish to [message]”</span></li>
                <li>Professional translation: <span>“Make this more formal and translate to French”</span></li>
                <li>Polished response: <span>“Make my sentence sound better in [target language]”</span></li>
              </ul>
            </div>
          </div>

          {/* 04 Tone Adjustment */}
          <div className={styles.guidesSectionBg}>
            <div className={styles.guidesNum}>04</div>
            <div>
              <div className={styles.guidesSectionTitle}>Tone Adjustment</div>
              <div className={styles.guidesSectionDesc}>Set the tone for your message: friendly, formal, concise, or enthusiastic. Tellper adapts the style to fit your needs.</div>
              <ul className={styles.guidesList}>
                <li>Friendly: <span>“Make it sound more cheerful”</span></li>
                <li>Formal: <span>“Write a professional response about [topic]”</span></li>
                <li>Concise: <span>“Summarize my message in 2 sentences”</span></li>
              </ul>
            </div>
          </div>

          {/* 05 Message Structure */}
          <div className={styles.guidesSection}>
            <div className={styles.guidesNum}>05</div>
            <div>
              <div className={styles.guidesSectionTitle}>Message Structure</div>
              <div className={styles.guidesSectionDesc}>Request a specific structure: bullet points, numbered lists, or a summary. This helps Tellper format your message for clarity and impact.</div>
              <ul className={styles.guidesList}>
                <li>Bullet points: <span>“Make a bulleted list of key ideas”</span></li>
                <li>Numbered steps: <span>“Summarize my response as a step-by-step guide”</span></li>
                <li>Summary: <span>“Summarize the conversation in 3 sentences”</span></li>
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className={styles.guidesBest}>
            <h2 className={styles.guidesBestTitle}>Best Practices</h2>
            <div className={styles.guidesBestDesc}>
              Follow these tips to help Tellper deliver your best results. These recommendations will help you write clear, effective instructions for any scenario:
            </div>
            <ul className={styles.guidesBestList}>
              <li>Always specify who the message is for and your relationship</li>
              <li>Include relevant context and your communication goal</li>
              <li>State your preferred language and tone</li>
              <li>Request a specific structure if needed</li>
              <li>Review and edit the output for accuracy and tone</li>
            </ul>
            <div className={styles.guidesBestNote}>
              Remember: the more context and detail you provide, the better the result!<br />
              <span className={styles.highlight}>Questions or ideas for improvement? Email: info@tellper.app</span>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}