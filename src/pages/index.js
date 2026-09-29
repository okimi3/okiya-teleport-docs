import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const features = [
  {tone: 'pink', number: '01', title: '置く', text: 'Prefabをシーンへ配置して、移動先を用意します。'},
  {tone: 'blue', number: '02', title: 'つなぐ', text: '入口とテレポートポイントをInspectorで接続します。'},
  {tone: 'green', number: '03', title: '整える', text: '人数制限や分散、Fadeなど必要な機能だけ追加します。'},
];

export default function Home() {
  return (
    <Layout title="ホーム" description="OKIYA式 テレポートギミック Ver.2 公式ドキュメント">
      <main>
        <header className={styles.hero}>
          <div className={styles.glow} />
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>OKIYA UNITY TOOLKIT</div>
            <Heading as="h1">テレポートを、<br /><span>もっとわかりやすく。</span></Heading>
            <p className={styles.lead}>OKIYA式 テレポートギミック Ver.2 の導入から応用まで。<br className={styles.desktopBreak} />必要な設定を、順番に確認できるガイドです。</p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/quick-start">クイックスタート</Link>
              <Link className="button button--secondary button--lg" to="/docs/intro">ドキュメントを見る</Link>
            </div>
            <div className={styles.version}>Ver.2 Documentation</div>
          </div>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>3 STEPS</span>
            <Heading as="h2">基本は、3つのステップ</Heading>
            <p>最小構成から始めて、必要な機能だけを足していけます。</p>
          </div>
          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article key={feature.number} className={`${styles.feature} ${styles[feature.tone]}`}>
                <span>{feature.number}</span>
                <Heading as="h3">{feature.title}</Heading>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.guideBand}>
          <div>
            <span className={styles.bandLabel}>START HERE</span>
            <Heading as="h2">まずは最小構成で動かしてみる</Heading>
            <p>クイックスタートでは、ひとつの入口とひとつの移動先を作ります。</p>
          </div>
          <Link className={styles.textLink} to="/docs/quick-start">手順をはじめる <span>→</span></Link>
        </section>
      </main>
    </Layout>
  );
}
