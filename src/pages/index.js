import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const features = [
  {title: '基本テレポート', description: '一方通行・双方向、接触・トリガーなどを接続ごとに設定。', to: '/docs/connection', color: 'pink'},
  {title: 'ランダム', description: '複数のテレポート先から、設定した割合で自動抽選。', to: '/docs/random', color: 'blue'},
  {title: '分散', description: '人数・空き人数・混雑率を比較して、テレポート先を自動選択。', to: '/docs/distribution', color: 'green'},
  {title: '利用制限', description: '全員・ホワイトリスト・ブラックリストから利用条件を設定。', to: '/docs/access-restriction', color: 'orange'},
  {title: 'Fade', description: 'Desktop・VRそれぞれの暗転演出や画像デザインを調整。', to: '/docs/fade', color: 'purple'},
  {title: '到着通知', description: 'テレポート到着時に、画面表示や通知音でお知らせ。', to: '/docs/arrival-notification', color: 'blue'},
];

const support = [
  {title: 'FAQ', description: '仕様について迷ったとき', to: '/docs/faq'},
  {title: 'トラブルシューティング', description: 'うまく動かないとき', to: '/docs/troubleshooting'},
  {title: 'アップデート', description: '新しいバージョンへ更新するとき', to: '/docs/update'},
];

export default function Home() {
  return (
    <Layout title="説明書トップ" description="OKIYA式 多機能テレポートシステム V2の説明書。導入・基本設定からランダム、分散、Fade、到着通知まで。">
      <main className="home-main container">
        <section className="home-hero" aria-labelledby="home-title">
          <span className="doc-kicker">VRChat / USER GUIDE</span>
          <h1 id="home-title" className="home-title">OKIYA式<br />多機能テレポートシステム <span className="home-version">V2</span></h1>
          <p className="home-description">VRChatワールドで使える、設定しやすさを重視した多機能テレポートシステム。<br />
            基本のテレポートから、ランダム・分散・Fade・到着通知まで、Inspectorからまとめて設定できます。</p>
          <div className="home-actions">
            <Link className="button button--primary button--lg home-start-button" to="/docs/quick-start">クイックスタート →</Link>
            <div className="home-secondary-links">
              <Link to="/docs/faq">FAQ</Link>
              <Link to="/docs/troubleshooting">トラブルシューティング</Link>
            </div>
          </div>
        </section>

        <section className="home-getting-started" aria-labelledby="home-start-title">
          <div>
            <h2 id="home-start-title">まずはここから</h2>
            <p>初めて使う場合は、クイックスタートから始めてね。<br />
              UnityPackageのImportから、2つのポイントを使った基本の双方向テレポートまで順番に確認できます。</p>
          </div>
          <Link className="home-section-link" to="/docs/quick-start">基本の設定を始める →</Link>
        </section>

        <section className="home-section" aria-labelledby="home-features-title">
          <h2 id="home-features-title">主な機能</h2>
          <div className="home-feature-grid">
            {features.map(({title, description, to, color}) => (
              <Link key={to} to={to} className={`home-feature-card home-accent-${color}`}>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="home-card-link">設定方法を見る →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-section home-support" aria-labelledby="home-support-title">
          <h2 id="home-support-title">困ったとき</h2>
          <div className="home-support-grid">
            {support.map(({title, description, to}) => (
              <Link key={to} to={to} className="home-support-card">
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="home-card-link">確認する →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
