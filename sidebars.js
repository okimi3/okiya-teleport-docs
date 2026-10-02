/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {type: 'doc', id: 'quick-start', label: 'クイックスタート'},
    {
      type: 'category',
      label: '基本',
      collapsed: true,
      items: [
        {type: 'doc', id: 'teleport-point', label: 'テレポートポイント'},
        {type: 'doc', id: 'connection', label: 'テレポート接続'},
        {type: 'doc', id: 'access-restriction', label: '利用制限'},
      ],
    },
    {
      type: 'category',
      label: '便利な機能',
      collapsed: true,
      items: [
        {type: 'doc', id: 'random', label: 'ランダム'},
        {type: 'doc', id: 'area-capacity', label: 'エリア・定員'},
        {type: 'doc', id: 'distribution', label: '分散'},
      ],
    },
    {
      type: 'category',
      label: '見た目・通知',
      collapsed: true,
      items: [
        {type: 'doc', id: 'fade', label: 'Fade'},
        {type: 'doc', id: 'full-message', label: '満員時メッセージ'},
        {type: 'doc', id: 'arrival-notification', label: '到着通知'},
        {type: 'doc', id: 'image-assets', label: '画像素材の使い方'},
      ],
    },
    {
      type: 'category',
      label: 'その他',
      collapsed: true,
      items: [
        {type: 'doc', id: 'advanced-settings', label: '詳細設定'},
        {type: 'doc', id: 'update', label: 'アップデート'},
        {type: 'doc', id: 'faq', label: 'FAQ'},
        {type: 'doc', id: 'troubleshooting', label: 'トラブルシューティング'},
      ],
    },
  ],
};

export default sidebars;
